import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const storageTimeValue = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(onThrottleRef, 1000));

// Отримуємо час відео
function onThrottleRef(e) {
  const currentTimeValues = e.seconds;
  localStorage.setItem('videoplayer-current-time', currentTimeValues);
}

// Функція повернення при перезавантаженню сторінки
player
  .setCurrentTime(storageTimeValue)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
