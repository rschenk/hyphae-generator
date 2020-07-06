class RenderEmitter {
  constructor(postMessage) {
    this.postMessage = postMessage
  }

  line(from, to) {
    this.postMessage({
      cmd: 'render:line',
      from,
      to
    })
  }

  node(center) {
    this.postMessage({
      cmd: 'render:node',
      center
    })
  }

  root(center) {
    this.postMessage({
      cmd: 'render:root',
      center
    })
  }

  done() {
    this.postMessage({
      cmd: 'render:done'
    })
  }

  set minSeekRadius(r) {
    this.postMessage({
      cmd: 'render:setMinSeekRadius',
      radius: r
    })
  }

  set maxSeekRadius(r) {
    this.postMessage({
      cmd: 'render:setMaxSeekRadius',
      radius: r
    })
  }
}

export { RenderEmitter }