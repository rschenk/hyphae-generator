import { randomInt, randomFloat, randomGaussian } from './utils/random.js'
import { ZoneMap } from './utils/zonemap.js'

const paper = require('paper/dist/paper-core')
const p = {}
paper.install(p)

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export function grow(width, height, mask, renderer) {
  const iterations = 1000000
  const maxSeekRadius = 16
  const minSeekRadius = 7
  const seekRadiusDecay = 0.93
  const numRoots = 5
  const maxBranchAttempts = 20
  const thetaMax = 140 // 180

  let roots,
      allNodes = [],
      zoneMap = new ZoneMap(width, height, maxSeekRadius * 1.5)

  renderer.minSeekRadius = minSeekRadius
  renderer.maxSeekRadius = maxSeekRadius

  // Initialize roots
  roots = buildRoots(numRoots, height, width, maxSeekRadius, mask)
  roots.forEach(root => {
    allNodes.push(root)
    zoneMap.addItem(root.x, root.y, root)
    renderer.root(root)
  })
  
  for(let i = 0; i < iterations; i++) {
    // Pick a node at random
    let parentNode = randomMember(allNodes)

    if (!parentNode.alive)
      continue

    parentNode.branchAttempts++
  
    if (maxBranchAttempts < parentNode.branchAttempts) {
      parentNode.alive = false
      continue
    }

    if (parentNode.r < minSeekRadius) {
      parentNode.alive = false
      continue
    }

    // Construct a new node from the current node
    let node = newNode()
    node.parent = parentNode
    node.treeId = parentNode.treeId
    node.r = parentNode.r + 0
    node.theta = parentNode.theta
    node.branchDepth = parentNode.branchDepth
    
    // If parent node already has children
    if (0 < parentNode.children.length) {
      node.branchDepth++
      node.r *= seekRadiusDecay
    }

    // Add some squiggle to the lines
    node.theta += (
      (1.0 - 1.0/((node.branchDepth + 1)**0.1)) * randomGaussian() * thetaMax
    )

    // Atempt to place new node
    let parentPosition = new p.Point(parentNode.x, parentNode.y)
    let vector = new p.Point({
      length: parentNode.r,
      angle: node.theta
    })
    let newPoint = parentPosition.add(vector)
    node.x = newPoint.x
    node.y = newPoint.y

    if(!canPlaceNode(node, mask, zoneMap))
      continue
    
    allNodes.push(node)
    zoneMap.addItem(node.x, node.y, node)
    parentNode.children.push(node)

    renderer.line(
      parentNode,
      node
    )
  }

  renderer.done()
}

function buildRoots(numRoots, w, h, maxSeekRadius, mask) {
  return Array.from(new Array(numRoots))
    .map(() => {
      let x, y
      do {
        x = randomInt(w)
        y = randomInt(h)
      } while(!mask.canPlaceRoot(x, y))
      return [x, y]
    })
    .map(([x, y], i) => {
      let root = newNode(x, y)
      root.r = maxSeekRadius
      root.theta = randomInt(360)
      root.treeId = i
      return root
    })
}

function randomMember(list) {
  return list[ randomInt(list.length - 1) ]
}

function canPlaceNode(node, mask, zoneMap) {
  let withinMask = mask.canPlaceNode(node.x, node.y)

  if(!withinMask)
    return false

  // Check for collisions
  return zoneMap
    .getItemsInAdjacentZones(node.x, node.y)
    .map (n => {
      let distanceBetweenNodes = Math.sqrt( square(node.x - n.x) + square(node.y - n.y) )
      let isClear = n.r + node.r < distanceBetweenNodes * 2.5
      return isClear
    })
    .every(c => c) 
}

function square(n) { return n*n }

function newNode(x, y) {
  return {
    x,                  // X-Coordinate
    y,                  // Y-Coordinate
    r: 1,               // Radius
    theta: 0,           // Heading angle
    branchDepth: 1,     // How deep we've branched from the root
    branchAttempts: 0,  // Number of times this node has attempted to be branched
    parent: null,       // Reference to parent
    children: [],       // Reference to children
    treeId: 0,          // A serial number to identify trees. Should be inhereted from parent to child
    alive: true
  }
}