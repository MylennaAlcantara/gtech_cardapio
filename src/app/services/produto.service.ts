import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoType } from '../types/produtoType';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = "http://localhost:8080/cardapioProdutos/1";
  
  constructor(private http: HttpClient) { }

  buscarProduto(): Observable<any> {
    return this.http.get<ProdutoType>(this.apiUrl);
  }
}
