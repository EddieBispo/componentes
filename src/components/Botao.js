import styles from './Botao.module.css';
import { mudarPosicao } from './MudarPosicaoBotao';
function Botao({iconContato, iconIntagram, iconLinkedin, iconGitGub}) {
    return(
        <div id={styles.contBotoes}>
            <div id="btnContato" className={`${styles.btnContato} ${styles.btn}`} onClick={() => mudarPosicao()}>{iconContato}</div>
            <a href="https://www.youtube.com/watch?v=YKr9uM2pWGY">
                <div id="btnIntagram" className={`${styles.btnIntagram}`} >{iconIntagram}</div>
            </a> 
            <a href="https://www.youtube.com/shorts/nXGeIMtipgA">
                <div id="btnLinkedin" className={`${styles.btnLinkedin}`}>{iconLinkedin}</div>
            </a>
            {/*Essa aqui é reliqueia, se loco bom demais esse AMV kkkkkkk*/}
            <a href="https://www.youtube.com/watch?v=VgDgWzBL7s4">
                <div id="btnGitHub" className={`${styles.btnGitHub}`}>{iconGitGub}</div>
            </a>
        </div>
    );
}

export default Botao;
