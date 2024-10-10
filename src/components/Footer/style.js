import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/email.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";
import { ReactComponent as cardTelegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as cardInstagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as cardFacebook } from "../../assets/icons/facebook.svg";

const Container = styled.div`
  background: #0d263b;
  position: relative;
  width: 100%;
  padding: 48px 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 0 auto;
  max-width: 1440px;

  @media (max-width: 1440px) {
    & {
      padding: 0 40px;
    }
  }
  @media (max-width: 1280px) {
    & {
      padding: 0 20px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;
Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
`;
const Socials = styled.div`
  display: flex;
  align-items: center;
`;
const SocialLink = styled.a`
  color: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Icon = styled.div``;
Icon.Email = styled(email)`
  margin-right: 21px;
  width: 24px;
  height: 24px;
  & path {
    fill: white;
  }
`;
Icon.Phone = styled(phone)`
  margin-right: 21px;
  & path {
    fill: white;
  }
`;
Icon.Maps = styled(cardMaps)`
  margin-top: 4px;
  margin-right: 21px;
  height: 24px;
  & path {
    fill: white;
  }
`;
Icon.Telegram = styled(cardTelegram)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  
  & path {
    fill: white;
    transition: fill 0.3s ease;
  }
  &:hover path {
    fill: #0088cc;
  }
`;

Icon.Instagram = styled(cardInstagram)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  
  & path {
    fill: white;
    transition: fill 0.3s ease;
  }
  &:hover path {
    fill: #e4405f;
  }
`;

Icon.Facebook = styled(cardFacebook)`
  width: 28px;
  height: 28px;
  cursor: pointer;
  
  & path {
    fill: white;
    transition: fill 0.3s ease;
  }
  &:hover path {
    fill: #3b5998;
  }
`;

export { Container, ContentWrapper, Content, Socials, SocialLink, Icon };
