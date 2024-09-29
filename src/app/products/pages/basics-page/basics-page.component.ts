import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
public nameLower: string = 'Adrian'
public nameUpper: string = 'Adrian'
public fullName: string = 'Adrian ADducChio'
public customDate: Date = new Date()
}
