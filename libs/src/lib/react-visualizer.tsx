import React from 'react';
import ReactDOM, { Root } from 'react-dom/client';

import ReactDataVisualizer, {
  IReactDataVisualizer,
} from './ReactDataVisualizer';

export interface IChartData {
  aspectRatio: string;
  color: string;
  separator?: string;
}

class ReactVisualizerELem extends HTMLElement {
  public mountPoint: HTMLElement | null = null;

  public static observedAttributes = ['creator'];

  private rootDom: Root | null = null;

  private _chartData: IReactDataVisualizer | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set chartData(data: IChartData) {
    const [first, last] = data.aspectRatio.trim().split(data.separator || ':');

    const props: IReactDataVisualizer = {};

    if (first && last) props.aspect = Number(first) / Number(last);

    if (data.color) props.color = data.color;

    this._chartData = props;

    this.mountReactApp();
  }

  connectedCallback() {
    this.mountReactApp();
  }

  disconnectedCallback() {
    if (this.rootDom) this.rootDom.unmount();
  }
  mountReactApp() {
    if (!this.rootDom) {
      // this.mountPoint = document.createElement('div');

      this.mountPoint = document.getElementById('react-app') as HTMLElement;

      if (!this.mountPoint) {
        const div = document.createElement('div');

        div.setAttribute('id', 'react-app');

        document.body.appendChild(div);

        this.mountPoint = div;
      }

      // if (this.shadowRoot) this.shadowRoot.appendChild(this.mountPoint);

      this.rootDom = ReactDOM.createRoot(this.mountPoint);
    }

    this.rootDom.render(<ReactDataVisualizer {...this._chartData} />);
  }
}

customElements.define('react-visualizer', ReactVisualizerELem);
