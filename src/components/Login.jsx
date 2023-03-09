import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <Signup>GET ALL THERE</Signup>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 02/08/2023, the price of Disney+
            and The Disney Bundle will increase by $5
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  display: flex;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-size: cover;
  background-image: url("/images/login-background.jpg");
`;

const CTA = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const Signup = styled.a`
  font-weight: bold;
  color: white;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border-radius: 4px;
  border: 1px solid transparent;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;

const Description = styled.p`
  color: whitesmoke;
  font-size: 15px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
