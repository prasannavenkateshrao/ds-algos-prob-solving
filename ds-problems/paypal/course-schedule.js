/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
*/
var canFinish = function(numCourses, prerequisites){
    //step 1 build the graph
    let graph = {};
    for(let i=0;i<numCourses;i++){
        graph[i] = [];
    }
    for(let i=0;i<prerequisites.length;i++){
        let [course, pre] = prerequisites[i];
        graph[pre].push(course);
    }
    //visited array to track state, 0 = unvisited, 1 = visiting, 2 = visited
    let visited = new Array(numCourses).fill(0);
    //step 2 dfs function
    function hasCycle(course){
        if(visited[course] === 1) return true;
        if(visited[course] === 2) return false;
        visited[course] = 1;
        for(const pre of graph[course]){
            if(hasCycle(pre)) return true;
        }
        visited[course] = 2;
        return false;
    }
    //check each course
    for(let i=0;i<numCourses;i++){
        if(hasCycle(i)) return false;
    }
    return true;
}

// Example usage:
console.log(canFinish(2, [[1, 0]])); // Output: true
console.log(canFinish(2, [[1, 0], [0, 1]])); // Output: false