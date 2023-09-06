const checkBtn = document.querySelector("#btn");
const form = document.querySelector("form");
let allowed = 0;

checkBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const data = new FormData(form);
	const userAge = data.get("age");
	const userCountry = data.get("country");
	const userDrunk = data.get("drunk");

	// Check not drunk
	if (userDrunk > 3) {
		allowed = -1;
	} else {
		// Check not underage everywhere
		if (userAge < 18) {
			allowed = -1;
		} else {
			// Check if from USA
			if (userCountry === "USA") {
				if (userAge >= 21) {
					allowed = 1;
				} else {
					allowed = -1;
				}
			} else {
				allowed = 1;
			}
		}
	}

	updateStyle(allowed);
});

const updateStyle = (allow) => {
	const body = document.querySelector("body");
	const bottle = document.querySelector("img");

	if (allow === 1) {
		body.style.backgroundColor = "lightgreen";
		bottle.src = "./assets/green_beer.svg";
	} else if (allow === -1) {
		body.style.backgroundColor = "red";
		bottle.src = "./assets/red_beer.svg";
	}
};
