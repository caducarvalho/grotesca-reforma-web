import React, {useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../contexts/ThemeContext';

const ThemeMenu = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  z-index: 1;
`;

const ThemeMenuButton = styled.button`
  background: ${props => props.color};
  border: none;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1);
  color: white;
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  transform: translateY(-22px);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(0);
  }
`;

export default () => {
  const {theme, themes, dispatch} = useContext(ThemeContext);

  return (
    <ThemeMenu>
      { themes.variants.map(t =>
        <li key={t}>
          <ThemeMenuButton type="button" color={t} onClick={() => dispatch({type: 'CHANGE_THEME', color: t})}>
            { theme.color === t
              ?
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <path d="M8,15 l6,6 l10,-10" fill="none" stroke="currentColor" strokeWidth="2px" />
                </svg>
              :
                <span>&nbsp;</span>
            }
          </ThemeMenuButton>
        </li>
      )}
    </ThemeMenu>
  )
}