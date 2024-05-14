import './App.css';
import Botao from './components/Botao';
import iconeContato from './components/icons/contact-card-svgrepo-com.svg';
import iconeInstagram from './components/icons/instagram-svgrepo-com.svg';
import iconeLinkedin from './components/icons/linkedin-svgrepo-com.svg';
import iconeGitHub from './components/icons/github-svgrepo-com.svg';

function App() {
  return (
    <Botao iconContato={<img src={iconeContato} alt="Ícone do Linkedin" />} iconLinkedin={<img src={iconeLinkedin} alt="Ícone do Linkedin" />} iconGitGub={<img src={iconeGitHub} alt="Ícone do Linkedin" />} iconIntagram={<img src={iconeInstagram} alt="Ícone do Linkedin" />} />
  );
}

export default App;
