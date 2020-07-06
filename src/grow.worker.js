import { RenderEmitter } from './render/render_emitter.js'
import { MaskDonut } from './mask/mask_donut.js'
import { grow } from './grower.js'


onmessage = (e) => {
  console.log(`[grow.worker] received message ${e.data.cmd}`)
  switch (e.data.cmd) {
    case 'run':
      run()
      break
    default:
      console.log(`[grow.worker] unknown command ${e.data.cmd}, data: ${e.data}`)
  }
}

function run() {
  // TODO these will get passed in
  let width = 600,
      height = 600

  let render = new RenderEmitter((msg) => postMessage(msg))
  let mask = new MaskDonut(width, height, 100, 280)

  grow(width, height, mask, render)
}