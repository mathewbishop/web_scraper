// const axios = require("axios");
//============================================================
// Vue Instance
//============================================================
const vm = new Vue({
    el: "#app",
    data: {
        articles: []
    },
    methods: {
        fetchArticles: function() {
            fetch("/articles")
            .then(response => response.json())
            .then(data => {console.log(data)})
            // .catch(err => console.log(err))
        }
    }
})

vm.fetchArticles()