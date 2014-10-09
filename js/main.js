var plant_data = {
  "xScale": "time",
  "yScale": "linear",
  "type": "line",
  "main": [
    {
      "className": ".pizza",
      "data": [
        {
          "x": "2012-11-05",
          "y": 1
        },
        {
          "x": "2012-11-06",
          "y": 6
        },
        {
          "x": "2012-11-09",
          "y": -2
        },
        {
          "x": "2012-11-10",
          "y": 7
        },
        {
          "x": "2012-11-11",
          "y": 6
        }
      ]
    }
  ]
};

$(document).ready(function()
{
    console.log('hai');

    var opts = {
      "dataFormatX": function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
      "tickFormatX": function (x) { return d3.time.format('%A')(x); }
    };
    var myChart = new xChart('line', plant_data, '#plant-graph', opts);    
});
