import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { RessourceComponent } from './ressource/ressource.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { AddRessourceComponent } from './add-ressource/add-ressource.component';
import {RessourceService} from './services/ressource.service';
import {EntrepriseService} from './services/entreprise.service';

const appRoutes: Routes = [
  {
    path: 'entreprise', component: EntrepriseComponent
  }
  ,
  {
    path: 'ressources', component: RessourceComponent
  },
  {
    path: 'EntrepriseAdd', component: AddEntrepriseComponent
  },
  {
    path: 'RessourceAdd' , component : RessourceComponent
  },
  {
    path: '', redirectTo: '/ressources', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EntrepriseComponent,
    RessourceComponent,
    AddEntrepriseComponent,
    AddRessourceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [RessourceService , EntrepriseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
