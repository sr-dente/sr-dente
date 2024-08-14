import ComponentButton from "components/ContainerButton";
import style from 'components/ContainerIntroduction/ContainerIntroduction.module.scss';
import criancasEscovandoDente from "../../assets/criancasEscovandoDente.png";

const ContainerIntroduction: React.FC = () => {
    const handleClick = () => {
        // Vamos deixar essa funcao aqui ate termos a tela saiba mais
        console.log('Botão clicado!');
      };
    
    return (
        <div className={style.containerIntroduction}>
            <div className={style.container1}>
                <div className={style.containerTexto}>
                    <h1>Sr. Dente é seu amigo!</h1>
                    <p><span>Aprenda mais sobre saúde bucal com o Sr. Dente! </span> <br></br>
                Aqui você encontra curiosidades e dicas para cuidar bem da saúde bucal.</p>
                </div>
                <ComponentButton  
                    link='/ContainerIntroduction' 
                    target="_blank"
                    onClick={handleClick} 
                    label="Saiba mais"
                    className={style.btSaibaMais}
                    labelClassName={style.labelSaibaMais}
                    primario={true}
                />  
            </div>
            <div className={style.container2}>
                <img src={criancasEscovandoDente} alt='criancas escovando dente'/>
            </div>
        </div>
        

    );

};

export default ContainerIntroduction;
