import { Container, Content, Icon } from "./style";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Content.Title>IJEP</Content.Title>

        <Content.Item> Xorijiy oliy ta’lim muassasalari bilan hamkorlikda qo‘shma ta’lim dasturlari asosida kadrlar tayyorlash onlayn platformasi</Content.Item>
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

        <Content.Item>t.me/webbrain_admin</Content.Item>
        <Content.Item>t.me/webbrain_ceo</Content.Item>
        <Content.Item>instagram.com/webbrain_admin</Content.Item>
        <Content.Item>instagram.com/smd_94</Content.Item>
      </Content>
    </Container>
  );
};

export default Footer;