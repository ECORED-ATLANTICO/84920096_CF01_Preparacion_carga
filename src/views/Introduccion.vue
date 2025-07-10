<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente aborda los fundamentos esenciales para el manejo eficiente de mercancías, comenzando con el estudio de la carga: su concepto, clasificación, naturaleza y métodos de unitarización. Se analizan sus características físicas y logísticas, así como su ubicación en la cadena de suministro, proporcionando las bases para una gestión adecuada de los diferentes tipos de productos y sus requerimientos de almacenamiento y transporte.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/2.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Además, se profundiza en la manipulación de carga, explorando técnicas, equipos y normativas para un manejo seguro y optimizado. Asimismo, se examinan los mecanismos de marcado y rotulado, destacando su importancia en la identificación, trazabilidad y cumplimiento regulatorio. 
    
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-left")
          p.mb-0 El módulo integra buenas prácticas para garantizar procesos logísticos eficaces, reduciendo riesgos y mejorando la productividad en las operaciones de carga y descarga.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  


</template>

<script>
export default {
  name: 'Introduccion',
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
