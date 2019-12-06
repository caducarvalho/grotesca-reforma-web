import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

const LANG = window.location.pathname.toString().replace(/\W*/, '');

const AboutSection = styled.section`
  background: ${props => props.theme.color};
  padding: 20px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 829px) {
   flex-direction: column; 
   padding: 10px 20px;
  }
`;

const AboutBox = styled.div`
  background: ${props => props.theme.colorSet.backgroundVariant};
  box-sizing: border-box;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(100% / 3 - 13px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 829px) {
    margin: 10px 0;
  }

  &.lang-path {
    order: 1;
  }
`;

const AboutContent = styled.div`
  padding: 10px 20px;

  h2 {
    margin: 10px 0;
    font-weight: normal;
    font-variation-settings: "wdth" 500, "wght" 700;  
    letter-spacing: -1px;
    font-size: 1.4rem
  }

  p {
    font-size: 0.9rem;
    margin: 0 0 10px;
    font-variation-settings: "wdth" 400, "wght" 400;
  }
`;

const AboutLanguageButton = styled.button`
  background: #221D1A;
  color: #FA4;
  border: none;
  height: 42px;
  padding: 0 10px;
  margin: 0;
  font-variation-settings: "wdth" 500, "wght" 700;
  font-size: 0.85rem;
  cursor: pointer;
  width: 100%;
  text-align: left;

  &:hover {
    color: white;
  }

  &:disabled {
    background: none;
    color: ${props => props.theme.color};
    cursor: default;
  }
`;

export default ({sectionRef}) => {
  const {i18n} = useTranslation();

  return (
    <AboutSection ref={sectionRef}>
      <AboutBox lang="pt-br">
        <AboutContent>
          <h2>Sobre a fonte</h2>
          <p>A Grotesca Reforma Variável é um experimento tipográfico feito como projeto de conclusão de curso da Pós-Graduação em Tipografia do Senac.</p>
          <p>A fonte é baseada no resgate tipográfico dos tipos móveis da Grotesca Reforma, comercializadas pela antiga Funtimod no Brasil. Ela introduz, nesta versão digital, vários recursos voltados para modernizar a Grotesca Reforma sem perder seu apelo nostálgico.</p>
        </AboutContent>

        <AboutLanguageButton type="button" onClick={() => i18n.changeLanguage('pt-BR')} disabled={i18n.language === 'pt-BR'}>
          { i18n.language === 'pt-BR'
            ?
              <span><span role="img" aria-label="Brazil flag">🇧🇷</span> Português selecionado</span>
            :
              <span><span role="img" aria-label="Brazil flag">🇧🇷</span> Exibir conteúdo em português</span>
          }
        </AboutLanguageButton>
      </AboutBox>
  
      <AboutBox lang="en" className={LANG === 'en' ? 'lang-path' : 'lang'}>
        <AboutContent>
          <h2>About the font</h2>
          <p>Grotesca Reforma Variável (variable) is a typographic experiment, built as a capstone project for the Specialist Degree in Typography of Senac.</p>
          <p>The font is based on the typographic revival of Grotesca Reforma movable types, formerly distributed by Funtimod in Brazil. In this digital revision, the font introduces several features in order to modernize Grotesca Reforma and keep its nostalgic appeal.</p>
        </AboutContent>

        <AboutLanguageButton type="button" onClick={() => i18n.changeLanguage('en')} disabled={i18n.language === 'en'}>
          { i18n.language === 'en'
            ?
              <span><span role="img" aria-label="United Kingdom flag">🇬🇧</span> English selected</span>
            :
              <span><span role="img" aria-label="United Kingdom flag">🇬🇧</span> Show content in english</span>
          }
        </AboutLanguageButton>
      </AboutBox>
  
      <AboutBox lang="fr" className={LANG === 'fr' ? 'lang-path' : 'lang'}>
        <AboutContent>
          <h2>À propos de la police</h2>
          <p>Grotesca Reforma Variável (variable) est une expérience typographique fait comme le project de fin de cours de spécialisation de troisième cycle en typographie du Centre Universitaire Senac.</p>
          <p>La police de caractères est basée sur la renaissance typographique des caractères d'imprimerie de la Grotesca Reforma, commercialisé par l'ancien Funtimod au Brésil. Dans cette version numérique, elle présente plusieurs fonctionnalités pour moderniser la Grotesca Reforma sans perdre son attrait nostalgique.</p>
        </AboutContent>

        <AboutLanguageButton type="button" onClick={() => i18n.changeLanguage('fr')} disabled={i18n.language === 'fr'}>
          { i18n.language === 'fr'
            ?
              <span><span role="img" aria-label="France flag">🇫🇷</span> Français choisi</span>
            :
              <span><span role="img" aria-label="France flag">🇫🇷</span> Montrer le teneur en français</span>
          }
        </AboutLanguageButton>
      </AboutBox>
    </AboutSection>
  )
};
