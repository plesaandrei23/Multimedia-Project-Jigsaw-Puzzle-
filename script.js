
const img_src = 'cool_img.png';
const pieces = 9;
const rows = 3;
const cols = 3;
const piece_size = 100;
const option_size = 80;

const img = new Image();
img.src = img_src;
img.onload = () => {
    drawPuzzlePieces(img);
}

function drawPuzzlePieces(img){
    const imgWidth = img.width;
    const imgHeight = img.height;

    const sourceWidth = imgWidth / cols;
    const sourceHeight = imgHeight / rows;

    for(let i = 0; i < pieces; i++){
        const row = Math.floor(i / cols);
        const col = i % cols;
        const canvasId = `canvas-piece-${i + 1}`;
        const canvas = document.getElementById(canvasId);

        if(canvas){
            canvas.width = option_size;
            canvas.height = option_size;

            const ctx = canvas.getContext('2d');

            ctx.drawImage(
                img, 
                col * sourceWidth, // sX: Coordonata X de început în imaginea sursă
                row * sourceHeight, // sY: Coordonata Y de început în imaginea sursă
                sourceWidth, // sW: Lățimea secțiunii decupate din sursă
                sourceHeight, // sH: Înălțimea secțiunii decupate din sursă
                0, // dX: Coordonata X de început pe canvas
                0, // dY: Coordonata Y de început pe canvas
                option_size, // dW: Lățimea desenată pe canvas
                option_size  // dH: Înălțimea desenată pe canvas
            );
        }

    }

}

// 4. (Opțional, dar recomandat) Desenează un marker pe canvas-urile țintă
function drawTargetMarkers() {
    for (let i = 1; i <= NUM_PIECES; i++) {
        const canvas = document.getElementById(`canvas-target-${i}`);
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.strokeStyle = '#e76f51'; 
            ctx.lineWidth = 3;
            ctx.strokeRect(0, 0, piece_size, piece_size); // Desenează un contur simplu
            
            // Adaugă numărul (opțional)
            ctx.fillStyle = '#e76f51'; 
            ctx.font = '20px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(i, piece_size / 2, piece_size / 2);
        }
    }
}

// Apelăm funcția de desenare a markerelor la încărcare
document.addEventListener('DOMContentLoaded', drawTargetMarkers);