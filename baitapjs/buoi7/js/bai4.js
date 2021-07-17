//Bai tap 4 Giai phuong trinh bac 2 dang ax^2 + bx +c = 0 va a khac 0
let a = parseFloat(prompt("Nhap so a"));
if (a == 0) {
    alert("Vui Long Thu Lai Vi a phai khac 0 ");
    a = parseFloat(prompt("Nhap so a"));    
}

else {
    a = a;
}

let b = parseFloat(prompt("Nhap so b"));
let c = parseFloat(prompt("Nhap so c"));

document.write("Chuong Trinh Giai Phuong Trinh Can Bac 2 ax^2 +bx +c =0 voi gia tri cua a, b, c lan luot la: ", a, " ,", b, " ,", c, " ,", "<br>" );

let m = (b * b) - (4 * a * c);

if (m < 0) {
    document.write("Phuong Trinh Vo Nghiem ");
}

else if (m == 0) {
    x = (-1) * (b / (2 * a));
    document.write("Phuong Trinh Co Nghiem Kep x1 va x2 bang: ", x);    
}

else {
    x1 = ((-1) * b + Math.sqrt(m)) / (2 * a);
    x2 = ((-1) * b - Math.sqrt(m)) / (2 * a);
    document.write("Phuong Trinh Co 2 Nghiem x1 va x2 lan luot la ", x1, " ,", x2);
}




