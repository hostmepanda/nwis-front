const mainScreen={
    "template":`
        <div>Main Screen</div>
    `
}
//     props: ['post'],
//     template: `
//     <div class="blog-post">
//       <h3>{{ post.title }}</h3>
//       <div v-html="post.content"></div>
//     </div>
//   `
// })


// let routes = [
//     { 
//         "path":"/",
//         "component":mainScreen
//     },
//     {
//         "path":"/lk",
//         "component":cabinet
//     }
// ];

// const router = new VueRouter({
//     routes
// })

// let nwisApp=new Vue({
//     data:{

//     },
//     methods:{

//     },
//     router
// }).$mount("#nwisApp");


const routes = [
    { path: '/', component: mainScreen },

]

const router = new VueRouter({
    routes // short for `routes: routes`
})

const app = new Vue({
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
        }
        
    },
    methods: {},
    router
}).$mount('#nwisApp')