import { Routes } from '@angular/router';
import { HomeComponent } from './content-outlet/home/home.component';
import { ApiComponent } from './content-outlet/api/api.component';
import { ArtesComponent } from './content-outlet/artes/artes.component';
import { FrontendComponent } from './content-outlet/frontend/frontend.component';
import { BackendComponent } from './content-outlet/backend/backend.component';

import { CreateItemComponent } from './form/items/create-item/create-item.component';
import { EditItemComponent } from './form/items/edit-item/edit-item.component';
import { ListItemComponent } from './form/items/list-item/list-item.component';

import { CreateDocumentComponent } from './form/documents/create-document/create-document.component';
import { EditDocumentComponent } from './form/documents/edit-document/edit-document.component';
import { ListDocumentComponent } from './form/documents/list-document/list-document.component';

import { CreateCreatureComponent } from './form/creatures/create-creature/create-creature.component';
import { EditCreatureComponent } from './form/creatures/edit-creature/edit-creature.component';
import { ListCreatureComponent } from './form/creatures/list-creature/list-creature.component';

import { CreateBuildindComponent } from './form/buildinds/create-buildind/create-buildind.component';
import { EditBuildindComponent } from './form/buildinds/edit-buildind/edit-buildind.component';
import { ListBuildindComponent } from './form/buildinds/list-buildind/list-buildind.component';

import { CreateCharacterComponent } from './form/characters/create-character/create-character.component';
import { EditCharacterComponent } from './form/characters/edit-character/edit-character.component';
import { ListCharacterComponent } from './form/characters/list-character/list-character.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'api', component: ApiComponent },
    { path: 'artes', component: ArtesComponent },
    {
        path: 'frontend', 
        component: FrontendComponent,
        children: [
            { path: 'characters', component: ListCharacterComponent },
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