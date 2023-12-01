import { Routes } from '@angular/router';
import { MonitoresComponent } from './monitores/monitores.component';
import { LoginService } from './services/login.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RickandmortyComponent } from './pages/rickandmorty/rickandmorty.component';


export const routes: Routes = [
    {path: "monitores", component: MonitoresComponent},
    {path: "Loginlogic", component: LoginService},
    {path: "Login", component: LoginComponent},
    {path: "rickandmorty", component:RickandmortyComponent},
    {path: "", component: HomeComponent},
    {path: "**", component: HomeComponent},

];
