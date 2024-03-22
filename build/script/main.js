const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

// Elementos do "Matrix"
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
let columns = canvas.width / fontSize;

let rainDrops = [];

// Função para ajustar o canvas e recalcular as colunas e gotas de chuva
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // Recalcula o número de colunas
    columns = canvas.width / fontSize;
  
    // Redefine o array rainDrops baseado nas novas colunas
    rainDrops = [];
    for(let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }
}

// Event listener para redimensionar o canvas quando a janela for redimensionada
window.addEventListener('resize', resizeCanvas, false);

// Chama a função resizeCanvas para configurar o tamanho inicial
resizeCanvas();

// Função draw
const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        
        if(rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 50);

// Estilo CSS para remover margens e barras de rolagem
document.body.style.margin = 0;
document.body.style.overflow = 'hidden'; // Isso esconderá as barras de rolagem
canvas.style.display = 'block'; // Isso pode ajudar a remover a borda branca ao garantir que não haja espaço extra em volta do canvas



