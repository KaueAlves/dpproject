import { Routes } from '@angular/router';
import { HomeComponent } from './content-outlet/home/home.component';
import { ApiComponent } from './content-outlet/api/api.component';
import { ArtesComponent } from './content-outlet/artes/artes.component';
import { FrontendComponent } from './content-outlet/frontend/frontend.component';
import { BackendComponent } from './content-outlet/backend/backend.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'api', component: ApiComponent },
    { path: 'artes', component: ArtesComponent },
    { path: 'frontend', component: FrontendComponent },
    { path: 'backend', component: BackendComponent },
    // Outras rotas da sua aplicação, se houver
    { path: '', redirectTo: '', pathMatch: 'full' }, // Rota padrão, redireciona para /home
    { path: '**', redirectTo: '' } // Rota coringa, redireciona para /home se a rota não existir];
];