const buttons = document.querySelectorAll('.button');
const picture = document.querySelectorAll('.picture');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const buttonSelected = document.querySelector('.selected');
        buttonSelected.classList.remove('selected');

        button.classList.add('selected');

        const pictureActive = document.querySelector('.active');
        pictureActive.classList.remove('active');

        picture[index].classList.add('active')
    });
});