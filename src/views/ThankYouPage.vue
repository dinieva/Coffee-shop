<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <header-view-component
          classItem="title-big"
          :header="headers[4].header"
        />
        <!-- <h1 class="title-big">Thank you</h1> -->
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img
              class="beanslogo mt-5"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="title big__text mt-5">
              <p>Thank you so much</p>
              <p>We contact you as soon as posible</p>
              <img src="@/assets/img/thanks.png" alt="thanks-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import HeaderViewComponent from "@/components/HeaderViewComponent.vue";

export default {
  components: { NavBarComponent, ProductCard, HeaderViewComponent },

  data() {
    return {
      headers: [
        {
          id: 0,
          header: "Everything You Love About Coffee",
        },
        {
          id: 1,
          header: "Our coffee",
        },
        {
          id: 2,
          header: "For your pleasure",
        },
        {
          id: 3,
          header: "Contact us",
        },
        {
          id: 4,
          header: "Thank you",
        },
      ],
    };
  },
};
</script>