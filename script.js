import life from './life.js'

const WORLD_WIDTH = 500
const WORLD_HEIGHT = 500
let lives_count = 10

let lives = []

let lastTime
let speedScale

const worldElem = document.querySelector('#world')
const ctx = worldElem.getContext('2d')

worldElem.style.width = `${WORLD_WIDTH}px`
worldElem.style.height = `${WORLD_HEIGHT}px`

// fetch json data
fetch('./app/charsOrigin.json')
.then(res => res.json())
.then(data=>{
    data.forEach(e=>{

        if(lives_count-- <= 0)  return

        const l = new life(e)
        l.init(WORLD_WIDTH, WORLD_HEIGHT)

        lives.push(l)

    })
    //console.log(lives)



    handdleStart()  //starting command
})


function handdleStart() {
    lastTime = null
    speedScale = 1

    console.log(lives)

    lives.forEach(life=>{
        life.draw(ctx)
    })

    window.requestAnimationFrame(update)
}


function update(time){
    if (lastTime == null){
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime

    //console.log(`${delta}`)

    lives.forEach(life => {
        life.update(delta, speedScale)
    })

    lastTime = time
    window.requestAnimationFrame(update)
}