function deleteTable(x){

    var confirm = prompt("Please type: YES in capital to confirm deletion");

    if (confirm == "YES"){
        var current = parseInt(x[3]);
        var d1 = document.getElementById("Btn" + current);
        var d2 = document.getElementById("Sec" + current);
        var d3 = document.getElementById("TBT" + current);
        var d4 = document.getElementById("Tab" + current);
        d1.remove();
        d2.remove();
        d3.remove();
        d4.remove();

        display("SecM");

    }

}

function deleteRow(x)  
{   
    var rowid = prompt("Enter Row Number");
    rowid = rowid - 1;
    document.getElementById("Tab" + x[3]).deleteRow(rowid);
}