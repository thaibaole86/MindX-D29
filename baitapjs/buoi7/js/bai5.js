//Bai tap 5
let a = parseInt(prompt("Nhap thang"));
let b = parseInt(prompt("Nhap nam"));

switch (a) {
    case 1: songay = 31; break;
    case 3: songay = 31; break;
    case 5: songay = 31; break;
    case 7: songay = 31; break;
    case 8: songay = 31; break;
    case 10: songay = 31; break;
    case 12: songay = 31; break;
    case 4: songay = 30; break;
    case 6: songay = 30; break;
    case 9: songay = 30; break;
    case 11: songay = 30; break;
    case 2: if ( (b % 4 == 0 && b % 100 !== 0) || b % 400 ==0 ) {
                songay =29;
            }
            else {
                songay =28;
            }; break;
}
document.write("So ngay cua thang do la: ", songay, ".");
