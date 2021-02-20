const form = document.querySelector('form');
const numbers = document.querySelector('.numbers');
const dups = document.querySelector('.duplicates');
const moreDups = document.querySelector('.more');
var array = [];
form.addEventListener('submit', e => {
    e.preventDefault();
    if (/^[0-9]{1,3}$/.test(form.number.value)) {
        array.push(form.number.value);
        init(array);
        form.reset();
        numbers.innerText = `${[...array]}`;
    } else {
        alert('Please enter a number between 0 and 999');
    }
});
function init(array) {
    const sorted = array.sort();
    const duplicates = sorted.filter((item, i) => {
        return item === sorted[i - 1];
    });
    duplicates.sort((a, b) => a - b);
    if (duplicates.length > 0) {
        let more = duplicates.filter((item, i) => {
            return item === duplicates[i - 1];
        });
        if (more.length > 0) {
            const newMore = [...new Set(more)];
            moreDups.innerText = 'There are more than two values of:';
            newMore.forEach(item => {
                moreDups.innerText += `\n${item}`;
            });
        }
        const remain = duplicates.filter((item, i) => {
            return item !== duplicates[i - 1];
        });
        dups.innerHTML = `<p>The duplicate values are:</p>`;
        remain.forEach(item => {
            dups.innerHTML += `<p>${item}</p>`;
        });
    } else {
        dups.innerHTML = `<p>no duplicates</p>`;
    }
}
