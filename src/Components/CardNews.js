class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');
    
    const cardLeft = document.createElement('div');
    componentRoot.setAttribute('class', 'card-left');
    
    const autor = document.createElement('span');
    autor.textContent = 'By ' + this.getAttribute("autor");
    
    const linkTitle = document.createElement('a');
    const paragrafo = documento.createElement('p');
    
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(paragrafo);

    const cardRight = document.createElement('div');
    componentRoot.setAttribute('class', 'card-right');

    const newsImage = document.createAttribute('img');
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {

  }
}

customElements.define('card-news', CardNews);