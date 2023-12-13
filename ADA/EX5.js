
let vA = 10;
let vB;

if (isNaN(vA)){
    vA = parseFloat(vA);
    if (isNaN(vA)){
        return "Error!";
    }
}

if (isNaN(vB)){
    vB = parseInt(vB);
    if (isNaN(vB)){
        return "Error!"
    }
}

let result = vA + vB;

console.log(result);