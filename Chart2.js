google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', '');
    data.addColumn('number', '');
    data.addRows([
      ['Item 1', 3],
      ['Item 2', 1],
      ['Item 3', 1],
      ['Item 4', 1],
      ['Item 5', 2]
    ]);

    // Set chart options
    var options = {};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
  }