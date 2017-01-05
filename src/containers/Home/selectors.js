import { createSelector } from 'reselect';

const selectHome = state => state.get('home');

const selectInfo = createSelector(
  selectHome,
  homeState => homeState.get('info')
);

export { selectHome, selectInfo };
