export class GraphNode {
  constructor(name) {
    this.name = name;
    this.neighbors = [];
    this.random = Math.floor(Math.random() * 1000);
  }
  attach(node) {
    this.neighbors.push(node);
  }
  children() {
    let names = [];
    this.neighbors.forEach(n => {
      names.push(n.name);
    });
    return names;
  }
}

export class Interaction {
  constructor() {
    this.nodes = {};
    this.current = undefined;
  }

  set(state) {
    if (!(state in this.nodes)) {
      throw "State Does Not Exist: " + state;
    } else if (!~this.options().indexOf(state)) {
      throw "Cannot Flow to Next: " + state + " from " + this.current;
    }
    this.current = state;
  }

  options() {
    if (!this.current) {
      return Object.keys(this.nodes);
    }
    return this.nodes[this.current].children();
  }

  add(state, transitions) {
    let node;

    // Maybe create a new node
    if (state in this.nodes) {
      node = this.nodes[state];
    } else {
      node = new GraphNode(state);
      this.nodes[state] = node;
    }

    // Maybe attach new states
    transitions = transitions ? transitions : [];
    transitions.forEach(neighbor => {
      if (!(neighbor.name in this.nodes)) {
        this.add(neighbor);
      }
      this.nodes[node.name].attach(this.nodes[neighbor]);
    });
  }
}
