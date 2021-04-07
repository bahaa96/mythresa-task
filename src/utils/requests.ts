export const isOK = (status: number): boolean => {
  return status >= 200 && status <= 299;
};

export const isRedirected = (status: number): boolean => {
  return status >= 300 && status <= 399;
};

export const isFailed = (status: number): boolean => {
  return status >= 400 && status <= 499;
};
