const btn = document.querySelector(".btn");
const inp = document.querySelector(".input");
const copyIcon = document.querySelector(".fa-copy");
const alert = document.querySelector(".alert-container")
btn.addEventListener("click", () => {
    createPassword()
    
    
})
copyIcon.addEventListener("click", () => {
    copyPassword();
    
})

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?";
    const passWordLength = 14;
    let password = "";
    for (let i = 0; i < passWordLength; i++){
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNum);
        
    }
    inp.value = password;

}

function copyPassword() {
    inp.select();
    inp.setSelectionRange(0, 9999); //for mobile device
    navigator.clipboard.writeText(inp.value);
    alert.innerText = inp.value + "  copied!";



}