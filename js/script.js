alert("Welcome to StudyBuddy");

var searchBox = document.getElementById("subjectSearch");
var list = document.querySelectorAll("#subjectList li");

if (searchBox) {

    searchBox.onkeyup = function () {

        var searchText = searchBox.value.toLowerCase();

        for (var i = 0; i < list.length; i++) {

            var subject = list[i].innerText.toLowerCase();

            if (subject.includes(searchText)) {
                list[i].style.display = "block";
            } else {
                list[i].style.display = "none";
            }
        }
    };
}

var bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.onsubmit = function (event) {

        event.preventDefault();

        alert("Your tutoring session has been booked successfully!");
    };
}

var contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.onsubmit = function (event) {

        event.preventDefault();

        alert("Thank you! Your message has been sent.");
    };
}
