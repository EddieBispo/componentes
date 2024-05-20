import styles from './Botao.module.css';
import { mudarPosicao } from './MudarPosicaoBotao';
function Botao({iconIntagram, iconLinkedin, iconGitGub, iconClose}) {
    return(
        <div id={styles.contBotoes}>
            <div id="btnContato" className={`${styles.btnContato} ${styles.btn}`} onClick={() => mudarPosicao()}></div>
            <a href="https://www.youtube.com/watch?v=YKr9uM2pWGY">
                <div id="btnIntagram" className={`${styles.btnIntagram} ${styles.botoes}`} >{iconIntagram}</div>
            </a> 
            <a href="https://www.youtube.com/shorts/nXGeIMtipgA">
                <div id="btnLinkedin" className={`${styles.btnLinkedin} ${styles.botoes}`}>{iconLinkedin}</div>
            </a>
            {/*Esse aqui é reliqueia. Ta loco, bom demais esse AMV kkkkkkk*/}
            <a href="https://www.youtube.com/watch?v=VgDgWzBL7s4">
                <div id="btnGitHub" className={`${styles.btnGitHub} ${styles.botoes}`}>{iconGitGub}</div>
            </a>
            <div id="btnClose" className={`${styles.btnClose} ${styles.botoes}`}>{iconClose}</div>
        </div>
    );
}

export default Botao;
