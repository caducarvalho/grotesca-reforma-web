import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

const HeroContainer = styled.div`
  position: relative;
`;

const HeroDesignSpace = styled.div`
  position: absolute;
  top: 30px;
  bottom: 30px;
  left: 30px;
  right: 30px;
  z-index: -1;
`;

const HeroDesignSpaceLegend = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  color: ${props => props.theme.dark ? '#55504B' : '#CBA'};
  position: absolute;
  font-variation-settings: "wght" 600, "wdth" 500;
  user-select: none;

  &.wght {
    bottom: 5px;
    left: 5px;
  }
  
  &.wdth {
    top: 20px;
    right: -10px;
    transform: rotate(90deg);
  }
`;

const Header = styled.header`
  max-width: 960px;
  padding: 20px 40px;
  margin: 0 auto;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (max-width: 879px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: center;
  }
`;

const HeaderTitle = styled.h1`
  color: ${props => props.theme.color};
  font-size: 6rem;
  font-weight: normal;
  font-variation-settings: "wght" 400, "wdth" 500;
  letter-spacing: -1px;
  line-height: 6.4rem;
  transition: font-variation-settings 0.5s;
  margin: 0 20px 0 0;
  white-space: nowrap;

  span {
    display: block;
    font-variation-settings: "wght" 300, "wdth" 200;
    color: ${props => props.theme.colorSet.contrast};
    font-size: 1.8rem;
    line-height: 2.4rem;
    letter-spacing: 0;
    margin-left: 8px;
  }

  @media screen and (max-width: 599px) {
    font-size: 4rem;
    line-height: 5rem;
  }
`;

const HeaderControls = styled.ul`
  margin: 20px 0;
  padding: 0;
  list-style: none;
  width: 100%;
  max-width: 295px;
`;

const HeaderControl = styled.li`
  margin: 0;
  padding: 0;
`;

const HeaderControlLabel = styled.p`
  display: flex;
  justify-content: space-between;
  font-variation-settings: "wght" 400, "wdth" 500;
  font-size: 0.85rem;
  margin: 0;
`;

const HeaderControlRange = styled.input`
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
    background: ${props => props.theme.colorSet.contrast};
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
    background: ${props => props.theme.colorSet.contrast};
  }
  &::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: ${props => props.theme.colorSet.contrast};
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
    background: ${props => props.theme.colorSet.contrast};
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
  &::-ms-fill-upper {
    background: ${props => props.theme.colorSet.contrast};
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
    background: ${props => props.theme.colorSet.contrast};
  }
  &:focus::-ms-fill-upper {
    background: ${props => props.theme.colorSet.contrast};
  }
`;

const HeaderControlScroll = styled.button`
  text-align: center;
  font-variation-settings: "wdth" 400, "wght" 600;
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  margin: 10px 0 0;
  padding: 0;
  font-size: 0.9rem;
  color: ${props => props.theme.colorSet.contrast}

  svg {
    pointer-events: none;
    vertical-align: middle;
    margin-right: 4px;
  }

  @media screen and (max-width: 879px) {
    text-align: left;
  }
`;

const HeroSvg = styled.svg`
  transform: scale(1);

  .space {
    stroke: ${props => props.theme.dark ? '#443E3A' : '#CBA'};
    stroke-width: 2px;
  }

  .coord {
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
    stroke: ${props => props.theme.dark ? '#443E3A' : '#CBA'};
    stroke-width: 1px;
    stroke-dasharray: 4px;
  }

  text {
    font-size: 12px;
    font-variation-settings: "wght" 400, "wdth" 500;
  }
`;

export default ({sectionRef, scroller}) => {
  const [wght, handleWght] = useState(400);
  const [wdth, handleWdth] = useState(500);
  const [loop, handleLoop] = useState();
  const titleRef = useRef();
  const {t} = useTranslation();

  useEffect(() => {
    handleLoop(
      setInterval(() => {
        let randWght = Math.floor((Math.random() * 800) + 100);
        let randWdth = Math.floor((Math.random() * 400) + 100);

        handleWght(randWght);
        handleWdth(randWdth);
      }, 5000)
    );

    return () => clearInterval(loop);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    titleRef.current.style.fontVariationSettings = `"wght" ${wght}, "wdth" ${wdth}`;
  }, [wght, wdth]);

  const moveRange = e => {
    if (e.target.name === 'wght')
      handleWght(parseInt(e.target.value));
    
    if (e.target.name === 'wdth')
      handleWdth(parseInt(e.target.value));

    clearInterval(loop);
  }

  return (
    <HeroContainer ref={sectionRef}>
      <HeroDesignSpace>
        <HeroSvg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect className="coord" x="0" y="0" width="100" height={Math.round(((wdth - 100) * 100) / 400)} fill="none" vectorEffect="non-scaling-stroke" />
          <rect className="coord" x="0" y="0" height="100" width={Math.round(((wght - 100) * 100) / 800)} fill="none" vectorEffect="non-scaling-stroke" />
          <rect className="space" x="0" y="0" width="100" height="100" fill="none" vectorEffect="non-scaling-stroke" />
        </HeroSvg>
        <HeroDesignSpaceLegend className="wdth">wdth</HeroDesignSpaceLegend>
        <HeroDesignSpaceLegend className="wght">wght</HeroDesignSpaceLegend>
      </HeroDesignSpace>

      <Header>
        <HeaderTitle ref={titleRef}>
          Grotesca<br/>Reforma<br/>Variável
          <span>{t('header.author')}</span>
        </HeaderTitle>

        <HeaderControls>
          <HeaderControl>
            <HeaderControlLabel><span>wdth</span> <span>{wdth}</span></HeaderControlLabel>
            <HeaderControlRange type="range" name="wdth" min="100" max="500" step="1" value={wdth} onChange={moveRange} />
          </HeaderControl>
          <HeaderControl>
            <HeaderControlLabel><span>wgth</span> <span>{wght}</span></HeaderControlLabel>
            <HeaderControlRange type="range" name="wght" min="100" max="900" step="1" value={wght} onChange={moveRange} />
          </HeaderControl>
          <HeaderControl>
            <HeaderControlScroll type="button" onClick={() => scroller('about')}>
              <svg width="40" height="60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="20" height="36" stroke="currentColor" fill="transparent" rx="10" strokeWidth="2" />
                <line x1="20" x2="20" y1="18" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" x2="20" y1="24" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="0 10" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0;0" dur="2s" repeatCount="indefinite" />
                </line>
                <path d="M16,30 l4,4 l4,-4" stroke="currentColor" strokeWidth="2" fill="transparent" strokeLinecap="round">
                  <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="0 10" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;0;0" dur="2s" repeatCount="indefinite" />
                </path>
              </svg>

              <span>{t('header.learn_more')}</span>
            </HeaderControlScroll>
          </HeaderControl>
        </HeaderControls>
      </Header>
    </HeroContainer>
  );
}