import "./styles.css";
import { RenderCanvas as Render } from './render/render_canvas.js'

import GrowWorker from './grow.worker.js'

let canvas = canvasElement()
document.getElementById('app').appendChild(canvas)

let width = 600,
    height = 600,
    render = new Render(canvas, width, height)

let worker = new GrowWorker()
worker.onmessage = handleGrowWorkerMessage
worker.postMessage({cmd: 'run'})

function handleGrowWorkerMessage(e) {
  switch (e.data.cmd) {
    case 'render:line':
      render.line(e.data.from, e.data.to)
      break
    case 'render:node':
      render.node(e.data.center, e.data.center.radius)
      break
    case 'render:root':
      render.root(e.data.center)
      break
    case 'render:setMinSeekRadius':
      render.minSeekRadius = e.data.radius
      break
    case 'render:setMaxSeekRadius':
      render.maxSeekRadius = e.data.radius
      break
    default:
      console.log(`[index] unknown command ${e.data.cmd}, data: ${JSON.stringify(e.data)}`)
  }
}


function canvasElement() {
  let id = 'render-canvas'
  let element = document.createElement('canvas')
  element.id = id
  element.classList.add('render-canvas')
  return element
}