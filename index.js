let readGraph = require('./graph.js');
class DFS {
    constructor(finish, labirintName) {
        let l  = new readGraph.Graph(labirintName);
        this.labirint = l.getGraph();
        this.mark = [];
        for (let i = 0; i < l.getLengthGraph(); i++) {
            this.mark.push(0);
        }
    }

    dfs(start, finish) {
        let st = [start];
        while (st.length != 0) {
            let currentVertex = st.pop();
            console.log(currentVertex);
            if (currentVertex === finish) {
                return 'Пусть есть';
            }
            for (let i = 0; i < this.labirint[currentVertex + ''].length; i++) {
                if (this.mark[this.labirint[currentVertex + ''][i]] === 0) {
                    st.push(this.labirint[currentVertex + ''][i]);
                    this.mark[this.labirint[currentVertex + ''][i]] = 1;
                }
            }
        }
        return 'Пути нет';
    }
}
