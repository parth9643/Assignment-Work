const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");
const yearSelect = document.getElementById("year");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for (let i = 0; i < months.length; i++) {
    const option = document.createElement("option");
    option.value = i + 1;
    option.textContent = months[i];
    monthSelect.appendChild(option);
}

const dayInput = document.getElementById("day");

dayInput.addEventListener("input", () => {
    const enteredDay = parseInt(dayInput.value, 10);

    if (enteredDay > 31) {
        dayInput.value = "31";
    }
    if (enteredDay < 1) {
        dayInput.value = "1";
    }
});


const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= currentYear - 100; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
}

const form = document.getElementById("registration-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
});
const checkbox = document.getElementById("indian-citizen-yes");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        checkbox.classList.add("checked");
    } else {
        checkbox.classList.remove("checked");
    }
});

const checkboxYes = document.getElementById("indian-citizen-yes");
const checkboxNo = document.getElementById("indian-citizen-no");

checkboxYes.addEventListener("change", function () {
    if (checkboxYes.checked) {
        checkboxNo.checked = false;
    }
});

checkboxNo.addEventListener("change", function () {
    if (checkboxNo.checked) {
        checkboxYes.checked = false;
    }
});
