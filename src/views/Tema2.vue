<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manipulación de la carga

    .bg-full-width.bg-fondo-1.mb-5
      .px-4.p-md-5
        img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="Imagen decorativa")

        .row.justify-content-center.align-items-center.pst.mb-5
          .col-lg-10
            p.banner-text La mercancía, debido a sus características, requiere de medios de manipulación y almacenamiento determinados. Cuando se habla de la manipulación de productos, se hace referencia a maniobrar las mercancías, hacerlas más ligeras para una mejor manipulación y posterior desplazamiento hacia cajas, estibas o consolidación de la mercancía en el centro de distribución
        separador

        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Concepto
        
        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") La manipulación de la carga abarca todas las actividades necesarias para mover, almacenar, proteger y controlar las mercancías mientras se transportan y almacenan. Realizar este proceso de manera eficiente ayuda a prevenir daños, disminuir costos y agilizar los tiempos dentro de la cadena de suministro.
            .cajon.color-primario.bg-color-1.p-4(data-aos="fade-left")
              p.mb-0 A la hora de ejecutar la manipulación de la carga debemos tener presente los siguientes principios:
    
    .bg-full-width-2.bg-fondo-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            figure
              img.d-none.d-md-flex(src="@/assets/curso/tema2/3.svg", data-aos="zoom-in")
              img.d-md-none(src="@/assets/curso/tema2/3-1.svg", data-aos="zoom-in")
    
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Técnicas 
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") La manipulación de carga comprende todas las acciones físicas aplicadas a las mercancías durante su transporte, almacenamiento y distribución. Estas prácticas son esenciales para: 
  
        .row.align-items-start
          .col-lg-auto.order-2
            img(src="@/assets/curso/tema2/5.svg", style="max-width: 265px").mx-auto
          .col-lg.order-1.mb-3.mb-lg-0
            ul.lista-ul--color.lista-ul--separador
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Garantizar la integridad de los productos.
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Optimizar los tiempos operativos.
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Reducir costos logísticos.
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Minimizar riesgos laborales.
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Cumplir con normativas internacionales.
    
    .bg-full-width.bg-fondo-1.mb-5
      .px-4.p-md-5
        .cajon.color-primario.bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 En la gestión del almacén se requieren establecer aquellas técnicas de manipulación más favorables de acuerdo a las características del producto, los medios o equipos de manipulación necesarios para mover y trasladar mercancías dentro del almacén y los medios o equipos de almacenamiento, que hace referencia a los estantes, cajas, armarios, suelos, silos, contenedores, etc. que sirven para guardar mercancías requeridas posteriormente.
        
        p.mb-5 A continuación, se describen las diferentes técnicas para la manipulación de la carga:

        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Técnicas de manipulación de la carga
        
        .tabla-a.color-acento-contenido.tab 
          table
            caption <b>Fuente</b>: SENA, 2025.
            thead
              tr.text-center
                th.bg-color-3.text-center Clasificación
                th.bg-color-3.text-center Técnicas
                th.bg-color-3.text-center Descripción
            tbody
              //- Por tipo de operación - Carga y descarga
              tr.bg-color-white
                td(rowspan="2") Por tipo de operación
                td Carga y descarga
                td 
                  | Método piramidal: apilamiento gradual con base más ancha. 
                  br
                  | Técnica de sandwich: alternar capas de protección entre productos. 
                  br
                  | Procedimiento de zona caliente: áreas designadas para carga rápida.
              tr.bg-color-11
                td Almacenamiento
                td 
                  | Sistema Drive-In: para productos homogéneos con rotación FIFO. 
                  br
                  | Compactación dinámica: uso de estanterías móviles. 
                  br
                  | Slotting inteligente: ubicación por algoritmos de frecuencia de uso.
              
              //- Por tipo de carga - Frágil y peligrosa
              tr.bg-color-white
                td(rowspan="2") Por tipo de carga
                td Carga frágil
                td 
                  | Método de flotación: amortiguación con materiales viscoelásticos. 
                  br
                  | Técnica de nido: moldes personalizados por pieza. 
                  br
                  | Sistema de suspensión: barras colgantes para componentes delicados.
              tr.bg-color-11
                td Carga peligrosa
                td 
                  | Procedimiento de contención doble: barreras secundarias para líquidos. 
                  br
                  | Técnica de segregación: distancias mínimas entre clases de riesgo. 
                  br
                  | Método de neutralización: áreas con materiales absorbentes.

              //- Avanzadas - Mecanizados y soporte
              tr.bg-color-white
                td(rowspan="2") Avanzadas
                td Sistemas mecanizados
                td 
                  | Automatización por voz: comandos vocales para operarios. 
                  br
                  | Robótica colaborativa: brazos robóticos con sensores de fuerza. 
                  br
                  | Vehículos Guiados Automáticos (AGV): flotas autónomas coordinadas.
              tr.bg-color-11
                td Tecnologías de soporte
                td 
                  | Realidad aumentada: visualización de datos de manipulación. 
                  br
                  | Sensores IoT: monitoreo de condiciones en tiempo real. 
                  br
                  | Blockchain logístico: registro inmutable de manipulaciones.

   
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las técnicas de manipulación de carga han pasado de ser métodos tradicionales a sistemas avanzados y tecnológicos. Para elegir la técnica adecuada, es importante tomar en cuenta:
    
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
                    img(src='@/assets/curso/tema2/7.svg', alt='Texto que describa la imagen')

              h5.text-center o	Características intrínsecas de la carga.

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
                    img(src='@/assets/curso/tema2/8.svg', alt='Texto que describa la imagen')

              h5.text-center o	Infraestructura disponible.

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
                    img(src='@/assets/curso/tema2/9.svg', alt='Texto que describa la imagen')

              h5.text-center o	Requerimientos regulatorios.
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
                    img(src='@/assets/curso/tema2/10.svg', alt='Texto que describa la imagen')

              h5.text-center o	Relación costo-beneficio.
    
    .cajon.color-primario.bg-color-1.p-4(data-aos="fade-left")
      p.mb-0 Una manipulación eficiente de la carga marca la diferencia en la cadena de suministro actual, donde la precisión, rapidez y seguridad son claves para lograr un proceso logístico exitoso.
    
    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Equipos 

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.svg", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Una correcta gestión de almacenamiento requiere evaluar los equipos que se usan para el manejo de materiales y de almacenamiento, procurando tener fácil acceso al material y capacidad de movimiento desde la posición de almacenamiento hasta los muelles de carga.
        p El uso correcto del equipo permite mejorar la gestión de almacenamiento, por ejemplo, para artículos con alta rotación se deben usar equipos que permitan recogerlos de manera fácil.
    
    .cajon.color-primario.bg-color-1.p-4.mb-5(data-aos="fade-left")
      p.mb-0 El objetivo de estos equipos es permitir que se minimicen los tiempos en las tareas de manipulación, evitar que los operarios realicen esfuerzos excesivos, reducir costos y contribuir a realizar las actividades de forma más eficiente.
    
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Factores clave para la selección de equipos.
        figure.mb-5
          img(src='@/assets/curso/tema2/12.svg', alt='Texto que describa la imagen', data-aos="zoom-in")
          figcaption Fuente: SENA, 2025

    .bg-full-width.bg-fondo-1.mb-5
      .px-4.p-md-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
          .col-lg-9
            p.mb-4 Además de los factores mencionados anteriormente, es importante tener en cuenta las siguientes consideraciones económicas:
            .row.mb-4.align-items-center
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-12.tarjeta.h-100(data-aos="fade-up")
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.mb-3.mb-lg-0.pe-0
                      figure
                        img(src='@/assets/curso/01.svg', alt='')
                    .col-lg.ps-0
                      .p-2
                        h5.mb-0(data-aos="fade-up") Costo inicial vs vida útil.
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-12.tarjeta.h-100(data-aos="fade-up")
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.mb-3.mb-lg-0.pe-0
                      figure
                        img(src='@/assets/curso/02.svg', alt='')
                    .col-lg.ps-0
                      .p-2
                        h5.mb-0(data-aos="fade-up") Consumo energético.
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-12.tarjeta.h-100(data-aos="fade-up")
                  .row.justify-content-center.align-items-center
                    .col-lg-auto.mb-3.mb-lg-0.pe-0
                      figure
                        img(src='@/assets/curso/03.svg', alt='')
                    .col-lg.ps-0
                      .p-1
                        h5.mb-0(data-aos="fade-up") Requerimientos de mantenimiento.
            .cajon.color-primario.bg-color-1.p-4.mb-5(data-aos="fade-left")
              p.mb-0 A continuación, encontraremos los diferentes equipos que se utilizan para la manipulación de la carga: 

        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Clasificación de equipos.
        
        .tabla-a.color-acento-contenido.tab.mb-5
          table
            caption <b>Fuente</b>: SENA, 2025.
            thead
              tr.text-center
                th.bg-color-3.text-center Clasificación
                th.bg-color-3.text-center Equipos
                th.bg-color-3.text-center Aplicación
                th.bg-color-3.text-center Ventajas
            tbody.bg-color-7
              //- Para carga unitarizada
              tr.bg-color-white
                td(rowspan="4") Para carga unitarizada
                td Carretillas elevadoras
                td Almacenes, puertos.
                td Versatilidad y múltiples accesorios.
              tr.bg-color-11
                td Transpaletas
                td Cortas distancias.
                td Económicas y fáciles de operar.
              tr.bg-color-white
                td Apiladores
                td Estanterías medias.
                td Compactos e ideales para pasillos estrechos.
              tr.bg-color-11
                td Recogepedidos
                td Preparación de pedidos.
                td Operador se eleva con la carga.

              //- Para carga a granel
              tr.bg-color-white
                td(rowspan="3") Para carga a granel
                td Cintas transportadoras
                td Minería, agricultura.
                td Flujo continuo, automatizable.
              tr.bg-color-11
                td Tractocargadores
                td Puertos, construcción.
                td Movilidad en exteriores.
              tr.bg-color-white
                td Sistemas neumáticos
                td Industria alimentaria.
                td Manipulación higiénica.

              //- Para cargas especiales
              tr.bg-color-11
                td(rowspan="3") Para cargas especiales
                td Grúas horquilla
                td Contenedores
                td Alcance vertical.
              tr.bg-color-white
                td Plataformas giratorias
                td Maquinaria pesada
                td Precisión en posicionamiento.
              tr.bg-color-11
                td Brazos robóticos
                td Líneas de producción.
                td Repetibilidad exacta.

    .cajon.color-primario.bg-color-1.p-4(data-aos="fade-left")
      p.mb-0 Con los avances tecnológicos de los últimos años se ha logrado mejorar los procesos de manipulación de la carga, a través de la implementación de equipos innovadores como, por ejemplo:

    .bg-full-width.bg-fondo-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.mb-3
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.h-100.p-4
              .row.justify-content-center.mb-5
                .col-6
                  figure
                    img(src='@/assets/curso/tema2/14.svg', alt='Texto que describa la imagen')

              h5.text-center Tecnología automatizada 
              p vehículos guiados automáticos, drones de almacén.

          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-2.h-100.p-4
              .row.justify-content-center.mb-5
                .col-6
                  figure
                    img(src='@/assets/curso/tema2/15.svg', alt='Texto que describa la imagen')

              h5.text-center Equipos híbridos 
              p carretillas híbridas, montacargas solares.

        separador

        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.4 Normativa 

        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Las  normas para la manipulación de carga incluyen leyes, reglamentos y estándares técnicos que fijan los requisitos obligatorios para su correcto manejo y transporte.
            .cajon.color-primario.bg-color-1.p-4.mb-3(data-aos="fade-left")
              p.mb-0 Estas regulaciones garantizan la seguridad, eficiencia y cumplimiento dentro de la cadena logística:
            .row
              .col-lg-6.mb-3.mb-lg-0
                ul.lista-ul--color.lista-ul--separador
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Movimiento (carga/descarga y transporte interno).
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Almacenamiento (ubicación y condiciones ambientales).
              .col-lg-6
                ul.lista-ul--color.lista-ul--separador
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Protección (embalaje y fijación).
                  li.d-flex.mb-2
                    i.fas.fa-circle-check
                    p.mb-0 Seguridad (laboral y de la mercancía).

        p.mb-5 Podemos decir que la normativa busca garantizar que las operaciones logísticas sean seguras, eficientes y legales, minimizando riesgos para trabajadores, mercancías y medio ambiente.

        .bg-fondo-4.mb-5
          .px-4.px-md-5
            .row.align-items-center.justify-content-end
              .col-10.col-lg-3.mb-3.mb-lg-0.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/17.svg", data-aos="zoom-in")
              .col-lg-9(data-aos="fade-left").order-lg-1
                .row.align-items-center
                  .col-lg-auto
                    img.d-none.d-lg-flex(src="@/assets/curso/tema2/17-1.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 Colombia cuenta con un conjunto de normas que regulan la manipulación de carga, enfocadas en seguridad laboral, transporte y almacenamiento. Las principales son:           

      

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
