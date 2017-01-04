import { createAction, createActionAsync } from 'redux-act-reducer';
import request from 'hahoorequest/lib/fetch';

export const SHOW_HELLO = 'SHOW_HELLO';
export const SHOW_HELLO_ASYNC = 'SHOW_HELLO_ASYNC';
export const SHOW_MOVIES_ASYNC = 'SHOW_MOVIES_ASYNC';

const showHelloApi = (name) => {
  const result = new Promise((resolve) => {
    setTimeout(() => {
      const resJson = { infoAsync: 'Async loading' };
      resJson.name = name;
      resolve(resJson);
    }, 1000);
  });
  return result;
};

export const showHello = createAction(SHOW_HELLO, 'info');
export const showHelloAsync = createActionAsync(SHOW_HELLO_ASYNC, showHelloApi);
export const showMoviesAsync = createActionAsync(
  SHOW_MOVIES_ASYNC,
  () => request({
    url: 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json',
    crossOrigin: true
  }),
 'movies'
);
