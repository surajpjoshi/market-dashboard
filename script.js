fetch("data.json")

.then(response => response.json())

.then(data => {

document.getElementById("date").innerHTML =
"Last Updated : " + data.date;

let html = "";

function draw(title,list){

html += `
<div class="card">

<h2>${title}</h2>

<table>
`;

list.forEach(item=>{

html += `
<tr>

<td>${item.sector}</td>

<td>${item.value.toFixed(2)}%</td>

</tr>
`;

});

html += `
</table>

</div>
`;

}

draw("Weekly",data.weekly);
draw("1 Month",data.monthly);
draw("3 Month",data.threeMonth);
draw("6 Month",data.sixMonth);
draw("YTD",data.ytd);

document.getElementById("dashboard").innerHTML = html;

});
