import {Component, OnInit} from '@angular/core';
import 'rxjs';
import {RessourceService} from '../services/ressource.service';

import 'rxjs';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {
  pageRessource: any;

  constructor(private ressourceService: RessourceService) {
  }

  ngOnInit() {
    this.ressourceService.getAllRessources()
      .subscribe(next => {
        this.pageRessource = next;
      }, error2 => {
        console.log('error');
      });
  }

}
