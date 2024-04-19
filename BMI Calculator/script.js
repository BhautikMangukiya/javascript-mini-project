let form = document.querySelector("form");

// use submit event 

form.addEventListener("submit", function () {
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

// condition chek

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "please give a valid weight";
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

// submit result div

    result.innerHTML = "BMI : " + bmi;
  }
});
