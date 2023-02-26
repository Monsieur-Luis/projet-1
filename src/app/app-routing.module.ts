import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-props/a-propos.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { PromoComponent } from './promo/promo.component';
import { OptionsComponent } from './options/options.component';
import { TableForfaitsComponent } from './table-forfaits/table-forfaits.component'

const routes: Routes = [
  { path: '', component: PromoComponent},
  { path: 'forfaits', component: ListeForfaitsComponent }, 
  { path: 'a-propos', component: AProposComponent },
  { path: 'formulaire', component: TableForfaitsComponent},
  { path:  'options', component: OptionsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
