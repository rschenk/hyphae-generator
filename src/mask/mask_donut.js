class MaskDonut {
  constructor(w, h, minRadius = null, maxRadius = null) {
    this.width = w
    this.height = h
    this.maxRadius = maxRadius || Math.min(w, h) * .45
    this.minRadius = minRadius || this.maxRadius / 2
    this.center = {x: w/2, y: h/2 }
  }

  canPlaceRoot(x, y) {
    let d = dist(this.center, {x, y})

    let radiusDistance = this.maxRadius - this.minRadius,
        rootBand = radiusDistance / 4,
        rootMinRadius = this.minRadius + rootBand,
        rootMaxRadius = this.maxRadius - rootBand

    return (
      rootMinRadius < d && d < rootMaxRadius
    )
  }

  canPlaceNode(x, y) {
    let d = dist(this.center, {x, y})
    return (
      this.minRadius < d && d < this.maxRadius
    )
  }
}

function dist(from, to) {
  return sqrt( sq(from.x - to.x) + sq(from.y - to.y) )
}
function sq(n) { return n * n }
function sqrt(n) { return Math.sqrt(n) }

export { MaskDonut }