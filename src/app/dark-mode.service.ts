import { Injectable } from '@angular/core';
import '../assets/dark-mode.min.css';

@Injectable()
export class DarkModeService {
  darkModeIsEnabled = false;

  constructor() { }

  toggleDarkMode() {
    if (!this.darkModeIsEnabled) {
      const css = require('../assets/dark-mode.min.css');
      const head = document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      style.type = 'text/css';
      style.id = 'dark-mode-style';
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);

      this.darkModeIsEnabled = true;
    } else {
      document.querySelector('#dark-mode-style').remove();
      this.darkModeIsEnabled = false;
    }
  }
}
