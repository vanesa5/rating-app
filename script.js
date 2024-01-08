//let rating = null;
// before and after submit windows
const start = document.querySelector(".start");
const finished = document.querySelector(".finished");

// numbers for rating 
const ratingBtns = document.querySelectorAll(".number");

// rating span
const ratingSpan = document.querySelector(".ratingSpan")

// submit button

const submit = document.querySelector(".submit")

//action for submit button

submit.addEventListener("click", () =>{
    start.setAttribute("hidden", "");
    finished.removeAttribute("hidden");
    //ratingSpan.innerText = `You selected ${rating} out of 5`;



// adding event listener to each rating button
    ratingBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            ratingSpan.innerHTML = btn.innerHTML
        })

    })
})

console.log(ratingBtns);

