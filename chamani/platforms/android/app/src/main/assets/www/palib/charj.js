function loadchrj() {
    placeid = "charjplc";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "chrj";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "chrj";
    makeinput();

    label.title = "مبلغ:";
    label.classes = "w3-text-green";
    make_label();
    input.name = "price";
    input.id = "price";
    input.type = "number";
    input.classes = "chrj w3-input w3-border";
    makeinput();

    label.title = "کد پیگیری:";
    label.classes = "w3-text-green";
    make_label();
    input.name = "peygiri";
    input.id = "peygiri";
    input.type = "text";
    input.classes = "chrj w3-input w3-border";
    makeinput();

    label.title = "توضیحات";
    label.classes = "w3-text-green";
    make_label();
    textarea.name = "txt";
    textarea.id = "txt";
    textarea.classes = "chrj w3-input w3-border";
    make_textarea();

    spanbtn.title = "ثبت";
    spanbtn.classes = "w3-btn w3-green w3-round w3-margin";
    spanbtn.onclick = "addcharj()";
    make_span_btn();

    spanbtn.title = "پرداخت با USSD";
    spanbtn.classes = "w3-btn w3-blue w3-round w3-margin";
    spanbtn.onclick = "window.open('tel:*6655*10004320#');";
    make_span_btn();
    showmycharj()


}

function addcharj() {
    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/charj.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        showmycharj()
        alert(res.msg);
    }
    res_obj_postdata("chrj");
}

function showmycharj() {
    placeid = "mycharjplc";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "mchrj";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "mchrj";
    makeinput();

    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/mycharj.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var htmres = "";
        for (var i = 0; i < res.sharj.length; i++) {
            htmres += "مبلغ: " + "<span class='w3-text-green'>" + res.sharj[i].price + "</span>" + "<br>";
            htmres += "وضعیت: " + "<span class='w3-text-blue'>" + res.sharj[i].vaz + "</span>" + "<br>";
            htmres += "کد پیگیری: " + "<span class='w3-text-green'>" + res.sharj[i].peygiri + "</span>" + "<br>";
            htmres += res.sharj[i].txt + "<hr>";
        }
        document.getElementById(placeid).innerHTML = htmres;
        location.replace("#chrjpg");
    }
    res_obj_postdata("mchrj");
}