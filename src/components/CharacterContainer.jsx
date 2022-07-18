import Character from './Character';
import styled from "styled-components";

export default function CharacterContainer(props){
    const{characters, reqApi}=props;
    
return(
    <>
    <ContainerCharacter>
        {characters.map((character, index)=>(
        <Character dataCharacter={character} key={index}/>
            
        ))} 
            
    </ContainerCharacter>
    <ContainerButton>
    <Button onClick={reqApi}>Random Quotes</Button> 
    </ContainerButton>
    </>
)

};


const ContainerCharacter = styled.div`
display:flex;
`;

const ContainerButton = styled.div`
width:100%;
text-align: center;
`;

const Button = styled.button`
width:250px;
background-color: #e76f51;
color:#fff;
border:none;
padding:10px 20px;
border-radius: 20px;
font-size:18px;
margin-top:40px;
transition:all 0.2s ease-out;

&:hover{
    cursor: pointer;
    background-color: #2a9d8f;
}
`;


