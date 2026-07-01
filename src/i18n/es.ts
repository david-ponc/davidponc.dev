import { EXPERIENCE_KEY } from '~/data/experience';
import { PROJECT_KEY } from '~/data/projects';
import { REPOSITORY_KEY } from '~/data/repositories';

import type { Translations } from './types';

export const es = {
	navbar: {
		projects: 'Proyectos',
		skills: 'Habilidades',
		experience: 'Experiencia',
		social: {
			linkedIn: 'Ir a mi perfil de LinkedIn',
			github: 'Ir a mi perfil de GitHub',
			linkedInLabel: 'LinkedIn',
			githubLabel: 'GitHub',
		},
		menu: {
			groups: {
				navigation: 'Navegación',
				preferences: 'Preferencias',
				contact: 'Contacto',
			},
			appearance: {
				label: 'Apariencia',
				light: 'Claro',
				dark: 'Oscuro',
				system: 'Sistema',
				toggle: 'Cambiar tema',
			},

			language: {
				label: 'Idioma',
				es: 'Español',
				en: 'English',
			},
			back: 'Atrás',
		},
	},
	hero: {
		role: 'Desarrollador Web',
		bio: 'Más de 3 años de experiencia como Desarrollador de Software, especializado en Front-end con enfoque en arquitectura, calidad de código y entrega de producto.',
		contact: 'Contáctame',
		altImage:
			'Retrato profesional en blanco y negro de un hombre joven con los brazos cruzados, vistiendo playera negra, mirando ligeramente hacia arriba',
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
			viewAll: 'Ver todos',
		},
	},
	skills: {
		heading: 'Habilidades',
	},
	experience: {
		heading: 'Experiencia',
		present: 'Actualidad',
		items: {
			[EXPERIENCE_KEY.Urdaten]: {
				role: 'Desarrollador Frontend',
				location: 'CDMX, México · Remoto',
				heading: 'Logros',
				achievements: [
					'Diseñé e implementé 2 módulos end-to-end (Nextjs y PostgreSQL) de forma autónoma, reduciendo dependencia del equipo backend y acelerando el tiempo de entrega de ~3 semanas a ~1.5 semana por ciclo.',
					'Construí un sistema de diseño sobre Base UI que estandarizó componentes reutilizables, reduciendo el tiempo de desarrollo de nuevas funcionalidades en 1-2 días por ciclo.',
					'Lideré la migración a App Directory en Next.js, estableciendo una base más escalable y mejorando los tiempos de carga inicial respecto a las páginas no migradas.',
					'Incorporé GitHub Copilot y Claude Code al flujo de desarrollo aumentando la velocidad de entrega estimada en ~25%, optimizando tareas de codificación, revisión y documentación del código.',
					'Colaboré proactivamente con el equipo de diseño en el desarrollo de nuevas características y mejoras de flujos, priorizando la experiencia de usuario.',
					'Trabajé junto al equipo de backend para diseñar, estructurar e integrar nuevas funcionalidades al producto.',
					'Introduje estándares de calidad (linting y formateo automático) que redujeron errores en producción y acortaron el tiempo de revisión de PR’s.',
				],
			},
		},
	},
	footer: {
		contact: [
			'Siempre abierto a nuevos proyectos y colaboraciones.',
			'No dudes en escribirme',
		],
		share: 'Compartir esta página',
	},
} satisfies Translations;
