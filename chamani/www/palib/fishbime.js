function showfishform() {
    onLoad();
    placeid = "fishbimeplc";
    document.getElementById(placeid).innerHTML = "";

    label.title = "کد ملی شما";
    make_label();

    input.type = "number";
    input.name = "id";
    input.id = "code_meli";
    input.onkeypress = "load_my_fish()";
    input.onchange = "load_my_fish()";
    input.classes = "fishfrm w3-input w3-border";
    input.style = "font-size:20px;";
    makeinput();

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "fishfrm";
    makeinput();

    document.getElementById(placeid).innerHTML += "<div id='mymeli'></div>";

    spanbtn.title = "مشاهده";
    spanbtn.classes = "w3-btn w3-green w3-round";
    spanbtn.style = "margin:4px";
    spanbtn.onclick = "showresfishbime()";
    document.getElementById('myfishbime').innerHTML = "";
    make_span_btn();

    spanbtn.title = "نمایش با جزئیات";
    spanbtn.classes = "w3-btn w3-yellow w3-round";
    spanbtn.style = "margin:4px";
    spanbtn.onclick = "shownewfish()";
    document.getElementById('myfishbime').innerHTML = "";
    make_span_btn();

    spanbtn.title = "پرداخت فیش بیمه";
    spanbtn.classes = "w3-btn w3-blue w3-round";
    spanbtn.style = "margin:4px";
    spanbtn.onclick = "window.open('https://sep.shaparak.ir/Purchase/tamin')";
    document.getElementById('myfishbime').innerHTML = "";
    make_span_btn();

    location.replace("#fishbimepg");
    showresfishbime();
}

function shownewfish() {
    window.open(puburl);
}

var puburl = "";

function showresfishbime() {
    var d = new Date();
    var n = d.getTime();
    var url = "http://www.0004320.ir/rasa/get-fish.php?id=" + document.getElementById('code_meli').value + "&ver=" + n;
    puburl = url;
    placeid = "myfishbime";
    document.getElementById(placeid).innerHTML = "";

    /*input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "fishfrm";
    makeinput();*/

    /*input.name = "kod_meli";
    input.id = "kod_meli";
    input.type = "hidden";
    input.values = document.getElementById('code_meli').value;
    input.classes = "fishfrm";
    makeinput();*/

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "fishfrm";
    makeinput();

    input.name = "url";
    input.id = "url";
    input.type = "hidden";
    input.values = url;
    input.classes = "fishfrm";
    makeinput();

    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/addfish.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        document.getElementById('myfishbime_req').innerHTML = "";
        var reshtm = "";
        for (var i = 0; i < res.req.length; i++) {
            reshtm += "تاریخ درخواست: " + res.req[i].tarikh + "<br>";
            reshtm += "<img src='" + res.req[i].file + "' style='display: none;' id='reqfish" + res.req[i].id + "'>";
            reshtm += "<span class='w3-btn w3-green w3-round' onclick='showthisfish(" + res.req[i].id + ")'>نمایش فیش</span>";
            reshtm += " <span class='w3-btn w3-yellow w3-round' onclick='loadmormyfish(" + res.req[i].id + ")'>نمایش با جزئیات</span>";
            reshtm += " <span class='w3-btn w3-blue w3-round' onclick='deletemyfish(" + res.req[i].id + ")'>حذف تصویر</span>";
            reshtm += "<hr>";
        }
        document.getElementById('myfishbime_req').innerHTML = reshtm + "<div id='delfish'></div>";
    }
    res_obj_postdata("fishfrm");

    if (document.getElementById('code_meli').value != "") {
        document.getElementById('myfishbime').innerHTML = "";
        document.getElementById('myfishbime').innerHTML += "<img src='" + url + "' width='100%'>";
        document.getElementById('myfishbime').innerHTML += "<span class='w3-btn w3-green w3-round w3-margin' onclick='window.open(" + '"' + puburl + '"' + ")'>نمایش با جزئیات</span>";
    }
}

function loadmormyfish(id) {
    var strid = "reqfish" + id;
    window.open(document.getElementById(strid).src);
}

function showthisfish(id) {
    var strid = "reqfish" + id;
    document.getElementById(strid).style.display = "";
}

/*function downloadfish()
{
	//alert(puburl);
	//var fileTransfer = new FileTransfer();
	//var uri = encodeURI(puburl);
	var uri = encodeURI("https://static.farakav.com/files/pictures/thumb/01540594.jpg");

	window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {

    console.log('file system open: ' + fs.name);

    // Make sure you add the domain name to the Content-Security-Policy <meta> element.
    var url = uri;
    // Parameters passed to getFile create a new file or return the file if it already exists.
    fs.root.getFile('downloaded-image.png', { create: true, exclusive: false }, function (fileEntry) {
        download(fileEntry, url, true);

    }, function (){ alert("error"); });

}, onErrorLoadFs);
}*/

function load_my_fish() {
    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/my_meli.php";
    postobj.after_success = function (data) {
        document.getElementById('mymeli').innerHTML = data;
    }
    res_obj_postdata("fishfrm");
}

function deletemyfish(id) {
    document.getElementById('code_meli').value = "";
    placeid = "delfish";
    document.getElementById('delfish').innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "delfishfrm";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "delfishfrm";
    makeinput();

    input.name = "id";
    input.id = "id";
    input.type = "hidden";
    input.values = id;
    input.classes = "delfishfrm";
    makeinput();

    postobj.type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/del_fish.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        alert(res.msg);
        showresfishbime();
    }
    res_obj_postdata("delfishfrm");
}