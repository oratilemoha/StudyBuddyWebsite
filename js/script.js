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

var galleryImage = document.querySelector(".gallery-image");
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.getElementById("lightboxImage");
var closeLightbox = document.getElementById("closeLightbox");

if (galleryImage) {

    galleryImage.onclick = function () {
        lightbox.style.display = "block";
        lightboxImage.src = galleryImage.src;
    };

    closeLightbox.onclick = function () {
        lightbox.style.display = "none";
    };
}
var enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.onsubmit = function (event) {
        event.preventDefault();

        var subject = document.getElementById("enquirySubject").value;

        alert("Thank you for your enquiry about " + subject + ". We will contact you soon.");
    };
}