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
  printGraph() {
    // get all the vertices
    var get_keys = this.adjacent.keys();
 
    // iterate over the vertices
    for (var i of get_keys) {
        // great the corresponding adjacency list
        // for the vertex
        var get_values = this.adjacent.get(i);
        var conc = "";
 
        // iterate over the adjacency list
        // concatenate the values into a string
        for (var j of get_values)
            conc += j + " ";
 
        // print the vertex and its adjacency list
        console.log(i + " -> " + conc);
    }
}
}

// Given a graph g and a starting vertex s, return all reachable vertices 
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

  // TIMER
  let t0 = Date.now();

  let g = new Graph(n);

  // let verts = [...new Set(edges.reduce( (acc, next) => acc.concat(next), []))];

  let verts = new Set();
  edges.map(([v, w]) => {
    g.addVertex(w);
    g.addVertex(v);
  });

  // TIMER
  let t0b = Date.now()
  
  console.log('Building vert array took', (t0b - t0).toFixed(4), 'milliseconds for process to complete');

  edges.map(([v, w]) => g.addEdge(v, w));

  // TIMER
  let t1  = Date.now();
  console.log('Graph creation took', (t1 - t0).toFixed(4), 'milliseconds for process to complete');

  // Map over verts to find which ones evaluate true for:
  // a * (reachable vert with least edges) < curr v's num edges < b * (reachable vert with most edges)
  let specialCnt = 0;
  let memo = [];

  Array.from( g.adjacent.keys() ).map((v) => {
      let reachables = [];
      for (let i = 0; i < memo.length; i++) {
          if (memo[i].includes(v)) {
              reachables = memo[i];
          }
      }
      if (!reachables.length) {
          reachables = bfs(g, v).map(str => Number(str));
          memo.push(reachables);
      }
      let adjCnts = reachables.map(r => g.adjacent.get(r).length);
      let lowEnd = Math.min(...adjCnts) * a;
      let highEnd = Math.max(...adjCnts) * b;
      let adjV = g.adjacent.get(v).length;
      if (adjV > lowEnd && adjV < highEnd) {
          specialCnt++;
      }
  });
  
  // TIMER
  let t2  = Date.now();
  console.log('Special counting took', (t2 - t1).toFixed(4), 'milliseconds for process to complete');

  return specialCnt;
}  

let edges = genEdges(40000, 100);
let n = edges.length;
let a = 1
let b = 1

console.log(solve(n, edges, a, b));
