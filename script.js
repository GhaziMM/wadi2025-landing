function scrollCards(direction) {
  const container = document.getElementById('cardsContainer');
  const scrollAmount = 200;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
