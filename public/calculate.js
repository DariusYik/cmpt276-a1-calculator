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

function percentage(num, denom, name) {
  var per = num / denom;
  document.getElementsByClassName('name').value = per;
}

function average() {
  var t1 = document.getElementsByClassName('a1_per').value;
  var t2 = document.getElementsByClassName('a2_per').value;
  var t3 = document.getElementsByClassName('a3_per').value;
  var t4 = document.getElementsByClassName('a4_per').value;
  var tAll= t1 + t2 +t3 +t4;

  return eval((t1+t2+t3+t4) / tAll);


}

function mean() {

}
