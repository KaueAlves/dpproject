import { Routes } from '@angular/router';
import { HomeComponent } from './content-outlet/home/home.component';
import { ApiComponent } from './content-outlet/api/api.component';
import { ArtesComponent } from './content-outlet/artes/artes.component';
import { FrontendComponent } from './content-outlet/frontend/frontend.component';
import { BackendComponent } from './content-outlet/backend/backend.component';

import { CreateItemComponent } from './content-pages/items/create-item/create-item.component';
import { EditItemComponent } from './content-pages/items/edit-item/edit-item.component';
import { ListItemComponent } from './content-pages/items/list-item/list-item.component';

import { CreateDocumentComponent } from './content-pages/documents/create-document/create-document.component';
import { EditDocumentComponent } from './content-pages/documents/edit-document/edit-document.component';
import { ListDocumentComponent } from './content-pages/documents/list-document/list-document.component';

import { CreateCreatureComponent } from './content-pages/creatures/create-creature/create-creature.component';
import { EditCreatureComponent } from './content-pages/creatures/edit-creature/edit-creature.component';
import { ListCreatureComponent } from './content-pages/creatures/list-creature/list-creature.component';

import { CreateBuildindComponent } from './content-pages/buildinds/create-buildind/create-buildind.component';
import { EditBuildindComponent } from './content-pages/buildinds/edit-buildind/edit-buildind.component';
import { ListBuildindComponent } from './content-pages/buildinds/list-buildind/list-buildind.component';

import { CreateCharacterComponent } from './content-pages/characters/create-character/create-character.component';
import { EditCharacterComponent } from './content-pages/characters/edit-character/edit-character.component';
import { ListCharacterComponent } from './content-pages/characters/list-character/list-character.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'api', component: ApiComponent },
    { path: 'artes', component: ArtesComponent },
    {
        path: 'frontend', 
        component: FrontendComponent,
        children: [
            { path: 'characters', component: ListCharacterComponent },
            { path: 'characters/edit/:id', component: EditCharacterComponent },
            { path: 'creatures', component: ListDocumentComponent },
            { path: 'documents', component: ListDocumentComponent },
            { path: 'items', component: ListItemComponent }
        ]
    },

    { path: 'backend', component: BackendComponent },
    // Outras rotas da sua aplicação, se houver
    { path: '', redirectTo: '', pathMatch: 'full' }, // Rota padrão, redireciona para /home
    { path: '**', redirectTo: '' } // Rota coringa, redireciona para /home se a rota não existir];
];