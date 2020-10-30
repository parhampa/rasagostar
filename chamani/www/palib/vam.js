function load_vam_form() {
    placeid = "vam_res";
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

    label.title = "عنوان درخواست";
    label.classes = "w3-text-green";
    make_label();
    input.name = "title";
    input.id = "title";
    input.type = "text";
    input.classes = "w3-input w3-border msfrm";
    makeinput();

    label.title = "نوع درخواست";
    label.classes = "w3-text-green";
    make_label();
    select.name = "ty";
    select.id = "ty";
    select.classes = "w3-select w3-border msfrm";
    add_select_array("0", "خرید وام");
    add_select_array("1", "فروش وام");
    makeselect();

    label.title = "توضیحات بیشتر";
    label.classes = "w3-text-green";
    make_label();
    textarea.name = "txt";
    textarea.id = "txt";
    textarea.classes = "w3-input w3-border msfrm";
    make_textarea();

    spanbtn.title = "ارسال";
    spanbtn.classes = "w3-btn w3-green w3-round w3-margin";
    spanbtn.onclick = "snd_vam()";
    make_span_btn();

    my_vam();
}

function snd_vam() {
    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/vam.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        my_vam();
        alert(res.msg);
    }
    res_obj_postdata("msfrm");
}

function my_vam() {
    placeid = "my_vam_res";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "myvam";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "myvam";
    makeinput();

    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/my_vam.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var htmres = "";
        for (var i = 0; i < res.uservam.length; i++) {
            htmres += "عنوان درخواست: " + res.uservam[i].title + "<br>";
            htmres += "متن درخواست: " + res.uservam[i].txt + "<br>";
            htmres += "نوع درخواست: " + res.uservam[i].ty + "<br>";
            htmres += "وضعیت: " + res.uservam[i].vaz + "<hr>";
            document.getElementById(placeid).innerHTML = htmres;
        }
        location.replace("#vam_pg");
    }
    res_obj_postdata("myvam");
}