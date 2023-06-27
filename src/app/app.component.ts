import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  password = '';

  checkPasswordStrength() {
    const passwordLength = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /[!@#$%^&*.,()+=-_/|\\]/.test(this.password);
    const hasSymbols = /[0-9]/.test(this.password);

    if (passwordLength === 0) {
      return 'gray';
    } else if (passwordLength < 8) {
      return 'red';
    } else if (hasLetters && hasDigits && hasSymbols) {
      return 'strong';
    } else if ((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)) {
      return 'medium';
    } else if (hasLetters || hasDigits || hasSymbols) {
      return 'easy';
    } else {
      return 'gray';
    }
  }

  strengthColor(sectionIndex: number) {
    const strength = this.checkPasswordStrength();

    if (this.password.length === 0) {
      return '#E6EBF0';
    } else if (this.password.length < 8) {
      return '#F56C69';
    } else if (strength === 'easy' && sectionIndex == 0 ) {
      return '#F56C69';
    } else if (strength === 'medium' && sectionIndex < 2) {
      return '#f2ba49';
    } else if (strength === 'strong') {
      return '#66d569';
    } else {
      return '#E6EBF0';
    }
  }
}
