import '../scss/styles.scss';

import ColorItem from './ColorItem';

document.addEventListener('DOMContentLoaded', () => {
  const regenerateButton = document.querySelector('#regenerateButton');
  const colorItemsContainer = document.querySelector('.color-items');

  const numberOfColors = 20;
  const colorItemWidth = 110;
  const colorItemHeight = 110;

  function generateColors() {
    for (let i = 0; i < numberOfColors; i += 1) {
      const colorItem = new ColorItem(colorItemWidth, colorItemHeight);

      colorItemsContainer.append(colorItem.createItem());
    }
  }

  function removeAllColors() {
    colorItemsContainer.innerHTML = '';
  }

  function removeAndGenerate() {
    removeAllColors();
    generateColors();
  }

  regenerateButton.addEventListener('click', removeAndGenerate);

  removeAndGenerate();
});
