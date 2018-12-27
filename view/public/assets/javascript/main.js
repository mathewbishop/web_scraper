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
        },
        postComment: function(id, thisArticleComments) {
            event.preventDefault()
            let newComment = {
                comment: document.getElementById("comment--box").value,
                id: id
            } 
            console.log(newComment)
            fetch("/comment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newComment)
            })
            document.getElementById("comment--form").reset()
            thisArticleComments.push(newComment.comment)
        },
        deleteComment: function(id, thisArticleComments, comment) {
            let commentID = {
                comment: comment,
                id: id
            }
            fetch("/comment", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(commentID)
            })
            let commentsArray = thisArticleComments
            let index = commentsArray.indexOf(comment)
            commentsArray.splice(index, 1)
        }
    }
})

vm.fetchArticles()