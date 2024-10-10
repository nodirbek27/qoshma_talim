import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import logoImg from "../../assets/icons/logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffff;
  height: 64px;
  padding: 0 10px;
  font-size: 16px;
  width: 100%;
  max-width: 1440px;

  @media (max-width: 1440px) {
    padding: 0 40px;
  }
  @media (max-width: 1280px) {
    padding: 0 20px;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => (logo ? "pointer" : "default")};
  color: #ffff;

  & > h3 {
    margin-bottom: 0;
  }
  & .active {
    color: #b8ff06;
  }
`;

const Logo = styled.img`
  width: 30px;
  margin-right: 12px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #ffff;

  &.active {
    color: #b8ff06;
  }
`;

const Menu = styled.div`
  width: 177px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 16px;
  gap: 16px;
  border-radius: 5px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;

Menu.Item = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  color: #000000;

  &:hover {
    color: #b8ff06;
  }
`;

export { Container, Menu, Wrapper, Section, Logo, NavLinkStyled as Link, Main };
