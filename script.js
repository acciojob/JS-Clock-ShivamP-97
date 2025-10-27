function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = seconds * 6; 
  document.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = mins * 6; 
  document.querySelector('.min-hand').style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (30 * hour) + (mins / 2);
  document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();
