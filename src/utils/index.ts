import moment from 'moment';

export const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export interface MyArray<T> extends Array<T> {
  hasId(id: number | string): boolean;
}

// eslint-disable-next-line no-extend-native
Array.prototype.hasId = function hasId(id: number): boolean {
  return this.some((movie) => {
    return movie.id === id;
  });
};

export const toLocalDate = (
  date: string,
  identifier?: string,
): string | number => {
  const dateObj = moment(date);
  switch (identifier) {
    case 'year':
      return dateObj.format('YYYY');
    default:
      return dateObj.format('DD-MM-YYYY');
  }
};
