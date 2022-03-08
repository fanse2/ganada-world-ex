//window.onload(alert('loaded'))

let chars = []

fetch('./app/charsOrigin.json')
.then(res => res.json())
.then(data=>{
    chars = data
    chars.forEach(e=>console.log(e))
})

