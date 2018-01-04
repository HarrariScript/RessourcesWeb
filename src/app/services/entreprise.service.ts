import {Injectable} from '@angular/core';

import 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Entreprise} from '../../Model/Entreprise';

@Injectable()
export class EntrepriseService {
  constructor(private http: HttpClient) {
  }

  getListEntreprise() {
    return this.http.get('http://localhost:8080/ressources');
  }

  saveEntrePrise(entreprise: Entreprise) {
    return this.http.post('url', entreprise);
  }

  updateEntreprise(entreprise: Entreprise) {
    return this.http.put('url', entreprise);
  }

  deleteEntreprise(id: number) {
    return this.http.delete('url');
  }
}
