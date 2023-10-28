let day = document.getElementById("Day");
let exercice = document.getElementById("exercice");
let duration = document.getElementById("Duration");
let create = document.getElementById("create");

let Data;

if(localStorage.new != null){
    Data = JSON.parse(localStorage.new)
    productsCreated = Data.length;
}else{
    Data = [];
}


create.onclick = function(){
    let newDay = {
        day:day.value,
        exercice:exercice.value,
        duration:duration.value,
    }

    Data.push(newDay);
    localStorage.setItem( "new" , JSON.stringify(Data));

    showData()
    ClearData()
}

function showData(){
    let table="";

        for(let i = 0 ;i<Data.length;i++){
            
                table +=`
                <tr>
                    <td>${i+1}</td>
                    <td>${Data[i].day}</td>
                    <td>${Data[i].exercice}</td>
                    <td>${Data[i].duration}</td>
                    <td><button onclick="Delate(${i})" id="delate">Delate</button></td>
                </tr>`

                
        }
    document.getElementById('tbody').innerHTML = table;
}

function Delate(i){
    Data.splice(i,1);
    localStorage.new = JSON.stringify(Data);
    showData()
}

function ClearData(){
    day.value = "";
    exercice.value = "";
    duration.value = "";
}
showData()