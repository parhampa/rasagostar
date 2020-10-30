var tmpmob = "";

function aut1() {
    placeid = "autres";
    document.getElementById(placeid).innerHTML = "";

    label.title = "لطفا شماره تماس خود را وارد نمایید";
    label.classes = "w3-text-green";
    make_label();

    input.name = "mob";
    input.id = "mobfp";
    input.placeholder = "09xxxxxxxxx";
    input.type = "number";
    input.classes = "autcls w3-input w3-border";
    makeinput();

    spanbtn.title = "درخواست کد";
    spanbtn.classes = "w3-btn w3-round w3-green w3-margin";
    spanbtn.style = "width:90%;"
    spanbtn.onclick = "sndautcode()";
    make_span_btn();

}

aut1();


function sndautcode() {
    postobj.post_url = "http://mob.0004320.ir/client/aut1.php";
    postobj.send_type = "post";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        if (res.msg == 1) {
            tmpmob = document.getElementById('mobfp').value;
            checkcode();
        }
        else {
            alert("اشکال در انجام عملیات...")
        }
    }
    res_obj_postdata("autcls");
}

function checkcode() {
    placeid = "autres2";
    document.getElementById(placeid).innerHTML = "";

    label.title = "لطفا کد دریافتی خود را وارد نمایید";
    label.classes = "w3-text-green";
    make_label();

    input.name = "mob";
    input.id = "mobset";
    input.type = "hidden";
    input.classes = "autcls2"
    input.values = tmpmob;
    makeinput();

    input.name = "token";
    input.id = "tokenset";
    input.placeholder = "------";
    input.type = "number";
    input.classes = "autcls2 w3-input w3-border";
    makeinput();

    spanbtn.title = "ارسال کد";
    spanbtn.classes = "w3-btn w3-round w3-green w3-margin";
    spanbtn.style = "width:90%;"
    spanbtn.onclick = "servercheckcode()";
    make_span_btn();

    location.replace("#aut2");
}

function servercheckcode() {
    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/aut2.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        if (res.msg == 1) {
            localStorage.setItem("mob", document.getElementById("mobset").value);
            localStorage.setItem("token", document.getElementById("tokenset").value);
            location.replace("#home");
        }
        else {
            alert("کد وارد شده صحیح نمی باشد.");
        }
    }
    res_obj_postdata('autcls2');
}