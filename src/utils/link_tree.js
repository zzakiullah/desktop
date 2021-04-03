/* The LinkTree class represents a group of links used
 * for navigation.
 *
 */

class Link {
    constructor(t, u) {
        this.title = t;
        this.url = u;
        this.children = [];
    }
    addChild(c) {
        this.children.push(c);
    }
}

class LinkTree {
    constructor() {
        this.tree = [];
    }
    addLink(link) {
        this.tree.push(link);
    }
}
