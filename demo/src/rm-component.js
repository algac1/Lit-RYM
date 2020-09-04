import { html, css, LitElement } from 'lit-element';

export class RmComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--rm-component-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      array1: {type:Array}
    };
  }

  constructor() {
    super();
   this.array1=[]; 
  }
  firstUpdated() {
    fetch("https://rickandmortyapi.com/api/character/")
    .then(r =>r.json())
      .then(r=>{
        this.array1=r.results;
      
      });
    
  }
  
  render() {
    return html`
      <h2>App Rick y Morty </h2>
      ${
        this.array1.map(item => html`
            <img src=${item.image} >
            <p> ${item.id} </p> 
            <p> ${item.name} </p> 
        `
        )
      }
    `;
  }
}

customElements.define ('rm-component',RmComponent);
