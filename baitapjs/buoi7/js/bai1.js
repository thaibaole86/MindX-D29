
//Bai tap 1: Tim so lon nhat trong 3 so a,b,c
let a = parseInt(prompt("Nhap so a"));
let b = parseInt(prompt("Nhap so b"));
let c = parseInt(prompt("Nhap so c"));

let max = a;

if (max < b) {
    max = b;
}

if (max < c) {
    max = c;
}

document.write("So lon nhat la: ", max);


//Bai tap 2: Tra ve gia tri tuyet doi
let x = parseFloat(prompt("Nhap so x"));
let y = parseFloat(prompt("Nhap so y"));
let z = parseFloat(prompt("Nhap so z"));

if (x < 0) {
    x = x*(-1);
}
else {
    x = x;
}

if (y < 0) {
    y = y*(-1);
}
else {
    y = y;
}

if (z < 0) {
    z = z*(-1);
}
else {
    z = z;
}

document.write("Tri tuyet doi cua x, y, z lan luot la: ", x, " ,", y, " ,", z, ".");


