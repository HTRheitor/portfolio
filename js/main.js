// Configuração inicial
document.addEventListener('DOMContentLoaded', function() {
    // Simulação de inicialização
    setTimeout(() => {
        document.querySelector('.boot-progress-bar').style.width = '100%';
    }, 500);
    
    setTimeout(() => {
        document.querySelector('.boot-screen').style.display = 'none';
    }, 3500);
    
    // Configurar relógio
    updateClock();
    setInterval(updateClock, 60000);
    
    // Event listeners para desktop icons
    document.querySelectorAll('.desktop-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const windowId = this.getAttribute('data-window');
            openWindow(windowId);
        });
        
        icon.addEventListener('dblclick', function() {
            const windowId = this.getAttribute('data-window');
            openWindow(windowId);
        });
    });
    
    // Event listeners para folder items
    document.querySelectorAll('.folder-item').forEach(item => {
        item.addEventListener('dblclick', function() {
            const windowId = this.getAttribute('data-window');
            openWindow(windowId);
        });
    });
    
    // Event listeners para controles de janela
    document.querySelectorAll('.window-control.close').forEach(button => {
        button.addEventListener('click', function() {
            const window = this.closest('.window');
            window.classList.remove('active');
        });
    });
    
    // Start menu
    document.getElementById('start-button').addEventListener('click', function() {
        document.getElementById('start-menu').classList.toggle('active');
    });
    
    // Fechar start menu se clicar fora
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#start-menu') && !event.target.closest('#start-button')) {
            document.getElementById('start-menu').classList.remove('active');
        }
    });
    
    // Start menu items
    document.querySelectorAll('.start-menu-item').forEach(item => {
        item.addEventListener('click', function() {
            document.getElementById('start-menu').classList.remove('active');
            
            if (this.id === 'shutdown') {
                showErrorWindow();
                return;
            }
            
            const windowId = this.getAttribute('data-window');
            if (windowId) {
                openWindow(windowId);
            }
        });
    });
    
    // Botão OK na janela de erro
    document.getElementById('error-ok').addEventListener('click', function() {
        document.getElementById('error-window').classList.remove('active');
    });
    
    // Torna as janelas arrastáveis
    makeWindowsDraggable();
    
    // Foco na janela quando clicada
    document.querySelectorAll('.window').forEach(window => {
        window.addEventListener('mousedown', function() {
            bringToFront(this);
        });
    });
});

// Funções
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // Formatar hora
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    document.getElementById('taskbar-time').textContent = hours + ':' + minutes;
}

function openWindow(id) {
    // Fechar start menu
    document.getElementById('start-menu').classList.remove('active');
    
    const window = document.getElementById(id);
    
    if (window) {
        // Fechar todas as janelas primeiro
        // document.querySelectorAll('.window').forEach(w => {
        //     w.classList.remove('active');
        // });
        
        window.classList.add('active');
        bringToFront(window);
        
        // Posicionar janela aleatoriamente dentro da área visível
        if (!window.dataset.positioned) {
            const maxX = window.innerWidth - 400;
            const maxY = window.innerHeight - 300;
            const randomX = Math.floor(Math.random() * Math.max(50, maxX));
            const randomY = Math.floor(Math.random() * Math.max(50, maxY));
            
            window.style.left = randomX + 'px';
            window.style.top = randomY + 'px';
            
            window.dataset.positioned = 'true';
        }
    }
}

function bringToFront(window) {
    // Remover classe active de todas as janelas
    document.querySelectorAll('.window').forEach(w => {
        w.style.zIndex = '100';
    });
    
    // Definir z-index maior para a janela atual
    window.style.zIndex = '101';
}

function makeWindowsDraggable() {
    document.querySelectorAll('.window').forEach(window => {
        const titlebar = window.querySelector('.window-titlebar');
        
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        titlebar.onmousedown = dragMouseDown;
        
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            
            // Trazer janela para frente
            bringToFront(window);
            
            // Obter posição inicial do cursor
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }
        
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            
            // Calcular nova posição
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            // Definir nova posição
            window.style.top = (window.offsetTop - pos2) + "px";
            window.style.left = (window.offsetLeft - pos1) + "px";
        }
        
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    });
}

function showErrorWindow() {
    document.getElementById('error-window').classList.add('active');
}