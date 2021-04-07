import Constants from 'expo-constants';

interface IEnvVars {
  API_URL: string;
  API_KEY: string;
  CDN_URL: string;
}

const base = {
  API_KEY: 'ba328b3f1df47dffee4ecd8acb052e4f',
  API_URL: 'http://api.themoviedb.org/3',
  CDN_URL: 'https://image.tmdb.org',
};

const ENV = {
  dev: {
    ...base,
  },
  staging: {
    ...base,
  },
  prod: {
    ...base,
  },
};

const getEnvVars = (env = Constants.manifest.releaseChannel): IEnvVars | {} => {
  console.log('env: ', env);

  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  }
  if (env === 'staging') {
    return ENV.staging;
  }
  if (env === 'prod') {
    return ENV.prod;
  }

  return base;
};

export default getEnvVars;
