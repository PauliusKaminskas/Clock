const dateEl = document.getElementsByClassName('date')[0];
const timeEl = document.getElementsByClassName('time')[0];

function clock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    timeEl.textContent = hours + ':' + minutes + ':' + seconds;

    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    day = addZero(day);
    month = addZero(month);
    year = addZero(year);
    dateEl.textContent = `${day}/${month}/${year}`;

    setTimeout(clock, 1000);
}
function addZero(t) {
    if (t < 10) {
        return (t = '0' + t);
    } else {
        return t;
    }
}
clock();
