google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Quart',  'Purchase', 'Sell'],
    ['Q1', 5,         6],
    ['Q2',     6,         7],
    ['Q3',        4,         6],
    ['Q1',      5,         7]
  ]);

  var options = {
    title: 'Item Import',
    vAxis: {title: 'Price'},
    isStacked: true
  };

  var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div4'));

  chart.draw(data, options)}