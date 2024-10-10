import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic/Button";
import { Container, Link, Main, Menu, Section, Wrapper } from "./style";
import Footer from "../Footer";
import { Dropdown } from "antd";

export const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const onClick = () => {
    navigate("/signin");
  };

  const onClickProfile = (event) => {
    const { name } = event.target.dataset;

    switch (name) {
      case "logout":
        localStorage.removeItem("token");
        navigate("/home");
        break;
      case "myprofile":
        navigate("/myprofile");
        break;
      case "favourite":
        navigate("/favourite");
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu>
      <Menu.Item data-name="myprofile" onClick={onClickProfile}>
        My profile
      </Menu.Item>
      <Menu.Item data-name="favourite" onClick={onClickProfile}>
        Favourites
      </Menu.Item>
      <Menu.Item data-name="logout" onClick={onClickProfile}>
        Log out
      </Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")}>
            <h3 style={{ color: "white" }}>IJEP</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => (
              !hidden && (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  key={index}
                  to={path}
                >
                  {title}
                </Link>
              )
            ))}
          </Section>
          <Section>
            {token ? (
              <Dropdown
                menu={menu}
                placement="topRight"
                arrow={{ pointAtCenter: true }}
                trigger="click"
              >
                <Button type="dark">Profil</Button>
              </Dropdown>
            ) : (
              <Button onClick={onClick} type="dark">Kirish</Button>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Home;
