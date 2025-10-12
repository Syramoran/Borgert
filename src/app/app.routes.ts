import { Routes } from '@angular/router';
import { Inicio } from './componentes/inicio/inicio';
import { Empresa } from './componentes/empresa/empresa';
import { Contacto } from './componentes/contacto/contacto';

import { CatalogoComponent } from './componentes/catalogo/catalogo';
import { ColoresComponent } from './componentes/catalogo/secciones/colores-component/colores-component';
import { DecoralComponent } from './componentes/catalogo/secciones/decoral-component/decoral-component';
import { AberturasComponent } from './componentes/catalogo/secciones/aberturas-component/aberturas-component';
import { AberturaDetalleComponent } from './componentes/catalogo/secciones/aberturas-component/abertura-detalle-component/abertura-detalle-component';



export const routes: Routes = [
    
    { path: '', component: Inicio },
    { path: 'la-empresa', component: Empresa },
    { path: 'contactanos', component: Contacto },
    
    { 
        path: 'catalogo', 
        component: CatalogoComponent,
        children: [
            { 
                path: 'colores', 
                component: ColoresComponent 
            },
            { 
                path: 'decoral', 
                component: DecoralComponent 
            },
            { 
                path: 'aberturas', 
                component: AberturasComponent,
                children: [
                    
                ]
            },
             { 
                path: 'aberturas/:categoria', 
                component: AberturaDetalleComponent
            },
        ]
    },
    
    { path: '**', redirectTo: '' }
];