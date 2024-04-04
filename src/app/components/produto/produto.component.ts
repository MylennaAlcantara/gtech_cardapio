import { Component } from '@angular/core';
import { ProdutoType } from '../../types/produtoType';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  produto: ProdutoType | null = null;
  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void{
    this.produtoService.buscarProduto().subscribe(produto => this.produto = produto);
  }
}
