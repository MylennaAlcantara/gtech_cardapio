import { Component } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { ProdutoType } from '../../types/produtoType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  produto: ProdutoType | null = null;
  constructor(private produtoService: ProdutoService){}

  ngOnInit(): void{
    this.produtoService.buscarProduto().subscribe(produto => this.produto = produto);
  }
}
