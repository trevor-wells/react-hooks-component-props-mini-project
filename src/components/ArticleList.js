import React from "react"
import Article from "./Article"

function ArticleList({post}){
    const posts = post.map(myPost => Article(myPost))

    return(
        <main>
            {posts}
        </main>
    )
}

export default ArticleList