
const counter = document.querySelector("#counter")
const increment = document.querySelector("#\\+")
const decrement = document.querySelector("#\\-")
const likeButton = document.querySelector("#\\<3")
const pauseButton = document.querySelector("#pause")
const submitButton = document.querySelector("#submit")

const likes = document.querySelector(".likes")



// function addOneEverySecond() { counter.innerText = (parseInt(counter.innerText) + 1)}
let addOneEverySecond = function () { counter.innerText = (parseInt(counter.innerText) + 1)}

let addZeroEverySecond = function () { counter.innerText = (parseInt(counter.innerText) + 0)}


function makeLike() {
  const li = document.createElement("li")
  li.innerHTML =counter.innerText + `'s like count: <span data-like_id=${counter.innerText}>1</span>` 
  return li;
}

document.addEventListener("DOMContentLoaded", function() {

  let gameNumber = counter.innerText

  gameNumber = setInterval(addOneEverySecond, 1000)
 

  increment.addEventListener("click", function()  {counter.innerText = (parseInt(counter.innerText) + 1)})  // Closes Increment event listener
  decrement.addEventListener("click", function()  {counter.innerText = (parseInt(counter.innerText) - 1)})  // Closes Increment event listener
  likeButton.addEventListener("click", function() {
    if (document.querySelector("li") != null ) {
      if (document.querySelector(`[data-like_id="${counter.innerText}"]`)) {
        document.querySelector(`[data-like_id="${counter.innerText}"]`).innerHTML = parseInt(document.querySelector(`[data-like_id="${counter.innerText}"]`).innerHTML) + 1
      }
      else { likes.appendChild(makeLike())  }
    } 
    else { likes.appendChild(makeLike())}         })// Ends Like button listeer

  pauseButton.addEventListener("click", function(e) {
    if (increment.disabled === false) {
      clearInterval(gameNumber)    // Stops the gameNumber from incrementing
      pauseButton.textContent = "resume";  //refactor - e.target.textContent
      increment.disabled = true;
      decrement.disabled = true;
      likeButton.disabled = true;
    }
    else {
      pauseButton.textContent = "pause";
      gameNumber = setInterval(addOneEverySecond, 1000)     // restarts the gameNumber from incrementing
      increment.disabled = false;
      decrement.disabled = false;
      likeButton.disabled = false;
    }
  })  // Ends pause button listener


  submitButton.addEventListener("click", function(e) {
    e.preventDefault()
    const commentText = document.querySelector("#comment-form > input[type=text]").value
    document.querySelector("#comment-form > input[type=text]").value = ""
    const commentList = document.querySelector("div #list")
    const addComment = commentList.insertAdjacentHTML("beforeend", `<p>${commentText}</p>`)
    // debugger

  })
  // //  ADDS Pne Line for each Like button clik with a count of 1
  // likeButton.addEventListener("click", function() {likes.appendChild(makeLike())})



  
  

})