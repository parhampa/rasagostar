function loadreq(req_type) {
    onLoad();
    placeid = "reqinp";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "reqfrm";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "reqfrm";
    makeinput();

    input.name = "req_type";
    input.id = "req_type";
    input.type = "hidden";
    input.values = req_type;
    input.classes = "reqfrm";
    makeinput();

    var reqtxt = "";
    if (req_type == 0) {
        reqtxt = "دوست عزیز تغییرات را دقیقا اعلام فرمائید ";
    }
    else if (req_type == 1) {
        reqtxt = "متن درخواستی برای مالیات";
    }
    else if (req_type == 2) {
        reqtxt = "متن درخواست سابقه کاری";
    }
    label.title = reqtxt;
    label.classes = "w3-text-green";
    make_label();
    textarea.name = "txt";
    textarea.id = "txt";
    textarea.classes = "reqfrm w3-input w3-border";
    make_textarea();

    spanbtn.title = "ثبت";
    spanbtn.classes = "w3-btn w3-green w3-round w3-margin";
    spanbtn.onclick = "sndreq()";
    make_span_btn();
    list_req();
    location.replace("#reqpg");
}

function sndreq() {
    placeid = "sndreqplc";
    postobj.post_url = "http://mob.0004320.ir/client/addrequest.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        list_req();
        alert(res.msg);
    }
    postobj.send_type = "post";
    res_obj_postdata("reqfrm");
}

function list_req() {
    placeid = "resreq";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "reqres";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "reqres";
    makeinput();

    postobj.post_url = "http://mob.0004320.ir/client/myreq.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        console.log(res);

        var htmres = "";
        for (var i = 0; i < res.list.length; i++) {
            htmres += "نوع درخواست: " + "<span class='w3-text-green'>" + res.list[i].req_type + "</span>";
            htmres += "<br>";
            htmres += "وضعیت درخواست: " + "<span class='w3-text-blue'>" + res.list[i].vaz + "</span>";
            htmres += "<br>";
            htmres += "مبلغ درخواست: " + "<span class='w3-text-blue'>" + res.list[i].req_price + "</span>";
            htmres += "<br>";
            htmres += res.list[i].txt;
            htmres += "<br>";
            htmres += "فایل گزارش: " + "<a class='w3-btn w3-green w3-round w3-margin' href='" + res.list[i].file + "' target='_blank'>دانلود</a>";
            htmres += "<hr>";
        }
        document.getElementById("resreq").innerHTML = htmres;
    }
    postobj.send_type = "post";
    res_obj_postdata("reqres");
}