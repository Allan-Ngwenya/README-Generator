//markdown for readme licenses
function licenseBadge(data) {
	const licenseType = data.license[0];
	let licenseString = " "
	if (licenseType === "MIT") {
		licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
	};
	if (licenseType === "GNU General Public License 2.0") {
		licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
	};
	if (licenseType === "Apache License 2.0") {
		licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
	};
	if (licenseType === "GNU General Public License 3.0") {
		licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
	};
	return licenseString
};