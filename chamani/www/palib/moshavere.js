function load_moshavere_form() {
	onLoad();
    placeid = "moshavere_res";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "msfrm";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "msfrm";
    makeinput();

    textarea.name = "txt"
    textarea.id = "txt";
    textarea.type = "text";
    textarea.classes = "msfrm w3-input w3-border";
    make_textarea();

    spanbtn.title = "ارسال";
    spanbtn.onclick = "sndmoshavere()";
    spanbtn.classes = "w3-btn w3-green w3-round w3-margin";
    make_span_btn();

    my_moshavere();
}

function sndmoshavere() {
    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/moshavere.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        my_moshavere();
        alert(res.msg);
    }
    res_obj_postdata("msfrm");
}

function my_moshavere() {
    placeid = "my_moshavere_res";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "mymosh";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "mymosh";
    makeinput();

    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/my_moshavere.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var htmres = "";
        for (var i = 0; i < res.usermoshavere.length; i++) {
            htmres += "متن درخواست: " + res.usermoshavere[i].txt + "<br>";
            htmres += "متن پاسخ: " + res.usermoshavere[i].ans_txt + "<br>";
            htmres += "وضعیت: " + res.usermoshavere[i].vaz + "<hr>";
            document.getElementById(placeid).innerHTML = htmres;
        }
        location.replace("#moshavere_pg");
    }
    res_obj_postdata("mymosh");
}