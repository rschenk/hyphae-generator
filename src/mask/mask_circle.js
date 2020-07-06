class MaskCircle {
  constructor(w, h, radius = null) {
    this.width = w
    this.height = h
    this.radius = radius || Math.min(w, h) * .45
    this.center = {x: w/2, y: h/2 }
  }

  canPlaceRoot(x, y) {
    let d = sqrt( sq(this.center.x - x) + sq(this.center.y - y) )
    return (d < this.radius)
  }

  canPlaceNode(x, y) {
    return this.canPlaceRoot(x, y)
  }
}

function sq(n) { return n * n }
function sqrt(n) { return Math.sqrt(n) }

export { MaskCircle }