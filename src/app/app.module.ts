import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MenuComponent } from "./components/menu/menu.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { AppRoutingModule } from "./app-routing.module";
import { ListaProdutoComponent } from "./components/lista-produto/lista-produto.component";
import { ProdutoComponent } from "./components/produto/produto.component";


@NgModule({
    declarations: [
        AppComponent,
        SideBarComponent,
        HeaderComponent,
        MenuComponent,
        ListaProdutoComponent,
        ProdutoComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule{

}