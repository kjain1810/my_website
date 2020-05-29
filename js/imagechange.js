console.log("psych");
function changeImage() {
    var x = document.getElementById("changingImage").src;
    var n = x.length;
    var y="";
    console.log(document.getElementById("changingImage").src);
    if (x[n - 5] == "1") {
        console.log("put 2");
        for (var a = 0; a < n - 5; a++)
            y = y + x[a];
        y = y + "2";
        for (var a = n - 4; a < n; a++)
            y = y + x[a];
        document.getElementById("onimagetext").innerHTML ="ME, BUT SLEEPING!<br>click to see some dumbshit";
    }
    else if (x[n - 5] == "2") {
        console.log("put 3");
        for (var a = 0; a < n - 5; a++)
            y = y + x[a];
        y = y + "3";
        for (var a = n - 4; a < n; a++)
            y = y + x[a];
        document.getElementById("onimagetext").innerHTML = "ME, BUT WITH MY DUMB FRIENDS!<br>click to see some dumbshit";
    }
    else if (x[n - 5] == "3") {
        console.log("put 4");
        for (var a = 0; a < n - 5; a++)
            y = y + x[a];
        y = y + "4";
        for (var a = n - 4; a < n; a++)
            y = y + x[a];
        document.getElementById("onimagetext").innerHTML = "MY DUMB FRIEND WHEN HE SAW ISS ASSIGNMENT!<br>click to see some dumbshit";
    }
    else if (x[n - 5] == "4") {
        console.log("put 5");
        for (var a = 0; a < n - 5; a++)
            y = y + x[a];
        y = y + "5";
        for (var a = n - 4; a < n; a++)
            y = y + x[a];
        document.getElementById("onimagetext").innerHTML = "MY DUMB FRIEND WHILE DOING ISS ASSINGMENT :D<br>soz enough dumbshit";
    }
    else if (x[n - 5] == "5") {
        console.log("put 1");
        for (var a = 0; a < n - 5; a++)
            y = y + x[a];
        y = y + "1";
        for (var a = n - 4; a < n; a++)
            y = y + x[a];
        document.getElementById("onimagetext").innerHTML = "ME!<br>click to see some dumbshit";
    }
    else{
        console.log("mismatch");
    }
    document.getElementById("changingImage").src = y;
    console.log(y);
}