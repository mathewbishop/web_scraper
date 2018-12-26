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
            let self = this
            fetch("/articles")
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    self.articles.push(item)
                })
            })
            .catch(err => console.log(err))
        }
    }
})

vm.fetchArticles()