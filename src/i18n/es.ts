import { PROJECT_KEY } from '~/data/projects';

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
} satisfies Translations;
