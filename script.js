// let light1 = document.querySelector("#lightbulb1");
// let light2 = document.querySelector("#lightbulb2");
// let light3 = document.querySelector("#lightbulb3");
let subtitle = document.querySelector(".subtitle");
let count = 0;
let lightlist = document.querySelectorAll(".lightbulb");


// lightlist[0].addEventListener("click", function() {
//     lightlist[0].classList.toggle("active");
//     count++;
//     if (count===1) {
//         subtitle.innerHTML = `You've clicked the lights ${count} time`;
//     } else {
//         subtitle.innerHTML = `You've clicked the lights ${count} times`;
//     }
// })

// lightlist[1].addEventListener("click", function() {
//     lightlist[1].classList.toggle("active");
//     count++;
//     subtitle.innerHTML = `You've clicked the lights ${count} times`;
//     if (count===1) {
//         subtitle.innerHTML = `You've clicked the lights ${count} time`;
//     } else {
//         subtitle.innerHTML = `You've clicked the lights ${count} times`;
//     }
// })

// lightlist[2].addEventListener("click", function() {
//     lightlist[2].classList.toggle("active");
//     count++;
//     subtitle.innerHTML = `You've clicked the lights ${count} times`;
//     if (count===1) {
//         subtitle.innerHTML = `You've clicked the lights ${count} time`;
//     } else {
//         subtitle.innerHTML = `You've clicked the lights ${count} times`;
//     }
// })

//Example 3: Modifying DOM Elements
// Consider you want to add event listeners to a list of elements with the class name .lightbulb, as in your previous examples:

function forMouseEnter(event) {
    event.target.classList.add("active");
    count++
    if (count===1) {
        subtitle.innerHTML = `You've interacted with the lights ${count} time`;
    } else {
        subtitle.innerHTML = `You've interacted with the lights ${count} times`;
    }
}

function forMouseLeave(event) {
    event.target.classList.remove("active");
    count++
    if (count===1) {
        subtitle.innerHTML = `You've interacted with the lights ${count} time`;
    } else {
        subtitle.innerHTML = `You've interacted with the lights ${count} times`;
    }
}

lightlist.forEach(lightbulb =>{
    lightbulb.addEventListener("mouseenter", forMouseEnter);
    lightbulb.addEventListener("mouseleave", forMouseLeave);
})
// lightlist.forEach((lightbulb) => {
//     lightbulb.addEventListener("click", function() {
//         this.classList.toggle("active");
//         count++
//         subtitle.innerHTML = `You've clicked the lights ${count} times`;
//         if (count===1) {
//             subtitle.innerHTML = `You've clicked the lights ${count} time`;
//         } else {
//             subtitle.innerHTML = `You've clicked the lights ${count} times`;
//         }
//     });
// });