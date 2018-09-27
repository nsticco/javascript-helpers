// Breadth First Search (BFS)

class Graph {
  constructor(numVerts) {
    this.numVerts = numVerts;
    this.adjacent = new Map();
  }
  addVertex(v) {
    this.adjacent.set(v, []);
  }
  addEdge(v, w) {
    this.adjacent.get(v).push(w);
    this.adjacent.get(w).push(v);
  }
}

function bfs(g, s) {
  let explored = {};
  explored[s] = true;
  let que = [s];
  while (que.length) {
    let curr = que.shift();
    let neighbors = g.adjacent.get(curr)
    for (let i = 1; i <= neighbors.length; i++)
    neighbors.map((neighbor) => {
      if (!explored[neighbor]) {
        explored[neighbor] = true;
        que.push(neighbor);
      }
    });
  }
  return Object.keys(explored);
}  

function genEdges(qty, max) {
  let edges = new Set();
  const genNum = () => Math.floor((Math.random() * max) + 1);
  const genPair = () => [genNum(), genNum()];
  while (qty) {
    edges.add(genPair());
    qty--;
  }
  return [...edges];
}

function solve(n, edges, a, b) {
  // Create a graph of all vertices and edges

  let t0 = Date.now()

  let g = new Graph(n);
  edges.map(([v, w]) => {
    g.addVertex(w);
    g.addVertex(v);
  });
  edges.map(([v, w]) => g.addEdge(v, w));

  let specialCnt = 0;
  let verts = Array.from( g.adjacent.keys() );

  let t1 = Date.now()
  console.log('Before testing verts took', (t1 - t0).toFixed(4), 'milliseconds for process to complete');

  // We want to pick a vert, run bfs, then test all other connected verts
  // Then run again until we have none left
  while (verts.length) {
    let v = verts.shift();
    let reachables = bfs(g, v).map(str => Number(str));
    verts = verts.filter(x => !reachables.includes(x))

    let adjCnts = reachables.map(r => g.adjacent.get(r).length);
    let lowEnd = Math.min(...adjCnts) * a;
    let highEnd = Math.max(...adjCnts) * b;

    specialCnt += adjCnts.filter(cnt => cnt > lowEnd && cnt < highEnd).length;

  let t2 = Date.now()
  console.log('Testing verts took', (t2 - t1).toFixed(4), 'milliseconds for process to complete');

  return specialCnt;
  }
}

let edges = genEdges(20, 5);
let n = edges.length;
let a = 1
let b = 2

// let edges = [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ], [ 5, 6 ] ]
// let n = 6
// let a = 1
// let b = 2

console.log(solve(n, edges, a, b));
