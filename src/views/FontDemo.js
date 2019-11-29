import React, {useState, useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

const FontDemoSection = styled.section`
  padding: 20px;
  margin: 0;
  background: ${props => props.theme.color};
`;

const FontDemoControls = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  max-width: 260px;
  background: #221D1A;
  color: white;
`;

const FontDemoControl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FontDemoLabel = styled.label`
  display: block;
  font-variation-settings: "wdth" 400, "wght" 600;
  font-size: 0.9rem;
  flex: 0 0 80px;
  height: 32px;
  line-height: 32px;
`;

const FontDemoSelect = styled.select`
  background: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIgNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMS41Ij48cGF0aCBkPSJNMSAxbDUgNSA1LTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+) no-repeat 156px 12px;
  background-size: auto;
  background-size: 12px 7px;
  color: white;
  border: none;
  font-size: 0.9rem;
  height: 32px;
  padding: 0 36px 0 8px;
  overflow: hidden;
  outline: none;
  text-overflow: ellipsis;
  width: 180px;
  box-sizing: border-box;
  font-variation-settings: "wght" 400,"wdth" 500;
  -webkit-appearance: none;
  margin: 0;
`;

const FontDemoRange = styled.input`
  width: 100%;
  -webkit-appearance: none;
  margin: 10px 0;
  background: none;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: #FFF;
    box-shadow: none;
    border: none;
    margin: 10px 0;
  }
  &::-webkit-slider-thumb {
    box-shadow: none;
    border: none;
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background: ${props => props.theme.color};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -12px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #FFF;
  }
  &::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: #FFF;
    box-shadow: none;
    border: none;
  }
  &::-moz-range-thumb {
    box-shadow: none;
    border: none;
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background: ${props => props.theme.color};
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #FFF;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
  &::-ms-fill-upper {
    background: #FFF;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
  &::-ms-thumb {
    box-shadow: none;
    border: none;
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background: ${props => props.theme.color};
    cursor: pointer;
    height: 1px;
  }
  &:focus::-ms-fill-lower {
    background: #FFF;
  }
  &:focus::-ms-fill-upper {
    background: #FFF;
  }
`;

const FontDemoBox = styled.div`
  height: 60vh;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FontDemoParagraph = styled.p`
  font-variation-settings: "wght" 400,"wdth" 500;
  outline: none;
  font-size: 4rem;
  text-align: center;
  border-radius: 8px;
  transition: font-variation-settings 0.2s cubic-bezier(0.42, 0, 0.58, 1);

  &:hover {
    background: rgba(255,255,255,0.1);
  }
`;

export default ({sectionRef}) => {
  const [wght, handleWght] = useState(400);
  const [wdth, handleWdth] = useState(500);
  const [lhgt, handleLhgt] = useState(1);
  const [size, handleSize] = useState(4);
  const [variation, handleVariation] = useState('400-500');
  const testParagraph = useRef();
  const {t} = useTranslation();

  useEffect(() => {
    const setting = variation.split('-');

    handleWght(parseInt(setting[0]));
    handleWdth(parseInt(setting[1]));
  }, [variation]);

  useEffect(() => {
    testParagraph.current.style.fontVariationSettings = '"wght" ' + wght + ', "wdth"' + wdth;
    testParagraph.current.style.fontSize = size + 'rem';
    testParagraph.current.style.lineHeight = lhgt + 'em';
  }, [wght, wdth, size, lhgt]);

  return (
    <FontDemoSection ref={sectionRef}>
      <FontDemoControls>
        <FontDemoControl>
          <FontDemoLabel>{t('font.font')}</FontDemoLabel>
          <FontDemoSelect value={variation} onChange={e => handleVariation(e.target.value)}>
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
          </FontDemoSelect>
        </FontDemoControl>
        <FontDemoControl>
          <FontDemoLabel>{t('font.width')}</FontDemoLabel>
          <FontDemoRange type="range" name="wdth" min="100" max="500" step="1" value={wdth} onChange={e => handleWdth(e.target.value)} />
        </FontDemoControl>
        <FontDemoControl>
          <FontDemoLabel>{t('font.weight')}</FontDemoLabel>
          <FontDemoRange type="range" name="wght" min="100" max="900" step="1" value={wght} onChange={e => handleWght(e.target.value)} />
        </FontDemoControl>
        <FontDemoControl>
          <FontDemoLabel>{t('font.size')}</FontDemoLabel>
          <FontDemoRange type="range" name="size" min="1" max="10" step="0.1" value={size} onChange={e => handleSize(e.target.value)} />
        </FontDemoControl>
        <FontDemoControl>
          <FontDemoLabel>{t('font.line_height')}</FontDemoLabel>
          <FontDemoRange type="range" name="lhgt" min="1" max="5" step="0.1" value={lhgt} onChange={e => handleLhgt(e.target.value)} />
        </FontDemoControl>
      </FontDemoControls>

      <FontDemoBox>
        <FontDemoParagraph contentEditable="true" suppressContentEditableWarning={true} ref={testParagraph}>{t('font.demo')}</FontDemoParagraph>
      </FontDemoBox>
    </FontDemoSection>
  )
}