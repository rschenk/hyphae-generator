class ZoneMap {
  constructor(width, height, zoneSize) {
    this.height = height
    this.width = width
    this.zoneSize = zoneSize

    // Note that we create one extra row and column on every side to make the
    // adjacent cell lookup thing easier
    this.widthZones = Math.ceil(width / zoneSize) + 2
    this.heightZones = Math.ceil(height / zoneSize) + 2

    // Initialize the zonemap with an empty array at all cells
    this._zonemap = Array.from(new Array(this.numZones), () => [])
  }

  get numZones() {
    return this.widthZones * this.heightZones
  }

  // Top-left pixel-space coordinates of all cells
  get zoneCoordinates() {
    return Array.from(new Array(this.numZones), (_, i) => {
      let zoneX = i % this.widthZones - 1,
          zoneY = Math.floor(i / this.widthZones) - 1

      return [zoneX * this.zoneSize, zoneY * this.zoneSize]
    })
  }

  zoneIndex(x, y) {
    let zoneX = Math.floor(x / this.zoneSize) + 1,
        zoneY = Math.floor(y / this.zoneSize) + 1

    return zoneY * this.widthZones + zoneX
  }

  addItem(x, y, item) {
    let index = this.zoneIndex(x, y)
    this._zonemap[index].push(item)
  }

  getItemsInZone(index) {
    this._zonemap[index]
  }

  // Returns an array of indexes of the zone that the (x,y) coordinate falls
  // within, along with all adjacent zones
  getAdjacentZoneIndexes(x, y) {
    let i = this.zoneIndex(x, y)

    let rowAbove  = [i-1, i, i+1].map(v => v - this.widthZones)
    let thisRow   = [i-1, i, i+1]
    let rowBelow  = [i-1, i, i+1].map(v => v + this.widthZones)

    return rowAbove.concat(thisRow).concat(rowBelow)
  }

  getItemsInAdjacentZones(x, y) {
    return(
      this.getAdjacentZoneIndexes(x, y)
        .map(i => this._zonemap[i])
        .flat()
    )
  }

}

export { ZoneMap }
