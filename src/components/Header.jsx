import styled from "styled-components"
import donut from "../donut-header.png"

export default function Header() {
    return(
        <HeaderContainer>
            <Donut src={donut} />
        <Title>Best Simpsons Quotes</Title>
        </HeaderContainer>
    )
};

const Title = styled.h1`
color:#e76f51;
text-align: center;
`;

const HeaderContainer = styled.div`
display:flex;
justify-content:center;
`;


const Donut = styled.img`
width:100px;
height: 100px;
padding-right: 5px;
display: block;
-webkit-transition: -webkit-transform 1s;

&:hover{
    -webkit-transform: rotate(360deg) translateZ(0);
    cursor: pointer;
}

`;