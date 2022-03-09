const FRAME_TIME = 100


// 0,1,2  color rgb
// 
export default class Life {
    constructor(life){
        this.name = life.name
        this.gene = life.gene
        this.color = '#' + Math.floor(this.gene[0]*2.56).toString(16) + Math.floor(this.gene[1]*2.56).toString(16) + Math.floor(this.gene[2]*2.56).toString(16)
    }

    init(w,h) {
        this.location = {
            x: Math.floor(Math.random() * w),
            y: Math.floor(Math.random() * h),
        }
    }

    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.location.x, this.location.y, 5, 0, 2 * Math.PI, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.lineWidth = 1
        ctx.strokeStyle = '#00FF00'
        ctx.stroke()
    }

    moveByGene(){
        let speed = Math.floor(this.gene[3] / 20) + 1
        let angle = Math.floor(this.gene[4] * 3.6)

        console.log(`speed: ${speed}  angle: ${angle}`)

    }

    update(delta,speedScale){

    }
}