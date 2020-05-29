window.onload = function () {
    var arr=JSON.parse(window.localStorage.getItem("mydata"));
    for(let x in arr)
    {
        for(let y in arr[x])
        {
            let tb = document.getElementById("table_for_skill");
            let r=tb.insertRow(0);
            let c=r.insertCell(0);
            c.innerHTML=arr[x][y]["comm"];
            c=r.insertCell(0);
            c.innerHTML=arr[x][y]["level"];
            c=r.insertCell(0);
            c.innerHTML=arr[x][y]["tech"];
            c=r.insertCell(0);
            c.innerHTML=x;
        }
    }
}

let arrgl=JSON.parse(window.localStorage.getItem("mydata"));

if(!arrgl)
    arrgl={ };

function submitform() {
    let techselect=document.getElementById("tech");
    let levselect=document.getElementById("level");
    let tech=techselect.options[techselect.selectedIndex].text;
    let level = levselect.options[levselect.selectedIndex].text;
    let name=document.getElementById("name").value;
    let comm=document.getElementById("comment").value;
    let tb = document.getElementById("table_for_skill");
    let r=tb.insertRow(0);
    let c=r.insertCell(0);
    c.innerHTML=comm;
    c = r.insertCell(0);
    c.innerHTML = level; 
    c = r.insertCell(0);
    c.innerHTML = tech; 
    c = r.insertCell(0);
    c.innerHTML = name;
    if(arrgl[name]==null)
        arrgl[name]=[];
    arrgl[name].push({tech, level, comm});
    window.localStorage.setItem("mydata", JSON.stringify(arrgl));
}