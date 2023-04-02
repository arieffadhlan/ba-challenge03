class Component {
    constructor() {
        if (this.constructor === Component) {
            throw new Error("Abstract class tidak bisa diinstansiasi!");
        }
    }
  
    render() {}
}