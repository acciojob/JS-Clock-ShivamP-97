//your code here
function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  const secondHand = document.querySelector('.second-hand');
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  const minHand = document.querySelector('.min-hand');
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  const hourHand = document.querySelector('.hour-hand');
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if (secondsDegrees === 90) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
}

setInterval(setDate, 1000);
setDate(); 
