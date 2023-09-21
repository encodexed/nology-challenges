const renderUserInfo = async () => {
	const res = await fetch("https://randomuser.me/api");
	const data = await res.json();
	// console.log(data.results[0]);
	const { name, gender, location, phone } = user.results[0];
	const fields = document.querySelectorAll(".generated-field");
	fields.forEach((field) => {});
};

document.querySelector("button").addEventListener("click", (e) => {
	renderUserInfo();
});
