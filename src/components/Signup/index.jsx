import React, { useState } from "react";
import { Content } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

export const Recommended = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };
  const info = () => {
    message.info("Successfully logged in ");
  };

  const onSubmit = async () => {
    request({
      url: `/public/auth/register`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      info();
      navigate("/signin");
    });
  };

  return (
    <Content>
      <div className="subTitle">Ro'yxatdan o'tish</div>
      <Input onChange={onChange} placeholder="email" type="email" />
      <Input onChange={onChange} placeholder="ism" type="text" />
      <Input onChange={onChange} placeholder="familiya" type="text" />
      <Input onChange={onChange} placeholder="parol" type="password" />
      <Button width="%" onClick={onSubmit}>
        Ro'yxatdan o'tish
      </Button>
    </Content>
  );
};

export default Recommended;
