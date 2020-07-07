import { scaleLinear, scaleOrdinal } from 'd3-scale'
import { schemeTableau10 } from 'd3-scale-chromatic'

class RenderCanvas {
  constructor(canvasElement, w, h) {
    this.w = w
    this.h = h
    this.canvasElement = canvasElement
    this.ctx = canvasElement.getContext("2d")

    this.twoPi = Math.PI*2

    this._minSeekRadius = 1
    this._maxSeekRadius = 1
    this.strokeScale = scaleLinear()
      .domain([this._minSeekRadius, this._maxSeekRadius])
      .rangeRound([2, 6])

    this.strokeColorScale = scaleOrdinal(schemeTableau10)

    this._initializeCanvas()
  }

  clear() {
    this._initializeCanvas()
  }

  line(from, to) {
    let strokeWidth = this.strokeScale(to.r)

    this.ctx.lineWidth = strokeWidth
    //this.ctx.strokeStyle = this.style.line.strokeColor
    this.ctx.strokeStyle = this.strokeColorScale(to.treeId)
    this.ctx.beginPath()
    this.ctx.moveTo(from.x, from.y)
    this.ctx.lineTo(to.x, to.y)
    this.ctx.stroke()

    //this.node(to, strokeWidth + 1)
  }

  node(center, radius = 3) {
    this.ctx.fillStyle = this.style.node.fillColor
    this.ctx.beginPath()
    this.ctx.arc(center.x, center.y, radius, 0, this.twoPi)
    this.ctx.closePath()
    this.ctx.fill()
  }

  root(center) {
    //return

    let radius = 6

    this.ctx.fillStyle = this.style.root.fillColor
    this.ctx.beginPath()
    this.ctx.arc(center.x, center.y, radius, 0, this.twoPi)
    this.ctx.closePath()
    this.ctx.fill()

    this.node(center)
  }

  done() { }

  set minSeekRadius(r) {
    this._minSeekRadius = r
    this.strokeScale.domain([this._minSeekRadius, this._maxSeekRadius])
  }

  set maxSeekRadius(r) {
    this._maxSeekRadius = r
    this.strokeScale.domain([this._minSeekRadius, this._maxSeekRadius])
  }

  get style() {
    return {
      root: {
        fillColor: 'red',
      },

      node: {
        fillColor: 'black',
      },

      line: {
        strokeColor: 'black',
      }
    }
  }

  _initializeCanvas() {
    this.canvasElement.width = this.w
    this.canvasElement.height = this.h

    // Set up retina
    const dpr = window.devicePixelRatio || 1
    this.canvasElement.style.width = this.canvasElement.width + "px";
    this.canvasElement.style.height = this.canvasElement.height + "px";
    this.canvasElement.width = this.canvasElement.width * dpr;
    this.canvasElement.height = this.canvasElement.height * dpr;
    this.ctx.scale(dpr, dpr);

    this.ctx.fillStyle = 'white'
    this.ctx.rect(0, 0, this.w, this.h)
    this.ctx.fill()

    this.ctx.lineCap = 'round'
  }
}

export { RenderCanvas }
