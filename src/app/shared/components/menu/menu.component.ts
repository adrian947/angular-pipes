import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  public items: MenuItem[] = [];
  constructor(private router: Router) {}
  ngOnInit() {
    this.items = [
      {
        label: 'Pipes of Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Dates',
            icon: 'pi pi-align-left',
            command: () => {
              this.router.navigate(['/products/basics']);
            },
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            command: () => {
              this.router.navigate(['/products/numbers']);
            },
          },
          {
            label: 'Not Common',
            icon: 'pi pi-globe',
            command: () => {
              this.router.navigate(['/products/uncommon']);
            },
          },
        ],
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Others',
            icon: 'pi pi-cog',
            command: () => {
              this.router.navigate(['/products/custom']);
            },
          },
        ],
      },
    ];
  }
}
