let counter = document.querySelector("#counter")
let count = parseInt(counter.textContent.trim());

document.addEventListener("DOMContentLoaded", () => {

    incCounter()
    document.querySelector("#minus").addEventListener('click', () => minusButton())
    document.querySelector("#plus").addEventListener('click', () => plusButton())
    document.querySelector("#heart").addEventListener('click', () => heartButton())
    document.querySelector("#pause").addEventListener('click', () => pauseButton())

    document.querySelector("#comment-form").addEventListener('submit', submitHandler)
})


function incCounter() {
    let incSecond = function() {
        counter.innerText = count++;
    }
    setInterval(incSecond, 1000);
    incSecond;
}

function minusButton() {
    count -= 1
    if(count < 0){
      count = 0;
    }
    counter.textContent = count;
}


function plusButton() {
    count += 1

    counter.textContent = count;
}

function heartButton() {
    console.log("click!")
    // <ul class='likes'></ul>
    let likeCount = 0
    likeCount += 1

    let likesList = document.querySelector(".likes")
    let currentLikes = document.createElement("li")
    currentLikes.innerText = counter.innerText + " has been liked " + likeCount + " time(s)"

    likesList.appendChild(currentLikes)
}

function pauseButton() {

}

function submitHandler(event) {
    event.preventDefault()
    
    let subComment = event.target.comment.value
    let commentBox = document.querySelector("#list")
    let commentList = document.createElement('ul')
    let newComment = document.createElement('li')

    newComment.innerText = subComment

    commentList.appendChild(newComment)
    commentBox.appendChild(commentList)
}