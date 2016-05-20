// CMPT 276 Assignment 1
// Calculator




/*
The	sum	of	all	grades	divided by	the	total	number	of	grades
			A1	70/100,	A2	20/80,	A3	10/10:
			(0.7	+	0.25	+	1.0)/3	=	0.65	à 65/100
Average grades
The	sum	of	all	grade	values	divided	by	the	sum	of	maximums	from	all	aggregated	items.
A1	70/100,	A2	20/80,	A3	10/10:
			(70	+	20	+	10)/(100+80+10) =	100/190 =	0.526 à 52.6/100


*/

var TableRowCount = 5; //Count starting from top of table (not including total) for row tracking
var RowNumber = TableRowCount-1; //Number of activities, easier for typing in later on
/*
function total(numerator, denominator, name) {
  numerator = document.getElementsByClassName('a1_per').value;
}

function addRow() {
    /*var table = document.getElementById("main_table");
    var row = table.insertRow(TableRowCount);
    var activity_name = row.insertCell(0);
    activity_name.innerHTML = '<input type="input" onload="this.value="Activity "+RowNumber" placeholder="Activity "+RowNumber />';

    var sname = row.insertCell(1);
    var grade = row.insertCell(2);
    var percentage = row.insertCell(3);
    var gpa = row.insertCell(4);

    var element1 = document.createElement("input");
    element1.type="Activity "+RowNumber;
    grade.appendChild(element1);

    activity_name.setAttribute("value", "Activity" + TableRowCount);

*/
/*
  var tblBody = document.getElementById("main_table").tBodies[0];
  var newNode = tblBody.rows[1].cloneNode(true);
  newNode.insertBefore("total");
  RowNumber++;
  TableRowCount++;
}

function removeRow() {
  if ( TableRowCount == 2 ) {
    alert("You can't have less than one row!");
    return; //exits if you try to remove the last row
  }

  var table = document.getElementById("main_table");
  table.deleteRow(RowNumber);

  RowNumber--;
  TableRowCount--;
}
*/
function average() {
  var total = 0;
  var total_num = 0;
  var total_den = 0;
  var ActivityCount = 0; //number of activities counted in the mean
  for (var i = 1; i <TableRowCount; i++) {
    var num = document.getElementById("a"+i+"_num").value;
    var dem = document.getElementById("a"+i+"_denom").value;
    var temp_total = num / dem;
    if( isFinite(temp_total) == false || temp_total < 0 ) {
      continue;
    }
    ActivityCount++;
    total += temp_total;
  }
  total = total / ActivityCount;
  document.getElementById("total_per").innerHTML = total;
}

function mean() {
  var total = 0;
  var ActivityCount = 0; //number of activities counted in the mean
  for (var i = 1; i <TableRowCount; i++) {
    var num = document.getElementById("a"+i+"_num").value;
    var den = document.getElementById("a"+i+"_denom").value;
    var temp_total = num / den;
    if( isFinite(temp_total) == false || temp_total < 0 ) {
      continue;
    }
    ActivityCount++;
    total += temp_total;
  }
  total = total / ActivityCount;
  document.getElementById("total_per").innerHTML = total;
}

//calculates percent instantly
function calculate() {
  for (var i = 1; i<TableRowCount; i++) {
    var num = document.getElementById("a"+i+"_num").value;
    var den = document.getElementById("a"+i+"_denom").value;
    var per = num / den * 100;
    if( isFinite(per) == false || per < 0 ) {
      document.getElementById("percentage"+i).innerHTML = "N/A";
      continue;
    }
    per = Math.round(per * 100) / 100;
    document.getElementById("percentage"+i).innerHTML = per + "%";
  }
}
