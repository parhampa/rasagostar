function loaddastmozd() {
	onLoad();
    placeid = "dastmozdplc";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "dstmzd";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "dstmzd";
    makeinput();

    postobj.post_url = "http://mob.0004320.ir/client/dastmozd.php";
    postobj.send_type = "post";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        //alert(res.msg);
        console.log(res);
        var url = res.file_plc;
        window.open(url);
    }
    res_obj_postdata("dstmzd");
}