function display(x) {

    var dash = document.getElementById("SecM");
    dash.style.display = "none";
    for(var a = 0; a < DivArray.length; a++){
        DivArray[a].style.display = "none";
    }

    var temp = "Sec" + x[3];
    var current = document.getElementById(temp);
    current.style.display = "block";

}