function addRow(x){
    var temp = "Tab" + x[3];
    var current = parseInt(x[3]);
    var temptable = document.getElementById(temp);
    var row = temptable.insertRow(0);
    var total = 0;

    console.log(current);
    
    for(var a = 0; a < current; a++){
        total += TableSizes[a];    
    }

    console.log(total);
    
    for(var b = total; b < (total + TableSizes[current]); b++){
        console.log(b);
        var rowdata = prompt("Please enter " + ColArray[b]);
        var cell = row.insertCell(b - total);
        cell.innerHTML = rowdata;
    }
}