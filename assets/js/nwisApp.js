let testProblem1={
    name:"Тестовая прооблема по экологиии",
    description:"Эта проблема относится к качеству воздуха окружающей среды города Санкт-Петербург и прилежащих областей",
    dataSets:[],
    ownerId:4,
    category:[
        {
            id:1,
            name:"Экология",
            orgs:[
                "Федеральная служба по гидрометеорологии и мониторингу окружающей среды",
                "Росприроднадзор",
                "Федеральное агентство водных ресурсов",
                "Федеральное агентство лесных ресурсов",
                "Федеральное агентство по недропользованию",
            ],
        }
    ],
    isPublished:true,
    isSend:false,
    history:[{date:"20.03.2019",name:"Опубликована"}],
    userList:[{id:4,name:"user"}],
}


let testData_selectedProblem = {
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
};

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
            problemPage:false,
        },
        globalDataSets:{
            topProblems: [],
            currentUserProblems: {},
        },
        problemScreen:{
            id:0,
            problem:{},
        },
        requestData:{
            user:{
                Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiYXVkIjoiQURNSU4iLCJleHAiOjE1NjA5MTIyMDN9.VuEnSynoN6jALVVRdo6iEBezHqYwjkiCNJ1ZnEY65dZsqrbuWJkz0A1Cufm2kn37t6oEexE--WvgKTdCRWDlDg"
            }
        },
        userData:{
            role:"",
            id:"",
            name:"",
            password:"", // <--- BERY BAD IDEA!!!,
            token:"",
        },
        selectedDataSet:{
            selectedCategory:"Экология",
            selectedRegion:[],
            selectedKeywords:[],
            totalDataSet:[],
            dataSetIds:{},
        }
    },
    methods: {
        openProblem:function(id){
            this.modes.problemPage = true;
            this.modes.mainScreen = false;
            this.modes.userPage = false;
            this.problemScreen.id=id;
            // axios().then().catch()
            this.problemScreen.problem=testData_selectedProblem;
        },
        switchTabUserPage:function(){
            if (this.modes.userPageTab=="actual"){
                this.modes.userPageTab = "fixed";
            }else{
                this.modes.userPageTab = "actual";
            }
        },  
        construct:function(){
            // this.modes.userPage = true;
            // this.modes.mainScreen = false;
            // this.modes.authMode=true;
            // this.getUserProblems();
            // this.modes.userPageTab = 'actual';
            this.getTopProblems();
            let cooka=Cookies.get("NWIS.requestToken");
            if (typeof(cooka)!=='undefined'){
                this.userData.token = cooka;
                this.getUserInfo();
                this.modes.authMode=true;
            }
            

        },
        getUserProblems:function(){
            // axios().then.catch();
            // this.testData_currentUserProblems = testData_currentUserProblems;
            
            this.globalDataSets.currentUserProblems = testData_currentUserProblems;
        },
        unAuthUser:function(){
            this.modes.authMode=false;
            this.modes.userPage=false;
            this.modes.mainScreen = true;
            this.modes.problemPage=false;
            Cookies.set("NWIS.requestToken","",{expires:-1})
            console.log("Unauthrizing user");
            
        },
        authorizedMode:function(){
            this.modes.authMode = true;
            this.modes.userPage = true;
            this.modes.mainScreen=false;
            this.modes.problemPage = false;
            this.getUserProblems();
            this.modes.userPageTab = 'actual';
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
        getTopProblems:function(){
            let data={};
            axios({
                url:"http://78.155.206.137:8080/api/top-problems",
                data:data,
                headers:{"Content-Type": "application/json"},
                xsrfCookieName: 'XSRF-TOKEN',
                xsrfHeaderName: 'X-XSRF-TOKEN',
            })
            .then(r=>{
                console.log(r);
                if(typeof(r.data)!=="undefined"){
                    r.data.map((obj,ind)=>{
                        // console.log(obj);
                        objJSON = JSON.parse(obj.payload);
                        objJSON.id=obj.id;

                        console.log("<< Got response fot TOP-10 Problems",objJSON);
                        appChart.globalDataSets.topProblems.push(objJSON);
                        
                    });
                }
            })
            .catch(err=>{
                console.log(`>>> Throw ${err}`);
                
            })
        },
        loginUser: function (attr){
            let data = {
                name:this.userData.name,
                password:this.userData.password,
            };
            console.log(data);
            
            axios({
                method: "POST",
                url: "http://78.155.206.137:8080/login",
                data: data,
                headers: { 
                    "Content-Type": "application/json",
                 },
                xsrfCookieName: 'XSRF-TOKEN',
                xsrfHeaderName: 'X-XSRF-TOKEN',
            })
            .then(r => {
                console.log(r);
                if(parseInt(r.status)==200){
                    appChart.userData.token = r.headers.authorization;
                    Cookies.set("NWIS.requestToken", appChart.userData.token,{expires:10});
                    appChart.authorizedMode();
                }
            })
            .catch(err => {
                console.log(`>>> Throw ${err}`);
            })
        },
        signUp: function () {
            // let data = {
            //     role:"ADMIN",
            //     password:"123",
            //     name:"Иван Пенкович Редька"
            // };
            if(this.userData.role=="" || this.userData.name=="" || this.userData.password==""){
                return false;
            }
            axios({
                method:"POST",
                url: "http://78.155.206.137:8080/users/sign-up",
                data: { "role": appChart.userData.role, name: appChart.userData.name, password: appChart.userData.password },
                headers: {
                    "Content-Type": "application/json",
                },
                // xsrfCookieName: 'XSRF-TOKEN',
                // xsrfHeaderName: 'X-XSRF-TOKEN',
            })
                .then(r => {
                    console.log(r);
                    if(parseInt(r.status)==200){
                        // appChart.userData.name = data.name;
                        // appChart.userData.password = data.password;
                        appChart.loginUser();
                        $("#modalRegister").modal("hide");
                    }
                })
                .catch(err => {
                    console.log(`>>> Throw ${err}`);
                })
        },
        getUserInfo:function(user){
            if (appChart.userData.token==""){
                return false;
            }
            axios({
                method:"GET",
                url:"http://78.155.206.137:8080/users/get-full-user-info",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": appChart.userData.token,
                },
            })
            .then(r=>{
                console.log(r);
                if(typeof r.data !== 'undefined'){
                    appChart.userData=r.data;
                }
                
            })
            .catch(err=>{
                console.log(`>>> Throw ${err}`);
                
            })
        },
        createProblem:function(){
            let data = testProblem1;
            axios({
                method:"POST",
                url:"http://78.155.206.137:8080/api/create-problem",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": appChart.requestData.user.Authorization,                    
                },
                data:data,
            })
            .then(r=>{
                console.log(r);
                
            })
            .catch(err=>{
                console.log(`>>> THROW ${err}`);
                
            })
        },
        getAllProblemsByUserId:function(){

            axios({
                method: "GET",
                url: `http://78.155.206.137:8080/api/get-problems/${appChart.userData.id}`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": appChart.requestData.user.Authorization,
                },
                data: {},
            })
                .then(r => {
                    console.log(r);

                })
                .catch(err => {
                    console.log(`>>> THROW ${err}`);

                })
        },
        deleteProblemFromDB:function(id){
            ///api/delete-problem/{id} DELETE
            let deleteURL = `http://78.155.206.137:8080/api/delete-problem/${id}`;
            console.log("Delete url", deleteURL);
            
            axios.delete({
                url: deleteURL,
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": appChart.requestData.user.Authorization,
                },
            })
            .then(r=>{
                console.log(r);
                
            })
            .catch(err=>{
                console.log(`>>> THROW ${err}`);
                
            })
        },
    },
    watchers:{
        'selectedDataSet.selectedRegion':function(){
            let addedId={};
            for (let i = 0; i < this.selectedDataSet.selectedRegion; i++){
                for (let j = 0; j < gloChartDataSet.length; j++){
                    currentRegion = gloChartDataSet[j].region.valueOf();
                    currentId = gloChartDataSet[j].id;
                    currentCity = gloChartDataSet[j].city;
                    currentKeyWords = gloChartDataSet[j].keyWords;

                    console.log(currentRegion);
                    console.log(currentCity);
                    console.log(currentKeyWords);
                    
                    
                    if (this.selectedDataSet.selectedRegion[i] == gloChartDataSet[j]){
    
                    }

                }
            }
            selectedDataSet.totalDataSet
        },
    }
});

$("document").ready(()=>{
    appChart.construct();
    $("#keywordsTag").tagsinput('add', 'измерение воды');
    $("#keywordsTag").tagsinput('add', 'Нормативы');
    $("#regionTags").tagsinput('add', 'Санкт-Петербург');
    $("#regionTags").tagsinput('add','Ленинградская область');
})
