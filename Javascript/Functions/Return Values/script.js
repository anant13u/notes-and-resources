const input = document.querySelector('.numberInput');
const para = document.querySelector('.output-para');

function squared(num) {
    return num*num
}

function cubed(num) {
    return num*num*num
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

input.addEventListener("change", () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
      para.textContent = "You need to enter a number!";
    } else {
      para.innerHTML = `${num} squared is ${squared(num)}.<br>`;
      para.innerHTML += `${num} cubed is ${cubed(num)}.<br>`;
      para.innerHTML += `${num} factorial is ${factorial(num)}.`;
    }
  });

