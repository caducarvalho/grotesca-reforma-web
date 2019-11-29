import React from 'react';
import styled from 'styled-components';
import {useForm} from '@statickit/react';
import {useTranslation} from 'react-i18next';

const ContactSection = styled.section`
  padding: 10px;
  width: 100%;
  max-width: 980px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 659px) {
    flex-direction: column; 
  }
`;

const ContactIntro = styled.div`
  margin: 10px;
  flex: 0 0 calc(40% - 20px);

  h2 {
    font-weight: normal;
    font-variation-settings: "wdth" 500, "wght" 700;
    letter-spacing: -1px;
    font-size: 1.6rem;
    margin: 0 0 20px;
  }

  p {
    margin: 0 0 5px;
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-variation-settings: "wdth" 400, "wght" 400;
  }

  @media screen and (max-width: 659px) {
    width: calc(100% - 20px);
  }
`;

const ContactFormContainer = styled.form`
  margin: 10px;
  flex: 0 0 calc(60% - 20px);
  background: ${props => props.theme.color};
  color: white;
  padding: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 659px) {
    width: calc(100% - 20px);
  }
`;

const ContactLabel = styled.label`
  display: block;
  font-variation-settings: "wdth" 400, "wght" 700;
  font-size: 1.2rem;
  margin: 0 0 5px;
`;

const ContactInput = styled.input`
  display: block;
  font-size: 1rem;
  font-variation-settings: "wdth" 500, "wght" 500;
  height: 40px;
  margin: 0 0 10px;
  border: none;
  background: white;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  
  &:invalid {
    background: #FCC;
    color: #F44;
  }

  &:focus {
    background: #FFA;
  }
`;

const ContactTextArea = styled.textarea`
  display: block;
  font-size: 1rem;
  font-variation-settings: "wdth" 500, "wght" 500;
  height: 100px;
  margin: 0 0 10px;
  border: none;
  background: white;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  resize: none;

  &:focus {
    background: #FFA;
  }
`;

const ContactButton = styled.button`
  background: #321;
  color: #FA4;
  border: none;
  height: 42px;
  padding: 0 10px;
  margin: 0;
  font-variation-settings: "wdth" 500, "wght" 700;
  font-size: 1rem;
  cursor: pointer;
  text-align: left;

  &:hover {
    color: white;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const ContactStatus = styled.span`
  margin-left: 10px;
  font-variation-settings: "wdth" 500, "wght" 600;
`;

const ContactSuccess = styled.p`
  margin: 10px;
  flex: 0 0 calc(60% - 20px);
  background: #23CC2F;
  font-weight: normal;
  font-variation-settings: "wdth" 500, "wght" 700;
  color: white;
  padding: 20px;
  box-sizing: border-box;
`;

const ContactForm = () => {
  const [state, submit] = useForm({
    site: process.env.REACT_APP_STATIC_KIT_ID,
    form: 'contact-form'
  });

  const {t} = useTranslation();

  if (state.succeeded) return <ContactSuccess>{t('contact.success')}</ContactSuccess>;

  return (
    <ContactFormContainer onSubmit={submit}>
      <ContactLabel htmlFor="email">{t('contact.name')}</ContactLabel>
      <ContactInput id="name" type="text" name="name" placeholder={t('contact.name_placeholder')} />

      <ContactLabel htmlFor="email">{t('contact.email')}</ContactLabel>
      <ContactInput id="email" type="email" name="email" placeholder={t('contact.email_placeholder')} />

      <ContactLabel htmlFor="message">{t('contact.message')}</ContactLabel>
      <ContactTextArea id="message" name="message" placeholder={t('contact.message_placeholder')} />

      <ContactButton type="submit" disabled={state.submitting}>{t('contact.submit')}</ContactButton>

      {state.submitting && <ContactStatus>{t('contact.sending')}...</ContactStatus> }
    </ContactFormContainer>
  )
}

export default ({sectionRef}) => {
  const {t} = useTranslation();

  return (
    <ContactSection ref={sectionRef}>
      <ContactIntro>
        <h2>{t('contact.title')}</h2>

        <p>{t('contact.info')}</p>
      </ContactIntro>

      <ContactForm />
    </ContactSection>
  )
}