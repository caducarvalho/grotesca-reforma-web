import colorSet from '../resources/color-set';

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      localStorage.setItem('color', action.color);
      return {...state, color: action.color};
    case 'CHANGE_MODE':
      localStorage.setItem('mode', JSON.stringify(action.mode));
      return {...state, dark: !state.dark, colorSet: colorSet(!state.dark) };
    default:
      return state;
  }
}

export default ThemeReducer;