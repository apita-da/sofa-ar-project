declare module 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js' {
  const ModelViewerElement: any;

  export { ModelViewerElement };
  }

  declare global {
  interface HTMLElementTagNameMap {
    'model-viewer': any;
  }
  }
