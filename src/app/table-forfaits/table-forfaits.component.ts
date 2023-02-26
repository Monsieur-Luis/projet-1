import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormulaireForfaitComponent } from '../formulaire-forfait/formulaire-forfait.component';

@Component({
  selector: 'app-table-forfaits',
  templateUrl: './table-forfaits.component.html',
  styleUrls: ['./table-forfaits.component.css']
})
export class TableForfaitsComponent implements OnInit {
  dataSourceForfaits: MatTableDataSource<Forfait> = new MatTableDataSource();
  columnsToDisplay = ['nom', 'description', 'prix', 'actions'];

  newForfait: Forfait = {
    nom: '',
    description: '',
    prix: 0,
    code: '',
    categories: [],
    dateDebut:'2023-10-10',
    dateFin:'2023-10-31',
    etablissement: {
      adresse:'', 
      courriel:'',
      description:'', 
      nomEtablissement:'', 
      siteWeb:'',  
      telephone:'', 
      ville:''
    },
    avis: undefined
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable)tableForfaits!: MatTable<Forfait>

  constructor(private forfaitService: ForfaitService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getForfaits()
  }

  getForfaits() { 
    this.forfaitService.getForfaits().subscribe(
      resultat => {
        this.dataSourceForfaits = new MatTableDataSource(resultat);
        this.dataSourceForfaits.paginator = this.paginator;
        this.dataSourceForfaits.sort = this.sort;
        this.tableForfaits.renderRows();
      }
    );
  }

  openDialog(forfait?: Forfait) { 
    console.log(forfait);
    const dialogRef = this.dialog.open(FormulaireForfaitComponent, {
        data: forfait,
      });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialog du formulaire du forfait a été fermé');
      this._snackBar.open(result, undefined,{
        duration:200
      });
      this.getForfaits();
    });
  }


  addForfait(forfaitFormAjout: NgForm) { 
    if (forfaitFormAjout.valid) { 
      this.forfaitService.addForfait(this.newForfait).subscribe(
        _ => {
          forfaitFormAjout.resetForm();
          this.getForfaits();         }
      );
    }
  }

  deleteForfait(id: string) { 
    this.forfaitService.deleteForfait(id).subscribe(
      _ => {
        this.getForfaits();
        
      }
    );
  }

  forfaitAjoute(){
    this.getForfaits();
    this._snackBar.open("Forfait ajouté", undefined, {
      duration:2000
    });
  }


  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceForfaits.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceForfaits.paginator) {
      this.dataSourceForfaits.paginator.firstPage();
    }
  }


}
