// Check if the device is mobile or desktop
// if (window.innerWidth <= 768) {
//     document.getElementById("mobile-content").classList.remove("hidden");
// } else {
//     document.getElementById("desktop-content").classList.remove("hidden");
// }

// Check if the date is past October 25, 2023
const currentDate = new Date();
const releaseDate = new Date("2023-10-25");

if (currentDate > releaseDate) {
    document.getElementById("date-past-content").classList.remove("hidden");
}
