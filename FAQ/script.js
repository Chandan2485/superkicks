// let input = document.querySelector(".inputbox");


// input.addEventListener("click", () => {
//     input.innerHTML = `  <input type="text" class="itembox" placeholder="search here..." value="">`
//     // <span class="greater-in-input"><i class="fa-solid fa-greater-than"></i></span> `
// })


//  FAQ Part ========================

const questions = document.querySelectorAll("#que");

questions.forEach(function (que) {
    const btn = que.querySelector('#btn');
    btn.addEventListener("click", () => {
        questions.forEach((item) => {
            if (item != que) {
                item.classList.remove("show-text");
            }
        })
        que.classList.toggle("show-text");
    })
})