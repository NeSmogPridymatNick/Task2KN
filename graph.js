'use strict';
class Graph {
    constructor(fileName) {
        let fs = require('fs');
        try {
            this.data = fs.readFileSync(fileName, 'utf8');
        } catch (err) {
            err.message;
        }
        this.len = 0;
    }

    parseFile() {
        this.data = this.data.split('\n');
        for (var i = 0; i < this.data.length; i++) {
            this.data[i] = this.data[i].replace(/\r/, '');
        }
    }

    toSpis() {
        let graph = {};
        for (let i = 0; i < this.data.length; i++) {
            this.len++;
            let arr = this.data[i].split(' ');
            for (let j = 1; j < arr.length; j++) {
                if (arr[0] in graph) {
                    graph[arr[0]].push(parseInt(arr[j]));
                } else {
                    graph[arr[0]] = [];
                    if (arr[j] != undefined) {
                        graph[arr[0]].push(parseInt(arr[j]));
                    }
                }
            }
        }
        return graph;
    }
    getLengthGraph() {
        return this.len;
    }

    getGraph() {
        this.parseFile();
        return this.toSpis();
    }
}
module.exports.Graph = Graph;