import styled from "styled-components";
import { colors } from "../../Setup/colors";



export const GridContent = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    gap: 1.2rem;
    grid-template-columns: repeat(4, 1fr);

    @media only screen and (max-width: 1600px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 1340px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 800px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ModalForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    button{
        width: 100%;
        height: 50px;
        color: white;
        background-color: ${colors.themeLight};
        border-radius: 10px;
    }
`    

export const InputContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;

    input{
        width: 100%;
        border: 1px solid lightgray;
        height: 50px;
        border-radius: 10px;
        margin-top: 0.3rem;
        padding-left: 0.7rem;
        font-size: 0.9rem;
        color: rgb(0,0,0,.6);


    }
`