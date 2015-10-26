'use strict';

class StylesSingleton {

  get colors() {
    return {
      ash: '#565a5c',
      azure: '#78c1ee',
      blue: '#68b1de',
      gray: '#d6d6d6',
      indigo: '#28719e',
      opaque: 'rgba(255, 255, 255, 0.875)',
      turquoise: '#c1d6d8',
      white: '#ffffff',
    };
  }

  get cards() {
    return {
      default: {
        backgroundColor: this.colors.white,
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: '1px',
      },
    };
  }

  get pages() {
    return {
      default: {
        display: 'flex',
        flexFlow: 'column',
        height: '100vh',
      },
    };
  }

  get zIndex() {
    return {
      modal: 900,
      overlay: 800,
      dropdown: 700,
    }
  }
}

var StyleConstants = new StylesSingleton();
