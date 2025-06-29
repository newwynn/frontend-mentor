document.addEventListener('DOMContentLoaded', () => {
    const target = 76;
    const duration = 1500;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = document.getElementById('score-counter');
    let frame = 0;

    const easeOutQuad = t => t * (2 - t);

    const countTo = () => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentValue = Math.round(target * progress);
        if (parseInt(counter.textContent, 10) !== currentValue) {
            counter.textContent = currentValue;
        }

        if (frame < totalFrames) {
            requestAnimationFrame(countTo);
        }
    };

    requestAnimationFrame(countTo);
});