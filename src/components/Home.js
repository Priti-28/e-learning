import styled from 'styled-components'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewlyAdded from './NewlyAdded';

const Home = (props) => {
    return ( 
    <Container>
        <ImgSlider />
        <Viewers />
        <Recommends />
        <NewlyAdded />
    </Container>
    );
};

const Container = styled.main`
 position: relative;
 min-height: calc(100vh-250px)
 overflow-x: hidden;
 display: block;
 top: 72px;
 padding: 0 calc(3.5vw + 5px);

 &:after {
    background: url('/images/home-background.png') center center / cover
    no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
    height: 500%;
 }
`;

export default Home;

// npm install react-slick --save