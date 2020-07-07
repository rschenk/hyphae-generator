import "./styles.css";
import { RenderCanvas as Render } from './render/render_canvas.js'
import GrowWorker from './grow.worker.js'
import { Tweakpane } from './tweakpane.js'


const PARAMS = {
  maxSeekRadius: 15,
  minSeekRadius: 7,
  seekRadiusDecay: 0.93,
  numRoots: 5,
  maxBranchAttempts: 20,
  angleMax: 160,
  branchSpacing: 2.7,
}

const pane = new Tweakpane({ 
  title: 'Parameters',
  container: document.getElementById('params-container') 
})
pane.addInput(PARAMS, 'maxSeekRadius', { step: 1 })
pane.addInput(PARAMS, 'minSeekRadius', { step: 1 })
pane.addInput(PARAMS, 'seekRadiusDecay', { min: 0, max: 1, step: 0.01 })
pane.addInput(PARAMS, 'numRoots', { step: 1})
pane.addInput(PARAMS, 'maxBranchAttempts', { step: 1 })
pane.addInput(PARAMS, 'angleMax', { min: 90, max: 180, step: 1 })
pane.addInput(PARAMS, 'branchSpacing', { min: 2, max: 3, step: 0.1 })
const growBtn = pane.addButton({ title: 'Grow', })


let canvas = canvasElement()
document.getElementById('app').appendChild(canvas)

let width = 600,
    height = 600,
    render = new Render(canvas, width, height),
    worker = spawnWorker({height, width, ...PARAMS})

const handleGrowButtonClick = () => { 
  render.clear()
  worker = respawnWorker(worker, {height, width, ...PARAMS})
}
growBtn.on('click', handleGrowButtonClick)

function spawnWorker(params) {
  let worker = new GrowWorker()
  worker.onmessage = handleGrowWorkerMessage
  worker.postMessage({cmd: 'run', params})
  return worker
}

function respawnWorker(worker, params) {
  worker.terminate()
  return spawnWorker(params)
}

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
