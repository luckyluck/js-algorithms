/* A Queue object for queue-like functionality over JavaScript arrays. */
let Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};


let doBFS = (graph, source) => {
    let bfsInfo = [];

    for (let i = 0; i < graph.length; i++) {
        bfsInfo[i] = { distance: null, predecessor: null };
    }

    bfsInfo[source].distance = 0;

    let queue = new Queue();
    queue.enqueue(source);

    // Traverse the graph
    // As long as the queue is not empty:
    while (!queue.isEmpty()) {
        // Repeatedly dequeue a vertex u from the queue.
        let u = queue.dequeue();
        // Use graph to get the neighbors
        let neighbors = graph[u];
        // For each neighbor v of u that has not been visited:
        for (let i = 0; i < neighbors.length; i++) {
            let v = neighbors[i];
            if (bfsInfo[v].predecessor === null && v !== source) {
                // Set distance to 1 greater than u's distance
                bfsInfo[v].distance = bfsInfo[u].distance + 1;
                // Set predecessor to u
                bfsInfo[v].predecessor = u;
                // Enqueue v
                queue.enqueue(v);
            }
        }
    }

    return bfsInfo;
};

let adjList = [
    [1],
    [0, 4, 5],
    [3, 4, 5],
    [2, 6],
    [1, 2],
    [1, 2, 6],
    [3, 5],
    []
];

console.log(doBFS(adjList, 3));
