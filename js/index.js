/* - - - - - -Buttons-color-top - - - - - - */
const buttonForest = document.querySelector('#forest')

const iconsShadow1 = document.querySelector('#icon-shadow-forest')
const iconsShadow2 = document.querySelector('#icon-shadow-rain')
const iconsShadow3 = document.querySelector('#icon-shadow-bakery')
const iconsShadow4 = document.querySelector('#icon-shadow-fire')

const buttonRain = document.querySelector('#rain')
const rainColor = document.querySelector('#rain-color')

const buttonBakery = document.querySelector('#bakery')
const bakeryColor = document.querySelector('#bakery-color')

const buttonFire = document.querySelector('#fireplace')
const fireColor = document.querySelector('#fire-place')

const resetBackgroundHome = document.querySelector('.reset')

/* - - - - - - - - Timer - - - - - - - - */
const displayColor = document.querySelector('#timer')

const buttonIncrease = document.querySelector('#button-increase')
const buttonDecrease = document.querySelector('#button-decrease')

/* - - - - - - - - Controls - - - - - - - - */
const buttonControls = document.querySelector('#controls')

const buttonPlay = document.querySelector('.play')
const buttonPlayColor = document.querySelector('#play-color')

const buttonPause = document.querySelector('.pause')
const buttonPauseColor = document.querySelector('#pause-color')

const buttonStop = document.querySelector('.stop')
const buttonReset = document.querySelector('.reset')

const buttonSet = document.querySelector('.set')
const buttonSetColor = document.querySelector('#set-color')

const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOnColor = document.querySelector('#sound-on-color')

const buttonSoundOff = document.querySelector('.sound-off')
const buttonSoundOffColor = document.querySelector('#sound-off-color')

const minutesDisplay = document.querySelector('.minutes')
const twoPoints = document.querySelector('.two-points')
const secondsDisplay = document.querySelector('.seconds')

/* - - - - - - - - Sounnds - - - - - - - - */
const soundForest = document.querySelector('#sound-forest')
const soundRain = document.querySelector('#sound-rain')
const soundBakery = document.querySelector('#sound-bakery')
const soundFireplace = document.querySelector('#sound-fireplace')

const soundClick = document.querySelector('#sound-click')
const bgAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true'
)

const kitchenTimer = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)

let minutes
let timerTimeOut

/* - - - - - - - - Functions - - - - - - - - */

function soundsClick() {
  soundClick.currentTime = 0
  soundClick.volume = 0.08
  soundClick.play()
}

function bodyColorReset() {
  iconsShadow1.style.fill = '#ff7644'
  buttonForest.style.boxShadow = '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'

  iconsShadow2.style.fill = '#ff7644'
  buttonRain.style.boxShadow = '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'

  iconsShadow3.style.fill = '#ff7644'
  buttonBakery.style.boxShadow = '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'

  iconsShadow4.style.fill = '#ff7644'
  buttonFire.style.boxShadow = '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'

  displayColor.style.color = '#ff7644'
  displayColor.style.boxShadow = '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'

  buttonControls.style.fill = '#ff7644'
  buttonControls.style.boxShadow =
    '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'

  buttonPlayColor.style.fill = '#ff7644'
  buttonPlay.style.boxShadow = '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'

  buttonPauseColor.style.fill = '#ff7644'
  buttonPause.style.boxShadow = '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'

  buttonSetColor.style.fill = '#ff7644'
  buttonSet.style.boxShadow = '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'

  buttonSoundOnColor.style.fill = '#ff7644'
  buttonSoundOn.style.boxShadow = '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'

  buttonSoundOffColor.style.fill = '#ff7644'
  buttonSoundOff.style.boxShadow =
    '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff'

  buttonIncrease.style.backgroundColor = '#FF7644'
  buttonDecrease.style.backgroundColor = '#FF7644'

  buttonStop.style.background = '#FF7644'

  buttonReset.style.background = '#FF7644'
}

function bodyColor() {
  iconsShadow1.style.fill = 'white'
  buttonForest.style.boxShadow = '  0px 0px 6px #FFFFFF, -0px -0px 6px #ffffff'

  iconsShadow2.style.fill = 'white'
  buttonRain.style.boxShadow = '  0px 0px 6px #FFFFFF, -0px -0px 6px #ffffff'

  iconsShadow3.style.fill = 'white'
  buttonBakery.style.boxShadow = '  0px 0px 6px #FFFFFF, -0px -0px 6px #ffffff'

  iconsShadow4.style.fill = 'white'
  buttonFire.style.boxShadow = '  0px 0px 6px #FFFFFF, -0px -0px 6px #ffffff'

  displayColor.style.color = 'white'
  displayColor.style.boxShadow = '  0px 0px 6px #FFFFFF, -0px -0px 6px #ffffff'

  buttonControls.style.fill = 'white'
  buttonControls.style.boxShadow = '0px 0px 5px #FFFFFF, -0px -0px 5px #ffffff'

  buttonPlayColor.style.fill = 'white'
  buttonPlay.style.boxShadow = '  0px 0px 6px #FFFFFF, -0px -0px 6px #ffffff'

  buttonPauseColor.style.fill = 'white'
  buttonPause.style.boxShadow = '  0px 0px 6px #FFFFFF, -0px -0px 6px #ffffff'

  buttonSetColor.style.fill = 'white'
  buttonSet.style.boxShadow = '  0px 0px 6px #FFFFFF, -0px -0px 6px #ffffff'

  buttonSoundOnColor.style.fill = 'white'
  buttonSoundOn.style.boxShadow = '  0px 0px 6px #FFFFFF, -0px -0px 6px #ffffff'

  buttonSoundOffColor.style.fill = 'white'
  buttonSoundOff.style.boxShadow = '0px 0px 6px #FFFFFF, -0px -0px 6px #ffffff'

  buttonIncrease.style.backgroundColor = 'transparent'
  buttonDecrease.style.backgroundColor = 'transparent'

  buttonStop.style.background = 'transparent'
  buttonStop.style.boxShadow = '  0px 0px 6px #FFFFFF, -0px -0px 6px #ffffff'

  buttonReset.style.background = 'transparent'
  buttonReset.style.boxShadow = ' 0px 0px 6px #FFFFFF, -0px -0px 6px #ffffff'
}

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    secondsDisplay.textContent = '00'

    if (minutes + seconds <= 0) {
      resetControls()
      kitchenTimer.play()
      kitchenTimer.currentTime = 0
      return
    }

    if (seconds <= 0) {
      seconds = 60

      updateDisplay(minutes - 1)
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '00')
    countdown()
  }, 100)
}

buttonIncrease.addEventListener('click', function () {
  let minutes = Number(minutesDisplay.textContent)

  minutesDisplay.textContent = '60'
  soundsClick()

  if (minutes >= 60) {
    return
  }
  minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
})

buttonDecrease.addEventListener('click', function () {
  let minutes = Number(minutesDisplay.textContent)

  soundsClick()
  minutesDisplay.textContent = '00'
  if (minutes <= 0) {
    return
  }

  minutesDisplay.textContent = String(minutes - 5).padStart(2, '0')
})

document.getElementById('forest').addEventListener('click', function () {
  document.querySelector('body').setAttribute('class', 'forest')
  bodyColor()
  soundsClick()

  soundRain.pause()
  soundBakery.pause()
  soundFireplace.pause()

  if (soundForest.paused) {
    soundForest.play()
  } else {
    soundForest.pause()
  }
})

document.getElementById('rain').addEventListener('click', function () {
  document.querySelector('body').setAttribute('class', 'rain')
  bodyColor()
  soundsClick()
  soundForest.pause()
  soundBakery.pause()
  soundFireplace.pause()

  if (soundRain.paused) {
    soundRain.play()
  } else {
    soundRain.pause()
  }
})

document.getElementById('bakery').addEventListener('click', function () {
  document.querySelector('body').setAttribute('class', 'bakery')
  bodyColor()
  soundsClick()

  soundForest.pause()
  soundRain.pause()
  soundFireplace.pause()

  if (soundBakery.paused) {
    soundBakery.play()
  } else {
    soundBakery.pause()
  }
})

document.getElementById('fireplace').addEventListener('click', function () {
  document.querySelector('body').setAttribute('class', 'fireplace')
  bodyColor()
  soundsClick()

  soundForest.pause()
  soundBakery.pause()
  soundRain.pause()

  if (soundFireplace.paused) {
    soundFireplace.play()
  } else {
    soundFireplace.pause()
  }
})

resetBackgroundHome.addEventListener('click', function () {
  document.querySelector('body').setAttribute('class', 'resetBackgroundHome')
  bodyColorReset()

  soundForest.pause()
  soundRain.pause()
  soundBakery.pause()
  soundFireplace.pause()
})

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  countdown()
  soundsClick()
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  updateDisplay(0, 0)
  soundsClick()
})

buttonSet.addEventListener('click', function () {
  minutes = prompt('Quantos minutos?') || '00'
  minutesDisplay.textContent = String(minutes).padStart(2, '00')

  if (minutes >= 61) {
    minutesDisplay.textContent = "00"
    secondsDisplay.textContent = "00"
  }

 

  soundsClick()
})

buttonReset.addEventListener('click', function () {
  soundsClick()
})

buttonSoundOn.addEventListener('click',   function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  soundsClick()
  bgAudio.pause()
  
 
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  soundsClick()
  bgAudio.play()
  bgAudio.currentTime = 0
  
})
