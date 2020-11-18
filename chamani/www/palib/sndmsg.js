function loadsndmsg() {
	onLoad();
    placeid = "sndmsgplc";
	document.getElementById(placeid).innerHTML="";
    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "loadsndmsg";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "loadsndmsg";
    makeinput();

    label.title = "متن پیام";
    make_label();
    textarea.name = "txt";
    textarea.id = "txt";
    textarea.id = "txt";
    textarea.classes = "loadsndmsg w3-input w3-border";
    make_textarea();

	spanbtn.title = "ارسال";
    spanbtn.classes = "w3-btn w3-green w3-round w3-margin";
    spanbtn.onclick = "sendmsg()";
    make_span_btn();
	
    loadmymsg();
}

function sendmsg() {
    postobj.post_url = "http://mob.0004320.ir/client/msgtbl.php";
    postobj.send_type = "post";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        alert(res.msg);
    }
    res_obj_postdata("loadsndmsg");
}

function loadmymsg() {
    placeid = "mymsgplc";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "mymsg";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "mymsg";
    makeinput();

    postobj.post_url = "http://mob.0004320.ir/client/mymsg.php";
    postobj.send_type = "post";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        //alert(res.msg);
        console.log(res);
        var htmres = "";
        for (var i = 0; i < res.usermsg.length; i++) {
            htmres += "<b>" + "نوع پیام: <span class='w3-text-green'>" + res.usermsg[i].ty + "</span><br></b>";
            htmres += "<b>" + "وضعیت پیام: " + "<span class='w3-text-blue'>" + res.usermsg[i].vaz + " </span><br></b>";
            htmres += res.usermsg[i].txt;
            htmres += "<hr>";
        }
        document.getElementById('mymsgplc').innerHTML = htmres;
        location.replace("#sndmsgpg");
    }
    res_obj_postdata("mymsg");

}