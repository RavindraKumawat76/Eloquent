class Group {
    constructor() {
      this.members = [];
    }
   
    add(value) {
      if (!this.has(value)) {
        this.members.push(value);
      }
    }
   
    delete(value) {
      this.members = this.members.filter(v => v !== value);
    }
   
    has(value) {
      return this.members.includes(value);
    }
   
    static from(collection) {
      let group = new Group;
      for (let value of collection) {
        group.add(value);
      }
      return group;
    }
   
    [Symbol.iterator]() {
      return new GroupIterator(this);
    }
   }

Group.prototype[Symbol.iterator] = function*() {
    for (let i = 0; i < this.members.length; i++) {
      yield this.members[i];
    }
  };

for (let value of Group.from(["a", "b", "c", "f"])) {
   console.log(value);
}
