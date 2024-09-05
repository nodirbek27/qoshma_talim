import styled from 'styled-components';
import { ReactComponent as email } from '../../assets/icons/email.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';
import { ReactComponent as cardMaps } from '../../assets/icons/cardMaps.svg';

const Container = styled.div`
  background: #0d263b;

  display: flex;
  position: relative;
  /* align-items: center; */
  justify-content: space-around;

  margin: auto;
  width: 100%;
  margin-top: 96px;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
`;

Content.Title = styled.div`
  font-family: 'Montserrat';
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

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
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
  margin-right: 21px;
  width: 54px;
  height: 54px;
  & path {
    fill: white;
  }
`;

export { Container, Content, Icon };