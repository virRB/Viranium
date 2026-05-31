const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let tileSize = 32;
let map_size = "15x15";

function createMap() {
    let [rows, cols] = map_size.split("x").map(Number);

    let map = [];

    for (let y = 0; y < rows; y++) {
        let row = [];
        for (let x = 0; x < cols; x++) {
            row.push(0);
        }
        map.push(row);
    }

    return map;
}

let map = createMap();

canvas.width = map[0].length * tileSize;
canvas.height = map.length * tileSize;
function getSlot(x, y) {
    if (!map[y] || map[y][x] === undefined) return -1;
    return map[y][x];
}

function changeSlot(x, y, value, override = true) {
    if (!map[y] || map[y][x] === undefined) return;

    if (map[y][x] !== 0 && !override) return;

    map[y][x] = value;
}

function drawTile(x, y, type) {
    let px = x * tileSize;
    let py = y * tileSize;

    if (type === 0) {
        ctx.fillStyle = "#111"
    } 
    else if (type === 1) {
        ctx.fillStyle = "#f4d35e"
    } 
    else if (type === 2) {
        ctx.fillStyle = "#5dade2"
    } 
    else if (type === 3) {
        ctx.fillStyle = "#444444"
    }

    ctx.fillRect(px, py, tileSize, tileSize);

    ctx.strokeStyle = "#00000020";
    ctx.strokeRect(px, py, tileSize, tileSize);
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            drawTile(x, y, map[y][x]);
        }
    }
}

setInterval(render, 100);