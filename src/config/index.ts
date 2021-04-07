import getEnvVars from '../../environment';

interface IConfig {
  API_URL?: string;
  API_KEY?: string;
  CDN_URL?: string;
}

const config: IConfig = {
  ...getEnvVars(),
};

export default config;
