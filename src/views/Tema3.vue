<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Mecanismos de marcado y rotulado
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El marcado y rotulado de la carga es esencial para garantizar un transporte y almacenamiento seguro, eficiente y conforme a normativas. Permite identificar el contenido, advertir riesgos, indicar condiciones de manejo y facilitar el rastreo logístico. 
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto
    
    .row.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.svg", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") Es un proceso de gran importancia en la prestación de servicios postales, transporte de mercancías y mucho más en la distribución física internacional; el marcado y rotulado facilita la identificación de forma rápida de las piezas que conforman la carga, permite agilidad en el proceso de confrontación de las cantidades físicas con los registros en inventarios, además de la localización de los productos en bodegas.
        p El marcado y rotulado de la carga nos permite:

        ul.lista-ul--color.lista-ul--separador
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Identificar el contenido, origen y destino de la mercancía.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Indicar las condiciones especiales de manejo, almacenamiento y transporte.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Advertir sobre riesgos asociados a materiales peligrosos.
          li.d-flex.mb-2
            i.fas.fa-circle-check
            p.mb-0 Facilitar el rastreo y la gestión logística mediante códigos y etiquetas.
    
    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5
        separador

        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.2 Tipos

        p.mb-5 En el contexto de la preparación de la carga, el proceso de marcado y rotulado cumple una función fundamental para garantizar la correcta identificación, manipulación y transporte de los productos. A través de estos elementos visuales se transmite información clave sobre las características físicas, riesgos, destino y condiciones especiales de manejo de la mercancía. Su aplicación adecuada permite optimizar la logística, prevenir daños o accidentes y asegurar el cumplimiento de normativas nacionales e internacionales, especialmente en el comercio exterior y el transporte de mercancías peligrosas. 

        .row.mb-3
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/3.svg", data-aos="zoom-in")
          .col-lg-8
            TabsA.color-acento-contenido.mb-5
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-acento-botones--borde.p-4(titulo="Identificación")
                p.mb-0 El marcado permite identificar la carga mediante datos esenciales como nombre del remitente, número de pedido, códigos SKU o lote, peso bruto y neto, así como dimensiones. Esta información facilita su trazabilidad, almacenamiento y manejo adecuado durante el transporte.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Manipulación")
                p.mb-0 Se utilizan símbolos como “Frágil”, “No apilar” y flechas de orientación con mensajes como “Este lado arriba”. También se indican límites de temperatura, como “Mantener refrigerado”, para asegurar un manejo cuidadoso y evitar daños durante la manipulación.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Peligrosidad")
                p.mb-0 Para cargas peligrosas se emplean pictogramas del SGA, números ONU y etiquetas según el modo de transporte, como ADR o IMO. Estos elementos alertan sobre riesgos químicos, biológicos o físicos y garantizan el cumplimiento de normas de seguridad.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Logístico")
                p.mb-0 El rotulado logístico optimiza la trazabilidad mediante códigos de barras, etiquetas QR o RFID. Incluye números de seguimiento como guías aéreas y etiquetas de destino que facilitan el control de inventario y la correcta ubicación en la cadena logística. 
              .tarjeta.color-acento-botones--borde.p-4(titulo="Regulatorio")
                p.mb-0 Este marcado incluye certificaciones como “CE” o “FDA <em>Approved</em> y símbolos de reciclaje o manejo ambiental. Garantiza que la carga cumpla requisitos legales, comerciales y ambientales, permitiendo su comercialización y aceptación en mercados nacionales e internacionales.
        
        .cajon.color-primario.bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Cada tipo de marcado y rotulado de la carga brinda seguridad, organización y cumplimiento legal en la cadena de suministro.
    
    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Características
    
    img(data-aos="fade-up")(src="@/assets/curso/tema3/4.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.pst.mb-5
      .col-lg-10
        p.banner-text Para que el marcado cumpla su propósito dentro de la cadena logística, debe seguir ciertos criterios que aseguren su efectividad. Estas características permiten que la información sea clara, visible y útil para todos los actores involucrados en el manejo de la carga.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-8
        LineaTiempoD.color-acento-contenido
          div.text-small(numero="1" titulo="Legibilidad  y claridad") 
            ul.lista-ul--color.lista-ul--separador.ms-3.mb-0
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Texto y símbolos visibles, incluso en condiciones adversas (lluvia, polvo, entre otros).
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Uso de colores contrastantes, por ejemplo, negro sobre amarillo para advertencias
          div.text-small(numero="2" titulo="Durabilidad") 
            ul.lista-ul--color.lista-ul--separador.ms-3.mb-0
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Resistente a abrasión, humedad o productos químicos.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Materiales adecuados como etiquetas laminadas y tintas indelebles.
          div.text-small(numero="3" titulo="Ubicación") 
            ul.lista-ul--color.lista-ul--separador.ms-3.mb-0
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 En zonas visibles y accesibles en múltiples caras del embalaje si es necesario.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Evitar áreas susceptibles a daños, por ejemplo, las esquinas.
          div.text-small(numero="4" titulo="Información completa y precisa") 
            ul.lista-ul--color.lista-ul--separador.ms-3.mb-0
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Incluir datos críticos sin saturar el espacio.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Usar múltiples idiomas en comercio internacional, como inglés, español, chino, entre otros.
          div.text-small(numero="5" titulo="Cumplimiento legal") 
            ul.lista-ul--color.lista-ul--separador.ms-3.mb-0
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Adaptarse a regulaciones específicas según el país y tipo de mercancía, por ejemplo, etiquetado FDA para alimentos en EE.UU.
          div.text-small(numero="6" titulo="Estandarización") 
            ul.lista-ul--color.lista-ul--separador.ms-3.mb-0
              li.d-flex.mb-2
                i.fas.fa-circle-check
                p.mb-0 Seguir normas internacionales, como ISO 780 para símbolos de manipulación y SGA para peligros.
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p.mb-0 Consistencia en el formato, como tamaño de letra y ubicación en el embalaje.
    
    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Normativa 
    
    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En un entorno logístico globalizado, donde las cadenas de suministro atraviesan múltiples jurisdicciones y modos de transporte, el desconocimiento de las normativas de marcado y rotulado puede generar consecuencias críticas, desde retrasos operativos y costosas multas hasta incidentes de seguridad con mercancías peligrosas.
        .cajon.color-primario.bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Más allá del aspecto legal, una correcta aplicación normativa optimiza procesos:

    .bg-full-width-2.bg-fondo-2
      .px-4.p-md-5
        .row.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-acento-contenido.h-100.p-4
              div.justify-content-end.d-flex
                h3.mb-0.pst-1.bg-color-4 01
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/tema3/7.svg', alt='Texto que describa la imagen')

              h5.text-center Facilita la automatización
              p.text-center Lectura de códigos RFID/QR en almacenes robotizados.

          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-acento-contenido.h-100.p-4
              div.justify-content-end.d-flex
                h3.mb-0.pst-1.bg-color-4 02
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/tema3/8.svg', alt='Texto que describa la imagen')

              h5.text-center Reduce reprocesos
              p.text-center Evita rechazos por falta de documentación visible.

          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.color-acento-contenido.h-100.p-4
              div.justify-content-end.d-flex
                h3.mb-0.pst-1.bg-color-4 03
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/tema3/9.svg', alt='Texto que describa la imagen')
              h5.text-center Mejora la sostenibilidad
              p.text-center Etiquetas ecoeficientes que cumplen con estándares.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        .row.justify-content-center.mb-5
          .col-lg-9
            div.p-3.bg-color-8.tarjeta
              h5.mb-0.text-center A continuación, se mencionan las diferentes normativas existentes para el marcado y rotulación de la carga:
        
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Normativa para marcado y rotulación de la carga.
        
        .tabla-a.color-acento-contenido.tab 
          table
            caption <b>Fuente</b>: SENA, 2025.
            thead
              tr.text-center
                th.bg-color-3.text-center Clasificación
                th.bg-color-3.text-center Normativa
                th.bg-color-3.text-center Descripción
            tbody.bg-color-7
              //- Internacional
              tr.bg-color-white
                td(rowspan="4") Internacional
                td ISO 780:1997
                td Establece los requisitos para el marcado y rotulación de los embalajes de carga, definiendo los símbolos gráficos que deben usarse para indicar la correcta manipulación, almacenamiento y transporte de mercancías. Incluye directrices sobre la información que debe contener el marcado, como nombre y dirección del remitente y destinatario, peso bruto y neto, número de identificación del embalaje.
              tr.bg-color-11
                td ISO 7000
                td Complementa a la ISO 780 al establecer símbolos gráficos para el uso en equipos y embalajes, garantizando comprensión universal y superando barreras idiomáticas.
              tr.bg-color-white
                td Norma ONU
                td Específica para el transporte de mercancías peligrosas, esta normativa define los requisitos de marcado y rotulación de los embalajes que contienen sustancias peligrosas, incluyendo símbolos y códigos para identificar el tipo de peligro y las precauciones necesarias.
              tr.bg-color-11
                td ADR (Acuerdo Europeo sobre el Transporte de Mercancías Peligrosas por Carretera).
                td Regula el transporte internacional de mercancías peligrosas por carretera, clasificando las mercancías en 9 clases según su grado de peligrosidad y estableciendo el uso obligatorio de etiquetas específicas para cada clase.

              //- Nacional
              tr.bg-color-white
                td(rowspan="2") Nacional
                td NTC 1692
                td Regula el rotulado y etiquetado de embalajes y envases de mercancías peligrosas. Exige identificación clara y visible, etiquetas resistentes a la intemperie, colocación externa y tamaños mínimos (10 x 10 cm para bultos, 25 x 25 cm para vehículos/contenedores).
              tr.bg-color-11
                td Decreto 1609 de 2002 y Decreto Único Reglamentario 1079 de 2015.
                td Regulan el transporte terrestre de mercancías peligrosas, exigiendo el cumplimiento de la NTC 1692 para el rotulado y etiquetado, y establecen requisitos para los vehículos de transporte, como el uso de rótulos reflectivos, ubicación a dos metros de distancia en las partes laterales y altura adecuada para su lectura.

    separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Procedimientos  

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Conocer y aplicar correctamente el procedimiento de marcado y rotulación de la carga es fundamental para garantizar la eficiencia, seguridad y trazabilidad en toda la cadena logística. Este conocimiento va mucho más allá de simplemente colocar una etiqueta; implica entender cómo la información precisa y clara impacta directamente en la manipulación, almacenamiento, transporte y entrega final de la mercancía.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        p.mb-5 El procedimiento correcto también contribuye a la seguridad, especialmente cuando se trata de mercancías peligrosas o frágiles. Un marcado adecuado alerta al personal sobre los riesgos y precauciones necesarias, minimizando accidentes y daños durante el transporte y manipulación.

        .row.justify-content-center
          .col-lg-8
            PasosA.color-acento-contenido.mb-5(tipo="n")
              .row.align-items-center
                .col-md-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema3/11.svg', alt='Texto que describa la imagen')
                .col-md-9
                  h3 Identificación de la carga.
                  p Determinar el tipo de mercancía, su destino, características y necesidades específicas de manipulación.
              .row.align-items-center
                .col-md-9.mb-4.mb-md-0
                  h3 Selección de marcas y etiquetas
                  p Según el tipo de información requerida (expedición, informativa, manipuleo, entre otros) y conforme a la normativa aplicable. to write user style sheet rules, in my opionion.
                .col-md-3
                  figure
                    img(src='@/assets/curso/tema3/12.svg', alt='Texto que describa la imagen')
              .row.align-items-center
                .col-md-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema3/13.svg', alt='Texto que describa la imagen')
                .col-md-9
                  h3 Aplicación de marcas
                  p Utilizar materiales indelebles y resistentes, asegurando la legibilidad y correcta ubicación de la información en el embalaje. Eliminar marcas antiguas para evitar confusiones.
              .row.align-items-center
                .col-md-9.mb-4.mb-md-0
                  h3 Verificación
                  p Comprobar que toda la información es correcta, suficiente y cumple con las exigencias legales y técnicas del país de destino y tránsito.
                .col-md-3
                  figure
                    img(src='@/assets/curso/tema3/14.svg', alt='Texto que describa la imagen')
              .row.align-items-center
                .col-md-3.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema3/15.svg', alt='Texto que describa la imagen')
                .col-md-9
                  h3 Documentación
                  p Asegurar que los documentos de transporte (manifiesto de carga, guías, entre otros) coincidan con la información marcada y rotulada en la carga.
              .row.align-items-center
                .col-md-9.mb-4.mb-md-0
                  h3 Inspección y seguimiento
                  p Durante el transporte y almacenamiento, verificar la integridad y legibilidad de las marcas y etiquetas, reponiéndolas si es necesario.
                .col-md-3
                  figure
                    img(src='@/assets/curso/tema3/16.svg', alt='Texto que describa la imagen')
              
   


</template>

<script>
export default {
  name: 'Tema3',
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
