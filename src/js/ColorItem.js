import ClipboardJS from 'clipboard';

class ColorItem {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.color = ColorItem.getRandomHexColor();
    this.inlineStyle = `width: ${this.width}px; height: ${this.height}px; background-color: ${this.color};`;
    this.item = this.createItem();
    this.textNode = this.item.querySelector('.color-items__item-text');
  }

  static getRandomHexColor() {
    let hexColor = '#';
    const validHexChars = '0123456789abcdef';

    for (let i = 0; i < 6; i += 1) {
      hexColor += validHexChars.charAt(Math.floor(Math.random() * validHexChars.length));
    }

    return hexColor;
  }

  addCopyOnClick(element) {
    const clipboard = new ClipboardJS(element, {
      text: () => this.color,
    });

    clipboard.on('success', () => {
      this.textNode.innerText = 'copied!';

      setTimeout(() => {
        this.textNode.innerText = this.color;
      }, 4000);
    });
  }

  createItem() {
    const colorItemWrapper = document.createElement('div');
    colorItemWrapper.classList.add('color-items__item-wrapper');
    colorItemWrapper.setAttribute('data-clipboard-text', this.color);

    colorItemWrapper.innerHTML = `
      <div class="color-items__item" style="${this.inlineStyle}">
        <div class="color-items__item-text">${this.color}</div>
      </div>`;

    this.addCopyOnClick(colorItemWrapper);

    return colorItemWrapper;
  }
}

export default ColorItem;
