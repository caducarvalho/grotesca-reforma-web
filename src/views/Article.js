import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

const ArticleSection = styled.section`
  margin: 0;
  padding: 0;
`;

const ArticleImages = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const ArticleImage = styled.li`
  flex: 0 0 50%;
  width: 50%;
  position: relative;
  text-align: center;

  img {
    display: block;
    width: 100%;
    max-height: 40vh;
    object-fit: cover;
  }
`;

const ArticleLegend = styled.div`
  display: flex;
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.color}CC;
  color: white;
  font-variation-settings: "wdth" 300, "wght" 700;
  text-shadow: 0 1px 1px #00000033;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 1;
  }
`;

const ArticleBox = styled.div`
  padding: 40px 20px;
  color: white;
  background: #221D1A;

  h2 {
    font-size: 2rem;
    font-weight: normal;
    font-variation-settings: "wdth" 500, "wght" 700;
    letter-spacing: -1px;
    margin: 0 0 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    font-variation-settings: "wdth" 400, "wght" 400;
    margin: 0;
    font-size: 1.2rem;
  }

  a {
    display: block;
    color: white;
    font-size: 1rem;
    font-variation-settings: "wdth" 500, "wght" 700;
    background: ${props => props.theme.color};
    padding: 10px;
    flex-grow: 0;
    flex-shrink: 0;
    margin-left: 20px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default ({sectionRef}) => {
  const {t} = useTranslation();

  return (
    <ArticleSection ref={sectionRef}>
      <ArticleImages>
        <ArticleImage>
          <picture>
            <source type="image/webp" srcSet="/media/grotesca-reforma-catalogo-1.webp, /media/grotesca-reforma-catalogo-1@2x.webp 2x" />
            <source type="image/jpeg" srcSet="/media/grotesca-reforma-catalogo-1.jpg, /media/grotesca-reforma-catalogo-1@2x.jpg 2x" />
            <img src="/media/grotesca-reforma-catalogo-1.jpg" alt="Imagem da Grotesca Reforma no catálogo da FAUUSP" />
          </picture>
          <ArticleLegend>{t('article.legend_1')}</ArticleLegend>
        </ArticleImage>

        <ArticleImage>
          <picture>
            <source type="image/webp" srcSet="/media/grotesca-reforma-catalogo-2.webp, /media/grotesca-reforma-catalogo-2@2x.webp 2x" />
            <source type="image/jpeg" srcSet="/media/grotesca-reforma-catalogo-2.jpg, /media/grotesca-reforma-catalogo-2@2x.jpg 2x" />
            <img src="/media/grotesca-reforma-catalogo-2.jpg" alt="Imagem da Grotesca Reforma no catálogo da Funtimod" />
          </picture>
          <ArticleLegend>{t('article.legend_2')}</ArticleLegend>
        </ArticleImage>
      </ArticleImages>

      <ArticleBox>
        <h2>{t('article.title')}</h2>
        
        <div>
          <p>{t('article.text')}</p>
          <a href="https://www.proceedings.blucher.com.br/article-details/o-resgate-tipogrfico-como-mtodo-de-design-de-fontes-variveis-33772" target="_blank" rel="noopener noreferrer">{t('article.link')}</a>
        </div>
      </ArticleBox>
    </ArticleSection>
  );
}