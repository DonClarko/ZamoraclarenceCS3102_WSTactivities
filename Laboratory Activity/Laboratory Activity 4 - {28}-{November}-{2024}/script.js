function toggleInfo(selectedCard) {
    const allCards = document.querySelectorAll('.card');
    const selectedInfo = selectedCard.querySelector('.info');

    const isAlreadyOpen = selectedInfo.style.display === 'block';

    allCards.forEach((card) => {
        const info = card.querySelector('.info');
        info.style.display = 'none';
    });

    if (!isAlreadyOpen) {
        selectedInfo.style.display = 'block';
    }
}
