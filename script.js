document.addEventListener("DOMContentLoaded", function () {
    // Get all the flip buttons
    const flipButtons = document.querySelectorAll(".flip-btn");

    // Add event listener to each button
    flipButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Get the parent flashcard div
            const flashcard = button.closest(".flashcard");
            const card = flashcard.querySelector(".card");

            // Toggle the 'flipped' class on the card to trigger the flip
            card.classList.toggle("flipped");
        });
    });
});
