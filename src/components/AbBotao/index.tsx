import BotaoEstilizado from './styes'

export interface AbBotaoProps {
    texto?: string;
    tipo?: 'primario' | 'secundario';
    onClick?: () => void

}

const AbBotao = ({ texto, onClick, tipo = 'secundario' }: AbBotaoProps) => {
    return (
        <div>
            <BotaoEstilizado onClick={onclick} tipo={tipo}>
                {texto}
            </ BotaoEstilizado >
        </div>
    )
}
export default AbBotao