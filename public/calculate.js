// CMPT 276 Assignment 1
// Calculator

var TableRowCount = 5; //Count starting from top of table (not including total) for row tracking

//calculates percent instantly
function calculate() {
  for (var i = 1; i<TableRowCount; i++) {
    var num = document.getElementById("a"+i+"_num").value;
    var den = document.getElementById("a"+i+"_denom").value;
    var per = num / den * 100;
    if( isFinite(per) == false || per < 0 ) { //skips calculation if input values are empty
      document.getElementById("percentage"+i).innerHTML = "";
      continue;
    }
    per = Math.round(per * 100) / 100;
    document.getElementById("percentage"+i).innerHTML = per + "%";
  }
}

function addRow() {
  $("tr:last").before('<tr>' +
                      '<td><input class="activity" type="text" value="Activity ' + TableRowCount + '" placeholder="Activity ' + TableRowCount + '"></td>' +
                      '<td><input class="sname" type="text" value="A' + TableRowCount + '" placeholder="A' + TableRowCount + '"></td>' +
                      '<td><input id="a'+TableRowCount+'_num" class="num" type="number" onkeydown="calculate()" onkeyup="calculate()"> / <input id="a'+TableRowCount+'_denom" type="number" class="den" onkeydown="calculate()" onkeyup="calculate()"></td>' +
                      '<td id="percentage'+TableRowCount+'" class="per" />' +
                      '</tr>');
  TableRowCount++;
}

function removeRow() {
  if ( TableRowCount == 2 ) {
    alert("You can't have less than one activity!");
    return; //exits if you try to remove the last row
  }
  var table = document.getElementById("main_table");
  table.deleteRow(TableRowCount - 1);
  TableRowCount--;
}

function resetButton() {
  //resetting input fields
  document.getElementById("main_form").reset();
  //resetting total
  document.getElementById("total_per").innerHTML = "";
  //resetting activities back to 4
  var x = TableRowCount - 5; //value to check how many rows need to be reset
  if ( x < 0 ) { //less than 4
    for(var i = 0; i < Math.abs(x); i++) {
      addRow();
    }
  }
  else { //4 or more
    var table = document.getElementById("main_table");
    var x = TableRowCount - 5; //value to check how rows need to be reset
    for (var i = 0; i < x; i++) {
      table.deleteRow(TableRowCount - 1);
      TableRowCount--;
    }
  }
  //resetting the 4 activities' % cells back to being empty
  for (var j = 1; j < 5; j++)
  {
    document.getElementById("percentage"+j).innerHTML = "";
  }
}

function average() {
  var total_num = 0;
  var total_den = 0;
  for (var i = 1; i < TableRowCount; i++) {
    var num = document.getElementById("a"+i+"_num").value;
    var den = document.getElementById("a"+i+"_denom").value;
    var check = num / den; //checks whether the current activity is being used or not
    if( isFinite(check) == false || check < 0 ) {
      continue;
    }
    total_num += parseFloat(num); //parseFloat to make sure it's adding and not concatenating
    total_den += parseFloat(den); //parseFloat to make sure it's adding and not concatenating
  }
  var total = total_num / total_den * 100;
  total = Math.round(total * 100) / 100;
  document.getElementById("total_per").innerHTML = total + "%";
}

function mean() {
  var total = 0;
  var ActivityCount = 0; //number of activities counted in the mean
  for (var i = 1; i < TableRowCount; i++) {
    var num = document.getElementById("a"+i+"_num").value;
    var den = document.getElementById("a"+i+"_denom").value;
    var temp_total = num / den;
    if( isFinite(temp_total) == false || temp_total < 0 ) {
      continue;
    }
    ActivityCount++;
    total += parseFloat(temp_total); //parseFloat to make sure it's adding and not concatenating
  }
  total = total / ActivityCount * 100;
  total = Math.round(total * 100) / 100;
  document.getElementById("total_per").innerHTML = total + "%";
}
