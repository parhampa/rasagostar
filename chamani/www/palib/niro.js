function load_niro_form() {
    placeid = "niro_res";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "nrfrm";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "nrfrm";
    makeinput();

    label.title = "عنوان درخواست شما";
    label.classes = "w3-text-green";
    make_label();
    input.name = "title";
    input.id = "title";
    input.type = "text";
    input.classes = "w3-input w3-border nrfrm";
    makeinput();

    label.title = "شرح بیشتر";
    label.classes = "w3-text-green";
    make_label();
    textarea.name = "txt";
    textarea.id = "txt";
    textarea.type = "text";
    textarea.classes = "w3-input w3-border nrfrm";
    make_textarea();

    label.title = "آدرس";
    label.classes = "w3-text-green";
    make_label();
    textarea.name = "address";
    textarea.id = "address";
    textarea.type = "text";
    textarea.classes = "w3-input w3-border nrfrm";
    make_textarea();

    spanbtn.title = "ارسال";
    spanbtn.classes = "w3-btn w3-green w3-round w3-margin";
    spanbtn.onclick = "snd_niro()";
    make_span_btn();

    my_niro();
}

function snd_niro() {
    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/niro.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        my_niro();
        alert(res.msg);
    }
    res_obj_postdata("nrfrm");
}

function my_niro() {
    placeid = "my_niro_res";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "mynr";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "mynr";
    makeinput();

    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/my_niro.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var htmres = "";
        for (var i = 0; i < res.userniro.length; i++) {
            htmres += "عنوان درخواست: " + res.userniro[i].title + "<br>";
            htmres += "متن درخواست: " + res.userniro[i].txt + "<br>";
            htmres += "آدرس: " + res.userniro[i].address + "<br>";
            htmres += "وضعیت: " + res.userniro[i].vaz + "<hr>";
            document.getElementById(placeid).innerHTML = htmres;
        }
        location.replace("#niro_pg");
    }
    res_obj_postdata("mynr");
}