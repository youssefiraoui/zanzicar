import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSideBarVisible: boolean = false;
  /**
   *
   */
  constructor(private renderer: Renderer2) {}

  toggleSideNavBar() {
    this.isSideBarVisible = !this.isSideBarVisible;
    const body = document.querySelector('body');
    if (this.isSideBarVisible) {
      this.renderer.addClass(body, 'no-scroll');
    } else {
      this.renderer.removeClass(body, 'no-scroll');
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    // Check if sidebar is active and screen width is increased
    if (this.isSideBarVisible && window.innerWidth >= 1024) {
      this.isSideBarVisible = false; // Close the sidebar
    }
  }
}
