import { PROJECT_KEY } from '~/data/projects';
import { REPOSITORY_KEY } from '~/data/repositories';

import type { Translations } from './types';

export const es = {
	navbar: {
		projects: 'Proyectos',
		skills: 'Habilidades',
		occupations: 'Ocupaciones',
	},
	hero: {
		role: 'Desarrollador Web',
		bio: 'Más de 3 años de experiencia como Desarrollador de Software, especializado en Front-end con enfoque en arquitectura, calidad de código y entrega de producto.',
		contact: 'Contáctame',
	},
	projects: {
		heading: 'Proyectos',
		actions: {
			source: 'Código fuente',
			website: 'Visitar sitio',
		},
		projects: {
			[PROJECT_KEY.TodoList]: {
				title: 'Lista de pendientes',
				description:
					'Esta aplicación fue inspirada por el grupo Dona con el lema de hacer una lista de tareas más humana. La aplicación cuenta con un sistema de usuarios autenticados mediante correo electrónico y contraseña.',
			},
			[PROJECT_KEY.FrontendSummer]: {
				title: 'Concurso Verano Frontend',
				description:
					'Sitio web estático para el concurso de verano Frontend organizado por la empresa codigofacilito. Cuenta con diversas secciones que cuentan la historia de Cody, así como una galería de fotos de los lugares donde estuvo.',
			},
		},
	},
	repositories: {
		heading: 'Repositorios destacados',
		repositories: {
			[REPOSITORY_KEY.ReadingList]: {
				title: 'Lista de lectura',
				description:
					'Aplicación web con catálogo de libros y gestión de lista de lectura',
			},
			[REPOSITORY_KEY.UploadFile]: {
				title: 'Subida de archivo',
				description: 'Aplicación que permite la subida de imágenes con Firebase',
			},
			[REPOSITORY_KEY.Enviroment]: {
				title: 'Medio Ambiente FCC',
				description:
					'Sitio web para difusión de eventos relacionados con el medio ambiente',
			},
		},
		actions: {
			source: 'Código fuente',
			website: 'Visitar sitio',
		},
	},
} satisfies Translations;
