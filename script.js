function calculateBMI() {
  const heightInput = document.getElementById("height").value;
  const weightInput = document.getElementById("weight").value;
  const result = document.getElementById("result");
  const bgimg = document.getElementsByTagName("html");

  const height = parseFloat(heightInput);
  const weight = parseFloat(weightInput);

  let bmi = weight / height ** 2;

  const roundedBMI = bmi * Math.pow(10, 4);
  const finalBMI = roundedBMI.toPrecision(4);

  var message = "Your BMI is: " + finalBMI;

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.textContent = "Please provide correct height and weight values.";
    result.style.color = "red";
    return;
  }

  if (finalBMI <= 18.5) {
    message += " underweight.";
    result.style.color = "red";
    document.body.style.background = "#ffcccc";
  } else if (finalBMI <= 25) {
    message += " correct weight.";
    result.style.color = "green";
    document.body.style.background = "#ccffcc";
  } else if (finalBMI <= 30) {
    message += " overweight.";
    result.style.color = "orange";
    document.body.style.background = "#fff0b3";
  } else {
    message += " obesity.";
    result.style.color = "red";
    document.body.style.background = "#ff9999";
  }
  result.textContent = message;
}
