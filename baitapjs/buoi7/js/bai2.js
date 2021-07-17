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


