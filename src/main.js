function login() {
    var username = $("#username").val();
    var password = $("#password").val();

    if (username == "" && password == "") {
        contentShow()
        $(".content").load(route['home'].url)
    } else {
        alert("login failed")
    }
}

function contentShow() {
    $(".content").show()
}

function contentHide() {
    $(".content").hide();
}

contentHide()