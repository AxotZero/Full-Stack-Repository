import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
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
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ImageMapComponent } from './image-map/image-map.component';
import { ForgottenComponent} from './forgotten/forgotten.component';
const routes: Routes = [
  {
    path : '', component : LayoutComponent,
    children : [
      { path : '',
        component : IndexContentComponent
      },
      { path : 'login',
        component : LoginComponent
      },
      {
        path : 'map',
        component : ImageMapComponent
      },
      {
        path : 'forgotten',
        component : ForgottenComponent
      },
      {
        path : 'register',
        component : RegisterComponent
      },
      {
        path : 'catalog',
        component : CatalogComponent,
        children : [
          {
            path : '',
            component : CatalogProductComponent,
            children : [
              {
                path : '',
                component : CatalogGridComponent
              },
              {
                path : 'catalogGrid/:catelog/:page',
                component : CatalogGridComponent
              },
              {
                path : 'catalogList/:catelog/:page',
                component : CatalogListComponent
              },
              {
                path : 'catalogGrid/:catelog/:page/:search',
                component : CatalogGridComponent
              },
              {
                path : 'catalogList/:catelog/:page/:search',
                component : CatalogListComponent
              },
            ]
          },
          {
            path: 'text-page',
            component : TextPageComponent
          },
          {
            path : 'product-view/:i',
            component : ProductViewComponent
          }
        ]
      },
      {
        path : 'shopping-cart',
        component : ShoppingCartComponent
      },
      {
        path : 'checkout',
        component : CheckoutComponent
      },
      {
        path : 'compare',
        component : CompareComponent
      },
      {
        path : 'contact',
        component : ContactComponent
      },
      {
        path : '404',
        component : NotFoundComponent
      },
      {
        path : 'blog',
        component : BlogComponent,
        children : [
          {
            path : '',
            component : BlogPostsComponent
          },
          {
            path : 'posts',
            component : BlogPostsComponent
          },
          {
            path : 'post-view',
            component : BlogPostviewComponent
          }
        ]
      },
    ]
  },
  {
    path : 'register', component : RegisterComponent
  },
  {
    path : 'profile/:userId',
    component : ProfilePageComponent,
  },
  {
    path: '**',
    component : LayoutComponent,
    children : [
      {
        path : '',
        component : NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
