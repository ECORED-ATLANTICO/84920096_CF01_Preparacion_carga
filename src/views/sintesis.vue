<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se describe una visión general sobre los aspectos clave del desarrollo de la disposición y logística de la carga. Comienza con generalidades de la carga, sus tipos y características, al igual que su ubicación y unitarización. Incluye lo referente a la manipulación de la carga, las técnicas y equipos implementados. Además, se explora la normativa que rige en nuestro país y las buenas prácticas. Finalmente, se aborda el marcado y rotulado de la carga, describiendo todo lo relacionado con los tipos y características de cada uno para garantizar seguridad, eficiencia y cumplimiento legal en el transporte y almacenamiento.
    .row.justify-content-center.bg-color-sintesis.tarjeta.p-4
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo Disposición y logística de la carga ofrece una visión general de la carga, su clasificación y ubicación. Incluye todo lo referente a la manipulación de la carga, así como la marcación y rotulado de estas. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
