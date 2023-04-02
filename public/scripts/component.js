class Component {
    constructor() {
        if (this.constructor.name === Component) {
            throw new Error("Tidak bisa membuat instance dari Abstract Class!");
        }
    }
  
    render() {
        console.log("Disini tempat me-render HTML");
    }
}