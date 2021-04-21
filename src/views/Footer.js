import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 20px;
  color: white;
  background: ${props => props.theme.color};
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 659px) {
   flex-direction: column; 
  }
`;

const FooterBox = styled.div`
  flex: 0 0 calc(50% - 10px);

  h2 {
    font-weight: normal;
    font-variation-settings: "wdth" 500, "wght" 700;
    letter-spacing: -1px;
    font-size: 1.6rem;
  }

  p {
    font-variation-settings: "wdth" 500, "wght" 400;
  }

  a {
    color: white;
  }
`;

export default ({sectionRef}) => {
  const {t} = useTranslation();

  return (
    <FooterSection ref={sectionRef}>
      <FooterBox>
        <h2>{t('footer.download_title')}</h2>
        <p><a href="https://github.com/caducarvalho/grotesca-reforma" target="_blank" rel="noopener noreferrer">{t('footer.github_link')}</a></p>
        <p><a href="https://www.behance.net/caducarvalho" target="_blank" rel="noopener noreferrer">{t('footer.behance_link')}</a></p>
      </FooterBox>
  
      <FooterBox>
        <h2>{t('footer.credits_title')}</h2>
        <p>{t('footer.credits_text')}</p>
        <p><a href="http://twitter.com/carvahocadu" target="_blank" rel="noopener noreferrer">@carvalhocadu</a> – &#x63;&#x61;&#x64;&#x75;&#x2E;&#x63;&#x61;&#x72;&#x76;&#x61;&#x6C;&#x68;&#x6F;&#x40;&#x6D;&#x65;&#x2E;&#x63;&#x6F;&#x6D;</p>
        <p>{t('footer.credits_license')}</p>
        <p>{t('footer.credits_samples')} <a href="http://www.tiposdolpg.fau.usp.br/" target="_blank" rel="noopener noreferrer">Tipos do LPG</a>.</p>
      </FooterBox>
    </FooterSection>
  )
}
