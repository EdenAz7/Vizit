

const ratings = document.querySelectorAll('.rating');

  ratings.forEach(rating => {
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.classList.add('star');
      star.innerHTML = '★';
      star.addEventListener('click', () => rateQuestion(rating, i));
      rating.appendChild(star);
    }
  });

  function rateQuestion(rating, value) {
    const stars = rating.querySelectorAll('.star');
    stars.forEach((star, index) => {
      star.classList.toggle('active', index < value);
    });
  }

  function submitQuiz() {
    const values = Array.from(ratings).map(rating => {
      const stars = rating.querySelectorAll('.star');
      return Array.from(stars).filter(star => star.classList.contains('active')).length;
    });

    const average = values.reduce((acc, val) => acc + val, 0) / values.length;
    
    var badModal = document.getElementsByClassName("badModal");
    var goodModal = document.getElementsByClassName("goodModal");
    if (average >= 3.8) {
        setTimeout(() => {
            window.location.href = 'https://fr.trustpilot.com/evaluate/vizit-demenagement.fr';
          }, 2000);
          document.getElementById('quizForm').reset();
          goodModal.style.display = "block";
    } else {
        setTimeout(() => {
            document.body.innerHTML = '';
            setTimeout(() => {
              window.close()
            }, 1000)
          }, 3000);
          document.getElementById('quizForm').reset();
          badModal.style.display = "block";
    }
  }