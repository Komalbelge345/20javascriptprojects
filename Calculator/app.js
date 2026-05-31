const btns = document.querySelectorAll("button");
const inp = document.querySelector(".input");
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let val = String(e.target.innerText);

        if (val === "=") {
            inp.value = eval(inp.value);
            return;
        }
        if (val == "C") {
            inp.value = "";
            return;
        }
        inp.value += e.target.innerText;
    })
})