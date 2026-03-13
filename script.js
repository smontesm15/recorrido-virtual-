const caption = document.querySelector(".caption")

if(caption){

const text = caption.innerText

caption.innerText = ""

let i = 0

function escribir(){

if(i < text.length){

caption.innerHTML += text.charAt(i)

i++

setTimeout(escribir,30)

}

}

escribir()

}

// efecto flash entre páginas

document.querySelectorAll("a").forEach(link => {

link.addEventListener("click", function(e){

if(link.getAttribute("href").endsWith(".html")){

e.preventDefault()

const flash = document.createElement("div")
flash.className = "flash"

document.body.appendChild(flash)

flash.animate(
[{opacity:0},{opacity:1},{opacity:0}],
{duration:80}
)

setTimeout(()=>{
window.location.href = link.href
},20)

}

})

})


