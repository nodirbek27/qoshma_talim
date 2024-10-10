import { AntTabs, Container } from "./style";
import Signin from "../Signin";
import Signup from "../Signup";

export const Register = () => {
  return (
    <Container>
      <AntTabs
        defaultActiveKey="1"
        items={[
          {
            label: `Kirish`,
            key: "1",
            children: <Signin />,
          },

          {
            label: `Ro'yxatdan o'tish`,
            key: "2",
            children: <Signup />,
          },
        ]}
      />
    </Container>
  );
};

export default Register;
