let powder = {
    x: 0,
    y: 0,
    type: "sand"
}

let h = false

let size = map_size.split("x")
let maxX = size[0]
let maxY = size[1]


let loop = null

maxX = parseInt(maxX) - 1

maxY = parseInt(maxY) - 1

changeSlot(0, 0, 1)

function right() {
    if (powder.x == maxX) {
        return
    }
    changeSlot(powder.x, powder.y, 0)
    powder.x = powder.x + 1
    changeSlot(powder.x, powder.y, 1)
}

function left() {
    if (powder.x == 0) {
        return
    }
    changeSlot(powder.x, powder.y, 0)
    powder.x = powder.x - 1
    changeSlot(powder.x, powder.y, 1)
}

function moveto(x, y) {
    if (!(y > -1 && y <= maxY && x > -1 && x <= maxX)) {
        return
    }
    changeSlot(powder.x, powder.y, 0)
    powder.x = x
    powder.y = y
    changeSlot(powder.x, powder.y, 1)
}

function stp() {
    h = false
    loop = null
    changeSlot(0, 0, 1, true)
    powder.x = 0
    powder.y = 0
}

function drop() {
    if (h) {
        return
    }
    h = true
    loop = setInterval(function() {
        if (getSlot(powder.x, powder.y + 1) == -1) {
            clearInterval(loop)
            stp()
        }
        if (getSlot(powder.x, powder.y + 1) == 0) {
            moveto(powder.x, powder.y + 1)
        } else if (getSlot(powder.x + 1, powder.y + 1) == 0) {
            moveto(powder.x + 1, powder.y + 1)
        } else if (getSlot(powder.x - 1, powder.y + 1) == 0) {
            moveto(powder.x - 1, powder.y + 1)
        } else {
            clearInterval(loop)
            stp()
        }
    }, 100)
}

document.addEventListener("keydown", function(e) {
    if (e.key == "d") {
        right()
    } else if (e.key == "a") {
        left()
    } else if (e.key == " ") {
        drop()
    }
})