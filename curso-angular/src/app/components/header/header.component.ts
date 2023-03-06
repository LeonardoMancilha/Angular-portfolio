import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ismenuOpen = false;
  clickMenu(): void {
    this.ismenuOpen = !this.ismenuOpen;
  }
}
