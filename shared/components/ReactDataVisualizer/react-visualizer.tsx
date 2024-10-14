import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';

import ReactDataVisualizer from '.';

export class ReactVisualizerELem extends HTMLElement {
  public mountPoint: HTMLDivElement | null = null;

  public static observedAttributes = ['creator'];

  private rootDom: Root | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback() {
    const creator: string = this.getAttribute('creator') as string;

    this.mountReactApp(creator);
  }
  disconnectedCallback() {
    if (this.rootDom) this.rootDom.unmount();
  }
  mountReactApp(creator: string) {
    if (!this.mountPoint) {
      this.mountPoint = document.createElement('div');

      if (this.shadowRoot) this.shadowRoot.appendChild(this.mountPoint);

      this.rootDom = ReactDOM.createRoot(this.mountPoint);

      this.rootDom.render(<ReactDataVisualizer creator={creator} />);
    }
  }
}

customElements.define('react-visualizer', ReactVisualizerELem);
