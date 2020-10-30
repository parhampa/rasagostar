function loadregister() {
    placeid = "regform_plc";
    document.getElementById(placeid).innerHTML = "";

    label.title = "نام کاربری:";
    make_label();

    input.name = "user";
    input.type = "text";
    input.classes = "regform";
    input.id = "user_reg";
    makeinput();

    label.title = "کلمه عبور";
    make_label();

    input.name = "pass";
    input.type = "password";
    input.classes = "regform";
    input.id = "pass_reg";
    makeinput();

    label.title = "شماره تماس";
    make_label();

    input.name = "tel";
    input.type = "text";
    input.id = "tel_reg";
    input.classes = "regform";
    makeinput();

    label.title = "حساب وبمانی";
    make_label();

    input.name = "webmoney";
    input.id = "webmoney_reg";
    input.classes = "regform";
    input.type = "text";
    makeinput();

    label.title = "معرف";
    make_label();

    input.name = "refer";
    input.id = "refer_reg";
    input.classes = "regform";
    input.type = "text";
    makeinput();

    input.type = "button";
    input.values = "ثبت نام";
    input.onclick = "sndreg()";
    makeinput();

    input.type = "button";
    input.values = "ورود";
    input.onclick = "gopage('loginpg')";
    makeinput();

    gopage('regpg');
}

function sndreg() {
    if (checkempty("user_reg", "نام کاربری") == false) {
        return;
    }
    if (checkempty("pass_reg", "کلمه عبور") == false) {
        return;
    }
    if (checkempty("tel_reg", "شماره تماس") == false) {
        return;
    }
    if (checkempty("webmoney_reg", "حساب وب مانی") == false) {
        return;
    }
    if (checkempty("refer_reg", "معرف") == false) {
        return;
    }
    postobj.post_url = "http://localhost/pnet/client/register.php";
    postobj.send_type = "post";
    postobj.after_error = function () {
        alert("خطا در انجام عملیات");
    };
    postobj.after_success = function () {
        alert("عملیات با موفقیت انجام شد");
    }
    res_obj_postdata("regform");
}