const mainLogo = document.querySelector("#main-logo")
console.log("Hello world")

let logoTimeout
mainLogo.addEventListener('mouseover', e => {
  logoTimeout = setTimeout(() => {
    mainLogo.setAttribute('src','./res/members.gif')
  }, 2000) // delay divide by 1000 seconds
})

mainLogo.addEventListener('mouseout', e => {
  clearTimeout(logoTimeout)
  mainLogo.setAttribute('src','./res/logo-text.png')
})