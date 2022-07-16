<template>
  <div ref="container">
    <div class="h-screen w-full">
      <img
        class="h-full w-full object-cover mx-auto"
        src="placeholder-images/header-bg-1.jpg"
        alt=""
      >
    </div>

    <section>
      <TextMarquee>
        Lorem ipsum dolor sit amet, consectetur adipiscing&nbsp;elit.
      </TextMarquee>

      <TextBoxWithImage
        :image="{ src: '/placeholder-images/phil-hargreaves.jpg', alt: 'Phil Hargreaves' }"
      >
        <p class="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare
          sem ante. Fusce bibendum facilisis dolor, vulputate sollicitudin sem
          molestie semper. Proin vulputate urna non ex tempor accumsan a a enim.
        </p>
        <p class="mb-8">
          Donec eu nibh odio. Duis sollicitudin, sem et ullamcorper bibendum, ex
          diam vulputate ligula, ac aliquet odio mi eget ligula.
        </p>
        <p>
          Quisque in massa risus. Aliquam aliquet turpis eu hendrerit interdum.
          Proin placerat justo dolor, et aliquam est varius vel.
        </p>
      </TextBoxWithImage>

      <QuoteBlock attribution="Kelly Wotsits">
        "Vestibulum accumsan pretium sapien viverra tristique. Pellentesque
        imperdiet convallis sapien tincidunt semper. Integer bibendum auctor
        lectus, vitae laoreet eros feugiat sed. Integer ultrices orci id auctor
        laoreet."
      </QuoteBlock>

      <TestimonialsBlock />

      <MakeABookingCallOut />

      <TextBoxWithImage
        cta-text="Read more"
        cta-link="/about-your-photoshoot"
        :image="{ src: '/placeholder-images/studio.jpg', alt: 'The studio' }"
      >
        <h2 class="font-serif-small font-bold text-3xl mb-6">
          About Your Photoshoot
        </h2>
        <p class="mb-8">
          Morbi lectus mauris, interdum nec odio ut, congue imperdiet ligula.
          Mauris ut scelerisque nunc. Mauris aliquet fermentum diam. Integer in
          quam eu dui pharetra imperdiet.
        </p>
        <p>
          Nulla ullamcorper molestie nisl, et mollis tortor congue id. Praesent
          condimentum fermentum fermentum. Duis quis felis in enim cursus
          imperdiet eget at nisi. Etiam sodales ultricies ultricies.
        </p>
      </TextBoxWithImage>

      <QuoteBlock attribution="Ricky Cheetos">
        "Nunc vehicula erat ut tempor dictum. Proin laoreet egestas lorem in
        condimentum. Nunc sodales velit id pulvinar facilisis. Vestibulum a
        porttitor magna."
      </QuoteBlock>

      <TextBoxWithImage
        cta-text="Explore"
        cta-link="/gallery"
        :image="{ src: '/placeholder-images/gallery.jpg', alt: 'Gallery of images' }"
        image-position="right"
      >
        <h2 class="font-serif-small font-bold text-3xl mb-6">
          Gallery
        </h2>
        <p class="mb-8">
          Donec metus mi, tristique a tincidunt eget, suscipit sit amet ipsum.
          Nullam eu malesuada lectus, ut aliquam nibh. Etiam eu euismod enim,
          quis consequat velit. In dictum eu tortor et semper.
        </p>
        <p>
          Maecenas vulputate facilisis mauris eu consequat. Morbi sit amet
          accumsan sem. Proin ut eros mi. Aliquam eu cursus elit, et
          pellentesque nibh. Duis quis venenatis libero.
        </p>
      </TextBoxWithImage>

      <QuoteBlock attribution="Janine Porridge">
        "Phasellus vel est ut magna bibendum interdum ut a dui. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus."
      </QuoteBlock>

      <TextBoxWithImage
        cta-text="Get in touch"
        cta-link="/contact"
        :image="{
          src: '/placeholder-images/contact.jpg',
          alt: 'A dog on a light blue background',
        }"
      >
        <h2 class="font-serif-small font-bold text-3xl mb-6">
          Contact
        </h2>
        <p class="mb-8">
          Morbi id posuere nulla, ut blandit lacus. Etiam et odio et libero
          porta pharetra. Duis convallis velit vitae tincidunt luctus. Cras
          vestibulum accumsan lectus vitae bibendum. Interdum et malesuada fames
          ac ante ipsum primis in faucibus.
        </p>
        <p>
          Suspendisse maximus maximus fringilla. Praesent id mauris ac est
          porttitor pellentesque. Donec sodales hendrerit nisl non vehicula.
          Praesent quis leo lobortis, ornare diam vitae, pharetra dolor.
        </p>
      </TextBoxWithImage>
    </section>
  </div>
</template>

<script>
import TestimonialsBlock from '../components/TestimonialsBlock.vue'
export default {
  components: { TestimonialsBlock },
  setup () {
    const container = ref(null)
    return { container }
  },
}
</script>
