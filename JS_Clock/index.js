document.addEventListener("DOMContentLoaded", () => {
    const secondHand = document.querySelector('.second-hand');
    const minhand = document.querySelector('.min-hand');
    const hrhand = document.querySelector('.hour-hand');

    function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secDeg = ((seconds / 60) * 360) + 90;

        const mins = now.getMinutes();
        const minsDeg = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;

        const hrs = now.getHours();
        const hrdeg = ((hrs / 12) * 360) + ((mins / 60) * 30) + 90;
        secondHand.style.transform = `rotate(${secDeg}deg)`;

        minhand.style.transform = `rotate(${minsDeg}deg)`;

        hrhand.style.transform = `rotate(${hrdeg}deg)`;
    }
    setInterval(setDate, 1000);
});
    
