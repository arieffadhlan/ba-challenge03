class Car {
	static list = [];

	static init(cars) {
		this.list = cars.map((i) => new this(i));
	}

	constructor({
		id,
		plate,
		manufacture,
		model,
		image,
		rentPerDay,
		capacity,
		description,
		transmission,
		available,
		type,
		year,
		options,
		specs,
		availableAt,
	}) {
		this.id = id;
		this.plate = plate;
		this.manufacture = manufacture;
		this.model = model;
		this.image = image;
		this.rentPerDay = rentPerDay;
		this.capacity = capacity;
		this.description = description;
		this.transmission = transmission;
		this.available = available;
		this.type = type;
		this.year = year;
		this.options = options;
		this.specs = specs;
		this.availableAt = availableAt;
	}

	render() {
		return `
			<div class="cars-card d-flex flex-column rounded-3 bg-white">
				<img src="${this.image}" alt="${this.manufacture}/${this.model}" class="cars-card__image">
				<div class="cars-card__body d-flex flex-column">
					<div class="cars-card__bio d-flex flex-column gap-2">
						<span class="cars-card__model text-black">
							${this.manufacture}/${this.model}
						</span>
						<h1 class="cars-card__price mb-0 fs-6 lh-base fw-bold">
							Rp ${this.rentPerDay.toLocaleString("id-ID")} / hari
						</h1>
						<p class="cars-card__description mb-0 fw-light">
							${this.description}
						</p>
					</div>
					<div class="cars-card__detail d-flex flex-column">
						<div class="cars-card__detail-capacity d-flex align-items-center">
							<img class="cars-card__icon me-2" src="icons/users.svg" alt="Capacity">
							<span class="cars-card__capacity fw-light">${this.capacity} orang</span>
						</div>
						<div class="cars-card__detail-transmission d-flex align-items-center">
							<img class="cars-card__icon me-2" src="icons/gear.svg" alt="Transmission">
							<span class="cars-card__transmission fw-light">${this.transmission}</span>
						</div>
						<div class="cars-card__detail-year d-flex align-items-center">
							<img class="cars-card__icon me-2" src="icons/calendar.svg" alt="Year">
							<span class="cars-card__year fw-light">Tahun ${this.year}</span>
						</div>
					</div>
					${this.available ? 
						'<button class="cars-card__button btn-cta">Pilih Mobil</button>'
					: 
						'<button class="cars-card__button btn-cta btn-cta-disabled">Tidak Tersedia</button>'
					}
				</div>
			</div>
		`;
	}
}
