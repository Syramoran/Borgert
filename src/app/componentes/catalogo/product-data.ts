// Define la estructura de un ítem para que el componente ProductGrid sepa qué esperar.
export interface ProductItem {
    name: string;
    imageUrl: string;
    // Hacemos opcionales las propiedades que solo aplican a Aberturas
    description?: string; 
    linea?: string; 
    subcategory?: string; 
}

export const LINEAS_DATA: string[] = [
    'Todas',
    'Línea Herrero',
    'Línea Módena',
    'Línea A30 New',
    'Línea Rotonda 640',
];

export interface CategoryDetails {
    subcategories: string[];
    introText: {
        title: string;
        description: string;
    };
    productItems: ProductItem[]; 
}

export const COLORES_DATA: ProductItem[] = [
    { name: 'Blanco C y K', imageUrl: 'https://placehold.co/200x150/FFFFFF/000000?text=Blanco' },
    { name: 'Verde Inglés', imageUrl: 'https://placehold.co/200x150/004d00/ffffff?text=Verde+Ingles' },
    { name: 'Verde oscuro', imageUrl: 'https://placehold.co/200x150/1a472a/ffffff?text=Verde+Oscuro' },
    { name: 'Cobre', imageUrl: 'https://placehold.co/200x150/b87333/ffffff?text=Cobre' },
    { name: 'Símil Anodizado Natural', imageUrl: 'https://placehold.co/200x150/adadad/000000?text=Simil+Anod' },
    { name: 'Negro', imageUrl: 'https://placehold.co/200x150/000000/ffffff?text=Negro' },
    { name: 'Marrón', imageUrl: 'https://placehold.co/200x150/5c3a2f/ffffff?text=Marron' },
    { name: 'Marfil Claro', imageUrl: 'https://placehold.co/200x150/c3b091/000000?text=Marfil+Claro' },
    { name: 'Gris Semi Mate', imageUrl: 'https://placehold.co/200x150/6e7072/ffffff?text=Gris+Semi+Mate' },
    { name: 'Gris Metálico', imageUrl: 'https://placehold.co/200x150/505359/ffffff?text=Gris+Metalico' },
    { name: 'Marrón Africano', imageUrl: 'https://placehold.co/200x150/4d3838/ffffff?text=Marron+Africano' },
    { name: 'Gris Azulado', imageUrl: 'https://placehold.co/200x150/4e5a65/ffffff?text=Gris+Azulado' },
    { name: 'Cedro', imageUrl: 'https://placehold.co/200x150/8a4444/ffffff?text=Cedro' },
    { name: 'Bronce Colonial', imageUrl: 'https://placehold.co/200x150/3e4347/ffffff?text=Bronce+Colonial' },
    { name: 'Bronce Antiguo', imageUrl: 'https://placehold.co/200x150/3b332d/ffffff?text=Bronce+Antiguo' },
    { name: 'Beige Claro', imageUrl: 'https://placehold.co/200x150/b9a997/000000?text=Beige+Claro' },
    { name: 'Blanco Nieve', imageUrl: 'https://placehold.co/200x150/f0f8ff/000000?text=Blanco+Nieve' },
    { name: 'Azul Claro', imageUrl: 'https://placehold.co/200x150/1e3b6b/ffffff?text=Azul+Claro' },
    { name: 'Color 19', imageUrl: 'https://placehold.co/200x150/cccccc/000000?text=Color+19' },
    { name: 'Color 20', imageUrl: 'https://placehold.co/200x150/999999/ffffff?text=Color+20' },
];



export const ANODIZADO_DATA: ProductItem[] = [
    { name: '01 - Anodizado natural', imageUrl: 'https://placehold.co/200x150/888888/ffffff?text=Natural' },
    { name: '02 - Anodizado peltre', imageUrl: 'https://placehold.co/200x150/5f6366/ffffff?text=Peltre' },
    { name: '03 - Anodizado bronce claro', imageUrl: 'https://placehold.co/200x150/784e36/ffffff?text=Bronce+Claro' },
    { name: '04 - Anodizado negro', imageUrl: 'https://placehold.co/200x150/222222/ffffff?text=Negro' },
];

export const DECORAL_DATA: ProductItem[] = [
    { name: 'Caoba', imageUrl: 'https://placehold.co/200x150/843110/ffffff?text=Efecto+Madera' },
    { name: 'Nogal', imageUrl: 'https://placehold.co/200x150/4d2c1c/ffffff?text=Efecto+Madera' },
    { name: 'Guindo D-8', imageUrl: 'https://placehold.co/200x150/702c2c/ffffff?text=Efecto+Madera' }, // Mencionado específicamente en info [cite: 22]
    { name: 'Cerezo', imageUrl: 'https://placehold.co/200x150/a76449/ffffff?text=Efecto+Madera' },
    { name: 'Roble Oscuro', imageUrl: 'https://placehold.co/200x150/3d2c1d/ffffff?text=Efecto+Madera' },
    { name: 'Efecto Mármol', imageUrl: 'https://placehold.co/200x150/e0e0e0/000000?text=Efecto+Marmol' },
    { name: 'Efecto Granito', imageUrl: 'https://placehold.co/200x150/787878/ffffff?text=Efecto+Granito' },
    { name: 'Tonalidad 8', imageUrl: 'https://placehold.co/200x150/b38b6d/000000?text=Tonalidad+8' },
];

export const ABERTURAS_CATEGORIES_DATA: ProductItem[] = [
    { name: 'Puertas', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Puertas' }, 
    { name: 'Ventanas', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Ventanas' },
    { name: 'Vidrios', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Vidrios' },
    { name: 'Mamparas de baño', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Mamparas' },
    { name: 'Celosías', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Celosias' },
    { name: 'Cortinas enrollar', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Cortinas' },
    { name: 'Mosquiteros', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Mosquiteros' },
    { name: 'Portones', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Portones' },
    { name: 'Cerramientos', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Cerramientos' },
    { name: 'Barandas vidrio 4+4', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Barandas+Vidrio' },
    { name: 'Techos', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Techos' },
    { name: 'Piel de vidrio', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Piel+Vidrio' },
    { name: 'Parasoles', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Parasoles' },
    { name: 'Trabajos especiales a medida', imageUrl: 'https://placehold.co/200x150/f0f0f0/333333?text=Especiales' },
];
// ---------------------------
// A. DATA DETALLADA DE PUERTAS
// ---------------------------

const PUERTAS_ITEMS: ProductItem[] = [
    // De Abrir (Línea Herrero renovada)
    { 
        name: 'Puerta Principal de Abrir 01', 
        imageUrl: 'https://placehold.co/200x150/660000/FFFFFF?text=P+Abrir+Herrero', 
        description: 'Diseño clásico, máxima seguridad y durabilidad.', 
        linea: 'Línea Herrero', 
        subcategory: 'De abrir' 
    },
    // De Abrir (Línea Modena 45°)
    { 
        name: 'Puerta Balcón de Abrir Módena', 
        imageUrl: 'https://placehold.co/200x150/993333/FFFFFF?text=P+Abrir+Modena', 
        description: 'Elegancia y hermeticidad con perfiles de 45 grados.', 
        linea: 'Línea Módena', 
        subcategory: 'De abrir' 
    },
    // Corredizas (Línea A-30 New)
    { 
        name: 'Puerta Ventana Corrediza A-30', 
        imageUrl: 'https://placehold.co/200x150/cc6666/000000?text=P+Corr+A30', 
        description: 'Ideal para grandes vanos, alta prestación en hermeticidad.', 
        linea: 'Línea A30 New', 
        subcategory: 'Corredizas' 
    },
    // Corredizas (Línea Rotonda)
    { 
        name: 'Puerta Corrediza Rotonda', 
        imageUrl: 'https://placehold.co/200x150/ff9999/000000?text=P+Corr+Rotonda', 
        description: 'Corrediza económica con buen rendimiento.', 
        linea: 'Línea Rotonda 640', 
        subcategory: 'Corredizas' 
    },
    // Plegadizas (Línea A 40)
    { 
        name: 'Puerta Plegadiza A 40', 
        imageUrl: 'https://placehold.co/200x150/660000/FFFFFF?text=P+Plegadiza+A40', 
        description: 'Permite la apertura total del espacio, ideal para galerías.', 
        linea: 'Línea A 40', 
        subcategory: 'Plegadizas colgantes' 
    },
    // De Embutir (Línea Modena 45°) - Sin imagen
    { 
        name: 'Puerta de Embutir Módena', 
        imageUrl: 'https://placehold.co/200x150/993333/FFFFFF?text=P+Embutir', 
        description: 'Diseño moderno que se oculta en la pared.', 
        linea: 'Línea Módena', 
        subcategory: 'Puerta de embutir' 
    },
];

// ---------------------------
// B. DATA GENÉRICA PARA OTRAS CATEGORÍAS (Para evitar errores)
// ---------------------------

const VIDRIOS_ITEMS: ProductItem[] = [
    { 
        name: 'Puerta de Embutir Módena', 
        imageUrl: 'https://placehold.co/200x150/993333/FFFFFF?text=P+Embutir', 
        description: 'Diseño moderno que se oculta en la pared.', 
        linea: 'Línea Modena 45°', 
        subcategory: 'Puerta de embutir' 
    },
    { 
        name: 'Puerta de Embutir Módena', 
        imageUrl: 'https://placehold.co/200x150/993333/FFFFFF?text=P+Embutir', 
        description: 'Diseño moderno que se oculta en la pared.', 
        linea: 'Línea Modena 45°', 
        subcategory: 'hola' 
    },
    { 
        name: 'Puerta de Embutir Módena', 
        imageUrl: 'https://placehold.co/200x150/993333/FFFFFF?text=P+Embutir', 
        description: 'Diseño moderno que se oculta en la pared.', 
        linea: 'Línea Modena 45°', 
        subcategory: 'Puerta de embutir' 
    },
];


// =======================================================
// MAPEO DE DATOS CENTRAL (CATEGORIES_MAP)
// =======================================================

// Este objeto central permite que AberturaDetalleComponent sepa qué cargar.
export const CATEGORIES_MAP: { [key: string]: CategoryDetails } = {
    // CLAVE: Debe coincidir con el parámetro de ruta (ej: /aberturas/puertas)
    'puertas': {
        // Subcategorías extraídas de la imagen ae6dd3.jpg
        subcategories: ['De abrir', 'Corredizas', 'Corredizas con riel', 'Plegadizas colgantes', 'Puerta placa', 'Puerta de embutir', 'Puerta acordeón'],
        introText: {
            title: 'Puertas de aluminio',
            description: 'Amplia variedad de diseños y líneas, pensadas para la seguridad y la estética de su hogar. Explore las subcategorías y aplique filtros por línea para encontrar su producto.'
        },
        productItems: PUERTAS_ITEMS 
    },
    'ventanas': {
        subcategories: ['Corrediza', 'Batiente', 'Oscilobatiente', 'Guillotina'],
        introText: {
            title: 'Ventanas y Ventanales',
            description: 'Soluciones en eficiencia térmica y acústica. Disponibles en todas las líneas y acabados Borgert.'
        },
        productItems: [ /* ... array de productos de ventana ... */ ]
    },
    'vidrios': {
        subcategories: ['hola'], // Sin subcategorías, muestra el listado completo
        introText: {
            title: 'Vidrios y DVH',
            description: 'Servicio de Doble Vidriado Hermético (DVH), Laminados de seguridad y vidrios especiales para sus aberturas.'
        },
        productItems: VIDRIOS_ITEMS
    },
    // ... Agregar el resto de las 14 categorías aquí ...
};