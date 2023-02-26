import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Forfait } from '../forfait';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { ForfaitService } from '../forfait.service';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {
  
  

  forfait: Forfait = {
    nom :'',
    description :'',
    code: '',
        categories: [],
    etablissement: {

      nomEtablissement: '',
      adresse: '',
      ville: '',
      telephone: '',
      courriel: '',
      siteWeb: '',
      description: '',
  },
    
    prix: 0,
    nouveauPrix: undefined,
    dateDebut:'2023-10-10',
    dateFin:'2023-10-31',

    avis: {
      commentaires: '',
      noteSurDix: [],
  }


  };
  

  constructor(
    private forfaitService:ForfaitService, 
    public dialogRef: MatDialogRef<FormulaireForfaitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Forfait ) {
      if (data) { 
        this.forfait = data;
      }

   }

  ngOnInit(): void {
  }

  addForfait(forfaitFormAjout: NgForm) {
    if (forfaitFormAjout.valid) {
      this.forfaitService.addForfait(this.forfait).subscribe(
        _ => {
          forfaitFormAjout.resetForm();
          this.dialogRef.close("Forfait ajouté");
        }
      );
    }
  }

  updateForfait(forfaitFormAjout: NgForm) {
    if (forfaitFormAjout.valid) {
      this.forfaitService.updateForfait(this.forfait).subscribe(
        _ => {
          forfaitFormAjout.resetForm();
          this.dialogRef.close("Forfait modifié");
        }
      );
    }
  }

  annuler() { 
    this.dialogRef.close();
  }


  //openSnackBar() {
    //this._snackBar.openFromComponent(SnackbarComponent, {
      //duration: this.durationInSeconds * 1000,
    //});
  //}
}
