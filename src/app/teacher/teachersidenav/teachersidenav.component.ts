import { Component, OnInit } from '@angular/core';
import { Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-teachersidenav',
  templateUrl: './teachersidenav.component.html',
  styleUrls: ['./teachersidenav.component.scss']
})
export class TeachersidenavComponent implements OnInit {
  theme: Theme = 'light-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.initializeTheme();
  }
  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }
  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);
}
export type Theme = 'light-theme' | 'dark-theme';

