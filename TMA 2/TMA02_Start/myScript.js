/*!
Your Javascript here
*/

window.onload = function() {
    var title = "Part-Time Undergraduate Programmes";
    var content = "Our University offers part-time undergraduate programmes at a basic " +
      "degree level as well as programmes that lead to a direct honours degree. " +
      "The academic year comprises 2 semesters, January to June and July to " +
      "December. If you read the maximum permitted study load every semester, " +
      "you can complete a basic undergraduate degree programme in 3 years, or " +
      "an honours degree in 4 years. You may choose to take up to 8 years to complete the degree.";
      
    // Get the elements to display the content in
    var titleElement = document.getElementById("title");
    var contentElement = document.getElementById("FTText");
    
    // Set the text content of the elements to the content strings
    titleElement.textContent = title;
    contentElement.textContent = content;

  }


// Creating a variable to store the button
var button = document.getElementById("button");


// Getting the side menu item elements
var partTimeUndergrad = document.getElementById("parttime-undergrad");
var fullTimeUndergrad = document.getElementById("fulltime-undergrad");

// Adding event listeners to the menu items

// For partTimeUndergrad
partTimeUndergrad.addEventListener("click",function()
{
    var title = "Part-Time Undergraduate Degree Programme";
    var content = "Our University offers part-time undergraduate programmes at a basic " +
      "degree level as well as programmes that lead to a direct honours degree. " +
      "The academic year comprises 2 semesters, January to June and July to " +
      "December. If you read the maximum permitted study load every semester, " +
      "you can complete a basic undergraduate degree programme in 3 years, or " +
      "an honours degree in 4 years. You may choose to take up to 8 years to complete the degree.";

    // Get the elements to display the content in
    var titleElement = document.getElementById("title");
    var contentElement = document.getElementById("FTText");

      // Displaying the elements in their boxes:
      titleElement.textContent = title;
      contentElement.textContent = content;

    // Banner Image Swapping Logic

    // Targeting the banner image:
    var bannerImage = document.querySelector('#banner img');
    bannerImage.src = "images/pt_undergrad.png";


        // Creating a variable to store the button
        const button = document.querySelector("#prog-section button");
      
        button.addEventListener("click", function() {
        window.open("https://www.suss.edu.sg/part-time-undergraduate", "_blank");
        })



});

// for fullTimeUndergrad:
fullTimeUndergrad.addEventListener("click",function(){
    var title = "Full-Time Undergraduate Degree Programme";
    var content = "Catering to fresh school leavers, SUSS full-time " +
    "undergraduate programmes provide a unique " +
    "curriculum which enables you to reach your goals " +
    "while creating a positive impact in society. Our" + 
    "curriculum equips you with the three essential qualities " +
    "of Head, Heart and Habit that enable you to reach your " +
    "goals while making a positive impact in society.";

    // Get the elements to display the content in
    var titleElement = document.getElementById("title");
    var contentElement = document.getElementById("FTText");

      // Displaying the elements in their boxes:
      titleElement.textContent = title;
      contentElement.textContent = content;
      
      // Targeting the banner image:
      var bannerImage = document.querySelector('#banner img');
      bannerImage.src = "images/ft_undergrad.png";

      // Creating a variable to store the button
      const button = document.querySelector("#prog-section button");
      
      button.addEventListener("click", function() {
        window.open("https://www.suss.edu.sg/full-time-undergraduate", "_blank");
      })
});

// Rating website function
const ratingDiv = document.getElementById("rating");

// Minus Button Function
const minus = document.createElement("button");
minus.innerHTML ="-";
minus.style.width ="30px";
minus.style.height ="30px";
// Rating website logic function:
minus.addEventListener("click", () => {
    if (parseInt(score.innerHTML) >1)//score cannot go below 1
    {
        score.innerHTML = parseInt(score.innerHTML)-1;
    }
});
ratingDiv.appendChild(minus);

// Score function 
const score = document.createElement("score");
score.innerHTML = "1";
score.style.padding = "20px";
ratingDiv.appendChild(score);


// Add Button Function
const add = document.createElement("button");
add.innerHTML ="+";
add.style.width = "30px";
add.style.height = "30px";
add.addEventListener("click", () => {
    if (parseInt(score.innerHTML) <5)//score cannot go above 5
    {
        score.innerHTML = parseInt(score.innerHTML)+1;
    }
});
ratingDiv.appendChild(add);

////////////////////////////////////////////////////////////////
// Rating submit button function
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () =>
{
  const final_score = parseInt(score.innerHTML);
  let message = "";
  if (final_score === 1)
  {
    message = "Thank you for your rating! You have rated our website as very poor design";
  }
  else if (final_score === 2)
  {
    message = "Thank you for your rating! You have rated our website as poor design";
  }
  else if (final_score == 3)
  {
    message = "Thank you for your rating! You have rated our website as average design";
  }
  else if (final_score == 4)
  {
    message = "Thank you for your rating! You have rated our website as good design";
  }
  else if (final_score == 5)
  {
    message = "Thank you for your rating! You have rated our website as awesome design";
  }
  alert(message);
});

// Additional feature function:
// User control and freedom - Include a back to homepage button. This will be the SUSS logo at the top of the page.
const homeButton = document.getElementById("SUSS");
homeButton.addEventListener("click", function()
{
  window.open("https://www.suss.edu.sg/", "_blank");
});