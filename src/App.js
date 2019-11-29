import React, {useRef} from 'react';
import {createGlobalStyle} from 'styled-components';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import './fonts/fonts.css';
import resources from './translations'
import ThemeContextProvider from './contexts/ThemeContext';

import Menu from './views/Menu';
import Header from './views/Header';
import Theme from './views/Theme';
import About from './views/About';
import Characters from './views/Characters';
import Article from './views/Article';
import FontDemo from './views/FontDemo';
import Features from './views/Features';
import Contact from './views/Contact';
import Changelog from './views/Changelog';
import Footer from './views/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Grotesca Reforma Web", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.colorSet.background};
    color: ${props => props.theme.colorSet.contrast};
  }

  button,
  input,
  textarea,
  select {
    font-family: "Grotesca Reforma Web", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }  
`;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',

    interplation: {
      escapeValue: false
    }
  })

const App = () => {
  const sectionHeader = useRef();
  const sectionAbout = useRef();
  const sectionCharacters = useRef();
  const sectionArticle = useRef();
  const sectionFontDemo = useRef();
  const sectionFeatures = useRef();
  const sectionContact = useRef();
  const sectionChangelog = useRef();
  const sectionFooter = useRef();

  const handleScroll = target => {
    switch (target) {
      case 'home':
        return sectionHeader.current.scrollIntoView({ behavior: 'smooth' });

      case 'about':
        return sectionAbout.current.scrollIntoView({ behavior: 'smooth' });

      case 'characters':
        return sectionCharacters.current.scrollIntoView({ behavior: 'smooth' });

      case 'article':
        return sectionArticle.current.scrollIntoView({ behavior: 'smooth' });

      case 'test':
        return sectionFontDemo.current.scrollIntoView({ behavior: 'smooth' });

      case 'features':
        return sectionFeatures.current.scrollIntoView({ behavior: 'smooth' });

      case 'contact':
        return sectionContact.current.scrollIntoView({ behavior: 'smooth' });

      case 'versions':
        return sectionChangelog.current.scrollIntoView({ behavior: 'smooth' });

      case 'download':
        return sectionFooter.current.scrollIntoView({ behavior: 'smooth' });

      default:
        return sectionHeader.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <ThemeContextProvider>
      <GlobalStyle />

      <Menu scroller={handleScroll} />
      <Header sectionRef={sectionHeader} scroller={handleScroll} />
      <Theme />
      <About sectionRef={sectionAbout} />
      <Characters sectionRef={sectionCharacters} />
      <Article sectionRef={sectionArticle} />
      <FontDemo sectionRef={sectionFontDemo} />
      <Features sectionRef={sectionFeatures} />
      <Contact sectionRef={sectionContact} />
      <Changelog sectionRef={sectionChangelog} />
      <Footer sectionRef={sectionFooter} />
    </ThemeContextProvider>
  );
}

export default App;