import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ressource} from '../../Model/Ressource';

@Injectable()
export class RessourceService {
  constructor(private http: HttpClient) {

  }

  getAllRessources() {
    return this.http.get('http://localhost:8080/ressources');
  }

  addRessources(ressources: Ressource) {

  }
}
