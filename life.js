

export default class Life {
    constructor(life){
        this.name = life.name
        this.gene = life.gene
        this.color = '#' + Math.floor(this.gene[0]*2.56).toString(16) + Math.floor(this.gene[1]*2.56).toString(16) + Math.floor(this.gene[2]*2.56).toString(16)
    }

    locate(w,h) {
        this.location = {
            x: Math.floor(Math.random()*w),
            y: Math.floor(Math.random()*h),
        }
        console.log(this.location)
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
}