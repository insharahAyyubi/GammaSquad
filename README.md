
# Finance Tracker

The project aims to facilitate its users to manage their financial expenditures and sources of income. 
 

## Technologies used

HTML, CSS, JavaScript, GitHub Copilot


## Features

- Responsive 
- Cross platform

  
## Project Architechture

![App Screenshot](https://github-production-user-asset-6210df.s3.amazonaws.com/94756953/248468316-2d937039-150c-4e8a-a10d-24a315ceaa1f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230624%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230624T112334Z&X-Amz-Expires=300&X-Amz-Signature=3335d5c565185e79c200ced6ee2e1983a17be5cb5adb7784d1ad13a4ea56bc28&X-Amz-SignedHeaders=host&actor_id=94756953&key_id=0&repo_id=656792041)


- The user must login with his/her name and initial income
- If already logged in, the user can view: the account statement, expense structure through pie chart, overview of latest records
- Add an expense or income entry



## GitHub usage

- This project delves into our experience of utilizing GitHub as a collaborative platform. By recounting specific instances and highlighting key features, this analysis showcases how GitHub facilitated seamless collaboration, enhanced communication, and streamlined project development. Through this exploration, the project aims to illustrate the tangible benefits of GitHub in fostering efficient teamwork and achieving project success.

- GitHub's version control system allowed for easy tracking of changes, seamless merging of code, and the ability to create branches for experimental or separate development. It also helped in simultaneous editing and conflict resolution which resulted in efficient collaboration, minimized delays, and prevented code conflicts. In addition, its code review, issue tracking, and communication features improved collaboration, streamlined project development, and contributed to the overall success of the project.

### GitHub Copilot

This project explores the utilization of GitHub Copilot, an AI-powered code generation tool, and its impact on development efficiency and productivity. By recounting personal experiences and highlighting key features, this analysis showcases how GitHub Copilot assisted in generating code suggestions, automating repetitive tasks, and accelerating the development process. The project aims to illustrate the tangible benefits of GitHub Copilot in improving code quality, reducing development time, and supporting creative problem-solving.

- GitHub Copilot is an AI-powered code generation tool developed by GitHub and OpenAI. It generates code suggestions and assists in autocompletion during the development process. 

- The tool analyses code context and provides relevant suggestions, saving time and effort. It helps automate repetitive coding tasks, such as boilerplate code generation or common function implementations. 

- Suggests potential solutions or alternative approaches to coding challenges, providing developers with new insights and ideas.

- It supports various programming languages and its ability to adapt to different coding styles and conventions. 

### Our Usecases: 

#### Creating the pop-up of add category

```html
<div class="modal fade" id="categoryModal" tabindex="-1" role="dialog" aria-labelledby="categoryModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="categoryModalLabel">Add Category</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="categoryType">Category Type:</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="categoryType" id="expenseRadio" value="expense" checked>
                <label class="form-check-label" for="expenseRadio">
                  Expense
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="categoryType" id="incomeRadio" value="income">
                <label class="form-check-label" for="incomeRadio">
                  Income
                </label>
              </div>
            </div>
            <div class="form-group">
              <label for="category">Category:</label>
              <select class="form-control" id="category"></select>
            </div>
            <div class="form-group">
              <label for="amount">Amount:</label>
              <input type="text" class="form-control" id="amount">
            </div>
            <div class="form-group">
              <label for="note">Note:</label>
              <textarea class="form-control" id="note" rows="3"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
            <button type="submit" id="submitButton">Submit</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

```

#### Adding Submit Button functionality in JavaScript

```html
document.addEventListener('DOMContentLoaded', function() {
  // Create variables for all the fields
  var categoryTypeRadios = document.querySelectorAll('input[name="categoryType"]');
  var categorySelect = document.getElementById('category');
  var amountInput = document.getElementById('amount');
  var noteInput = document.getElementById('note');

  // Function to update the dropdown options based on the selected category type
  function updateDropdownOptions() {
    var categoryType = document.querySelector('input[name="categoryType"]:checked').value;

    // Clear existing options
    categorySelect.innerHTML = '';

    // Add new options based on the selected category type
    if (categoryType === 'expense') {
      for (var key in Expenses) {
        if (Expenses.hasOwnProperty(key)) {
          var option = document.createElement('option');
          option.value = key;
          option.textContent = Expenses[key];
          categorySelect.appendChild(option);
        }
      }
    } else if (categoryType === 'income') {
      for (var key in Incomes) {
        if (Incomes.hasOwnProperty(key)) {
          var option = document.createElement('option');
          option.value = key;
          option.textContent = Incomes[key];
          categorySelect.appendChild(option);
        }
      }
    }
  }

  // Add event listener to the radio buttons
  for (var i = 0; i < categoryTypeRadios.length; i++) {
    categoryTypeRadios[i].addEventListener('change', updateDropdownOptions);
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the fields
    var categoryType = document.querySelector('input[name="categoryType"]:checked').value;
    var category = categorySelect.value;
    var amount = parseFloat(amountInput.value);
    var note = noteInput.value;

    // Validate the amount field (accepts numbers only)
    if (isNaN(amount)) {
      alert('Please enter a valid amount.');
      return;
    }

    // Perform further processing or validation as needed
    // ...

    // Log the values for testing
    console.log('Category Type:', categoryType);
    console.log('Category:', category);
    console.log('Amount:', amount);
    console.log('Note:', note);
  }

  // Add event listener to the form submit button
  var submitButton = document.querySelector('button[type="submit"]');
  submitButton.addEventListener('click', handleSubmit);
});

```
## Authors

- [@MohdArsalan](https://github.com/simplyarsa)
- [@NooreAin](https://github.com/ain-py)
- [@SaniaAhmad](https://www.github.com/saniaahmad6)
- [@InsharahAyyubi](hhttps://github.com/insharahAyyubi)

