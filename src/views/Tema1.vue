<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Carga

    .bg-full-width.bg-fondo-1.mb-5
      .px-4.p-md-5
        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") En todo el proceso logístico, es importante que la mercancía transportada llegue en condiciones óptimas al cliente final; por lo regular, los trayectos son largos y la mercancía puede sufrir algún daño si no ha sido preparada con responsabilidad, normas y protocolos de operación en logística.
        
            .cajon.color-primario.bg-color-1.p-4(data-aos="fade-left")
              p.mb-0 El objetivo principal es preparar la mercancía para que llegue en perfectas condiciones, por lo que requiere desarrollar tareas de embalaje, identificación, consolidación, paletización y flejado de las cargas, para ser entregada al vehículo y así lograr que la carga no se mueva durante el transporte o sufra averías.

        separador

        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Concepto
        
        img(data-aos="fade-up")(src="@/assets/curso/tema1/2.png", alt="Imagen decorativa")

        .row.justify-content-center.align-items-center.pst.mb-5
          .col-lg-10
            p.banner-text La carga es el corazón de las operaciones logísticas y de transporte. Se  define como cualquier producto, mercancía o material que se mueve o almacena dentro de la cadena de suministro. Es el objeto físico que tiene valor económico y necesita ser manejado desde el lugar donde se origina hasta su destino final, ya sea para su uso, venta o transformación
        
        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-1.p-5.tarjeta(data-aos="fade-left")
              p.mb-0 Representa un proceso complejo donde se combinan aspectos técnicos, legales y económicos. Para que todo funcione correctamente, se necesita una gestión especializada que proteja la mercancía durante su recorrido en cadenas de suministro cada vez más globalizadas y tecnológicas. Con los avances en automatización y el impulso de prácticas sostenibles, este proceso sigue evolucionando y adaptándose a nuevas necesidades. Este concepto abarca las siguientes 3 dimensiones clave:

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-contenido.bg-color-3.p-5(data-aos="fade-down")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/4.svg', alt='Texto que describa la imagen')
          
        h2.text-center Física
        p Manifestación tangible con peso, volumen y características materiales.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-botones.bg-color-2.p-5(data-aos="fade-up")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/5.svg', alt='Texto que describa la imagen')
          
        h2.text-center Operacional
        p Unidad de trabajo en procesos logísticos (carga/descarga, transporte, almacenaje).

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-contenido.bg-color-3.p-5(data-aos="fade-down")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema1/6.svg', alt='Texto que describa la imagen')
          
        h2.text-center Económica
        p Bien con valor comercial que justifica los costos de movilización.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Dimensiones clave
        figure.mb-5
          img(src='@/assets/curso/tema1/7.svg', alt='Texto que describa la imagen', data-aos="zoom-in")
          figcaption Fuente: SENA, 2025

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2  Naturaleza

    .bg-full-width.bg-fondo-1
      .px-4.p-md-5
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/8.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La naturaleza de la carga se relaciona con sus características físicas y químicas, que influyen en su manipulación y conservación dentro del proceso logístico. Estas propiedades determinan aspectos clave como el tipo de embalaje y el método de transporte más adecuado para garantizar su seguridad y calidad.

        .cajon.color-primario.bg-color-1.p-4.mb-5(data-aos="fade-left")
          p.mb-0 La naturaleza de la carga se encuentre determinada por los siguientes factores:

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/9.svg", data-aos="zoom-in")
          .col-lg-8
            LineaTiempoD.color-acento-contenido
              div(numero="1" titulo="Propiedades físicas") 
                ul.lista-ul--color.lista-ul--separador
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Estado de la materia: sólido (granos), líquido (combustibles) o gaseoso (GNL).
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Densidad y peso volumétrico: pesadas (metales) vs. ligeras (espumas).
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Humedad crítica: en productos como el café o sal.

              div(numero="2" titulo="Propiedades químicas")
                ul.lista-ul--color.lista-ul--separador
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Reactividad:  sensibilidad al oxígeno, agua o luz.
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Punto de inflamabilidad:  clasificación de combustibles (Diésel: >60°C).
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 PH y corrosividad:  ácidos pH 7 vs. álcalis pH 7 para almacenamiento.
    
              div(numero="3" titulo="Propiedades biológicas") 
                ul.lista-ul--color.lista-ul--separador
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Actividad enzimática: maduración de frutas (producción de etileno).
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Carga microbiana: límites UFC/g en alimentos perecederos.
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Respiración vegetal: tasas de O₂/CO₂ en flores frescas.
   
              div(numero="4" titulo="Propiedades mecánicas") 
                ul.lista-ul--color.lista-ul--separador
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Límite elástico: deformación permisible en metales.
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Fragilidad crítica: coeficiente de ruptura en vidrios.
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Resistencia a vibraciones: ESPEC IEC 60068 para electrónicos.

        p El manejo de estos factores es de suma importancia, teniendo en cuenta que conocer la naturaleza de la carga nos ayuda a: 

    .bg-full-width-2.bg-fondo-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center
          .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-acento-contenido.h-100.p-4
              div.justify-content-end.d-flex
                h3.mb-0.pst-1.bg-color-4 01
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/tema1/10.svg', alt='Texto que describa la imagen')

              h5.text-center Elección  del embalaje y materiales
              p.text-center El embalaje debe proteger la carga y adaptarse a sus características.

          .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-acento-contenido.h-100.p-4
              div.justify-content-end.d-flex
                h3.mb-0.pst-1.bg-color-4 02
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/tema1/11.svg', alt='Texto que describa la imagen')

              h5.text-center Medio de transporte
              p.text-center Dependiendo del tipo de carga, se necesita un transporte adecuado.

          .col-sm-6.col-lg-2.mb-4.mb-sm-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-acento-contenido.h-100.p-4
              div.justify-content-end.d-flex
                h3.mb-0.pst-1.bg-color-4 03
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/tema1/12.svg', alt='Texto que describa la imagen')

              h5.text-center Manejo y organización
              p.text-center Es fundamental conocer la carga para manipularla de forma segura y eficiente.
          .col-sm-6.col-lg-2.mb-4.mb-sm-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-acento-contenido.h-100.p-4
              div.justify-content-end.d-flex
                h3.mb-0.pst-1.bg-color-4 04
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/tema1/13.svg', alt='Texto que describa la imagen')

              h5.text-center Almacenamiento
              p.text-center La carga debe guardarse en condiciones que aseguren su integridad y eviten daños.
          .col-sm-6.col-lg-2.mb-4.mb-sm-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-acento-contenido.h-100.p-4
              div.justify-content-end.d-flex
                h3.mb-0.pst-1.bg-color-4 05
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/tema1/14.svg', alt='Texto que describa la imagen')

              h5.text-center Regulación y permisos
              p.text-center Algunas cargas requieren documentos y autorizaciones especiales.
    
    separador

    .bg-full-width.bg-fondo-1.mb-5
      .px-4.p-md-5
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.3  Naturaleza
        
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Las características de la carga son el conjunto de atributos medibles que definen su desempeño en las actividades logísticas. Estos parámetros proporcionan el fundamento técnico para la toma de decisiones en las operaciones, la elaboración de protocolos de manipulación, la estimación de costos logísticos y la mitigación de riesgos dentro de la cadena de suministro.
            p.mb-5   Las características de la carga se clasifican de la siguiente manera:
            
            figure
              img(src="@/assets/curso/tema1/16.svg", data-aos="zoom-in")
                      
        h5.text-center.mb-5 Tener un amplio conocimiento y manejo de las características de la carga permite:

        .row.justify-content-center
          .col-lg-10
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop', style="max-width: 130px")
              .tarjeta.bg-color-sintesis
                .row.align-items-center
                  .col-lg-9
                    .p-4
                      ul.lista-ul--color.lista-ul--separador.mb-0
                        li.d-flex.mb-1.p-0
                          i.fas.fa-circle-check
                          p.mb-0 Reducir un 40% pérdidas por manejo inadecuado.
                        li.d-flex.mb-1.p-0
                          i.fas.fa-circle-check
                          p.mb-0 Optimizar costos mediante selección científica de transporte.
                        li.d-flex.mb-1.p-0
                          i.fas.fa-circle-check
                          p.mb-0 Garantizar cumplimiento en comercio internacional.
                  .col-lg-2
                    img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop')
                      

    .cajon.color-primario.p-4.mb-4.bg-color-1(data-aos="fade-left")
      p.mb-0 Para lograrlo es fundamental contar con un sistema que nos ayude a gestionar las características de la carga, en el cual se integren bases de datos técnica con protocolos estandarizados y capacitación continua sobre normatividad.
    

    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Tipos

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La carga se clasifica en distintas categorías según sus propiedades físicas, condiciones de transporte y necesidades de manipulación. Esta organización es esencial para asegurar un traslado seguro, eficiente y en cumplimiento con las regulaciones vigentes.
    

        .cajon.color-primario.p-4.mb-4.bg-color-1(data-aos="fade-left")
          p.mb-0 Según el blog de la empresa Satrack, la importancia de una correcta clasificación de cargas radica, por un lado, en conservar las mercancías en su estado original y resguardarlas de que sufran cualquier tipo de daño o rotura. Por otro lado, es fundamental para garantizar el cumplimiento de los tiempos de entrega de mercancías, agilizando las tareas de carga y descarga, y velando también por la seguridad del personal de trabajo. Los principales tipos de carga son los siguientes:     

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Carga general")
        .row.p-4.align-items-center
          .col-md-8.order-2
            h3 Carga general
            p Este tipo de carga se mueve en pequeñas cantidades y en unidades separadas, lo que permite contar cada bulto de manera individual. Por esta razón, se manipula como unidades específicas. Además, se transporta y almacena de manera agrupada para facilitar su manejo y organización. La carga general se divide en:
            ul.lista-ul--color.lista-ul--separador
              li.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Carga suelta</b>: consiste en bienes sueltos o individuales, transportados como unidades separadas.
              li.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Carga unitarizada</b>, compuesta por cargas sueltas agrupadas en paletas o contenedores.
        
          .col-md-4.order-1.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/20.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Carga a granel")
        .row.p-4.align-items-center
          .col-md-8.order-2
            h3 Carga a granel
            p Este tipo de carga no se puede embalar ni envolver, por lo que su clasificación se basa en su peso y volumen. Generalmente, se almacena y transporta en contenedores adecuados según el material del que está compuesta. Además, estos contenedores pueden formar parte del mismo medio de transporte, como un buque o un camión, facilitando su traslado de manera segura y organizada. La carga a granel puede ser: 
            ul.lista-ul--color.lista-ul--separador
              li.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Solida</b>: abonos, granos, comestibles, fertilizantes, minerales, entre otros.
              li.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Liquida</b>: petróleo, lubricantes, gasolina, diésel y sebo.
              li.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Gaseosa</b>: gas propano, butano, entre otros.
        
          .col-md-4.order-1.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/21.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Carga perecedera")
        .row.p-4.align-items-center
          .col-md-8.order-2
            h3 Carga perecedera
            p Este tipo de carga se transporta y almacena teniendo en cuenta su tiempo de vida útil, ya que es limitado. Por ello, su distribución debe realizarse de manera rápida y eficiente para evitar que el producto se deteriore. Además, es fundamental cumplir con condiciones específicas de almacenamiento que ayuden a conservar la calidad y extender la durabilidad de la mercancía. Esto aplica a productos como carne, pescado, frutas, verduras y lácteos, entre otros.
        
          .col-md-4.order-1.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/22.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Carga frágil")
        .row.p-4.align-items-center
          .col-md-8.order-2
            h3 Carga frágil
            p Este tipo de carga requiere un manejo especial debido a la fragilidad de los productos que transporta. Por ello, los medios de almacenamiento y traslado están diseñados con protección adicional para evitar daños, roturas o alteraciones. Ejemplos de esta carga incluyen objetos de cristal, porcelana, vidrio y artículos de colección, como antigüedades o piezas de arte, que deben manipularse con sumo cuidado.
        
          .col-md-4.order-1.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/23.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Carga peligrosa")
        .row.p-4.align-items-center
          .col-md-8.order-2
            h3 Carga peligrosa
            p Las cargas peligrosas requieren una protección especial, no por su fragilidad, sino por el riesgo que representan para quienes las manipulan. Su transporte implica un alto nivel de peligrosidad, por lo que debe regirse por estrictas normas de seguridad y legislación específica. Estas cargas incluyen sustancias inflamables, corrosivas, tóxicas o volátiles. 
            p Según la clasificación de la Organización de las Naciones Unidas (ONU), existen nueve tipos de cargas peligrosas: explosivos, gases, líquidos inflamables, sólidos inflamables, sustancias comburentes y peróxidos orgánicos, sustancias tóxicas e infecciosas, material radiactivo, sustancias corrosivas y sustancias y objetos peligrosos varios.
        
          .col-md-4.order-1.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/24.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg-color-5.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/25.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Clasificación ONU cargas peligrosas
                  p.text-white Para ampliar la información acerca de la clasificación de la ONU de las cargas peligrosas, lo invitamos a consultar el siguiente enlace: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.icao.int/safety/DangerousGoods/DGP%2023%20Working%20Papers/DGP.23.WP.005.2.sp.pdf" target="_blank")
                    span Ir a página
                    i.fas.fa-file-download

    separador

    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Ubicación 
    
    img(data-aos="fade-up")(src="@/assets/curso/tema1/26.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.pst.mb-5
      .col-lg-10
        p.banner-text Para asignar la ubicación de la mercancía en el almacén es importante tener en cuenta las características de esta, como, rotación, peso, volumen, entre otras. Estos datos son útiles para la toma de decisiones a la hora de definir: el tamaño de las paletas, los equipos, el sistema de almacenamiento y la amplitud de los pasillos y en general de todo lo que pueda condicionar los metros cuadrados y cúbicos que se tendrán que destinar para el almacenamiento.
    
    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/27.png", alt="alt")
          .crd_hover_txt--body.bg-color-6
            h4.mb-3.text-center Compatibilidad
            p.mb-0 Resulta crucial definir qué productos se pueden almacenar junto a otros y cuáles no.  Ejemplo: no situar de forma cercana los corrosivos y alimentos.
      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/28.png", alt="alt")
          .crd_hover_txt--body.bg-color-7
            h4.mb-3.text-center Complementariedad
            p.mb-0 Se trata de poner cercanos los productos que se suelen solicitar en un mismo pedido.
      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/29.png", alt="alt")
          .crd_hover_txt--body.bg-color-6
            h4.mb-3.text-center Tamaño y peso
            p.mb-0 Se debe procurar que los recorridos con mercancías de gran tamaño y volumen sean lo menos posible.
      .col-xl-3.col-lg-6.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/30.png", alt="alt")
          .crd_hover_txt--body.bg-color-7
            h4.mb-3.text-center Rotación
            p.mb-0 Se ubican en las zonas de mayor acceso las mercancías que mayor actividad generan en el almacén. Este criterio se puede realizar a través del método ABC.

    .row.justify-content-center.mb-5
      .col-lg-5
        div.p-3.bg-color-8.tarjeta
          h5.mb-0.text-center La correcta disposición física de la carga permite garantizar:
    
    .row.mb-5.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.h-100(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.pe-0
              figure
                img(src='@/assets/curso/tema1/31.svg', alt='')
            .col-lg.ps-0
              .p-2
                p.mb-0(data-aos="fade-up") <b>Seguridad</b>: evitar accidentes o daños.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.h-100(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.pe-0
              figure
                img(src='@/assets/curso/tema1/32.svg', alt='')
            .col-lg.ps-0
              .p-2
                p.mb-0(data-aos="fade-up") <b>Eficiencia</b>: maximizar espacio y reducir costos.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.h-100(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.pe-0
              figure
                img(src='@/assets/curso/tema1/33.svg', alt='')
            .col-lg.ps-0
              .p-1
                p.mb-0(data-aos="fade-up") <b>Estabilidad</b>: equilibrar peso y evitar desplazamientos.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-9.h-100(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.pe-0
              figure
                img(src='@/assets/curso/tema1/34.svg', alt='')
            .col-lg.ps-0
              .p-1
                p.mb-0(data-aos="fade-up") <b>Cumplimiento normativo</b>: leyes de transporte y logística.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Método ABC
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/35.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Uno de criterios que se deben tener en cuenta para colocar los productos en el almacén es la rotación, para categorizar estos productos en función de la rotación se utiliza el método ABC, este facilita la ordenación de todas las referencias según sus índices de ventas, adicionalmente permite la administración de los recursos de inventario y facilita la toma de decisiones. Este análisis se basa en la Ley de Pareto, en el cual se pueden clasificar los artículos en tres grupos A, B o C así:

    
    .bg-full-width-2.bg-fondo-2
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/36.png', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="25%" y="78.5%" numero="+")
                h5.bg-color-10 Grupo  A
                p Aproximadamente el 20 % de las existencias del almacén produce una rotación de casi 80 % de las ventas del almacén, lo que quiere decir que, a efectos de control, estas referencias serán las más importantes, pues controlando ese 20 % se tendrá controlado el 80 % del movimiento del almacén. Se deben ubicar en zonas próximas a la salida.
    
              .bg-color-white.box-shadow.p-3(x="51%" y="78.5%" numero="+")
                h5.bg-color-10 Grupo B
                p Se encuentran productos con rotación intermedia (30 % de las referencias suponen 15 % de las ventas del almacén). Se deben ubicar en zonas de accesibilidad alta, sin embargo, son artículos de importancia secundaria.
    
              .bg-color-white.box-shadow.p-3(x="76%" y="78.5%" numero="+")
                h5.bg-color-10 Grupo C
                p Se encuentran una gran cantidad de artículos correspondiente a la mitad de las existencias: 50%, cuyos pedidos son escasos (5% de rotación). Se deben ubicar en zonas de accesibilidad normal y que no dificulten las operaciones habituales del almacén.
    
    separador

    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Métodos de unitarización 
    
    .bg-full-width.bg-fondo-1.mb-5
      .px-4.p-md-5
        p.mb-5 La  unitarización de la carga consiste en reunir mercancías sueltas en unidades de carga más grandes para hacer su manejo, transporte y almacenamiento más sencillo. Este proceso ayuda a mejorar la eficiencia logística, disminuir costos y reducir el riesgo de daños durante su traslado.
        .row.mb-5.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/37.svg", data-aos="zoom-in")
          .col-lg-9
            p.mb-5 La unitarización de la carga tiene como objetivos:
            .row
              .col-lg-3.mb-3.mb-lg-0
                .bg-color-9(data-aos="fade-up")
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.mb-3.mb-lg-0.pe-0
                      figure
                        img(src='@/assets/curso/01.svg', alt='')
                    .col-lg.ps-0
                      .p-2
                        h5.mb-0(data-aos="fade-up") Optimizar espacio.
              .col-lg-3.mb-3.mb-lg-0
                .bg-color-9(data-aos="fade-up")
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.mb-3.mb-lg-0.pe-0
                      figure
                        img(src='@/assets/curso/02.svg', alt='')
                    .col-lg.ps-0
                      .p-2
                        h5.mb-0(data-aos="fade-up") Reducir tiempos.
              .col-lg-3.mb-3.mb-lg-0
                .bg-color-9(data-aos="fade-up")
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.mb-3.mb-lg-0.pe-0
                      figure
                        img(src='@/assets/curso/03.svg', alt='')
                    .col-lg.ps-0
                      .p-2
                        h5.mb-0(data-aos="fade-up") Proteger la mercancía.
              .col-lg-3.mb-3.mb-lg-0
                .bg-color-9(data-aos="fade-up")
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.mb-3.mb-lg-0.pe-0
                      figure
                        img(src='@/assets/curso/04.svg', alt='')
                    .col-lg.ps-0
                      .p-2
                        h5.mb-0(data-aos="fade-up") Facilitar el rastreo.

        .cajon.color-primario.bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Para que el sistema opere de manera eficiente, es necesario definir reglas estándar para cada mercancía que ingrese al almacén. Esto garantizará que todos los trabajadores sigan un mismo criterio, facilitando el manejo y organización de los productos.

        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Métodos de unitarización.
        
        .tabla-a.color-acento-contenido.tab 
          table
            caption <b>Fuente</b>: SENA, 2025.
            thead
              tr.text-center
                th.bg-color-3.text-center Método
                th.bg-color-3.text-center Descripción
                th.bg-color-3.text-center Ventajas
                th.bg-color-3.text-center Ejemplos
            tbody
              tr.bg-color-white
                td Paletización
                td Uso de palés (madera, plástico o metal) para agrupar cajas o bultos.
                td 
                  | - Estándar global (1200 x 800 mm o 1200 x 1 000 mm). 
                  br
                  | - Compatible con grúas y montacargas.
                td Cajas, bolsas, latas, entre otros.
              tr.bg-color-11
                td Contenerización
                td Empaque en contenedores ISO (20’, 40’, reefer, open top, etc.).
                td 
                  | - Protección contra robos y clima.
                  br
                  | - Ideal para transporte multimodal.
                td Mercancía general y maquinaria.
              tr.bg-color-white
                td Cajas / Cajones
                td Unitarización en cajas de plástico, metal o madera (reutilizables).
                td 
                  | - Reutilizables.
                  br
                  | - Apilables.
                td Piezas automotrices y frutas.
              tr.bg-color-11
                td Big Bags
                td Sacos gigantes (1–2 t) para graneles sólidos (harina, minerales, químicos, entre otros).
                td 
                  | - Reduce pérdidas.
                  br
                  | - Fácil manipulación con grúas.
                td Cemento, arena y granos.
              tr.bg-color-1white
                td Film Estirable
                td Envoltura plástica para fijar carga en palés.
                td 
                  | - Evita desplazamientos.
                  br
                  | - Protege de polvo / humedad.
                td Bebidas, productos empaquetados.
              tr.bg-color-11
                td Cintas/Zunchos
                td Refuerzo con cintas metálicas o plásticas para asegurar bultos.
                td 
                  | - Bajo costo.
                  br
                  | - Aplicable a cualquier forma.
                td Paquetes y láminas de acero.
              tr.bg-color-white
                td ULD (Aéreo)
                td Unidades de carga aérea (palés o contenedores especiales para aviones).
                td 
                  | - Cumple normas IATA.
                  br
                  | - Maximiza espacio en bodegas.
                td Correo urgente y productos frágiles.
    
    p.mb-5 Cabe destacar que los principales métodos de unitarización de carga son la paletización y contenerización:

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.position-relative
        figure
          img(src="@/assets/curso/tema1/38.png", data-aos="zoom-in")
        .bg-color-6.p-4
          h4 Paletización
          p.mb-0 Es la técnica más utilizada para agrupar mercancías en unidades de carga más grandes. Su propósito es organizar productos pequeños, principalmente cajas, y colocarlos sobre una estiba para facilitar su manejo. Aunque las estibas de madera son las más comunes, también existen opciones de plástico o metal, dependiendo de las necesidades de almacenamiento y transporte.
        img.pst-2(src="@/assets/curso/tema1/42.svg", data-aos="zoom-in")
      .col-lg-6.position-relative
        figure
          img(src="@/assets/curso/tema1/39.png", data-aos="zoom-in")
        .bg-color-7.p-4
          h4 Contenerización
          p.mb-0 Este método utiliza contenedores para movilizar mercancías de manera más eficiente dentro de la cadena de suministro. Gracias a su uso, los exportadores ya no necesitan trasladar sus bienes directamente al puerto, ya que pueden enviarlos en contenedores que se desplazan a través de distintos medios intermodales, facilitando su logística y reduciendo costos de transporte.
        img.pst-2(src="@/assets/curso/tema1/42.svg", data-aos="zoom-in")
    
    .bg-fondo-3.mb-5
      .p-4.p-md-5
        .row.align-items-center.justify-content-end
          .col-10.col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/40.png", data-aos="zoom-in")
          .col-lg-9(data-aos="fade-left")
            .row.align-items-center
              .col-lg-auto
                img.d-none.d-lg-flex(src="@/assets/curso/tema1/41.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Podemos concluir que la unitarización de la carga no solo consiste en agrupar mercancías, sino que también mejora la eficiencia de los procesos logísticos y optimiza la productividad dentro de la cadena de suministro. Su correcta aplicación permite un manejo más ágil y organizado de los productos, facilitando su transporte y almacenamiento.

       


              
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
