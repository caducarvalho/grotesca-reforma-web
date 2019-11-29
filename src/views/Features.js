import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 20px;
  margin: 0;
  background: #FA4;
  display: flex;
  flex-wrap: wrap;
`;

const FeaturesItem = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
  font-size: 2.4rem;
  font-variation-settings: "wdth" 400, "wght" 400;
  flex: 0 0 calc(100% / 3);

  @media screen and (min-width: 659px) and (max-width: 1019px) {
    flex: 0 0 50%;
  }

  @media screen and (max-width: 659px) {
    flex: 0 0 100%;
    font-size: 2rem;
  }
`;

const FeaturesOriginal = styled.li`
  margin: 0;

  strong {
    font-weight: normal;
    font-variation-settings: "wght" 800, "wdth" 400;
  }
`;

const FeaturesAlternate = styled.li`
  margin: 0;
    color: white;
  
  strong {
    color: #443E3A;
    border-bottom: 2px dotted white;
    font-weight: normal;
    font-variation-settings: "wght" 800, "wdth" 400;
  }

  &.ss01 strong { font-feature-settings: "ss01"; }
  &.ss02 strong { font-feature-settings: "ss02"; }
  &.ss03 strong { font-feature-settings: "ss03"; }
  &.ss04 strong { font-feature-settings: "ss04"; }
  &.ss05 strong { font-feature-settings: "ss05"; }
  &.ss06 strong { font-feature-settings: "ss06"; }
  &.ss07 strong { font-feature-settings: "ss07", "ss08", "ss09"; }

  &.ss01 span { font-feature-settings: "ss01", "smcp"; }
  &.ss02 span { font-feature-settings: "ss02", "smcp"; }
  &.ss03 span { font-feature-settings: "ss03", "smcp"; }
  &.ss04 span { font-feature-settings: "ss04", "smcp"; }
  &.ss05 span { font-feature-settings: "ss05", "smcp"; }
  &.ss06 span { font-feature-settings: "ss06", "smcp"; }
`;

export default ({sectionRef}) => (
  <FeaturesSection ref={sectionRef}>
    <FeaturesItem>
      <FeaturesOriginal>Z<strong>a</strong>t<strong>a</strong>nn<strong>a</strong></FeaturesOriginal>
      <FeaturesAlternate className="ss01">Z<strong>a</strong>t<strong>a</strong>nn<strong>a</strong> <span>Zatanna</span></FeaturesAlternate>
    </FeaturesItem>
    
    <FeaturesItem>
      <FeaturesOriginal>Ro<strong>g</strong>ue</FeaturesOriginal>
      <FeaturesAlternate className="ss02">Ro<strong>g</strong>ue <span>Rogue</span></FeaturesAlternate>
    </FeaturesItem>

    <FeaturesItem>
      <FeaturesOriginal>Magi<strong>k</strong></FeaturesOriginal>
      <FeaturesAlternate className="ss04">Magi<strong>k</strong> <span>Magik</span></FeaturesAlternate>
    </FeaturesItem>

    <FeaturesItem>
      <FeaturesOriginal>Canar<strong>y</strong></FeaturesOriginal>
      <FeaturesAlternate className="ss06">Canar<strong>y</strong> <span>Canary</span></FeaturesAlternate>
    </FeaturesItem>

    <FeaturesItem>
      <FeaturesOriginal><strong>G</strong>amora</FeaturesOriginal>
      <FeaturesAlternate className="ss02"><strong>G</strong>amora <span>Gamora</span></FeaturesAlternate>
    </FeaturesItem>

    <FeaturesItem>
      <FeaturesOriginal><strong>J</strong>essica</FeaturesOriginal>
      <FeaturesAlternate className="ss03"><strong>J</strong>essica <span>Jessica</span></FeaturesAlternate>
    </FeaturesItem>

    <FeaturesItem>
      <FeaturesOriginal><strong>K</strong>atana</FeaturesOriginal>
      <FeaturesAlternate className="ss04"><strong>K</strong>atana <span>Katana</span></FeaturesAlternate>
    </FeaturesItem>

    <FeaturesItem>
      <FeaturesOriginal><strong>R</strong>avenna</FeaturesOriginal>
      <FeaturesAlternate className="ss05"><strong>R</strong>avenna <span>Ravenna</span></FeaturesAlternate>
    </FeaturesItem>

    <FeaturesItem>
      <FeaturesOriginal>1234567890</FeaturesOriginal>
      <FeaturesAlternate className="ss07"><strong>12</strong>3456<strong>7</strong>890</FeaturesAlternate>
    </FeaturesItem>
  </FeaturesSection>
)