import { createAction, createActionAsync } from 'redux-act-reducer';

export const SHOW_HELLO = 'SHOW_HELLO';
export const SHOW_HELLO_ASYNC = 'SHOW_HELLO_ASYNC';

export const showHello = createAction(SHOW_HELLO, 'info');

const showHelloApi = (name) => {
  const result = new Promise(resolve => {
    setTimeout(() => {
      const resJson = { infoAsync: 'hello' };
      resJson.name = name;
      resolve(resJson);
    }, 1000);
  });
  return result;
};

export const showHelloAsync = createActionAsync(SHOW_HELLO_ASYNC, showHelloApi);
