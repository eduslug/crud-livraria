import styled from "styled-components";
import { AbBotaoProps } from ".";

const BotaoEstilizado = styled.button<AbBotaoProps>`
    background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#EB9B00' : '#fff'}
    padding: 16px 32px ;
    border:2px solid #EB9B00;
    cursor: pointer;
    font-size: 20px;
    color:#fff;
    &:hover {
        background: #B87900;
        border: 2px solid #B87900;
    }
`
export default BotaoEstilizado