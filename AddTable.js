var NavRows = 0;
var DivArray = [];
var BtnArray = [];
var ColArray = [];
var TableSizes = [];

function addTable(){
    
    var TableName = prompt("Please enter table name");
    let btn = document.createElement("button");
    btn.innerHTML = TableName;
    btn.setAttribute("id", "Btn" + (NavRows));
    btn.classList.add("tablebutton");
    document.getElementById('topnavbar').appendChild(btn);
    btn.setAttribute("onclick", "display(this.id)");
    
    let div1 = document.createElement("div");
    div1.setAttribute("id", "Sec" + (NavRows));
    div1.classList.add("datasecs");
    document.getElementById('column_main').appendChild(div1);
    
    let div2 = document.createElement("div");
    div2.classList.add("navbuts");
    div1.appendChild(div2);
    
    let PBut = document.createElement("button");
    PBut.setAttribute("id", "TBT" + (NavRows));
    PBut.innerHTML = "Add Element";
    PBut.setAttribute("onclick", "addRow(this.id)");

    let MBut = document.createElement("button");
    MBut.setAttribute("id", "TBT" + (NavRows));
    MBut.innerHTML = "Delete Table";
    MBut.setAttribute("onclick", "deleteTable(this.id)");
    
    let NBut = document.createElement("button");
    NBut.setAttribute("id", "TBT" + (NavRows));
    NBut.innerHTML = "Remove Element";
    NBut.setAttribute("onclick", "deleteRow(this.id)");
    
    div2.appendChild(PBut);
    div2.appendChild(MBut);
    div2.appendChild(NBut);
    
    let div3 = document.createElement("div");
    div3.classList.add("datatable");
    div1.appendChild(div3);
    
    var MainTable = document.createElement("table");
    MainTable.setAttribute("id", "Tab" + (NavRows));
    div3.appendChild(MainTable);
    alert("Enter 0 to stop adding columns");

    for (var x = 0; ;x++) {
        
        var Row = prompt("Please enter column name # " + (x + 1)); 
        
        if (Row == "0"){
            TableSizes.push(x);
            break;
        }
        
        let th = document.createElement("th");
        var t = document.createTextNode(Row);
        th.appendChild(t);
        MainTable.appendChild(th);
        ColArray.push(Row);

    }

    div1.style.display = "none";
    NavRows = NavRows + 1;
    BtnArray.push(btn);
    DivArray.push(div1);
    
}