import { createAction, createActionAsync } from 'redux-act-reducer';
import { showHelloApi, showMoviesApi } from './api';

const prefix = 'HOME';

export const SHOW_HELLO = `${prefix}_SHOW_HELLO`;
export const SHOW_HELLO_ASYNC = `${prefix}_SHOW_HELLO_ASYNC`;
export const SHOW_MOVIES_ASYNC = `${prefix}_SHOW_MOVIES_ASYNC`;

export const showHello = createAction(SHOW_HELLO, 'info');
export const showHelloAsync = createActionAsync(SHOW_HELLO_ASYNC, showHelloApi);
export const showMoviesAsync = createActionAsync(SHOW_MOVIES_ASYNC, showMoviesApi);
