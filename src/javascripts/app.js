function creditCalculate(total, remaining, element) {

    const creditElement = document.getElementById(element);
    const percentCircle = creditElement.querySelector('#percent-circle');
    const totalText = creditElement.querySelector('.total');
    const remainingText = creditElement.querySelector('.remaining');
    const percent = (remaining / total) * 100;
    const r = percentCircle.getAttribute('r');

    totalText.innerText = total;
    remainingText.innerText = remaining;

    const circum = 2 * Math.PI * r;
    const offset = circum - (circum * percent / 100);

    percentCircle.style.setProperty('--circum', circum);
    percentCircle.style.setProperty('--offset', offset);

}

creditCalculate(300, 178, 'free-trial-credit-1');