import { Routes, RouterModule } from '@angular/router'
import { CartasComponent } from './cartas/cartas.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    //home
    {
        path: '',
        component: HomeComponent
    },
    //Products
    {
        path: 'jogo',
        component: CartasComponent
    }
    
];
export const RoutingModule = RouterModule.forRoot(routes);













