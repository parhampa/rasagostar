function load_niro_form() {
    onLoad();
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

    label.title = "نوع کار";
    label.classes = "w3-text-green";
    make_label();
    input.name = "title";
    input.id = "title";
    input.type = "text";
    input.classes = "w3-input w3-border nrfrm";
    makeinput();

    label.title = "شرایط کار";
    label.classes = "w3-text-green";
    make_label();
    textarea.name = "txt";
    textarea.id = "txt";
    textarea.type = "text";
    textarea.classes = "w3-input w3-border nrfrm";
    make_textarea();

    label.title = "دستمزد";
    label.classes = "w3-text-green";
    make_label();
    input.name = "dastmozd";
    input.id = "dastmozd";
    input.classes = "w3-input w3-border nrfrm";
    input.type = "number";
    makeinput();

    label.title = "مزایا";
    label.classes = "w3-text-green";
    make_label();
    textarea.name = "mazaya";
    textarea.id = "mazaya";
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

    spanbtn.title = "پرداخت اینترنتی";
    spanbtn.classes = "w3-btn w3-blue w3-round w3-margin";
    spanbtn.onclick = "window.open('http://s.asanpardakht.net/lHHgZ');";
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
            htmres += "نوع کار: " + res.userniro[i].title + "<br>";
            htmres += "شرایط کار: " + res.userniro[i].txt + "<br>";
            htmres += "آدرس: " + res.userniro[i].address + "<br>";
            htmres += "دستمزد: " + res.userniro[i].dastmozd + "<br>";
            htmres += "مزایا: " + res.userniro[i].mazaya + "<br>";
            htmres += "وضعیت: " + res.userniro[i].vaz + "<hr>";
            document.getElementById(placeid).innerHTML = htmres;
        }
        location.replace("#niro_pg");
    }
    res_obj_postdata("mynr");
}