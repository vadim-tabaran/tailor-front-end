import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CategoriesComponent } from "./categories/categories.component";


const ADMIN_ROUTING: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'categories', component: CategoriesComponent },
];

export const adminRouting = RouterModule.forRoot(ADMIN_ROUTING);
