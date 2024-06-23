import { Component } from '@angular/core';
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { INavData, menuData } from "./nav-data";
import { faHome, faTasks, faCheck, faPlus, faLock, faUnlock, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    FaIconComponent,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isFixed: boolean = false;
  isVisible: boolean = false;
  collapsed: boolean = false;

  navData: INavData[] = menuData
  // Ícones
  faXmark = faXmark;
  faBars = faBars;
  faHome = faHome;
  faTasks = faTasks;
  faCheck = faCheck;
  faPlus = faPlus;
  faLock = faLock;
  faUnlock = faUnlock;

  showSidebar() {
    this.collapsed = !this.collapsed;
  }
}
