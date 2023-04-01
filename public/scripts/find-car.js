// Driver type
const driverTypeInput = document.getElementById("input-driver-type");
const driverTypeOptionContainer = document.getElementById("driver-type-options");
const driverTypeOptions = document.querySelectorAll(".driver-type-option");
const driverOptions = [...driverTypeOptions];

driverTypeInput.addEventListener("click", () => {
	if (driverTypeOptionContainer.classList.contains("d-none")) {
		driverTypeOptionContainer.classList.remove("d-none");
		driverTypeOptionContainer.classList.add("d-flex");
	} else {
		driverTypeOptionContainer.classList.remove("d-flex");
		driverTypeOptionContainer.classList.add("d-none");
	}
});

driverOptions.forEach((driverOption) => {
    driverOption.addEventListener("click", () => {
        driverTypeInput.value = driverOption.getAttribute("data-attr");
        driverTypeOptionContainer.classList.remove("d-flex");
        driverTypeOptionContainer.classList.add("d-none");
    });
});

// Pick Up Time
const pickUpTimeInput = document.getElementById("input-pick-up-time");
const pickUpTimeOptionContainer = document.getElementById("pick-up-time-options");
const pickUpTimeOptions = document.querySelectorAll(".pick-up-time-option");
const pickUpOptions = [...pickUpTimeOptions];

pickUpTimeInput.addEventListener("click", () => {
	if (pickUpTimeOptionContainer.classList.contains("d-none")) {
		pickUpTimeOptionContainer.classList.remove("d-none");
		pickUpTimeOptionContainer.classList.add("d-flex");
	} else {
		pickUpTimeOptionContainer.classList.remove("d-flex");
		pickUpTimeOptionContainer.classList.add("d-none");
	}
});

pickUpOptions.forEach((driverOption) => {
    driverOption.addEventListener("click", () => {
        pickUpTimeInput.value = driverOption.getAttribute("data-attr");
        pickUpTimeOptionContainer.classList.remove("d-flex");
        pickUpTimeOptionContainer.classList.add("d-none");
    });
});