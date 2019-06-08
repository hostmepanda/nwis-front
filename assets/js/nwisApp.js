let testData_currentUserProblems = [
    {
        userList: [
            {
                id: "1",
                name: "Иванов Илья",
                role: "",
            },
            {
                id: "2",
                name: "Александр Прибылов",
                role: "",
            },
            {
                id: "3",
                name: "Василиса Алексеевна",
                role: "",
            },
            {
                id: "4",
                name: "Пётр Иванко",
                role: "",
            },
        ],
        name: "Экологическая угроза в Санкт-Петербург",
        description: "Данные по экологической ситуации в г. Санкт-Петербург за 2019 год. Вывод: всё стало только хуже!",
        dataSets: [],
        history: [
            {
                date: "01.03.2019",
                name: "Опубликовано",
                comment: ""
            }, {
                date: "04.03.2019",
                name: "Отправлено в Росприроднадзор",
                comment: ""
            }, {
                date: "04.03.2019",
                name: "Отправлено в Администрацию г. Санкт-Петербург",
                comment: ""
            }, {
                date: "04.04.2019",
                name: "Принят к исоплнению",
                comment: "Проблема известа, решается "
            }
        ],
        isPublished: true,
        isSend: true,
        date: "20.02.2019",
        id: 0,
        category: [
            {
                id: 1,
                name: "Экология",
                orgs: [],
            },
        ]
    },
];


let testData_top10Problems=[

   { userList: [
        {
            id: "1",
            name: "Иванов Илья",
            role: "",
        },
        {
            id: "2",
            name: "Александр Прибылов",
            role: "",
        },
        {
            id: "3",
            name: "Василиса Алексеевна",
            role: "",
        },
        {
            id: "4",
            name: "Пётр Иванко",
            role: "",
        },
    ],
    name: "Экологическая угроза в Санкт-Петербург",
    description: "Данные по экологической ситуации в г. Санкт-Петербург за 2019 год. Вывод: всё стало только хуже!",
    dataSets: [],
    history: [
        {
            date: "01.03.2019",
            name: "Опубликовано",
            comment: ""
        }, {
            date: "04.03.2019",
            name: "Отправлено в Росприроднадзор",
            comment: ""
        }, {
            date: "04.03.2019",
            name: "Отправлено в Администрацию г. Санкт-Петербург",
            comment: ""
        }, {
            date: "04.04.2019",
            name: "Принят к исоплнению",
            comment: "Проблема известа, решается "
        }
    ],
    isPublished: true,
    isSend: true,
    date:"20.02.2019",
    id: 0,
    category: [
        {
            id: 1,
            name: "Экология",
            orgs: [],
        },
    ]},
    {userList: [
        {
            id: "1",
            name: "Иванов Илья",
            role: "",
        },
        {
            id: "2",
            name: "Александр Прибылов",
            role: "",
        },
    ],
    name: "Угроза бездомных собак",
    description: "Статистика говорит, что за последний год ситуация с бездомными собаками ухудшается. Отлов ведётся не эффективно, стерилизация не проводится. А в райооне вечером ходить страшно, стаи собак по 10-15 особей. Надо срочно решать проблему!",
    dataSets: [],
    date: "13.04.2019",
    history: [
        {
            date: "22.05.2019",
            name: "Опубликовано",
            comment: ""
        }, {
            date: "25.05.2019",
            name: "Отправлено в Росприроднадзор",
            comment: ""
        }, {
            date: "27.06.2019",
            name: "Получен ответ от Росприроднадзор",
            comment: "Запланировано в бюджете на 2020 год"
        },
    ],
    isPublished: true,
    isSend: true,
    id: 0,
    category: [
        {
            id: 1,
            name: "Социальная среда",
            orgs: [],
        },
    ]}
];



let appChart = new Vue({
    el:"#nwisApp",
    data: {
        labels:{
            menuTop:[
                {name:"Дороги и транспорт"},
                {name:"Жилищно- коммунальное хозяйство"},
                {name:"Здравоохранение"},
                {name:"Земля и имущество"},
                {name:"Культура"},
                {name:"Садоводство"},
                {name:"Социальная среда"},
                {name:"Строительство и надзор"},
                {name:"Территориальное деление"},
                {name:"Туризм и отдых"},
                {name:"Экология"},
            ],
        },
        dangerProblemBorder:4,
        warningProblemBorder:3,
        greenProblemBorder:0,
        modes:{
            userPage:false,
            mainScreen:true,
            authMode:false,
            userPageTab:"actual",
        },
        globalDataSets:{
            topProblems: testData_top10Problems,
            currentUserProblems: {},
        }
    },
    methods: {
        switchTabUserPage:function(){
            if (this.modes.userPageTab=="actual"){
                this.modes.userPageTab = "fixed";
            }else{
                this.modes.userPageTab = "actual";
            }
        },  
        construct:function(){
            this.modes.userPage = true;
            this.modes.mainScreen = false;
            this.modes.authMode=true;
            this.getUserProblems();

        },
        getUserProblems:function(){
            // axios().then.catch();
            // this.testData_currentUserProblems = testData_currentUserProblems;
            
            this.globalDataSets.currentUserProblems = testData_top10Problems;
        },
        unAuthUser:function(){
            this.modes.authMode=false;
            this.modes.userPage=false;
            this.modes.mainScreen=true;
            console.log("Unauthrizing user");
            
        },
        authorizedMode:function(){
            this.modes.authMode = true;
            this.modes.userPage = true;
            this.modes.mainScreen=false;
            this.getUserProblems();
            $("#modalAuth").modal("hide");
        },
        returnDataObject:function(){
            return this.$data;
        },
        cutOutput:function(word, length){
            return (""+word).substring(0,length)+"...";
        },
        openRegisterUser:function(){
            // console.log("called openRegisterUser");
            // setTimeout(()=>{
                $("#modalRegister").modal("show");
            // },500)
            
        },
        openAuthUser:function(){
            // console.log("called openAuthUser");
            // setTimeout(() => {
                $("#modalAuth").modal("show");
        
            // }, 500)
        },
    },
});

$("document").ready(()=>{
    appChart.construct();
})
