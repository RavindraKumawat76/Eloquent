// The familiar Vec type.
class Vec {
    constructor(x, y) {
        this.x = x; this.y = y;
    }
    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }
    minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }
    times(factor) {
        return new Vec(this.x * factor, this.y * factor);
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

// Since we will want to inspect the layouts our code produces, let's
// first write code to draw a graph onto a canvas. Since we don't know
// in advance how big the graph is, the `Scale` object computes a
// scale and offset so that all nodes fit onto the given canvas.

const nodeSize = 8;

function drawGraph(graph) {
    let canvas = document.querySelector("canvas");
    if (!canvas) {
        canvas = document.body.appendChild(document.createElement("canvas"));
        canvas.width = canvas.height = 400;
    }
    let cx = canvas.getContext("2d");

    cx.clearRect(0, 0, canvas.width, canvas.height);
    let scale = new Scale(graph, canvas.width, canvas.height);

    // Draw the edges.
    cx.strokeStyle = "orange";
    cx.lineWidth = 3;
    for (let i = 0; i < graph.length; i++) {
        let origin = graph[i];
        for (let target of origin.edges) {
            if (graph.indexOf(target) <= i) continue;
            cx.beginPath();
            cx.moveTo(scale.x(origin.pos.x), scale.y(origin.pos.y));
            cx.lineTo(scale.x(target.pos.x), scale.y(target.pos.y));
            cx.stroke();
        }
    }

    // Draw the nodes.
    cx.fillStyle = "purple";
    for (let node of graph) {
        cx.beginPath();
        cx.arc(scale.x(node.pos.x), scale.y(node.pos.y), nodeSize, 0, 7);
        cx.fill();
    }
}

// The function starts by drawing the edges, so that they appear
// behind the nodes. Since the nodes on _both_ side of an edge refer
// to each other, and we don't want to draw every edge twice, edges
// are only drawn then the target comes _after_ the current node in
// the `graph` array.

// When the edges have been drawn, the nodes are drawn on top of them
// as purple discs. Remember that the last argument to `arc` gives the
// rotation, and we have to pass something bigger than 2π to get a
// full circle.

// Finding a scale at which to draw the graph is done by finding the
// top left and bottom right corners of the area taken up by the
// nodes. The offset at which nodes are drawn is based on the top left
// corner, and the scale is based on the size of the canvas divided by
// the distance between those corners. The function reserves space
// along the sides of the canvas based on the `nodeSize` variable, so
// that the circles drawn around nodes’ center points don't get cut off.

class Scale {
    constructor(graph, width, height) {
        let xs = graph.map(node => node.pos.x);
        let ys = graph.map(node => node.pos.y);
        let minX = Math.min(...xs);
        let minY = Math.min(...ys);
        let maxX = Math.max(...xs);
        let maxY = Math.max(...ys);

        this.offsetX = minX;
        this.offsetY = minY;
        this.scaleX = (width - 2 * nodeSize) / (maxX - minX);
        this.scaleY = (height - 2 * nodeSize) / (maxY - minY);
    }

    // The `x` and `y` methods convert from graph coordinates into
    // canvas coordinates.
    x(x) {
        return this.scaleX * (x - this.offsetX) + nodeSize;
    }
    y(y) {
        return this.scaleY * (y - this.offsetY) + nodeSize;
    }
}



// Step: 1 Defining a Graph
class GraphNode {
    constructor() {
        this.pos = new Vec(Math.random() * 1000, Math.random() * 1000)
        this.edges = []
    }
    // connect a node to another node
    connect(other) {
        this.edges.push(other)
        other.edges.push(this)
    }
    // To find out whether two nodes are connected
    hasEdge(other) {
        return this.edges.includes(other)
    }
}

// To build up Graphs to test our programs. It takes two parameters that specify the depth of the tree and the number of branches to create at each split, and it recursively construct a tree shaped graph with the specified shape
function treeGraph(depth, branches) {
    let graph = [new GraphNode()];
    if (depth > 1) {
        for (let i = 0; i < branches; i++) {
            let subGraph = treeGraph(depth - 1, branches);
            graph[0].connect(subGraph[0]);
            graph = graph.concat(subGraph);
        }
    }
    return graph;
}

// drawGraph(treeGraph(3, 5))

// Step: 2 Force-Directed Layout
const springLength = 40
const springStrength = 0.1

const repulsionStrength = 1500

function forceDirected_simple(graph) {
    for (const node of graph) {
        for (const other of graph) {
            if (other === node) continue
            const apart = other.pos.minus(node.pos)
            const distance = Math.max(1, apart.length)
            let forceSize = -repulsionStrength / (distance * distance)
            if (node.hasEdge(other)) {
                forceSize += (distance - springLength) * springStrength
            }
            const normalized = apart.times(1 / distance)
            node.pos = node.pos.plus(normalized.times(forceSize))
        }
    }
}

function runLayout(implementation, graph) {
    function run(steps, time) {
        const startTime = Date.now()
        for (let i = 0; i < 100; i++) {
            implementation(graph)
        }
        time += Date.now() - startTime
        drawGraph(graph)

        if (steps === 0) console.log(time)
        else requestAnimationFrame(() => run(steps - 100, time))
    }
    run(4000, 0)
}

// runLayout(forceDirected_simple, treeGraph(4, 4))


// Step: 3 Avoding Work
function forceDirected_noRepeat(graph) {
    for (let i = 0; i < graph.length; i++) {
        const node = graph[i]
        for (let j = i + 1; j < graph.length; j++) {
            const other = graph[j]
            const apart = other.pos.minus(node.pos)
            const distance = Math.max(1, apart.length)
            let forceSize = -repulsionStrength / (distance * distance)
            if (node.hasEdge(other)) {
                forceSize += (distance - springLength) * springStrength
            }
            const applied = apart.times(forceSize / distance)
            node.pos = node.pos.plus(applied)
            other.pos = other.pos.minus(applied)
        }
    }
}

const skipDistance = 175

function forceDirected_skip(graph) {
    for (let i = 0; i < graph.length; i++) {
        const node = graph[i]
        for (let j = i + 1; j < graph.length; j++) {
            const other = graph[j]
            const apart = other.pos.minus(node.pos)
            const distance = Math.max(1, apart.length)
            const hasEdge = node.hasEdge(other)
            if (!hasEdge && distance > skipDistance) continue
            let forceSize = -repulsionStrength / (distance * distance)
            if (hasEdge) {
                forceSize += (distance - springLength) * springStrength
            }
            const applied = apart.times(forceSize / distance)
            node.pos = node.pos.plus(applied)
            other.pos = other.pos.minus(applied)
        }
    }
}

GraphNode.prototype.hasEdgeFast = function (other) {
    for (let i = 0; i < this.edges.length; i++) {
        if (this.edges[i] === other) return true
    }
    return false
}

function forceDirected_hasEdgeFast(graph) {
    for (let i = 0; i < graph.length; i++) {
        let node = graph[i];
        for (let j = i + 1; j < graph.length; j++) {
            let other = graph[j];
            let apart = other.pos.minus(node.pos);
            let distance = Math.max(1, apart.length);
            let hasEdge = node.hasEdgeFast(other);
            if (!hasEdge && distance > skipDistance) continue;
            let forceSize = -repulsionStrength / (distance * distance);
            if (hasEdge) {
                forceSize += (distance - springLength) * springStrength;
            }
            let applied = apart.times(forceSize / distance);
            node.pos = node.pos.plus(applied);
            other.pos = other.pos.minus(applied);
        }
    }
}

// Step: 4 Creating Less Garbage
function forceDirected_noVector(graph) {
    for (let i = 0; i < graph.length; i++) {
        let node = graph[i];
        for (let j = i + 1; j < graph.length; j++) {
            let other = graph[j];
            let apartX = other.pos.x - node.pos.x;
            let apartY = other.pos.y - node.pos.y;
            let distance = Math.max(1, Math.sqrt(apartX * apartX + apartY * apartY));
            let hasEdge = node.hasEdgeFast(other);
            if (!hasEdge && distance > skipDistance) continue;
            let forceSize = -repulsionStrength / (distance * distance);
            if (hasEdge) {
                forceSize += (distance - springLength) * springStrength;
            }
            let forceX = apartX * forceSize / distance;
            let forceY = apartY * forceSize / distance;
            node.pos.x += forceX;
            node.pos.y += forceY;
            other.pos.x -= forceX;
            other.pos.y -= forceY;
        }
    }
}

// Step: 5 Dynamic Types
let mangledGraph = treeGraph(4, 4)
for (const node of mangledGraph) {
    node[`p${Math.floor(Math.random() * 999)}`] = true
}

runLayout(forceDirected_noVector, treeGraph(4, 4))

// Exercise: Pathfinding
function findPath(a, b) {
    let work = [[a]];
    for (let path of work) {
        let end = path[path.length - 1];
        if (end == b) return path;
        for (let next of end.edges) {
            if (!work.some(path => path[path.length - 1] == next)) {
                work.push(path.concat([next]));
            }
        }
    }
}

let graph = treeGraph(4, 4);
let root = graph[0], leaf = graph[graph.length - 1];
console.log(findPath(root, leaf).length);
// → 4

leaf.connect(root);
console.log(findPath(root, leaf).length);
// → 2


// Exercise: Timing
function time(findPath) {
    let graph = treeGraph(6, 6);
    let startTime = Date.now();
    let result = findPath(graph[0], graph[graph.length - 1]);
    console.log(`Path with length ${result.length} found in ${Date.now() - startTime}ms`);
}
time(findPath);

// Exercise: Optimizing
function findPath_set(a, b) {
    let work = [[a]];
    let reached = new Set([a]);
    for (let path of work) {
        let end = path[path.length - 1];
        if (end == b) return path;
        for (let next of end.edges) {
            if (!reached.has(next)) {
                reached.add(next);
                work.push(path.concat([next]));
            }
        }
    }
}

time(findPath_set);

function pathToArray(path) {
    let result = [];
    for (; path; path = path.via) result.unshift(path.at);
    return result;
}

function findPath_list(a, b) {
    let work = [{ at: a, via: null }];
    let reached = new Set([a]);
    for (let path of work) {
        if (path.at == b) return pathToArray(path);
        for (let next of path.at.edges) {
            if (!reached.has(next)) {
                reached.add(next);
                work.push({ at: next, via: path });
            }
        }
    }
}

time(findPath_list);
