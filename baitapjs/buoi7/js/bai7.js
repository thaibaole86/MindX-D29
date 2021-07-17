//Bai tap 7

function pwshow() {
    document.getElementById('password').type = "text";
}

function pwhide() {
    document.getElementById('password').type = "password";
}

function pwcheck() {
    let user = document.getElementById('username').value;
    let pww = document.getElementById('password').value;

    if ((user == "admin") && (pww == "123456")) {
        alert('Dang Nhap thanh cong');
    }
    else {
        alert('Dang nhap khong thanh cong');
    }   
}