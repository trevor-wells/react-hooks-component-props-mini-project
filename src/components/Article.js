import React from "react"

function makeEmojis(minutes){
    let interval;
    let emoji;
    
    if(minutes < 30){
        interval = 5
        emoji = "☕️"
    }
    else{
        interval = 10
        emoji = "🍱"
    }

    let emojiList = ""
    for (let i = 0 ; i < minutes ; i += interval)
        emojiList += emoji

    return emojiList
}

function Article({title, date = "January 1, 1970", preview, id, minutes}){
    const emojis = makeEmojis(minutes)
    
    return(
        <article key={id}>
            <h3>{title}</h3>
            <small>{date} {emojis} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article