import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import { request } from 'http';
import nock from 'nock';
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import App from '../../../App.tsx';

describe('it should render the app properly', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
});

const useFetchData = () => {
  return useQuery('movies', () => {
    return request('/api/data');
  });
};

describe('should render the movie list', () => {
  it('should render the fetched data', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }) => {
      return (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };

    const expectation = nock('http://example.com').get('/api/data').reply(200, {
      answer: 42,
    });

    const { result, waitFor } = renderHook(
      () => {
        return useFetchData();
      },
      { wrapper },
    );

    await waitFor(() => {
      console.log('result: ', result.current);
      return result.current.isSuccess;
    });
    expect(result.current).toEqual({ answer: 42 });
  });
});
