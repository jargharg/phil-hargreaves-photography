<template>
  <div ref="container">
    <div class="h-screen w-full">
      <img
        class="h-full w-full object-cover mx-auto"
        src="/placeholder-images/header-bg-1.jpg"
        alt="TEST"
      >
    </div>

    <section>
      <TextBoxWithImage
        class="bg-brand-pink-dark"
        :image="{
          src: '/placeholder-images/phil-hargreaves.jpg',
          alt: 'Phil Hargreaves',
        }"
        cta-text="About your photoshoot"
        cta-link="/about"
      >
        <h2 class="font-serif-small font-bold text-4xl lg:text-6xl mb-10 max-w-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h2>

        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare
          sem ante. Fusce bibendum facilisis dolor, vulputate sollicitudin sem
          molestie semper. Proin vulputate urna non ex tempor accumsan a a enim.
        </p>
        <p class="mb-4">
          Donec eu nibh odio. Duis sollicitudin, sem et ullamcorper bibendum, ex
          diam vulputate ligula, ac aliquet odio mi eget ligula.
        </p>
        <p>
          Quisque in massa risus. Aliquam aliquet turpis eu hendrerit interdum.
          Proin placerat justo dolor, et aliquam est varius vel.
        </p>
      </TextBoxWithImage>

      <TestimonialsBlock />

      <TextBoxWithImage
        class="bg-brand-pink-dark"
        cta-text="Read more"
        cta-link="/about-your-photoshoot"
        :image="{ src: '/placeholder-images/studio.jpg', alt: 'The studio' }"
      >
        <h2 class="font-serif-small font-bold text-4xl lg:text-6xl mb-10 max-w-lg">
          About Your Photoshoot
        </h2>
        <p class="mb-4">
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

      <TextBoxWithImage
        cta-text="Explore"
        cta-link="/gallery"
        :image="{
          src: '/placeholder-images/gallery.jpg',
          alt: 'Gallery of images',
        }"
        image-position="right"
      >
        <h2 class="font-serif-small font-bold text-4xl lg:text-6xl mb-10 max-w-lg">
          Gallery
        </h2>
        <p class="mb-4">
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

      <TextBoxWithImage
        class="bg-brand-pink-dark"
        cta-text="Get in touch"
        cta-link="/contact"
        :image="{
          src: '/placeholder-images/contact.jpg',
          alt: 'A dog on a light blue background',
        }"
      >
        <h2 class="font-serif-small font-bold text-4xl lg:text-6xl mb-10 max-w-lg">
          Contact
        </h2>
        <p class="mb-4">
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
export default {
  setup () {
    const container = ref(null)
    return { container }
  },
}
</script>
