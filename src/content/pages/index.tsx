const mainProjectsInfo = [
	{
		title: 'Lista de pendientes',
		description:
			'Esta aplicación fue inspirada por el grupo Dona con el lema de hacer una lista de tareas mas humana. La aplicación cuenta con un sitema de usuarios autenticados mediante correo electronico y contraseña.',
		tags: ['React', 'TypeScript', 'Next.js', 'Styled Components'],
		image: {
			light: '/projects/images/todo-app-light.png',
			dark: '/projects/images/todo-app-dark.png',
		},
		url: {
			deployment: 'https://todo.davidponc.dev',
			repository: 'https://github.com/david-ponc/todo-app-client',
		},
	},
	{
		title: 'Concurso Verano Frontend',
		description:
			'Sitio web estatico para el concurso de verano frontend organizado por la empresa codigofacilito. Cuenta con diversas secciones que cuentan la historia de Cody, asi como una galeria de fotos de los lugares donde estuvo.',
		tags: ['HTML', 'CSS', 'JavaScript'],
		image: {
			light: '/projects/images/verano-frontend.png',
		},
		url: {
			deployment: 'https://david-ponc.github.io/vacaciones-cody/',
			repository: 'https://github.com/david-ponc/vacaciones-cody',
		},
	},
];

const extraProjectsInfo = [
	{
		name: 'covid-19-countries-list',
		description: 'Aplicación que muestra información por pais del covid-19.',
		url: {
			deployment: 'https://covid.davidponc.dev/',
			repository: 'https://github.com/david-ponc/covid-19-countries-list',
		},
		languages: ['JavaScript', 'CSS', 'HTML'],
	},
	{
		name: 'upload-file',
		description:
			'Aplicación que permite la subida de imagenes utilizando firebase.',
		url: {
			deployment: 'https://upload-file.vercel.app/',
			repository: 'https://github.com/david-ponc/upload-file',
		},
		languages: ['JavaScript', 'CSS'],
	},
	{
		name: 'medio-ambiente-fcc',
		description:
			'Sitio web para difusion de eventos relacionados con el medio ambiente.',
		url: {
			deployment: 'https://david-ponc.github.io/medio-ambiente-fcc/',
			repository: 'https://github.com/david-ponc/medio-ambiente-fcc',
		},
		languages: ['HTML', 'CSS', 'JavaScript'],
	},
];

export { extraProjectsInfo, mainProjectsInfo };
