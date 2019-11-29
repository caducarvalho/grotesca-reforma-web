import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

const CharactersSection = styled.section`
  padding: 20px;
  margin: 0;
`;

const CharactersSelectBox = styled.div`
  margin: 0;
`;

const CharactersSelect = styled.select`
  background: #443E3A url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIgNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMS41Ij48cGF0aCBkPSJNMSAxbDUgNSA1LTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+) no-repeat 256px 16px;
  background-size: auto;
  background-size: 12px 7px;
  color: white;
  border: none;
  font-size: 1rem;
  height: 40px;
  padding: 0 36px 0 8px;
  overflow: hidden;
  outline: none;
  text-overflow: ellipsis;
  width: 280px;
  box-sizing: border-box;
  font-family: Grotesca Reforma,sans-serif;
  font-variation-settings: "wght" 400,"wdth" 500;
  -webkit-appearance: none;
  margin: 12px auto 24px;
`;

const CharactersDisplay = styled.div`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 879px) {
    display: block;
  }
`;

const CharactersTable = styled.div`
  display: flex;
  flex-wrap: wrap;

  button {
    font-variation-settings: "wdth" ${props => props.wdth}, "wght" ${props => props.wght};
    color: ${props => props.theme.colorSet.contrast};
  }
`;

const Character = styled.button`
  display: table;
  background: none;
  border: none;
  font-size: 1.4rem;
  width: 64px;
  height: 64px;
  cursor: pointer;
  transition: font-variation-settings 0.4s cubic-bezier(0.42, 0, 0.58, 1), font-size 0.15s cubic-bezier(0.42, 0, 0.58, 1);

  &:hover {
    background: ${props => props.theme.color};
    color: white;
    font-size: 1.8rem;
  }
`;

const CharactersSupport = styled.div`
  flex: 0 0 300px;
  background: ${props => props.theme.colorSet.backgroundVariant};
  color: ${props => props.theme.colorSet.contrast};
  padding: 20px;
`;

const CharactersSupportTitle = styled.h2`
  margin: 0 0 10px;
  padding: 0;
  font-size: 1.4rem;
  font-weight: normal;
  font-variation-settings: "wdth" 400, "wght" 700;
  letter-spacing: -1px;
`;

const CharactersSupportList = styled.ul`
  display: ${props => props.active ? 'block' : 'none'};
  list-style: none;
  font-variation-settings: "wdth" 500, "wght" 400;
  font-size: 0.9rem;
  line-height: 1.4rem;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 879px) {
    display: ${props => props.active ? 'flex' : 'none'};
    flex-wrap: wrap;

    li {
      flex: 0 0 50%;
    }
  }
`;

const CharactersSupportButton = styled.button`
  display: block;
  width: 100%;
  background: none;
  border: none;
  font-size: 1rem;
  font-variation-settings: "wdth" 500, "wght" 700;
  margin-top: 10px;
  padding: 0;
  text-align: left;
  cursor: pointer;
  color: ${props => props.theme.colorSet.contrast};

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-left: 6px;
    pointer-events: none;
    vertical-align: bottom;
  }
`;

const ChevronIcon = ({active}) => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect x="0" y="0" width="16" height="16" fill="none" />
    { active
      ?
        <path d="M2,11 l6,-6 l6,6" fill="none" stroke="currentColor" strokeWidth="2px" strokeLinecap="round" />
      :
        <path d="M2,5 l6,6 l6,-6" fill="none" stroke="currentColor" strokeWidth="2px" strokeLinecap="round" />
    }
    
  </svg>
)

export default ({sectionRef}) => {
  const [wght, handleWght] = useState(400);
  const [wdth, handleWdth] = useState(500);
  const [variation, handleVariation] = useState('400-500');
  const [extended, toggleExtended] = useState(false);
  const {t} = useTranslation();

  const copyChar = async e => {
    if (e.target.tagName === 'BUTTON' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(e.target.textContent);
      } catch(err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    const setting = variation.split('-');

    handleWght(parseInt(setting[0]));
    handleWdth(parseInt(setting[1]));
  }, [variation]);

  return (
    <CharactersSection ref={sectionRef}>
      <CharactersSelectBox>
        <CharactersSelect value={variation} onChange={e => handleVariation(e.target.value)}>
          <option value="100-500">Grotesca Reforma Magra</option>
          <option value="400-500">Grotesca Reforma</option>
          <option value="600-500">Grotesca Reforma Três-quartos</option>
          <option value="700-500">Grotesca Reforma Negrito</option>
          <option value="900-500">Grotesca Reforma Preta</option>
          <option value="100-300">Grotesca Reforma Magra Condensada</option>
          <option value="400-300">Grotesca Reforma Condensada</option>
          <option value="700-300">Grotesca Reforma Negrito Condensada</option>
          <option value="900-300">Grotesca Reforma Preta Condensada</option>
          <option value="100-100">Grotesca Reforma Magra Estreita</option>
          <option value="400-100">Grotesca Reforma Estreita</option>
          <option value="700-100">Grotesca Reforma Negrito Estreita</option>
          <option value="900-100">Grotesca Reforma Preta Estreita</option>
        </CharactersSelect>
      </CharactersSelectBox>
      <CharactersDisplay>
        <CharactersTable onClick={copyChar} wdth={wdth} wght={wght}>
          <Character type="button">A</Character>
          <Character type="button">&Aacute;</Character>
          <Character type="button">Ă</Character>
          <Character type="button">&Acirc;</Character>
          <Character type="button">&Auml;</Character>
          <Character type="button">&Agrave;</Character>
          <Character type="button">Ā</Character>
          <Character type="button">Ą</Character>
          <Character type="button">&Aring;</Character>
          <Character type="button">&Atilde;</Character>
          <Character type="button">&AElig;</Character>
          <Character type="button">B</Character>
          <Character type="button">C</Character>
          <Character type="button">Ć</Character>
          <Character type="button">Č</Character>
          <Character type="button">&Ccedil;</Character>
          <Character type="button">Ċ</Character>
          <Character type="button">D</Character>
          <Character type="button">&ETH;</Character>
          <Character type="button">Ď</Character>
          <Character type="button">Đ</Character>
          <Character type="button">E</Character>
          <Character type="button">&Eacute;</Character>
          <Character type="button">Ě</Character>
          <Character type="button">&Ecirc;</Character>
          <Character type="button">&Euml;</Character>
          <Character type="button">Ė</Character>
          <Character type="button">&Egrave;</Character>
          <Character type="button">Ē</Character>
          <Character type="button">Ę</Character>
          <Character type="button">F</Character>
          <Character type="button">G</Character>
          <Character type="button">Ğ</Character>
          <Character type="button">Ģ</Character>
          <Character type="button">Ġ</Character>
          <Character type="button">H</Character>
          <Character type="button">Ħ</Character>
          <Character type="button">I</Character>
          <Character type="button">&Iacute;</Character>
          <Character type="button">&Icirc;</Character>
          <Character type="button">&Iuml;</Character>
          <Character type="button">İ</Character>
          <Character type="button">&Igrave;</Character>
          <Character type="button">Ī</Character>
          <Character type="button">Į</Character>
          <Character type="button">J</Character>
          <Character type="button">K</Character>
          <Character type="button">Ķ</Character>
          <Character type="button">L</Character>
          <Character type="button">Ĺ</Character>
          <Character type="button">Ľ</Character>
          <Character type="button">Ļ</Character>
          <Character type="button">Ł</Character>
          <Character type="button">M</Character>
          <Character type="button">N</Character>
          <Character type="button">Ń</Character>
          <Character type="button">Ň</Character>
          <Character type="button">Ņ</Character>
          <Character type="button">Ŋ</Character>
          <Character type="button">&Ntilde;</Character>
          <Character type="button">O</Character>
          <Character type="button">&Oacute;</Character>
          <Character type="button">&Ocirc;</Character>
          <Character type="button">&Ouml;</Character>
          <Character type="button">&Ograve;</Character>
          <Character type="button">Ő</Character>
          <Character type="button">Ō</Character>
          <Character type="button">&Oslash;</Character>
          <Character type="button">&Otilde;</Character>
          <Character type="button">&OElig;</Character>
          <Character type="button">P</Character>
          <Character type="button">&THORN;</Character>
          <Character type="button">Q</Character>
          <Character type="button">R</Character>
          <Character type="button">Ŕ</Character>
          <Character type="button">Ř</Character>
          <Character type="button">Ŗ</Character>
          <Character type="button">S</Character>
          <Character type="button">Ś</Character>
          <Character type="button">&Scaron;</Character>
          <Character type="button">Ş</Character>
          <Character type="button">Ș</Character>
          <Character type="button">T</Character>
          <Character type="button">Ŧ</Character>
          <Character type="button">Ť</Character>
          <Character type="button">Ţ</Character>
          <Character type="button">Ț</Character>
          <Character type="button">U</Character>
          <Character type="button">&Uacute;</Character>
          <Character type="button">&Ucirc;</Character>
          <Character type="button">&Uuml;</Character>
          <Character type="button">&Ugrave;</Character>
          <Character type="button">Ű</Character>
          <Character type="button">Ū</Character>
          <Character type="button">Ų</Character>
          <Character type="button">Ů</Character>
          <Character type="button">V</Character>
          <Character type="button">W</Character>
          <Character type="button">Ẃ</Character>
          <Character type="button">Ŵ</Character>
          <Character type="button">Ẅ</Character>
          <Character type="button">Ẁ</Character>
          <Character type="button">X</Character>
          <Character type="button">Y</Character>
          <Character type="button">&Yacute;</Character>
          <Character type="button">Ŷ</Character>
          <Character type="button">&Yuml;</Character>
          <Character type="button">Ỳ</Character>
          <Character type="button">Z</Character>
          <Character type="button">Ź</Character>
          <Character type="button">Ž</Character>
          <Character type="button">Ż</Character>
          <Character type="button">a</Character>
          <Character type="button">&aacute;</Character>
          <Character type="button">ă</Character>
          <Character type="button">&acirc;</Character>
          <Character type="button">&auml;</Character>
          <Character type="button">&agrave;</Character>
          <Character type="button">ā</Character>
          <Character type="button">ą</Character>
          <Character type="button">&aring;</Character>
          <Character type="button">&atilde;</Character>
          <Character type="button">&aelig;</Character>
          <Character type="button">b</Character>
          <Character type="button">c</Character>
          <Character type="button">ć</Character>
          <Character type="button">č</Character>
          <Character type="button">&ccedil;</Character>
          <Character type="button">ċ</Character>
          <Character type="button">d</Character>
          <Character type="button">&eth;</Character>
          <Character type="button">ď</Character>
          <Character type="button">đ</Character>
          <Character type="button">e</Character>
          <Character type="button">&eacute;</Character>
          <Character type="button">ě</Character>
          <Character type="button">&ecirc;</Character>
          <Character type="button">&euml;</Character>
          <Character type="button">ė</Character>
          <Character type="button">&egrave;</Character>
          <Character type="button">ē</Character>
          <Character type="button">ę</Character>
          <Character type="button">f</Character>
          <Character type="button">g</Character>
          <Character type="button">ğ</Character>
          <Character type="button">ģ</Character>
          <Character type="button">ġ</Character>
          <Character type="button">h</Character>
          <Character type="button">ħ</Character>
          <Character type="button">i</Character>
          <Character type="button">ı</Character>
          <Character type="button">&iacute;</Character>
          <Character type="button">&icirc;</Character>
          <Character type="button">&iuml;</Character>
          <Character type="button">&igrave;</Character>
          <Character type="button">ī</Character>
          <Character type="button">į</Character>
          <Character type="button">j</Character>
          <Character type="button">ȷ</Character>
          <Character type="button">k</Character>
          <Character type="button">ķ</Character>
          <Character type="button">l</Character>
          <Character type="button">ĺ</Character>
          <Character type="button">ľ</Character>
          <Character type="button">ļ</Character>
          <Character type="button">ł</Character>
          <Character type="button">m</Character>
          <Character type="button">n</Character>
          <Character type="button">ń</Character>
          <Character type="button">ň</Character>
          <Character type="button">ņ</Character>
          <Character type="button">ŋ</Character>
          <Character type="button">&ntilde;</Character>
          <Character type="button">o</Character>
          <Character type="button">&oacute;</Character>
          <Character type="button">&ocirc;</Character>
          <Character type="button">&ouml;</Character>
          <Character type="button">&ograve;</Character>
          <Character type="button">ő</Character>
          <Character type="button">ō</Character>
          <Character type="button">&oslash;</Character>
          <Character type="button">&otilde;</Character>
          <Character type="button">&oelig;</Character>
          <Character type="button">p</Character>
          <Character type="button">&thorn;</Character>
          <Character type="button">q</Character>
          <Character type="button">r</Character>
          <Character type="button">ŕ</Character>
          <Character type="button">ř</Character>
          <Character type="button">ŗ</Character>
          <Character type="button">s</Character>
          <Character type="button">ś</Character>
          <Character type="button">&scaron;</Character>
          <Character type="button">ş</Character>
          <Character type="button">ș</Character>
          <Character type="button">&szlig;</Character>
          <Character type="button">t</Character>
          <Character type="button">ŧ</Character>
          <Character type="button">ť</Character>
          <Character type="button">ţ</Character>
          <Character type="button">ț</Character>
          <Character type="button">u</Character>
          <Character type="button">&uacute;</Character>
          <Character type="button">&ucirc;</Character>
          <Character type="button">&uuml;</Character>
          <Character type="button">&ugrave;</Character>
          <Character type="button">ű</Character>
          <Character type="button">ū</Character>
          <Character type="button">ų</Character>
          <Character type="button">ů</Character>
          <Character type="button">v</Character>
          <Character type="button">w</Character>
          <Character type="button">ẃ</Character>
          <Character type="button">ŵ</Character>
          <Character type="button">ẅ</Character>
          <Character type="button">ẁ</Character>
          <Character type="button">x</Character>
          <Character type="button">y</Character>
          <Character type="button">&yacute;</Character>
          <Character type="button">ŷ</Character>
          <Character type="button">&yuml;</Character>
          <Character type="button">ỳ</Character>
          <Character type="button">z</Character>
          <Character type="button">ź</Character>
          <Character type="button">ž</Character>
          <Character type="button">ż</Character>
          <Character type="button">&ordf;</Character>
          <Character type="button">&ordm;</Character>
          <Character type="button">0</Character>
          <Character type="button">1</Character>
          <Character type="button">2</Character>
          <Character type="button">3</Character>
          <Character type="button">4</Character>
          <Character type="button">5</Character>
          <Character type="button">6</Character>
          <Character type="button">7</Character>
          <Character type="button">8</Character>
          <Character type="button">9</Character>
          <Character type="button">.</Character>
          <Character type="button">,</Character>
          <Character type="button">:</Character>
          <Character type="button">;</Character>
          <Character type="button">!</Character>
          <Character type="button">&iexcl;</Character>
          <Character type="button">?</Character>
          <Character type="button">&iquest;</Character>
          <Character type="button">*</Character>
          <Character type="button">#</Character>
          <Character type="button">&#47;</Character>
          <Character type="button">&#92;</Character>
          <Character type="button">&#40;</Character>
          <Character type="button">&#41;</Character>
          <Character type="button">&#123;</Character>
          <Character type="button">&#125;</Character>
          <Character type="button">&#91;</Character>
          <Character type="button">&#93;</Character>
          <Character type="button">-</Character>
          <Character type="button">&ndash;</Character>
          <Character type="button">&mdash;</Character>
          <Character type="button">_</Character>
          <Character type="button">&sbquo;</Character>
          <Character type="button">&bdquo;</Character>
          <Character type="button">&ldquo;</Character>
          <Character type="button">&rdquo;</Character>
          <Character type="button">&lsquo;</Character>
          <Character type="button">&rsquo;</Character>
          <Character type="button">&laquo;</Character>
          <Character type="button">&raquo;</Character>
          <Character type="button">&lsaquo;</Character>
          <Character type="button">&rsaquo;</Character>
          <Character type="button">&quot;</Character>
          <Character type="button">'</Character>
          <Character type="button">&cent;</Character>
          <Character type="button">&curren;</Character>
          <Character type="button">$</Character>
          <Character type="button">&euro;</Character>
          <Character type="button">&pound;</Character>
          <Character type="button">&yen;</Character>
          <Character type="button">&loz;</Character>
          <Character type="button">@</Character>
          <Character type="button">&amp;</Character>
          <Character type="button">&para;</Character>
          <Character type="button">&sect;</Character>
          <Character type="button">&copy;</Character>
          <Character type="button">&reg;</Character>
          <Character type="button">&trade;</Character>
          <Character type="button">&deg;</Character>
          <Character type="button">|</Character>
          <Character type="button">&brvbar;</Character>
          <Character type="button">&dagger;</Character>
          <Character type="button">&Dagger;</Character>
        </CharactersTable>

        <CharactersSupport>
          <CharactersSupportTitle>{t('characters.languages')}</CharactersSupportTitle>

          <CharactersSupportList active={true}>
            <li>{t('characters.language_albanian')}</li>
            <li>{t('characters.language_croatian')}</li>
            <li>{t('characters.language_czech')}</li>
            <li>{t('characters.language_english')}</li>
            <li>{t('characters.language_finnish')}</li>
            <li>{t('characters.language_french')}</li>
            <li>{t('characters.language_hungarian')}</li>
            <li>{t('characters.language_irish')}</li>
            <li>{t('characters.language_italian')}</li>
            <li>{t('characters.language_norwegian')}</li>
            <li>{t('characters.language_polish')}</li>
            <li>{t('characters.language_portuguese')}</li>
            <li>{t('characters.language_quechua')}</li>
            <li>{t('characters.language_spanish')}</li>
            <li>{t('characters.language_swedish')}</li>
            <li>{t('characters.language_turkish')}</li>
          </CharactersSupportList>

          <CharactersSupportList active={extended}>
            <li>{t('characters.language_basque')}</li>
            <li>{t('characters.language_bemba')}</li>
            <li>{t('characters.language_bosnian')}</li>
            <li>{t('characters.language_cape_verdean_creole')}</li>
            <li>{t('characters.language_estonian')}</li>
            <li>{t('characters.language_filipino')}</li>
            <li>{t('characters.language_galician')}</li>
            <li>{t('characters.language_hawaiian')}</li>
            <li>{t('characters.language_indonesian')}</li>
            <li>{t('characters.language_javanese')}</li>
            <li>{t('characters.language_klingon')}</li>
            <li>{t('characters.language_latin')}</li>
            <li>{t('characters.language_latvian')}</li>
            <li>{t('characters.language_lithuanian')}</li>
            <li>{t('characters.language_malay')}</li>
            <li>{t('characters.language_maltese')}</li>
            <li>{t('characters.language_māori')}</li>
            <li>{t('characters.language_occitan')}</li>
            <li>{t('characters.language_romanian')}</li>
            <li>{t('characters.language_slovak')}</li>
            <li>{t('characters.language_slovenian')}</li>
            <li>{t('characters.language_somali')}</li>
            <li>{t('characters.language_uzbek')}</li>
            <li>{t('characters.language_zulu')}</li>
          </CharactersSupportList>
          
          <CharactersSupportButton type="button" onClick={() => toggleExtended(!extended)}>
            {t(extended ? 'characters.read_less' : 'characters.read_more')}
            <ChevronIcon active={extended} />
          </CharactersSupportButton>
        </CharactersSupport>
      </CharactersDisplay>
    </CharactersSection>
  )
}