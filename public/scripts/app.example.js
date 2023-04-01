class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    // this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");

    this.inputAvailableAt = document.getElementById("input-available-at");
    this.inputPickUpTime = document.getElementById("input-pick-up-time");
    this.inputCapacity = document.getElementById("input-capacity");
    this.searchBtn = document.getElementById("search-btn");
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.searchBtn.onclick = this.search;
  }

  search = async () => {
    this.clear();
    const availableAtValue = this.inputAvailableAt.value;
    const pickUpTimeValue = this.inputPickUpTime.value;
    const capacityValue = this.inputCapacity.value;

    if (!availableAtValue || !pickUpTimeValue || !capacityValue) {
      alert("mohon isi semua");
    }
    
    const dateTime = new Date(`${availableAtValue} ${pickUpTimeValue}`);

    const filterer = (car) => {
      const dateFilter = car.availableAt > dateTime;
      const capacityFilter = car.capacity > capacityValue;
      console.log(car.availableAt);
      return dateFilter && capacityFilter;
    }

    const cars = await Binar.listCars(filterer);
    Car.init(cars);

    if (cars.length === 0) {
      const node = document.createElement("div");
      node.innerHTML = "<strong>Mohon maaf, Tidak ada mobil</strong>";
      this.carContainerElement.appendChild(node)
    } else {
      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node)
      })
    }
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
