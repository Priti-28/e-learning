import styled from "styled-components";

const Viewers = (props) => {
    return <Container>
              <h4> Most Viewed playlist</h4>
              <Content>
                <Wrap>
                    {/* <img src='/images/viewer-C++.png' alt='' /> */}
                    <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL"><img src='/images/viewer-C++.png' alt='' /></a>
                </Wrap>
                <Wrap>
                    <a href="https://www.youtube.com/watch?v=0iB5IPoTDts"><img src='/images/viewer-Flask_Dj.png' alt='' /></a>
                </Wrap>
                <Wrap>
                    <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop"><img src='/images/viewer-Java.png' alt='' /></a>
                </Wrap>
                <Wrap>
                    <a href="https://www.youtube.com/playlist?list=PLobAq7hWqZWGTfhj4jNQAVzJd_y6iTErQ"><img src='/images/viewer-Node.png' alt='' /></a>
                </Wrap>
                <Wrap>
                    <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt"><img src='/images/viewer-React.png' alt='' /></a>
                </Wrap>
              </Content>
           </Container>;
};

const Container = styled.div`
padding: 0 0 26px;
`;

const Content = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;    //12345 are in a column without any gap
    grid-gap: 25px;    // now they r in a row with some gap in btw
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr)); // to bring all these in a row


    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));  //if mobile then all pic will be in a colmn

    }
`;

const Wrap = styled.div`
    padding: 32%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`;


export default Viewers;