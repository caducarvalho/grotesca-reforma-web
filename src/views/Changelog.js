import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ChangelogSection = styled.section`
  width: 100%;
  max-width: 980px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 10px;
  display: flex;

  @media screen and (max-width: 659px) {
    flex-direction: column;
  }
`;

const ChangelogBox = styled.div`
  background: ${props => props.theme.colorSet.backgroundVariant};
  color: ${props => props.theme.colorSet.contrast};
  padding: 20px;
  margin: 10px;
  box-sizing: border-box;

  &.versions { flex: 0 0 calc(40% - 20px); }
  &.backlog  { flex: 0 0 calc(60% - 20px); }

  h2 {
    font-weight: normal;
    font-variation-settings: "wdth" 500, "wght" 700;
    letter-spacing: -1px;
    font-size: 1.6rem;
    margin: 0 0 20px;
  }
  
  h3 {
    font-weight: normal;
    font-variation-settings: "wdth" 500, "wght" 700;
    letter-spacing: -1px;
    font-size: 1.1rem;
    margin: 0 0 5px;
  }

  p {
    margin: 0 0 5px;
    font-size: 0.9rem;
  }

  ul {
    max-height: 400px;
    overflow: hidden;
    overflow-y: scroll;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    line-height: 1.2rem;
    font-variation-settings: "wdth" 400, "wght" 400;
  }

  @media screen and (max-width: 659px) {
    &.versions,
    &.backlog {
      width: calc(100% - 20px);
    }
  }
`;

export default ({sectionRef}) => {
  const {t, i18n} = useTranslation();

  return (
    <ChangelogSection ref={sectionRef}>
      <ChangelogBox className="versions">
        <h2>{t('changelog.versions')}</h2>

        { i18n.language === 'pt-BR' &&
          <ul>
            <li>
              <h3>[Não publicado]</h3>
              <p><strong>Ajustes:</strong> espaçamentos irregulares</p>
              <p><strong>Adições:</strong> caracteres restantes para compatibilidade com Latin Plus</p>
            </li>
            
            <li>
              <h3>1.0 – <time dateTime="2018-11-03">03/11/2018</time></h3>
              <p><strong>Adições:</strong> primeira versão da Grotesca Reforma Variável</p>
            </li>
          </ul>
        }

        { i18n.language === 'en' &&
          <ul>
            <li>
              <h3>[Unreleased]</h3>
              <p><strong>Changed:</strong> irregular spacing</p>
              <p><strong>Added:</strong> missing glyphs for Latin Plus compatibility</p>
            </li>
            
            <li>
              <h3>1.0 – <time dateTime="2018-11-03">11/03/2018</time></h3>
              <p><strong>Added:</strong> first Grotesca Reforma Variável release</p>
            </li>
          </ul>
        }

        { i18n.language === 'fr' &&
          <ul>
            <li>
              <h3>[Non publié]</h3>
              <p><strong>Ajustements:</strong> espacements irréguliers</p>
              <p><strong>Ajouts:</strong> caractères laissés pour la compatibilité avec Latin Plus</p>
            </li>
            
            <li>
              <h3>1.0 – <time dateTime="2018-11-03">03/11/2018</time></h3>
              <p><strong>Ajouts:</strong> première version de Grotesca Reforma Variável</p>
            </li>
          </ul>
        }
      </ChangelogBox>
      
      <ChangelogBox className="backlog">
        <h2>{t('changelog.backlog')}</h2>

        { i18n.language === 'pt-BR' &&
          <ul>
            <li>Correções em espaçamentos</li>
            <li>Caracteres restantes para compatibilidade com Latin Plus</li>
            <li>Caracteres para operações matemáticas e lógicas</li>
            <li>Numeradores, denominadores e suporte a frações com OpenType</li>
            <li>Hinting</li>
          </ul>
        }

        { i18n.language === 'en' &&
          <ul>
            <li>Fix irregular spacing</li>
            <li>Missing glyphs for Latin Plus compatibility</li>
            <li>Characters for mathematical and logical operations</li>
            <li>Numerators, denominators e support to OpenType fractions</li>
            <li>Hinting</li>
          </ul>
        }

        { i18n.language === 'fr' &&
          <ul>
            <li>Corrections d'espacement</li>
            <li>Caractères laissés pour la compatibilité avec Latin Plus</li>
            <li>Caractères pour opérations mathématiques et logiques</li>
            <li>Des numérateurs, des dénominateurs et des fractions avec OpenType</li>
            <li>Hinting</li>
          </ul>
        }
      </ChangelogBox>
    </ChangelogSection>
  )
}