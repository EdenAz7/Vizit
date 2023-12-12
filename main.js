// Get the modal
var badModal = document.getElementById("badModal");
var goodModal = document.getElementById("goodModal");

document.getElementById('quizForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const q1 = parseInt(document.getElementById('q1').value);
  const q2 = parseInt(document.getElementById('q2').value);
  const q3 = parseInt(document.getElementById('q3').value);
  const q4 = parseInt(document.getElementById('q4').value);
  const q5 = parseInt(document.getElementById('q5').value);
  const sliders = document.querySelectorAll('input[type="range"]');
  sliders.forEach((slider) => {
    const spanId = slider.id + 'Value';
    const span = document.getElementById(spanId);
    span.textContent = slider.value; // Set initial value
    slider.addEventListener('input', function () {
      span.textContent = this.value;
    });
  });

  const average = (q1 + q2 + q3 + q4 + q5) / 5;

  if (average >= 3.5) {
    setTimeout(() => {
      window.location.href = 'https://fr.trustpilot.com/evaluate/nosdemenageurs.fr';
    }, 4000);
    document.getElementById('quizForm').reset();
    goodModal.style.display = "block";
  } else {
    // alert("C'est triste à entendre, nous essaierons de faire de notre mieux pour améliorer nos services.");
    setTimeout(() => {
      document.body.innerHTML = '';
      setTimeout(() => {
        window.close()
      }, 1000)
    }, 4000);
    document.getElementById('quizForm').reset();
    badModal.style.display = "block";
  }

});

function updateValue(spanId, value) {
  document.getElementById(spanId).textContent = value;
}



