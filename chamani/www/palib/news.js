function loadnewslist(id) {
	onLoad();
    placeid = "newslistplc";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "nlist";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "nlist";
    makeinput();

    input.name = "cat_id";
    input.id = "cat_id";
    input.type = "hidden";
    input.values = id;
    input.classes = "nlist";
    makeinput();

    postobj.send_type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/posts.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var htmres = "";
        for (var i = 0; i < res.posts.length; i++) {
            htmres += '<div class="w3-third" onclick="loadsinglenew(' + res.posts[i].id + ')">' +
                '  <div class="w3-card">' +
                '    <img src="' + res.posts[i].pic + '" style="width:100%">' +
                '    <div class="w3-container">' +
                '      <h4>' + res.posts[i].title + '</h4>' +
                '    </div>' +
                '  </div>' +
                '</div>';
        }
        document.getElementById(placeid).innerHTML = htmres;
        location.replace("#newslistpg");
    }

    res_obj_postdata("nlist");
}

function loadsinglenew(id) {
    placeid = "singlenewplc";
    document.getElementById(placeid).innerHTML = "";

    input.name = "mob";
    input.id = "mob";
    input.type = "hidden";
    input.values = localStorage.getItem("mob");
    input.classes = "snew";
    makeinput();

    input.name = "token";
    input.id = "token";
    input.type = "hidden";
    input.values = localStorage.getItem("token");
    input.classes = "snew";
    makeinput();

    input.name = "id";
    input.id = "id";
    input.type = "hidden";
    input.values = id;
    input.classes = "snew";
    makeinput();

    postobj.type = "post";
    postobj.post_url = "http://mob.0004320.ir/client/single_post.php";
    postobj.after_success = function (data) {
        var res = JSON.parse(data);
        var htmres = "<img src='" + res.pic + "'" + "style='width:100%'>";
        htmres += "<h3>" + res.title + "</h3>";
        htmres += res.txt;
        htmres += '<br><br><video width="100%" controls>' +
            '  <source src="' + res.videolink + '" type="video/mp4">' +
            'Your browser does not support the video tag.' +
            '</video>';
        document.getElementById(placeid).innerHTML = htmres;
        location.replace("#singlenewpg");
    }
    res_obj_postdata("snew");
}