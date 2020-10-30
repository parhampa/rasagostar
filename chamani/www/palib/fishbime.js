function showfishform() {
    placeid = "fishbimeplc";
    document.getElementById(placeid).innerHTML = "";

    label.title = "کد ملی شما";
    make_label();

    input.type = "number";
    input.name = "id";
    input.id = "code_meli";
    input.classes = "fishfrm w3-input w3-border";
    input.style = "font-size:20px;";
    makeinput();

    spanbtn.title = "مشاهده";
    spanbtn.classes = "w3-btn w3-green w3-round w3-margin";
    spanbtn.onclick = "showresfishbime()";
    document.getElementById('myfishbime').innerHTML = "";
    make_span_btn();
    location.replace("#fishbimepg");
}

function showresfishbime() {
    var d = new Date();
    var n = d.getTime();
    var url = "http://www.0004320.ir/rasa/get-fish.php?id=" + document.getElementById('code_meli').value + "&ver=" + n;
    document.getElementById('myfishbime').innerHTML = "";
    document.getElementById('myfishbime').innerHTML += "<img src='" + url + "' width='100%'>";
    document.getElementById('myfishbime').innerHTML += "<span class='w3-btn w3-green w3-round w3-margin'>ذخیره</span>";
}