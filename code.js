function augmentingPath(graph, start, end) {
    const visited = new Set();
    const path = [start];
    let current = start;

    while (current !== end) {
        visited.add(current);
        let foundNext = false;

        for (const neighbor in graph[current]) {
            if (!visited.has(neighbor) && graph[current][neighbor] > 0) {
                path.push(neighbor);
                current = neighbor;
                foundNext = true;
                break;
            }
        }

        if (!foundNext) {
            // If no unvisited neighbor can be reached, backtrack.
            path.pop();
            if (path.length === 0) {
                // No path found.
                return [];
            }
            current = path[path.length - 1];
        }
    }
    return path;
}

