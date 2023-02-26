import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { EnteteComponent } from './entete/entete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PromoComponent } from './promo/promo.component';
import { TableForfaitsComponent } from './table-forfaits/table-forfaits.component';

import { MatCardModule } from '@angular/material/card';
import { PrixComponent } from './prix/prix.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormulaireAvisComponent } from './formulaire-avis/formulaire-avis.component';
import {MatSliderModule} from '@angular/material/slider';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { FormulaireReactiveComponent } from './formulaire-reactive/formulaire-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RechercheComponent } from './recherche/recherche.component';
import { ResultatRechercheComponent } from './resultat-recherche/resultat-recherche.component';
import { ForfaitService } from './forfait.service';
import { HttpClientModule } from '@angular/common/http';
import { AProposComponent } from './a-props/a-propos.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { OptionsComponent } from './options/options.component';
import { NgChartsModule } from 'ng2-charts';
import { Graphique1Component } from './graphique1/graphique1.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    ForfaitComponent,
    PromoComponent,
    PrixComponent,
    FormulaireForfaitComponent,
    FormulaireAvisComponent,
    FormulaireContactComponent,
    SnackbarComponent,
    FormulaireReactiveComponent,
    RechercheComponent,
    ResultatRechercheComponent,
    AProposComponent,
    EnteteComponent, 
    TableForfaitsComponent, OptionsComponent, Graphique1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSliderModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    NgChartsModule
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
