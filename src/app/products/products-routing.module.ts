import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page.component';

const routes: Routes = [
  {
    path: 'basics',
    component: BasicsPageComponent,
  },
  {
    path: 'numbers',
    component: NumbersPageComponent,
  },
  {
    path: 'uncommon',
    component: CommonPageComponent,
  },
  {
    path: 'custom',
    component: CustomPageComponent,
  },
  {
    path: '**',
    redirectTo: 'basics',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
