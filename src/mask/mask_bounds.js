class MaskBounds {
  constructor(w, h, padding = 0) {
    this.width = w
    this.height = h
    this.padding = padding
  }

  canPlaceRoot(x, y) {
    let top = 0 + this.padding,
        right = this.width - this.padding,
        bottom = this.height - this.padding,
        left = 0 + this.padding
    
    return (
      (left < x) && (x < right) &&
      (top < y) && (y < bottom)
    )
  }

  canPlaceNode(x, y) {
    return this.canPlaceRoot(x, y)
  }
}

export { MaskBounds }