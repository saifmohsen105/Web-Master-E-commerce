import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { SignInComponent } from './pages/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth/pages/sign-up/sign-up.component';
import { ShopComponent } from './pages/shop/shop/shop.component';
import { BlogComponent } from './pages/blog/blog/blog.component';
import { ContactComponent } from './pages/contact/contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' },

    {
        path: 'auth',
        children: [
            { path: 'sign-in', component: SignInComponent, title: 'Login' },
            { path: 'sign-up', component: SignUpComponent, title: 'Register' }
        ]
    },
    { path: 'shop', component: ShopComponent, title: 'Shop' },
    { path: 'blog', component: BlogComponent, title: 'Blog' },
    { path: 'contact', component: ContactComponent, title: 'Contact' },
    { path: '**', redirectTo: '' }
];
