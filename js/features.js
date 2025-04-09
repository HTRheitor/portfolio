// Funções adicionais para o portfólio Windows 95

// Adicionar sons típicos do Windows 95
const playSoundEffect = (type) => {
    const sounds = {
      startup: 'sounds/startup.mp3', // Você precisará hospedar esses sons
      error: 'sounds/error.mp3',
      click: 'sounds/click.mp3',
      shutdown: 'sounds/shutdown.mp3'
    };
    
    const sound = new Audio(sounds[type]);
    sound.play().catch(e => console.log('Erro ao tocar som: interação do usuário necessária primeiro'));
  };
  
  // Adicionar efeito de "ligar" a tela (como um monitor CRT)
  const bootSequence = () => {
    const bootScreen = document.querySelector('.boot-screen');
    
    // Efeito de scan lines (como um monitor CRT antigo)
    const scanLines = document.createElement('div');
    scanLines.style.position = 'fixed';
    scanLines.style.top = '0';
    scanLines.style.left = '0';
    scanLines.style.width = '100%';
    scanLines.style.height = '100%';
    scanLines.style.background = 'linear-gradient(rgba(0,0,0,0.1) 50%, transparent 50%)';
    scanLines.style.backgroundSize = '100% 4px';
    scanLines.style.zIndex = '10001';
    scanLines.style.pointerEvents = 'none';
    scanLines.style.opacity = '0';
    
    document.body.appendChild(scanLines);
    
    // Efeito de ligar
    setTimeout(() => {
      scanLines.style.transition = 'opacity 0.5s';
      scanLines.style.opacity = '0.3';
    }, 100);
    
    // Mensagens de boot
    const messages = [
      "Inicializando sistema...",
      "Verificando hardware...",
      "Carregando MS-DOS 6.22...",
      "Carregando Windows 95...",
      "Carregando drivers...",
      "Iniciando área de trabalho..."
    ];
    
    const bootMessages = document.querySelector('.boot-messages');
    bootMessages.innerHTML = '';
    
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      if (messageIndex < messages.length) {
        const messageEl = document.createElement('div');
        messageEl.className = 'boot-message';
        messageEl.textContent = messages[messageIndex];
        bootMessages.appendChild(messageEl);
        messageIndex++;
      } else {
        clearInterval(messageInterval);
      }
    }, 500);
    
    // Progresso da barra de carregamento
    const progressBar = document.querySelector('.boot-progress-bar');
    let progress = 0;
    
    const progressInterval = setInterval(() => {
      progress += 5;
      progressBar.style.width = `${progress}%`;
      
      if (progress >= 100) {
        clearInterval(progressInterval);
        
        // Finalizar sequência de boot após a barra completar
        setTimeout(() => {
          bootScreen.style.opacity = '0';
          bootScreen.style.transition = 'opacity 0.5s';
          
          setTimeout(() => {
            bootScreen.style.display = 'none';
            
            // Tocar som de inicialização
            playSoundEffect('startup');
            
            // Manter scan lines com opacidade reduzida
            scanLines.style.opacity = '0.1';
          }, 500);
        }, 800);
      }
    }, 100);
  };
  
  // Efeito de desligar o sistema
  const shutdownSequence = () => {
    // Criar a tela de desligamento
    const shutdownScreen = document.createElement('div');
    shutdownScreen.style.position = 'fixed';
    shutdownScreen.style.top = '0';
    shutdownScreen.style.left = '0';
    shutdownScreen.style.width = '100%';
    shutdownScreen.style.height = '100%';
    shutdownScreen.style.backgroundColor = '#000080'; // Azul Windows
    shutdownScreen.style.color = 'white';
    shutdownScreen.style.display = 'flex';
    shutdownScreen.style.flexDirection = 'column';
    shutdownScreen.style.alignItems = 'center';
    shutdownScreen.style.justifyContent = 'center';
    shutdownScreen.style.zIndex = '10000';
    shutdownScreen.style.opacity = '0';
    shutdownScreen.style.transition = 'opacity 0.5s';
    
    const shutdownMessage = document.createElement('div');
    shutdownMessage.textContent = 'Agora é seguro desligar o seu computador.';
    shutdownMessage.style.fontFamily = '"MS Sans Serif", Arial, sans-serif';
    shutdownMessage.style.fontSize = '20px';
    
    shutdownScreen.appendChild(shutdownMessage);
    document.body.appendChild(shutdownScreen);
    
    // Tocar som de desligamento
    playSoundEffect('shutdown');
    
    // Fechar todas as janelas
    document.querySelectorAll('.window').forEach(window => {
      window.classList.remove('active');
    });
    
    // Mostrar mensagem de desligamento
    setTimeout(() => {
      shutdownScreen.style.opacity = '1';
      
      // Redirecionar após alguns segundos (opcional)
      setTimeout(() => {
        // location.reload(); // Recarregar a página para "reiniciar"
        // Ou redirecionar para outra página
        // window.location.href = 'https://seu-site.com';
      }, 5000);
    }, 1000);
  };
  
  // Adicionar easter eggs
  const addEasterEggs = () => {
    // Easter egg do Clippy (Assistente do Office)
    let clickCount = 0;
    
    document.addEventListener('click', () => {
      clickCount++;
      
      if (clickCount === 10) {
        const clippy = document.createElement('div');
        clippy.style.position = 'fixed';
        clippy.style.bottom = '20px';
        clippy.style.right = '20px';
        clippy.style.width = '100px';
        clippy.style.height = '100px';
        clippy.style.backgroundImage = 'url("images/clippy.png")';
        clippy.style.backgroundSize = 'contain';
        clippy.style.backgroundRepeat = 'no-repeat';
        clippy.style.zIndex = '10000';
        
        const clippyBubble = document.createElement('div');
        clippyBubble.style.position = 'absolute';
        clippyBubble.style.top = '-80px';
        clippyBubble.style.left = '-180px';
        clippyBubble.style.width = '200px';
        clippyBubble.style.padding = '10px';
        clippyBubble.style.background = 'white';
        clippyBubble.style.border = '1px solid black';
        clippyBubble.style.borderRadius = '5px';
        clippyBubble.style.fontFamily = '"MS Sans Serif", Arial, sans-serif';
        clippyBubble.style.fontSize = '14px';
        clippyBubble.textContent = 'Parece que você está tentando navegar em um portfólio. Posso ajudar?';
        
        clippy.appendChild(clippyBubble);
        document.body.appendChild(clippy);
        
        setTimeout(() => {
          document.body.removeChild(clippy);
        }, 5000);
      }
    });
    
    // Código Konami: Cima, Cima, Baixo, Baixo, Esquerda, Direita, Esquerda, Direita, B, A
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
      const key = e.key;
      
      if (key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
          // Código Konami completo!
          activateMatrix();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    });
    
    // Efeito Matrix para o Konami Code
    const activateMatrix = () => {
      const matrixContainer = document.createElement('div');
      matrixContainer.style.position = 'fixed';
      matrixContainer.style.top = '0';
      matrixContainer.style.left = '0';
      matrixContainer.style.width = '100%';
      matrixContainer.style.height = '100%';
      matrixContainer.style.backgroundColor = 'black';
      matrixContainer.style.zIndex = '99999';
      matrixContainer.style.overflow = 'hidden';
      
      document.body.appendChild(matrixContainer);
      
      // Código para o efeito de chuva da Matrix
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      matrixContainer.appendChild(canvas);
      
      const ctx = canvas.getContext('2d');
      const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const columns = canvas.width / 20;
      const drops = [];
      
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
      
      const drawMatrix = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          ctx.fillText(text, i * 20, drops[i] * 20);
          
          if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          
          drops[i]++;
        }
      };
      
      const matrixInterval = setInterval(drawMatrix, 33);
      
      // Remover depois de 10 segundos
      setTimeout(() => {
        clearInterval(matrixInterval);
        document.body.removeChild(matrixContainer);
      }, 10000);
    };
  };
  
  // Adicionar efeito de glitch (tela azul) quando algo dá erro
  const showBlueScreenOfDeath = () => {
    const bsod = document.createElement('div');
    bsod.style.position = 'fixed';
    bsod.style.top = '0';
    bsod.style.left = '0';
    bsod.style.width = '100%';
    bsod.style.height = '100%';
    bsod.style.backgroundColor = '#0000AA';
    bsod.style.color = 'white';
    bsod.style.fontFamily = 'Courier New, monospace';
    bsod.style.fontSize = '16px';
    bsod.style.padding = '50px';
    bsod.style.boxSizing = 'border-box';
    bsod.style.zIndex = '99999';
    
    const bsodContent = `
      <div style="text-align: center; margin-bottom: 30px;">Windows</div>
      <p>Um erro fatal ocorreu em 0028:C00D5841 no aplicativo Portfolio.exe</p>
      <p>CS:0000 IP:0000 OP:0000 0000 0000 0000</p>
      <p>Escolha uma das opções:</p>
      <p>* Pressione qualquer tecla para encerrar o aplicativo</p>
      <p>* Pressione CTRL+ALT+DEL para reiniciar seu computador. Você perderá</p>
      <p>  quaisquer dados não salvos em todos os aplicativos.</p>
      <p>Pressione qualquer tecla para continuar _</p>
    `;
    
    bsod.innerHTML = bsodContent;
    document.body.appendChild(bsod);
    
    // Tocar som de erro
    playSoundEffect('error');
    
    // Evento para fechar a tela azul
    document.addEventListener('keydown', function closeBsod(e) {
      document.body.removeChild(bsod);
      document.removeEventListener('keydown', closeBsod);
    });
  };
  
  // Adicionar mini-games do Windows (como Campo Minado ou Paciência)
  const addMiniGames = () => {
    // Criar ícone para os jogos
    const gamesIcon = document.createElement('div');
    gamesIcon.className = 'desktop-icon';
    gamesIcon.setAttribute('data-window', 'games');
    gamesIcon.innerHTML = `
      <img src="" alt="Games">
      <span>Jogos</span>
    `;
    
    document.querySelector('.desktop').appendChild(gamesIcon);
    
    // Criar janela para os jogos
    const gamesWindow = document.createElement('div');
    gamesWindow.className = 'window';
    gamesWindow.id = 'games';
    gamesWindow.innerHTML = `
      <div class="window-titlebar">
        <div class="window-title">Jogos</div>
        <div class="window-controls">
          <div class="window-control minimize">_</div>
          <div class="window-control maximize">□</div>
          <div class="window-control close">X</div>
        </div>
      </div>
      <div class="window-menubar">
        <div class="window-menu-item">Arquivo</div>
        <div class="window-menu-item">Editar</div>
        <div class="window-menu-item">Exibir</div>
        <div class="window-menu-item">Ajuda</div>
      </div>
      <div class="window-content">
        <div class="folder-view">
          <div class="folder-item" id="minesweeper">
            <img src="image/icons/cs.png" alt="Minesweeper">
            <div class="folder-item-name">Campo Minado</div>
          </div>
          <div class="folder-item" id="solitaire">
            <img src="image/icons/cs.png" alt="Solitaire">
            <div class="folder-item-name">Paciência</div>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(gamesWindow);
    
    // Adicionar evento de clique para o botão de fechar
    gamesWindow.querySelector('.window-control.close').addEventListener('click', function() {
      gamesWindow.classList.remove('active');
    });
    
    // Tornar janela arrastável
    const titlebar = gamesWindow.querySelector('.window-titlebar');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    titlebar.onmousedown = function(e) {
      e = e || window.event;
      e.preventDefault();
      
      // Trazer janela para frente
      bringToFront(gamesWindow);
      
      // Obter posição inicial do cursor
      pos3 = e.clientX;
      pos4 = e.clientY;
      
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };
    
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      
      // Calcular nova posição
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      
      // Definir nova posição
      gamesWindow.style.top = (gamesWindow.offsetTop - pos2) + "px";
      gamesWindow.style.left = (gamesWindow.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
    
    // Adicionar eventos para os jogos
    document.getElementById('minesweeper').addEventListener('dblclick', () => {
      showErrorWindow("Campo Minado não está disponível nesta versão.");
    });
    
    document.getElementById('solitaire').addEventListener('dblclick', () => {
      showErrorWindow("Paciência não está disponível nesta versão.");
    });
    
    // Adicionar ao ícone do desktop
    gamesIcon.addEventListener('dblclick', () => {
      openWindow('games');
    });
  };
  
  function showErrorWindow(message) {
    const errorWindow = document.getElementById('error-window');
    const errorMessage = errorWindow.querySelector('.error-message');
    
    if (message) {
      errorMessage.textContent = message;
    } else {
      errorMessage.textContent = 'Ocorreu um erro. Esta função ainda não foi implementada.';
    }
    
    errorWindow.classList.add('active');
    
    // Tocar som de erro
    playSoundEffect('error');
  }
  
  // Inicializar funcionalidades adicionais
  const initAdditionalFeatures = () => {
    // Iniciar com sequência de boot
    bootSequence();
    
    // Adicionar eventos para desligamento
    document.getElementById('shutdown').addEventListener('click', () => {
      shutdownSequence();
    });
    
    // Adicionar easter eggs
    addEasterEggs();
    
    // Adicionar mini-games
    addMiniGames();
    
    // Adicionar erro específico para lixeira
    document.querySelectorAll('.win95-button').forEach(button => {
      if (button.textContent.includes('Esvaziar') || button.textContent.includes('Restaurar')) {
        button.addEventListener('click', () => {
          showBlueScreenOfDeath();
        });
      }
    });
  };
  
  // Executar quando o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', initAdditionalFeatures);