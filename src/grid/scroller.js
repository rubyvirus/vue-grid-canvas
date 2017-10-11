export default {
    data() {
        return {
            horizontalBar: {
                x: 0,
                size: 0,
                move: false,
                cursorX: 0,
                k: 1,
            },
            verticalBar: {
                y: 0,
                size: 0,
                move: false,
                cursorY: 0,
                k: 1,
            },
        }
    },
    created() {
        this.$on('scroll', () => {
            this.horizontalBar.x = -parseInt(this.offset.x * this.horizontalBar.k, 10)
            this.verticalBar.y = -parseInt(this.offset.y * this.verticalBar.k, 10)
        })
    },
    mounted() {
        // document.addEventListener('mouseup', () => {
        //     this.horizontalBar.move = false
        //     this.verticalBar.move = false
        // })
        // document.addEventListener('mousemove', (e) => {
        //     if (this.verticalBar.move) {
        //         const height = this.maxPoint.y - this.verticalBar.size
        //         const moveHeight = this.verticalBar.y + (e.screenY - this.verticalBar.cursorY)
        //         if (moveHeight > 0 && moveHeight < height) {
        //             this.verticalBar.y += e.screenY - this.verticalBar.cursorY
        //         } else if (moveHeight <= 0) {
        //             this.verticalBar.y = 0
        //         } else {
        //             this.verticalBar.y = height
        //         }
        //         this.verticalBar.cursorY = e.screenY
        //         this.offset.y = -this.verticalBar.y / this.verticalBar.k
        //         requestAnimationFrame(this.rePainted)
        //     }
        //     if (this.horizontalBar.move) {
        //         let width = 0
        //         if (this.fillWidth > 0) {
        //             width = this.maxPoint.x - this.horizontalBar.size
        //         } else {
        //             width = (this.maxPoint.x + this.fixedWidth) - this.horizontalBar.size
        //         }
        //         const moveWidth = this.horizontalBar.x + (e.screenX - this.horizontalBar.cursorX)
        //         if (moveWidth > 0 && moveWidth < width) {
        //             this.horizontalBar.x += e.screenX - this.horizontalBar.cursorX
        //         } else if (moveWidth <= 0) {
        //             this.horizontalBar.x = 0
        //         } else {
        //             this.horizontalBar.x = width
        //         }
        //         this.horizontalBar.cursorX = e.screenX
        //         this.offset.x = -this.horizontalBar.x / this.horizontalBar.k
        //         requestAnimationFrame(this.rePainted)
        //     }
        // })
    },
    methods: {
        scroll(e, type) {
            if (type && this.verticalBar.size) {
                if (e.offsetY < this.verticalBar.y) {
                    let k = 15
                    if (this.verticalBar.y - e.offsetY < 15) {
                        k = this.verticalBar.y - e.offsetY
                    }
                    this.verticalBar.y -= k
                    this.offset.y = -this.verticalBar.y / this.verticalBar.k
                    requestAnimationFrame(this.rePainted)
                } else if (e.offsetY > this.verticalBar.y + this.verticalBar.size) {
                    let k = 15
                    if (e.offsetY - this.verticalBar.y - this.verticalBar.size < 15) {
                        k = e.offsetY - this.verticalBar.y - this.verticalBar.size
                    }
                    this.verticalBar.y += k
                    this.offset.y = -this.verticalBar.y / this.verticalBar.k
                    requestAnimationFrame(this.rePainted)
                }
            }
            if (type === 0 && this.horizontalBar.size) {
                if (e.offsetX < this.horizontalBar.x) {
                    let k = 15
                    if (this.horizontalBar.x - e.offsetX < 15) {
                        k = this.horizontalBar.x - e.offsetX
                    }
                    this.horizontalBar.x -= k
                    this.offset.x = -this.horizontalBar.x / this.horizontalBar.k
                    requestAnimationFrame(this.rePainted)
                } else if (e.offsetX > this.horizontalBar.x + this.horizontalBar.size) {
                    let k = 15
                    if (e.offsetX - this.horizontalBar.x - this.horizontalBar.size < 15) {
                        k = e.offsetX - this.horizontalBar.x - this.horizontalBar.size
                    }
                    this.horizontalBar.x += k
                    this.horizontalBar.x += 15
                    this.offset.x = -this.horizontalBar.x / this.horizontalBar.k
                    requestAnimationFrame(this.rePainted)
                }
            }
        },
        dragMove(e, type) {
            if (type) {
                this.verticalBar.move = true
                this.verticalBar.cursorY = e.screenY
            } else {
                this.horizontalBar.move = true
                this.horizontalBar.cursorX = e.screenX
            }
        },
        resetScrollBar({ x, y }, bodyWidth, bodyHeight, fixedWidth) {
            let width = 0
            if (this.fillWidth > 0) {
                width = x
            } else {
                width = x + fixedWidth
            }

            const horizontalRatio = width / bodyWidth
            if (horizontalRatio >= 1) {
                this.horizontalBar.size = 0
            } else {
                this.horizontalBar.size = width - ((bodyWidth - width) * horizontalRatio)
            }
            this.horizontalBar.k = horizontalRatio

            let verticalRatio = y / bodyHeight
            if (verticalRatio > 1) {
                this.verticalBar.size = 0
            } else {
                this.verticalBar.size = y - ((bodyHeight - y) * verticalRatio)
                if (this.verticalBar.size < 30) {
                    this.verticalBar.size = 30
                    verticalRatio = (y - 30) / (bodyHeight - y)
                }
            }
            this.verticalBar.k = verticalRatio

            if (width - this.horizontalBar.size < -this.offset.x * this.horizontalBar.k) {
                this.offset.x = width - this.bodyWidth
            }
            if (this.verticalBar.k > 1) {
                this.offset.y = 0
            } else if (this.maxPoint.y - this.verticalBar.size < -this.offset.y * this.verticalBar.k) {
                this.offset.y = this.maxPoint.y - this.bodyHeight
            }
            this.horizontalBar.x = -this.offset.x * this.horizontalBar.k
            this.verticalBar.y = -this.offset.y * this.verticalBar.k
        },
    },
}
