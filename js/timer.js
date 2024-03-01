(() => {
    document.addEventListener("DOMContentLoaded", function () {
        
        let targetDate = new Date(2024,3,17);
        let onStart = () => {
            document.querySelector('.next-year').innerHTML = currentYear;
            document.querySelectorAll('.countdown-item').forEach(item => item.classList.add('show'))
        }
        let onTick = ({ years, days, hours, minutes, seconds }) => {
            document.querySelector('.countdown-item.years').innerHTML = years;
            document.querySelector('.countdown-item.days').innerHTML = days;
            document.querySelector('.countdown-item.hours').innerHTML = hours;
            document.querySelector('.countdown-item.minutes').innerHTML = minutes;
            document.querySelector('.countdown-item.seconds').innerHTML = seconds;
        };
        let options = new LsCountdownOptions({ targetDate, onStart, onTick });
        let countdown = new LsCountdown(options);

        countdown.start();
        window.mycountdown = countdown;
    });
})();