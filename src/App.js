import React, {useRef, useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {Helmet} from "react-helmet";
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

  async function changeLanguage() {
    const lang = window.location.pathname.toString().replace(/\W*/, '');

    switch (lang) {
      case 'fr':
        return i18n.changeLanguage('fr');
      case 'en':
        return i18n.changeLanguage('en');
      default:
        return i18n.changeLanguage('pt-BR');
    }
  }

  useEffect(() => {
    changeLanguage()
  }, []);

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

      <Helmet>
        <meta charSet="utf-8" />
        <title>Grotesca Reforma Variável</title>
        <link rel="canonical" href="http://grotescareforma.xyz" />
        <meta name="description" content="Site promocional da fonte variável Grotesca Reforma" />
        <meta name="keywords" content="typography, grotesca reforma, type revival, variable fonts" />
      </Helmet>
    </ThemeContextProvider>
  );
}

export default App;