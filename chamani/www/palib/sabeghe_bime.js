function load_sabeghe_bime_form() {
    onLoad();
    placeid = "sabeghe_bime_res";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "sbfrm";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "sbfrm";
    makeinput();

    label.title = "نام";
    label.classes = "w3-text-green";
    make_label();
    input.name = "name";
    input.id = "name";
    input.type = "text";
    input.classes = "w3-input w3-border sbfrm";
    makeinput();

    label.title = "نام خانوادگی";
    label.classes = "w3-text-green";
    make_label();
    input.name = "family";
    input.id = "family";
    input.type = "text";
    input.classes = "w3-input w3-border sbfrm";
    makeinput();

    label.title = "شماره شناسنامه";
    label.classes = "w3-text-green";
    make_label();
    input.name = "sh_sh";
    input.id = "sh_sh";
    input.type = "text";
    input.classes = "w3-input w3-border sbfrm";
    makeinput();

    label.title = "کد ملی";
    label.classes = "w3-text-green";
    make_label();
    input.name = "sh_meli";
    input.id = "sh_meli";
    input.onkeypress = "load_my_meli2()";
    input.onchange = "load_my_meli2()";
    input.type = "text";
    input.classes = "w3-input w3-border sbfrm shmeli2";
    makeinput();
    document.getElementById(placeid).innerHTML += "<div id='mymeli2'></div>";
    label.title = "سال تولد";
    label.classes = "w3-text-green";
    make_label();
    input.name = "sal_b";
    input.id = "sal_b";
    input.type = "number";
    input.classes = "w3-input w3-border sbfrm";
    makeinput();

    label.title = "ماه تولد";
    label.classes = "w3-text-green";
    make_label();
    select.name = "mah_b";
    select.id = "mah_b";
    select.classes = "w3-select w3-border sbfrm";
    for (var i = 1; i < 13; i++) {
        add_select_array(i.toString(), i.toString());
    }
    makeselect();

    label.title = "روز تولد";
    label.classes = "w3-text-green";
    make_label();
    select.name = "roz_b";
    select.id = "roz_b";
    select.classes = "w3-select w3-border sbfrm";
    for (var i = 1; i < 32; i++) {
        add_select_array(i.toString(), i.toString());
    }
    makeselect();

    label.title = "شماره همراهی که امتیاز آن بنام شماست";
    label.classes = "w3-text-green";
    make_label();
    input.name = "mob2";
    input.id = "mob2";
    input.type = "text";
    input.classes = "w3-input w3-border sbfrm";
    makeinput();

    spanbtn.title = "پرداخت حق الزحمه دفتر 50،000 ریال";
    spanbtn.classes = "w3-btn w3-blue w3-round w3-margin";
    spanbtn.onclick = "window.open('https://733.ir/sg/sg/5b4f96');";
    make_span_btn();

    spanbtn.title = "ارسال";
    spanbtn.onclick = "post_sabeghe_bime()";
    spanbtn.classes = "w3-btn w3-green w3-round w3-margin";
    make_span_btn();

    //my_sabeghe_bime();

    location.replace("#sabeghe_bime_pg");
}

function post_sabeghe_bime() {
    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/sabeghe_bime.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        //my_sabeghe_bime();
        alert(res.msg);
    }
    res_obj_postdata("sbfrm");
}

function my_sabeghe_bime() {
    onLoad();
    placeid = "my_sabeghe_bime_res";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "mysabi";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "mysabi";
    makeinput();

    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/my_sabeghe_kari.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var htmres = "";
        for (var i = 0; i < res.usersabeghe.length; i++) {
            htmres += "نام و نام خانوادگی: " + res.usersabeghe[i].name + " " + res.usersabeghe[i].family + "<br>";
            htmres += "شماره شناسنامه: " + res.usersabeghe[i].sh_sh + "<br>";
            htmres += "کد ملی: " + res.usersabeghe[i].sh_meli + "<br>";
            htmres += "تاریخ تولد: " + res.usersabeghe[i].tavalod + "<br>";
            htmres += "شماره تلفن همراهی که امتیاز آن بنام شما است : " + res.usersabeghe[i].mob + "<br>";
            htmres += "وضعیت: " + res.usersabeghe[i].vaz + "<br>";
            if (res.usersabeghe[i].file != "") {
                htmres += "فایل گزارش: " + "<a href='" + res.usersabeghe[i].file + "' target='_blank' class='w3-btn w3-round w3-green w3-margin'>دانلود</a> " + "<hr>";
            }
            document.getElementById(placeid).innerHTML = htmres;

        }
        location.replace("#mysabeghe_bime_pg");
    }
    res_obj_postdata("mysabi");
}

function load_my_meli2() {
    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/my_meli2.php";
    postobj.after_success = function (data) {
        document.getElementById('mymeli2').innerHTML = data;
    }
    res_obj_postdata("shmeli2");
}