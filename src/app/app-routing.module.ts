import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintsComponent } from './components/paints/paints.component';
import { PaintComponent } from './components/paint/paint.component';

const routes: Routes = [
  {path:'gallery', component: PaintsComponent},
  {path:'', redirectTo:'gallery', pathMatch: 'full'},
  {path:'gallery_item/:id', component: PaintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
