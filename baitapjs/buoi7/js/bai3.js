//Bai tap 3: Giai phuong trinh bac 1 ax + b =0
let a = parseFloat(prompt("Nhap so a"));
let b = parseFloat(prompt("Nhap so b"));

x = b*(-1) / a;

if (a == 0 && b == 0) {
    document.write("Phuong trinh co vo so nghiem");
}

else if (a==0 && b!== 0) {
    document.write("Phuong trinh vo nghiem");
}

else {
document.write("Gia tri cua x la: ", x, ".");
}


