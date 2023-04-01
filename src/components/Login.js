import styled from 'styled-components'

const Login = (props) => {
    return (
        <Container>
            <Content>
                <Catalog>
                    <CataLogo src="/images/login-catalog.png" alt ="" />
                    <SignUp> GET IT ALL THERE</SignUp>
                    <Description>
                        Learning Platform For Students.
                    </Description>
                </Catalog>
                <BgImage />
                </Content>
        </Container>
    );
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100uh;
`

const Content = styled.div`
 margin-bottom: 10vw;
 width: 100%;
 position: relative;
 min-height: 100vh;
 box-sizzling: border-box;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 88px 40px;
 height: 100%;
`;

const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
 background-image: url("/images/login-background2.avif");
 position: absolute;
 top: 0;
 right: 0;
 left: 0;
 z-index: -1; // low priority, if we want more item on top of it it will add it rather than behind the image
`;

const Catalog = styled.div`
margin-bottom: 2vw;
max-width: 650px;
`

const CataLogo = styled.img`
margin-bottom: 12px;
max-width: 60px;
min-height: 100%;
display: block;
width: 100%;
`

const SignUp = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 30px;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483ee;
}
`;

const Description = styled.p`
color:hsla(0, 0%, 95.3%, 1);
font-size: 11px;
padding: 15px;
margin: 0 15 24px;
Line-height: 1.5;
letter-spacing: 1.5px;
`;
export default Login;