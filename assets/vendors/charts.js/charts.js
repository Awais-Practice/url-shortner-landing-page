



      var config = {
          type: 'line',
          data: {
              labels: ['1 Jan 2021', '2 Jan 2021', '3 Jan 2021', '4 Jan 2021', '5 Jan 2021', '6 Jan 2021', '7 Jan 2021', '8 Jan 2021', '9 Jan 2021', '10 Jan 2021', '11 Jan 2021'],
              datasets: [{
                  label: 'My First dataset',
                  backgroundColor: window.chartColors.red,
                  borderColor: window.chartColors.red,
                  data: [
                      0,
                      20,
                      40,
                      60,
                      40,
                      20,
                      0,
                      20,
                      40, 
                      60, 
                      40
                  ],
                  fill: false,
              }, {
                  label: 'My Second dataset',
                  fill: false,
                  backgroundColor: window.chartColors.blue,
                  borderColor: window.chartColors.blue,
                  data: [
                    60,
                    40,
                    20,
                    0,
                    20,
                    40,
                    60,
                    40,
                    20, 
                    0, 
                    20
                  ],
              }]
          },
          options: {
              responsive: false,
              maintainAspectRatio:true,
              title: {
                  display: true,
                  text: 'Chart.js Line Chart'
              },
              tooltips: {
                  mode: 'index',
                  intersect: false,
              },
              hover: {
                  mode: 'nearest',
                  intersect: true
              },
              scales: {
                  xAxes: [{
                      display: true,
                      scaleLabel: {
                          display: true,
                          labelString: 'Month'
                      }
                  }],
                  yAxes: [{
                      display: true,
                      scaleLabel: {
                          display: true,
                          labelString: 'Value'
                      }
                  }]
              }
          }
      };

      window.onload = function() {
        drawChart();
      };

      function drawChart(){
        var ctx = document.getElementById('canvas').getContext('2d');
        window.myLine = new Chart(ctx, config);
      }

