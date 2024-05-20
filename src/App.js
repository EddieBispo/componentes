import Botao from './components/Botao';
import iconeInstagram from './components/icons/instagram-svgrepo-com.svg';
import iconeLinkedin from './components/icons/linkedin-svgrepo-com.svg';
import iconeGitHub from './components/icons/github-svgrepo-com.svg';
import iconClose from './components/icons/close-svgrepo-com.svg';

function App() {
  return (
    <Botao iconLinkedin={<img src={iconeLinkedin} alt="Ícone do Linkedin" />} iconGitGub={<img src={iconeGitHub} alt="Ícone do Linkedin" />} iconIntagram={<img src={iconeInstagram} alt="Ícone do Linkedin" />} iconClose={<img src={iconClose} alt=""/>}/>
  );
}

export default App;
