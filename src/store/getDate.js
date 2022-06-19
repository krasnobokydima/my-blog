export function formatData(date) {
	const currentDate = new Date(date);
	// const mounth = currentDate.toLocaleString("default", { month: "short" });
	let mounth = currentDate.getMonth();
	mounth = mounth < 10 ? '0' + mounth : mounth;
	let day = currentDate.getDay();
	day = day < 10 ? '0' + day : day;
	const year = currentDate.getFullYear();

	return `${day}.${mounth}.${year}`;
}