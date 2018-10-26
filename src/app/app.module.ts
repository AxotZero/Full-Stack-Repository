import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { IndexContentComponent } from './index-content/index-content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogGridComponent } from './catalog-grid/catalog-grid.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { TextPageComponent } from './text-page/text-page.component';
import { CatalogProductComponent } from './catalog-product/catalog-product.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CompareComponent } from './compare/compare.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostviewComponent } from './blog-postview/blog-postview.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    IndexContentComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent,
    CatalogGridComponent,
    CatalogListComponent,
    TextPageComponent,
    CatalogProductComponent,
    ProductViewComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    CompareComponent,
    ContactComponent,
    NotFoundComponent,
    BlogComponent,
    BlogPostsComponent,
    BlogPostviewComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
