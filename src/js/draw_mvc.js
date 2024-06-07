const canvas = document.getElementById('mvcCanvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, radius, fillColor, borderAndTextColor, text) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = borderAndTextColor;
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = borderAndTextColor;
    ctx.font = '10px LINESeedKR-Rg';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let words = lines[i].split(' ');
        if (words.length > 0) {
            let firstWord = words[0];
            if (i === 0) {
                ctx.font = '25px LINESeedKR-Rg';
                ctx.fillText(firstWord, x, y - (lines.length - 1) * 7 + i * 14);
                if (words.length > 1) {
                    ctx.font = '10px LINESeedKR-Rg';
                    let remainingWords = words.slice(1).join(' ');
                    // 나머지 단어들을 같은 y 좌표에 출력하여 겹치지 않도록 설정
                    ctx.fillText(remainingWords, x, y - (lines.length - 1) * 7 + i * 14 + 18);
                }
            } else {
                // 나머지 줄들은 기본 폰트 크기로 설정
                ctx.font = '10px LINESeedKR-Rg';
                ctx.fillText(lines[i], x, y - (lines.length - 1) * 7 + i * 14);
            }
        }
    }
}

function drawArrow(fromX, fromY, toX, toY) {
    const headLength = 10;
    const dx = toX - fromX;
    const dy = toY - fromY;
    const angle = Math.atan2(dy, dx);

    ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;

    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();

    ctx.shadowColor = 'rgba(0, 0, 0, 0)';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    ctx.beginPath();
    ctx.moveTo(toX, toY);
    ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6));
    ctx.lineTo(toX, toY);
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fill();
    ctx.closePath();
}

function drawDiagram() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle(100, 100, 85, '#FFF3DB', '#ED992B', 'model\n\n\ndata storage, integrity,\nconsistency, queries \n&mutations');
    drawCircle(305, 100, 85, '#E3F0EF', '#53787B', 'controller\n\n\nreceive, interpret & validate input;\ncreate & update views;\nquery & modify models');
    drawCircle(510, 100, 85, '#FEEDEF', '#793941', 'view\n\n\npresentation\nassets & code');
    drawCircle(407.5, 210, 45, '#E7E7E7', '#767676', 'user\nhuman or\ncomputer client');

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#dadada';

    drawArrow(170, 50, 235, 50);
    drawArrow(375, 50, 440, 50);
    drawArrow(482.5, 180, 455, 210);
    drawArrow(360, 210, 332.5, 180);
    drawArrow(235, 150, 170, 150);
}

drawDiagram();
