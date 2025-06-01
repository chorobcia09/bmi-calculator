function calculateBMI() {
  const heightInput = document.getElementById("height").value;
  const weightInput = document.getElementById("weight").value;
  const result = document.getElementById("result");

  const height = parseFloat(heightInput);
  const weight = parseFloat(weightInput);

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.textContent = "Please provide correct height and weight values.";
    result.style.color = "red";
    return;
  }

  const bmi = weight / (height / 100) ** 2;
  const finalBMI = bmi.toFixed(2);
  let message = "Your BMI is: " + finalBMI;

  if (bmi <= 18.5) {
    message += " (underweight)";
    result.style.color = "red";
    document.body.style.background = "#ffcccc";
  } else if (bmi <= 25) {
    message += " (correct weight)";
    result.style.color = "green";
    document.body.style.background = "#ccffcc";
  } else if (bmi <= 30) {
    message += " (overweight)";
    result.style.color = "orange";
    document.body.style.background = "#fff0b3";
  } else {
    message += " (obesity)";
    result.style.color = "red";
    document.body.style.background = "#ff9999";
  }

  result.textContent = message;
}
