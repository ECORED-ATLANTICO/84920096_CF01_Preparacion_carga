export default {
  global: {
    Name: 'Disposición y logística de la carga',
    Description:
      'Este componente desarrolla los fundamentos del manejo de carga, incluyendo su concepto, tipos, naturaleza y características, así como su ubicación y métodos de unitarización. También aborda la manipulación de carga, detallando técnicas, equipos, normativas y buenas prácticas para un manejo seguro y eficiente. Por último, explora los mecanismos de marcado y rotulado, analizando sus tipos y características para garantizar una correcta identificación y trazabilidad de las mercancías.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Naturaleza',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ubicación',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Métodos de unitarización',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manipulación de carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Equipos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Normativa',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Buenas prácticas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mecanismo de marcado y rotulado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Características',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Normativa ',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Procedimientos ',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Carga y manipulación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Preparación de carga para distribución. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6phzzMEfztk',
    },
    {
      tema: 'Ubicación de la carga',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Ubicación, consolidación y desconsolidación de la mercancía y objetos postales. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fkhynnTHNc8&t=137s',
    },
    {
      tema: 'Tipos de carga',
      referencia:
        'IE San Isidro Ibagué. (2022). Tipos de carga. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=01P_bkzMRII',
    },
  ],
  glosario: [
    {
      termino: '<em>Big bag</em>',
      significado:
        'sacos gigantes (1-2 t) usados para transportar graneles sólidos, que reducen pérdidas y facilitan el manejo con grúas.',
    },
    {
      termino: 'Carga',
      significado:
        'cualquier producto, mercancía o material que se mueve o almacena dentro de la cadena de suministro, con valor económico y que requiere manejo desde su origen hasta su destino final.',
    },
    {
      termino: 'Carga a granel',
      significado:
        'mercancía no embalada, transportada en grandes cantidades según su peso y volumen, clasificada en sólida, líquida o gaseosa.',
    },
    {
      termino: 'Carga frágil',
      significado:
        'mercancías susceptibles a daños por impactos o vibraciones, que requieren embalaje especial y manejo con equipos de amortiguación.',
    },
    {
      termino: 'Carga general',
      significado:
        'mercancía transportada en pequeñas cantidades y unidades separadas, como cajas o bultos, que pueden manipularse individualmente o agruparse.',
    },
    {
      termino: 'Carga peligrosa',
      significado:
        'materiales que representan riesgos para la salud, seguridad o medio ambiente, regulados por normativas internacionales.',
    },
    {
      termino: 'Carga perecedera',
      significado:
        'productos con vida útil limitada que requieren condiciones específicas de transporte y almacenamiento para evitar su deterioro.',
    },
    {
      termino: 'Contenerización',
      significado:
        'método de unitarización que emplea contenedores estandarizados (ISO) para transportar mercancías, ideal para transporte multimodal y protección contra robos o condiciones climáticas.',
    },
    {
      termino: 'Método ABC',
      significado:
        'técnica de clasificación de inventario basada en la ley de Pareto, que categoriza productos en grupos A (alta rotación), B (media) y C (baja) para optimizar su almacenamiento.',
    },
    {
      termino: 'Normativa ADR',
      significado:
        'regulaciones europeas para el transporte terrestre de mercancías peligrosas, aplicables en Colombia para garantizar seguridad y cumplimiento legal.',
    },
    {
      termino: 'Paletización',
      significado:
        'técnica de unitarización que utiliza palés para agrupar cajas o bultos, optimizando el espacio y facilitando el manejo con equipos como montacargas.',
    },
    {
      termino: 'RFID',
      significado:
        'es un sistema de almacenamiento y recuperación de datos remotos que usa dispositivos denominados etiquetas, tarjetas o transpondedores',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de rastrear el historial, ubicación y condiciones de la carga a lo largo de la cadena de suministro mediante registros o tecnologías como códigos QR/RFID.',
    },
    {
      termino: 'Unitarización',
      significado:
        'proceso de agrupar mercancías sueltas en unidades más grandes (como palés o contenedores) para facilitar su manejo, transporte y almacenamiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aprende Logística. Carga Unitarizada: Qué es y Cómo Optimizarla en el Transporte de Mercancías. ',
      link:
        'https://aprende-logistica.com/almacen/almacenamiento/carga-unitarizada/',
    },
    {
      referencia:
        'Satrack. (2023). ¿Qué son los tipos de carga y qué importancia tienen?',
      link:
        'https://satrack.com/co/blog/que-son-los-tipos-de-carga-y-que-importancia-tienen/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2021). Zajuna Semilla. 136200_1_virtual_1-Servicios postales y transporte de mercancías. ',
      link: 'https://zajuna.sena.edu.co/zajuna/course/view.php?id=12441',
    },
    {
      referencia:
        'Simplyroute. (2022). Tipo de cargas: cuáles son y cómo es su logística.',
      link: 'https://simpliroute.com/es/blog/tipo-de-cargas',
    },
    {
      referencia: 'Syscomer. (2014). Clasificación de la carga.',
      link:
        'https://syscomer.wordpress.com/wp-content/uploads/2014/08/clasificacion_de_las_cargas.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
