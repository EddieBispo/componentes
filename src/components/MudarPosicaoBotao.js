
export function mudarPosicao() {
    const btnContato = document.querySelector('#btnContato')
    const btnIntagram = document.querySelector('#btnIntagram');
    const btnLinkedin = document.querySelector('#btnLinkedin');
    const btnGitHub = document.querySelector('#btnGitHub');

    setTimeout(() => {
        btnContato.style.borderRadius = '50% 50% 52% 48% / 62% 62% 38% 38%';
        btnIntagram.style.bottom = '50px'
    
    }, 0);

    setTimeout(() => {
        btnContato.style.borderRadius = '52% 48% 59% 41% / 27% 50% 50% 73% ';
        btnLinkedin.style.bottom = '30px';
        btnLinkedin.style.right = '30px';
       
    }, 200);

    
    setTimeout(() => {
        btnContato.style.borderRadius = '59% 41% 40% 60% / 49% 49% 51% 51%';
        btnGitHub.style.right = '50px';
        btnContato.style.borderRadius = '50%';
    }, 400);

    
    

    window.onclick = function (event) {
        if (!event.target.matches('#btnContato')) {

            setTimeout(() => {
                btnContato.style.borderRadius = '50% 50% 52% 48% / 62% 62% 38% 38%';
                btnIntagram.style.bottom = '-10px'
            }, 0);
        
            setTimeout(() => {
                btnContato.style.borderRadius = '52% 48% 59% 41% / 27% 50% 50% 73% ';
                btnLinkedin.style.bottom = '-15px';
                btnLinkedin.style.right = '-15px';
            }, 200);
        
            
            setTimeout(() => {
                btnContato.style.borderRadius = '59% 41% 40% 60% / 49% 49% 51% 51%';
                btnGitHub.style.right = '-10px';
                btnContato.style.borderRadius = '50%';
            }, 400);
        }
    }

}

