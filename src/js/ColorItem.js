class ColorItem {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  static getRandomHexColor() {
    let hexColor = '#';
    const validHexChars = '0123456789abcdef';

    for (let i = 0; i < 6; i += 1) {
      hexColor += validHexChars.charAt(Math.floor(Math.random() * validHexChars.length));
    }

    return hexColor;
  }

  createItem() {
    const colorItemWrapper = document.createElement('div');
    const colorItem = document.createElement('div');

    colorItemWrapper.classList.add('color-items__item-wrapper');
    colorItem.classList.add('color-items__item');

    colorItemWrapper.append(colorItem);

    colorItem.style.width = `${this.width}px`;
    colorItem.style.height = `${this.height}px`;
    colorItem.style.backgroundColor = ColorItem.getRandomHexColor();

    return colorItemWrapper;
  }
}

export default ColorItem;
