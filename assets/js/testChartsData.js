let grapOptions= {
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                        }
            }]
        }
    }
}

let water_SPB_SESTR={
    region:["Санкт-Петербург","Ленинградская область"],
    city:["Санкт-Петербург","Сестрорецк, Мосина"],
    category:["Экология"],
    dataset: {
        type: 'bar',
        data: {
            labels: ['Мутность FTU', 'Растворенный кисло не менее (мг/дм3)', 'рH', 'Нитратный  азот (мг/дм3)'],
            datasets: [
                {
                    label: 'Нормативные значения',
                    data: [0, 6, 0, 9],
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.4)',
                        'rgba(0, 255, 0, 0.4)', 'rgba(0, 255, 0, 0.4)', 'rgba(0, 255, 0, 0.4)',


                    ],
                    borderColor: [
                        'rgba(0, 255, 0, 1)',
                        'rgba(0, 255, 0, 1)', 'rgba(0, 255, 0, 1)', 'rgba(0, 255, 0, 1)',

                    ],
                    borderWidth: 1
                }
                ,{
                label: 'Состав воды: минимальные значения',
                    data: [9.16, 8.46, 0, 0.77],
                
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',


                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',

                ],
                borderWidth: 1
            },
                {
                    label: 'Состав воды: максимальные значения',
                    data: [38.23, 8.70, 0, 0.87],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }]
        },
        grapOptions
    }
};

let water_SPB_KOLPINO= {
    region: ["Санкт-Петербург", "Ленинградская область"],
    city: ["Санкт-Петербург", "Колпино"],
    category: ["Экология"],
    dataset: {
        type: 'bar',
        data: {
            labels: ['Мутность FTU', 'Растворенный кисло не менее (мг/дм3)', 'рH', 'Нитратный  азот (мг/дм3)'],
            datasets: [
                {
                    label: 'Нормативные значения',
                    data: [0, 6, 0, 9],
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.4)',
                        'rgba(0, 255, 0, 0.4)', 'rgba(0, 255, 0, 0.4)', 'rgba(0, 255, 0, 0.4)',


                    ],
                    borderColor: [
                        'rgba(0, 255, 0, 1)',
                        'rgba(0, 255, 0, 1)', 'rgba(0, 255, 0, 1)', 'rgba(0, 255, 0, 1)',

                    ],
                    borderWidth: 1,
                    type: "line",
                    
                }
                , {
                    label: 'Состав воды: минимальные значения',
                    data: [26.39, 5.81, 8.24, 4.10],

                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',


                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 1
                },
                {
                    label: 'Состав воды: максимальные значения',
                    data: [27.66, 7.42, 8.32, 4.18],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }]
        },
        grapOptions
    }
};

let water_SPB_KOLPINO2 = {
    region: ["Санкт-Петербург", "Ленинградская область"],
    city: ["Санкт-Петербург", "Сестрорецкб Коммуны"],
    category: ["Экология"],
    dataset: {
        type: 'bar',
        data: {
            labels: ['Мутность FTU', 'Растворенный кисло не менее (мг/дм3)', 'рH', 'Нитратный  азот (мг/дм3)'],
            datasets: [
                {
                    label: 'Нормативные значения',
                    data: [0, 6, 0, 9],
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.4)',
                        'rgba(0, 255, 0, 0.4)', 'rgba(0, 255, 0, 0.4)', 'rgba(0, 255, 0, 0.4)',


                    ],
                    borderColor: [
                        'rgba(0, 255, 0, 1)',
                        'rgba(0, 255, 0, 1)', 'rgba(0, 255, 0, 1)', 'rgba(0, 255, 0, 1)',

                    ],
                    borderWidth: 1,
                    type: "line",

                }
                , {
                    label: 'Состав воды: минимальные значения',
                    data: [703.07, 0, 10.12, 0],

                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 0.2)',


                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)', 'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 1
                },
                {
                    label: 'Состав воды: максимальные значения',
                    data: [705.07, 0, 10.30, 0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 0.2)',

                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }]
        },
        grapOptions
    }
};

let air_spb_norma = {
    region: ["Санкт-Петербург", "Ленинградская область"],
    city: ["Санкт-Петербург"],
    category: ["Экология"],
    dataset: {
        type: 'line',
        data: {
            labels: ['Оксид азота','Диоксид азота','Оксид углерода','Диоксид серы',],
            datasets: [
                {
                    label: 'Среднесуточная',
                    data: [0.06, 0.04, 3, 0.05],

                    backgroundColor: [
                        'rgba(160,0,0, 0)',



                    ],
                    borderColor: [
                        'rgba(0,150,0, 1)'
                    ],
                    borderWidth: 3
                },
                {
                    label: 'Норматив: максимально разовое',
                    data: [0, 0, 5, 0],
                    backgroundColor: [
                        'rgba(255, 0, 0, 0)',



                    ],
                    borderColor: [
                        'rgba(160, 0, 0, 1)',


                    ],
                    borderWidth: 3,
                    type: "line",

                }]
        },
        grapOptions
    }
};

let air_spb_spb = {
    region: ["Санкт-Петербург", "Ленинградская область"],
    city: ["Санкт-Петербург"],
    category: ["Экология"],
    dataset: {
        type: 'line',
        data: {
            labels: ['Оксид углерода', 'Оксид азота', 'Диоксид азота', 'Диоксид серы',],
            datasets: [
                {
                    label: 'Среднесуточная',
                    data: [0.1, 0.3, 0.8, 0.1],

                    backgroundColor: [
                        'rgba(160,0,0, 0)',



                    ],
                    borderColor: [
                        'rgba(0,150,0, 1)'
                    ],
                    borderWidth: 3
                }]
        },
        grapOptions

    }
};

let air_spb_admiral = {
    region: ["Санкт-Петербург", "Ленинградская область"],
    city: ["Санкт-Петербург","Адмиралтейский"],
    category: ["Экология"],
    dataset: {
        type: 'line',
        data: {
            labels: ['Оксид углерода', 'Оксид азота', 'Диоксид азота', 'Диоксид серы',],
            datasets: [
                {
                    label: 'Среднесуточная',
                    data: [0.2, 1.0, 1.4, 0.1],

                    backgroundColor: [
                        'rgba(160,0,0, 0)',



                    ],
                    borderColor: [
                        'rgba(0,150,0, 1)'
                    ],
                    borderWidth: 3
                }]
        },
        grapOptions
    }
};

let air_spb_vasil = {
    region: ["Санкт-Петербург", "Ленинградская область"],
    city: ["Санкт-Петербург", "Василеостровский"],
    category: ["Экология"],
    dataset: {
        type: 'line',
        data: {
            labels: ['Оксид углерода', 'Оксид азота', 'Диоксид азота', 'Диоксид серы',],
            datasets: [
                {
                    label: 'Среднесуточная',
                    data: [0.2, 0.4, 1.4, 1.7],

                    backgroundColor: [
                        'rgba(160,0,0, 0)',



                    ],
                    borderColor: [
                        'rgba(0,150,0, 1)'
                    ],
                    borderWidth: 3
                }]
        },
        grapOptions
    }
};

let air_spb_viborg = {
    region: ["Санкт-Петербург", "Ленинградская область"],
    city: ["Санкт-Петербург", "Выборгский"],
    category: ["Экология"],
    dataset: {
        type: 'line',
        data: {
            labels: ['Оксид углерода', 'Оксид азота', 'Диоксид азота', 'Диоксид серы',],
            datasets: [
                {
                    label: 'Среднесуточная',
                    data: [0.2, 0.8, 1.4, 0],

                    backgroundColor: [
                        'rgba(160,0,0, 0)',



                    ],
                    borderColor: [
                        'rgba(0,150,0, 1)'
                    ],
                    borderWidth: 3
                }]
        },
        grapOptions
    }
};

let air_spb_kolpino = {
    region: ["Санкт-Петербург", "Ленинградская область"],
    city: ["Санкт-Петербург", "Колписнкий"],
    category: ["Экология"],
    dataset: {
        type: 'line',
        data: {
            labels: ['Оксид углерода', 'Оксид азота', 'Диоксид азота', 'Диоксид серы',],
            datasets: [
                {
                    label: 'Среднесуточная',
                    data: [0.1, 0.3, 0.7, 0.1],

                    backgroundColor: [
                        'rgba(160,0,0, 0)',



                    ],
                    borderColor: [
                        'rgba(0,150,0, 1)'
                    ],
                    borderWidth: 3
                }]
        },
        grapOptions
    }
};

let gloChartDataSet = [water_SPB_SESTR,water_SPB_KOLPINO,water_SPB_KOLPINO2,air_spb_norma,air_spb_spb,air_spb_admiral,air_spb_vasil,air_spb_viborg,air_spb_kolpino];



let substringMatcher = function (strs) {
    return function findMatches(q, cb) {
        let matches, substringRegex;
        // console.log(cb);
        
        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(strs, function (i, str) {
            if (substrRegex.test(str)) {
                matches.push(str);
            }
        });

        cb(matches);
    };
};

let states = ['Санкт - Петербург', 'Ленинградская область', 'Колписнкий', 'Сестрорецк', 'Мосина','Сестрорецкб Коммуны','Адмиралтейский','Василеостровский','Выборгский'];

$('#mainScreeRegion .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
},
    {
        name: 'states',
        source: substringMatcher(states)
}).on('select',function(suggest){
    console.log(suggest);
    
});



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, air_spb_norma.dataset);