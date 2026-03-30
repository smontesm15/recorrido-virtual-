// ✍️ efecto máquina de escribir
const caption = document.querySelector(".caption")

if (caption) {
  const text = caption.innerText
  caption.innerText = ""
  let i = 0

  function escribir() {
    if (i < text.length) {
      caption.innerHTML += text.charAt(i)
      i++
      setTimeout(escribir, 30)
    }
  }

  escribir()
}

// 🎧 control de audio
const audio = document.querySelector("audio")
const btn = document.getElementById("sound-toggle")

if(audio){
  audio.volume = 0

  let vol = 0
  const fadeIn = setInterval(() => {
    if(vol < 0.2){
      vol += 0.01
      audio.volume = vol
    } else {
      clearInterval(fadeIn)
    }
  }, 200)
}

// 🎬 transición suave entre páginas
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function (e) {

    if (link.getAttribute("href").endsWith(".html")) {

      e.preventDefault()

      const fade = document.createElement("div")
      fade.className = "fade"

      document.body.appendChild(fade)
      
      fade.animate(
[
  { opacity: 0 },
  { opacity: 1 },
  { opacity: 1 }
],
{ duration: 600, fill: "forwards" 

})