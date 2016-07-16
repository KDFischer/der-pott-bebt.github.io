$(function() {
    $('#chart_weekly').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Erdbeben im Wochenverlauf'
        },
        subtitle: {
            text: 'Zeitraum: 1983-2016 | <a href="http://www.gmg.ruhr-uni-bochum.de/geophysik/seisobs/index.html"> Daten: Seismologisches Observatorium der Ruhr-Universität Bochum</a>',
            useHTML: true
        },
        xAxis: {
            categories: [
                'Montag',
                'Dienstag',
                'Mittwoch',
                'Donnerstag',
                'Freitag',
                'Samstag',
                'Sonntag'
            ],
            crosshair: false
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Anzahl Erdbeben'
            },
            labels: {
              format: '{value}'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.f} Erdbeben</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },

        legend: {
            enabled: false,
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                groupPadding: 0.02,
                borderWidth: 0,
                shadow: true,
                color: "#b20902"
            },
            labels: {
              format:{value:".f"}
            }
        },
        series: [{
            name: 'Anzahl Erdbeben',
            data: [3429, 4208, 4472, 4425, 4474, 3461, 1667]
        }]
    });
});

$(function() {
    $('#chart_hourly').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Verteilung der Erdbeben im Tagesverlauf'
        },
        subtitle: {
            text: 'Zeitraum: 1983-2016 | Quelle: Seismologisches Observatorium der Ruhr-Universität Bochum',
            useHTML: true
        },
        xAxis: {
            categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
                '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21',
                '22', '23'
            ],
            crosshair: false
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Anzahl Erdbeben'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.f} Erdbeben</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        legend: {
            enabled: false,
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                groupPadding: 0.06,
                borderWidth: 0,
                shadow: true,
                color: "#b20902"
            }


        },
        series: [{
            name: 'x',
            data: [1530, 1510, 1423, 1367, 1026, 786, 690, 622, 706, 768, 890, 880, 860, 926, 954, 1075, 1071, 1102, 1143, 1353, 1397, 1391, 1354, 1312]
        }]
    });
});


$(function() {
            $('#chart_magnitude').highcharts({
                    chart: {
                        type: 'column'
                        },
                    title: {
                        text: 'Stärke der Erdbeben'
                    },
                    subtitle: {
                        text: '1983-2016 | Daten: Seismologisches Observatorium der Ruhr-Universität Bochum',
                        useHTML: true
                    },
                    xAxis: {
                        /*categories: ["1.0","1.1","1.2","1.3","1.4","1.5","1.6",
                                "1.7","1.8","1.9","2.0","2.1","2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "3.0", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6","3.7","3.8", "3.9","4.0"],*/
                            crosshair: false,
                            title: {
                              text: 'Magnitude'
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: 'Anzahl Erdbeben'
                            }
                        },
                        tooltip: {
                            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.f} Erdbeben</b></td></tr>',
                            footerFormat: '</table>',
                            shared: true,
                            useHTML: true
                        },
                        legend: {
                            enabled: false,
                        },
                        plotOptions: {
                            column: {
                                pointPadding: 0,
                                groupPadding: 0.06,
                                borderWidth: 0,
                                shadow: true,
                                states: {
                                  hover: {
                                    color: '#fd6d67',
                                    brightness: 0.5
                                  }
                                }
                            }

                        },
                        //colors: { ["#fd5b54","#fd5b54","#fd5b54","#fd5b54","#fd5b54","#fd5b54","#fd4840","#fd4840","#fd4840","#fd4840","#fd4840","#fd4840","#fd352d","#fd352d","#fd352d","#fd352d","#fd352d","#fd352d","#fc231a","#fc231a","#fc231a","#fc231a","#fc231a","#fc231a","#fc1006","#fc1006","#fc1006","#fc1006","#fc1006","#fc1006","#b20902"]//
                      //},//
                        series: [{
                            name: 'Erdbeben',
                            data: [[1.0,1849],[1.1,1857],[1.2,1769],[1.3,1607],[1.4,1549],[1.5,1357],[1.6,1030],[1.7,833],[1.8,571],[1.9,373],[2.0,237],[2.1,175],[2.2,162],[2.3,79],[2.4,58],[2.5,33],[2.6,21],[2.7,16],[2.8,15],[2.9,10],[3.0,9],[3.1,2],[3.2,1],[3.3,3],[3.4,0],[3.5,2],[3.6,1],[3.7,1],[3.8,0],[3.9,0],[4.0,0]
                            ],
                            zoneAxis: 'x',
                            zones: [{
                              value: 2,
                              color: '#fd5b54'
                            },{
                                value: 3,
                                color: '#fc231a'
                              },{
                                value: 4,
                                color: '#b20902'
                              }]
                        }]
                    });
            });
