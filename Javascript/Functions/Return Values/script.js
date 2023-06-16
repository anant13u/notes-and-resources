const input = document.querySelector('.numberInput');
const para = document.querySelector('.output-para');
const showDialog = document.getElementById('show-dialog')

function squared(num) {
    return num*num
}

function cubed(num) {
    return num*num*num
}

function squareroot(num) {
    // return num**(1/2)
    return Math.sqrt(num).toFixed(3)
}

function factorial(num) {
    if (num<0) return undefined
    if (num==0) return 1
    let x = num - 1
    while (x>1) {
        num *= x
        x--
    }
    return num
}

showDialog.addEventListener("click", () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
      para.textContent = "You need to enter a number!";
    } else {
      para.innerHTML = `${num} squared is <span class="highlight">${squared(num)}</span>.<br>`;
      para.innerHTML += `${num} cubed is <span class="highlight">${cubed(num)}</span>.<br>`;
      para.innerHTML += `Square root of ${num} is <span class="highlight">${squareroot(num)}</span>.<br>`;
      para.innerHTML += `${num} factorial is <span class="highlight">${factorial(num)}</span>.`;
    }
    document.getElementById('d').show()
});

