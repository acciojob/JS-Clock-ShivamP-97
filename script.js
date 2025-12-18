function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    const secondsDegree = seconds * 6 + 90;
    const minsDegree = mins * 6 + 90;
    const hourDegree = (hour % 12) * 30 + mins * 0.5 + 90;

    function degreeToMatrix(deg) {
        const rad = deg * Math.PI / 180;
        const a = Math.cos(rad).toFixed(6);
        const b = Math.sin(rad).toFixed(6);
        const c = (-Math.sin(rad)).toFixed(6);
        const d = Math.cos(rad).toFixed(6);

        return `matrix(${a}, ${b}, ${c}, ${d}, 0, 0)`;
    }

    document.querySelector('.second-hand').style.transform = degreeToMatrix(secondsDegree);
    document.querySelector('.min-hand').style.transform = degreeToMatrix(minsDegree);
    document.querySelector('.hour-hand').style.transform = degreeToMatrix(hourDegree);
}

setInterval(setClock, 1000);
setClock();