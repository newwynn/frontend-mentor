document.addEventListener('DOMContentLoaded', function () {
    const ratingCircles = document.querySelectorAll('.irc-rating-circle');
    const submitBtn = document.querySelector('.irc-submit-btn');
    const thankCard = document.querySelector('.irc-thank-card');
    const mainCard = document.querySelector('.irc-card:not(.irc-thank-card)');
    const selectedRatingSpan = document.getElementById('selected-rating');
    let selectedRating = 0;

    let loader = document.createElement('span');
    loader.className = 'irc-loader';
    loader.style.marginLeft = '0.5em';

    ratingCircles.forEach((circle, idx) => {
        circle.addEventListener('click', function () {
            ratingCircles.forEach(c => c.classList.remove('selected'));
            circle.classList.add('selected');
            selectedRating = idx + 1;
        });
    });

    submitBtn.addEventListener('click', function () {
        if (selectedRating === 0) {
            submitBtn.classList.add('shake');
            setTimeout(() => submitBtn.classList.remove('shake'), 500);
            return;
        }
        submitBtn.disabled = true;
        submitBtn.appendChild(loader);
        setTimeout(() => {
            mainCard.classList.add('irc-hidden');
            thankCard.classList.remove('irc-hidden');
            selectedRatingSpan.textContent = selectedRating;
            submitBtn.disabled = false;
            if (loader.parentNode === submitBtn) submitBtn.removeChild(loader);
        }, 1200);
    });
});
