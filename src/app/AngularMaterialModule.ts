import { NgModule } from '@angular/core';
import { MatButtonModule} from "@angular/material/button";
import { MatTableModule} from "@angular/material/table";
import { MatIconModule} from "@angular/material/icon";
import { MatCardModule} from "@angular/material/card";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list'


@NgModule({
  exports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatGridListModule
  ]
})


export class AngularMaterialModule{ }
