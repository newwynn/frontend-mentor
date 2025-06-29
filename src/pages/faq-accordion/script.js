// script.js

const buttons = document.querySelectorAll('.faq-accordion-content-btn');
let openContent = null;

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const content = btn.parentElement.nextElementSibling;
    const isOpen = content.classList.contains('active');

    if (openContent && openContent !== content) {
      toggleItem(openContent, false);
    }

    toggleItem(content, !isOpen);
    openContent = !isOpen ? null : content;
  });
});

function toggleItem(contentEl, open) {
  const btn = contentEl.previousElementSibling.querySelector('.faq-accordion-content-btn');
  const minus = btn.querySelector('.faq-accordion-content-minus');
  const plus = btn.querySelector('.faq-accordion-content-plus');

  if (open) {
    contentEl.classList.add('active');
    minus.classList.add('active');
    plus.classList.add('active');
  } else {
    contentEl.classList.remove('active');
    minus.classList.remove('active');
    plus.classList.remove('active');
  }
}
