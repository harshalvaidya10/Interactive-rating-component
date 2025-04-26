let selectedRating = null; // To store which rating was clicked

// Attach event listener to all rating buttons
const ratingButtons = document.querySelectorAll(".ratingButtons input");

ratingButtons.forEach(button => {
    button.addEventListener("click", function() {
        selectedRating = this.value;  // Save the clicked button's value
    });
});

document.getElementById("submitButton").onclick = function() {
    if (!selectedRating) {
        alert("Please select a rating before submitting!");
        return;
    }

    document.getElementById("box").innerHTML = `
    <img src="images/illustration-thank-you.svg" alt="Thank you Image" style="background-color: rgb(35, 40, 50);">
    <p style="color: rgb(225, 120, 50); margin-top: 30px; display: inline-block; width: auto; background-color: rgb(40, 45, 55);
      border: 5px; border-radius: 50px;">You selected ${selectedRating} out of 5</p>
    <h2 style="color: white; margin-top: 35px; font-weight: 500; background-color: rgb(35, 40, 50); margin-bottom: 20px;">Thank you!</h2>
    <p style="color: #b1aeaeab; background-color: rgb(35, 40, 50); font-size: small; line-height: 21px;">We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>
    `;

    document.getElementById("box").style.textAlign = "center";
}
