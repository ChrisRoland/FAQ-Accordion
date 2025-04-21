const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const plusIcon = button.querySelector('.plus-icon');
    const minusIcon = button.querySelector('.minus-icon');

    content.classList.toggle('hidden');
    plusIcon.classList.toggle('hidden');
    minusIcon.classList.toggle('hidden');
  });
});

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    accordionButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        const otherContent = otherButton.nextElementSibling;
        const otherPlusIcon = otherButton.querySelector('.plus-icon');
        const otherMinusIcon = otherButton.querySelector('.minus-icon');

        otherContent.classList.add('hidden');
        otherPlusIcon.classList.remove('hidden');
        otherMinusIcon.classList.add('hidden');
      }
    });
  });
});