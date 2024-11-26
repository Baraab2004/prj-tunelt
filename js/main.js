const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
            const myCounter = document.querySelector('.counter');
            if (entry.target == myCounter) {
                counterInterval = setInterval(updateCounters, 10);
            }
        }
    });
}, {
    threshold: 0.2
});
const sections = document.querySelectorAll('.section');
console.log(sections)
sections.forEach(section => {
    observer.observe(section);
});
const countDown = () => {

    const countDownDate = new Date("2025-08-07T00:00:00").getTime();
    const now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 24 * 60 * 60));

    distance = distance % (1000 * 24 * 60 * 60);
    let hours = Math.floor(distance / (1000 * 60 * 60));

    distance = distance % (1000 * 60 * 60);
    let minutes = Math.floor(distance / (1000 * 60));

    distance = distance % (1000 * 60);
    let seconds = Math.floor(distance / (1000));

    document.getElementById('days').textContent = days;
    document.querySelector('#hours').textContent = hours;
    document.querySelector('#minutes').textContent = minutes;
    document.querySelector('#seconds').textContent = seconds;
}
setInterval(() => {
    countDown();
}, 1000);
