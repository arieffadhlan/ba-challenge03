class App {
	constructor() {
		this.driverType = document.getElementById("input-driver-type");
		this.AvailableAt = document.getElementById("input-available-at");
		this.PickUpTime = document.getElementById("input-pick-up-time");
		this.Capacity = document.getElementById("input-capacity");
		this.searchBtn = document.getElementById("search-btn");
		this.carCards = document.getElementById("cars-cards");
	}

	async init() {
		await this.load();
		this.searchBtn.onclick = this.search;
	}

	search = async () => {
		this.clear();

		const driverType = this.driverType.value;
		const availableAt = this.AvailableAt.value;
		const pickUpTime = this.PickUpTime.value;
		const capacity = isNaN(parseInt(this.Capacity.value)) ? 0 : parseInt(this.Capacity.value);

		if (!driverType || !availableAt || !pickUpTime) {
			alert("Anda diharapkan mengisi semua form!");
			this.init().then(this.run);
		} else {
			const dateTime = new Date(`${availableAt} ${pickUpTime}`);
			this.filterCar(dateTime, capacity);
		}
	}

	async load() {
		const cars = await Binar.listCars();
		Car.init(cars);
	}

	run = () => {
		Car.list.forEach((car) => {
			const node = document.createElement("div");
			node.innerHTML = car.render();
			this.carCards.appendChild(node);
		});
	};

	clear = () => {
		let child = this.carCards.firstElementChild;

		while (child) {
			child.remove();
			child = this.carCards.firstElementChild;
		}
	};

	filterCar = async (dateTime, capacity) => {
		let cars;

		if (capacity > 0) {
			cars = await Binar.listCars((car) => {
				const available = car.available;
				const dateFilter = car.availableAt >= dateTime;
				const capacityFilter = car.capacity >= capacity;
				return available && dateFilter && capacityFilter;
			});
		} else {
			cars = await Binar.listCars((car) => {
				const available = car.available;
				const dateFilter = car.availableAt >= dateTime;
				return available && dateFilter;
			});
		}

		if (cars.length !== 0) {
			Car.init(cars);
			this.run();
		} else {
			const node = document.createElement("div");
			node.className = "d-flex justify-content-center align-items-center";
			node.style.cssText = "grid-column: span 3 / span 3;";
			node.innerHTML = "<h4 class='text-danger'>Mohon maaf, data mobil tidak ditemukan.</h4>";
			this.carCards.appendChild(node);
		}
	}
}
