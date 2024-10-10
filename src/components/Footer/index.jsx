import {
  Container,
  ContentWrapper,
  Content,
  Socials,
  SocialLink,
  Icon,
} from "./style";

export const Footer = () => {
  return (
    <Container>
      <ContentWrapper>
        <Content>
          <Content.Title>IJEP</Content.Title>

          <Content.Item>
            {" "}
            Xorijiy oliy ta’lim muassasalari bilan hamkorlikda qo‘shma ta’lim
            dasturlari asosida kadrlar tayyorlash onlayn platformasi
          </Content.Item>
        </Content>
        <Content>
          <Content.Title>Manzil</Content.Title>

          <Content.Item>
            <Icon.Maps />
            Farg'ona viloyati, Qo'qon shaxar, Turon ko'chasi, 64-dom, 1-etaj
          </Content.Item>
        </Content>
        <Content>
          <Content.Title>Aloqa</Content.Title>
          <Content.Item>
            {" "}
            <Icon.Phone /> 998 33 576 2020
          </Content.Item>
          <Content.Item>
            <Icon.Email /> sopkspi@gmail.com
          </Content.Item>
        </Content>
        <Content>
          <Content.Title>Ijtimoiy tarmoqlar</Content.Title>

          <Socials>
            <SocialLink
              href="https://t.me/yourTelegram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <Icon.Telegram />
            </SocialLink>
            <SocialLink
              href="https://instagram.com/yourInstagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Icon.Instagram />
            </SocialLink>
            <SocialLink
              href="https://facebook.com/yourFacebook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Icon.Facebook />
            </SocialLink>
          </Socials>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default Footer;
