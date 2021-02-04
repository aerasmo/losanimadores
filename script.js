const mainLogo = document.querySelector("#main-logo")
console.log("Hello world")
mainLogo.addEventListener('mouseover', e => {
  setTimeout(() => {
    mainLogo.setAttribute('src','./res/members.gif')
  }, 3000) // delay divide by 1000 seconds
})

mainLogo.addEventListener('mouseout', e => {
  // mainLogo.src = 
  mainLogo.setAttribute('src','./res/logo-text.png')
})