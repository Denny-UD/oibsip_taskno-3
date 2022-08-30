const getDegrees = document.querySelector("#degrees");
const getType = document.querySelector("#degrees-type");

const setResult = document.querySelector("#result");
const convert = document.querySelector("#convert");

function convertDegrees() {
	if (getType.value === "Fahrenheit") {
        setResult.value = `${(getDegrees.value - 32) * (5 / 9)}\u00B0 C`;
	} else {
		setResult.value = `${getDegrees.value * 1.8}\u00B0 F`;
	}
}

convert.addEventListener("click", convertDegrees);
