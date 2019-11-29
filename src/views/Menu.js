import React, {useState, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';

const NavBar = styled.nav`
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background: #FA4;
`;

const NavBarHandlers = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  svg {
    display: block;
  }
`;

const NavBarButton = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  width: 48px;
  height: 48px;
  background: ${props => props.active ? props.theme.color : 'none'};
  border: none;
  cursor: pointer;

  svg {
    pointer-events: none;
  }

  &:hover {
    background: ${props => props.theme.color};
  }
`;

const NavBarMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${props => props.active ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  right: 0;
  background: #FA4;
  width: 200px;
`;

const NavBarMenuItem = styled.li`
  margin: 0;
  padding: 0;
`;

const NavBarMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-variation-settings: "wdth" 500;
  width: 100%;
  display: block;
  padding: 10px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: ${props => props.theme.color};
  }
`;

const ThemeIcon = ({active}) => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <rect x="0" y="0" width="48" height="48" fill="none" />
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2px" fill="none" />
    { active
      ?
      <line x1="14" x2="34" y1="34" y2="14" stroke="currentColor" strokeWidth="2px" strokeLinecap="round" />
      :
      <>
      <line x1="10" x2="14" y1="24" y2="24" stroke="currentColor" strokeWidth="2px" strokeLinecap="round" />
      <line x1="34" x2="38" y1="24" y2="24" stroke="currentColor" strokeWidth="2px" strokeLinecap="round" />
      <line x1="24" x2="24" y1="10" y2="14" stroke="currentColor" strokeWidth="2px" strokeLinecap="round" />
      <line x1="24" x2="24" y1="34" y2="38" stroke="currentColor" strokeWidth="2px" strokeLinecap="round" />
      <line x1="14" x2="17" y1="14" y2="17" stroke="currentColor" strokeWidth="2px" strokeLinecap="round" />
      <line x1="31" x2="34" y1="31" y2="34" stroke="currentColor" strokeWidth="2px" strokeLinecap="round" />
      <line x1="14" x2="17" y1="34" y2="31" stroke="currentColor" strokeWidth="2px" strokeLinecap="round" />
      <line x1="31" x2="34" y1="17" y2="14" stroke="currentColor" strokeWidth="2px" strokeLinecap="round" />
      </>
    }
  </svg>
);

const MenuIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <rect x="0" y="0" width="48" height="48" fill="none" />
    <line x1="12" x2="36" y1="16" y2="16" stroke="currentColor" strokeWidth="2px" />
    <line x1="12" x2="36" y1="24" y2="24" stroke="currentColor" strokeWidth="2px" />
    <line x1="12" x2="36" y1="32" y2="32" stroke="currentColor" strokeWidth="2px" />
  </svg>
);

export default ({scroller}) => {
  const [menu, toggleMenu] = useState(false);
  const {theme, dispatch} = useContext(ThemeContext);
  const {t} = useTranslation();

  const closeMenuAndGo = target => {
    scroller(target);
    toggleMenu(false);
  }

  const toggleTheme = () => {
    dispatch({type: 'CHANGE_MODE', mode: !theme.dark});
  }

  return (
    <NavBar>
      <NavBarHandlers>
        <li>
          <NavBarButton type="button" onClick={toggleTheme}><ThemeIcon active={theme.dark} /></NavBarButton>
        </li>
        <li>
          <NavBarButton type="button" active={menu} onClick={() => toggleMenu(!menu)}><MenuIcon /></NavBarButton>
        </li>
      </NavBarHandlers>

      <NavBarMenu active={menu} onClick={() => toggleMenu(!menu)}>
        <NavBarMenuItem>
          <NavBarMenuButton type="button" onClick={() => closeMenuAndGo('home')}>{t('menu.home')}</NavBarMenuButton>
        </NavBarMenuItem>
        <NavBarMenuItem>
          <NavBarMenuButton type="button" onClick={() => closeMenuAndGo('about')}>{t('menu.about')}</NavBarMenuButton>
        </NavBarMenuItem>
        <NavBarMenuItem>
          <NavBarMenuButton type="button" onClick={() => closeMenuAndGo('characters')}>{t('menu.characters')}</NavBarMenuButton>
        </NavBarMenuItem>
        <NavBarMenuItem>
          <NavBarMenuButton type="button" onClick={() => closeMenuAndGo('test')}>{t('menu.test')}</NavBarMenuButton>
        </NavBarMenuItem>
        <NavBarMenuItem>
          <NavBarMenuButton type="button" onClick={() => closeMenuAndGo('resources')}>{t('menu.resources')}</NavBarMenuButton>
        </NavBarMenuItem>
        <NavBarMenuItem>
          <NavBarMenuButton type="button" onClick={() => closeMenuAndGo('contact')}>{t('menu.contact')}</NavBarMenuButton>
        </NavBarMenuItem>
        <NavBarMenuItem>
          <NavBarMenuButton type="button" onClick={() => closeMenuAndGo('versions')}>{t('menu.version')}</NavBarMenuButton>
        </NavBarMenuItem>
        <NavBarMenuItem>
          <NavBarMenuButton type="button" onClick={() => closeMenuAndGo('download')}>{t('menu.download')}</NavBarMenuButton>
        </NavBarMenuItem>
      </NavBarMenu>
    </NavBar>
  )
}

/* 
  closeMenuAndGo = target => {
    this.props.scroller(target)
    this.closeMenu();
  }

  <button onClick={() => this.closeMenuAndGo('intro')} type="button">
    <span lang="pt-br">Início</span>
    <small lang="en">Home</small>
  </button>

  ===

  homeIntro = React.createRef();
  homeAbout = React.createRef();
  homeCharacters = React.createRef();
  homeTest = React.createRef();
  homeFeatures = React.createRef();
  homeChangelog = React.createRef();
  homeDownload = React.createRef();

  handleScroll = target => {
    console.log(target);

    switch (target) {
      case 'intro':
        return this.homeIntro.scrollIntoView({ behavior: 'smooth' });

      case 'about':
        return this.homeAbout.scrollIntoView({ behavior: 'smooth' });

      case 'characters':
        return this.homeCharacters.scrollIntoView({ behavior: 'smooth' });

      case 'test':
        return this.homeTest.scrollIntoView({ behavior: 'smooth' });

      case 'features':
        return this.homeFeatures.scrollIntoView({ behavior: 'smooth' });

      case 'changelog':
        return this.homeChangelog.scrollIntoView({ behavior: 'smooth' });

      case 'download':
        return this.homeDownload.scrollIntoView({ behavior: 'smooth' });

      default:
        return this.homeIntro.scrollIntoView({ behavior: 'smooth' });
    }
  }

  <Header scroller={this.handleScroll} />
  <Hero groupRef={el => this.homeIntro = el} />
  <About groupRef={el => this.homeAbout = el} theme={this.state.themeString} onHandleTheme={this.handleTheme} />
  <Characters groupRef={el => this.homeCharacters = el} />
  <Demo theme={this.state.themeString} onHandleTheme={this.handleTheme} />
  <FontTest groupRef={el => this.homeTest = el} />
  <Features groupRef={el => this.homeFeatures = el} theme={this.state.themeString} onHandleTheme={this.handleTheme} />
  <Changelog groupRef={el => this.homeChangelog = el} />
  <Footer groupRef={el => this.homeDownload = el} />

  ===

  <section className={"home-characters font-" + this.state.fontName} ref={this.props.groupRef}>
*/