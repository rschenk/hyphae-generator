import { scaleLinear } from 'd3-scale'

const paper = require('paper/dist/paper-core')
const p = {}
paper.install(p)

class RenderPaper {
  constructor(canvasElement, w, h) {
    this.canvasElement = canvasElement

    paper.setup(this.canvasElement.id)

    p.view.viewSize = new p.Size(w, h)
    p.project.currentStyle = {
      strokeCap: 'round'
    }

    this._minSeekRadius = 1
    this._maxSeekRadius = 1
    this.strokeScale = scaleLinear()
      .domain([this._minSeekRadius, this._maxSeekRadius])
      .rangeRound([1, 5])
  }

  line(from, to) {
    let strokeWidth = this.strokeScale(to.r)

    new p.Path.Line({
      from: [from.x, from.y],
      to: [to.x, to.y],
      strokeWidth,
      ...this.style.line
    })

    //this.node(to, strokeWidth + 1)
  }

  node(center, radius = 3) {
    new p.Path.Circle({
      center: [center.x, center.y],
      radius,
      ...this.style.node
    })
  }

  root(center) {
    let radius = 6
    new p.Path.Circle({
      center: [center.x, center.y],
      radius,
      ...this.style.root
    })

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
        strokeColor: null,
        fillColor: 'red',
      },

      node: {
        strokeColor: null,
        fillColor: 'black',
      },

      line: {
        strokeColor: 'black',
      }
    }
  }
}

export { RenderPaper }