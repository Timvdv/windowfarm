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
    var opts = {
      "dataFormatX": function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
      "tickFormatX": function (x) { return d3.time.format('%A')(x); }
    };
    var myChart = new xChart('line', plant_data, '#plant-graph', opts); 

    updatePlantStats();

    $('.btn-water-plants').on('click', togglePump)

    window.setInterval(function()
    {
        updatePlantStats();
    }, 5000);
});

function updatePlantStats()
{
    $.getJSON("http://169.254.1.1", function( data )
    {
        $('.plant-1 span').html(data.plant1);
        $('.plant-2 span').html(data.plant2);

        if(data.pump)
        {
            $('.btn-water-plants').html('pomp uitzetten').addClass('stop');
        }
        else
        {
            $('.btn-water-plants').html('pomp aanzetten').removeClass('stop');
        }
    });
}

function togglePump()
{
    $this = $(this);

    if($this.hasClass('stop'))
    {
            $.getJSON("http://169.254.1.1/uit", function(){});
            $('.btn-water-plants').html('pomp aanzetten').removeClass('stop');
    }
    else
    {
        $.getJSON("http://169.254.1.1/aan", function(){});
        $('.btn-water-plants').html('pomp uitzetten').addClass('stop');
    }
}



