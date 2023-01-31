<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <header-view-component
          classItem="title-big"
          :header="headers[2].header"
        />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card
                classItem="shop__item"
                :name="goods[0].name"
                :variety="goods[0].variety"
                :price="goods[0].price"
                :image="goods[0].image"
              />
              <product-card
                classItem="shop__item"
                :name="goods[1].name"
                :variety="goods[1].variety"
                :price="goods[1].price"
                :image="goods[1].image"
              />
              <product-card
                classItem="shop__item"
                :name="goods[2].name"
                :variety="goods[2].variety"
                :price="goods[2].price"
                :image="goods[2].image"
              />
              <product-card
                classItem="shop__item"
                :name="goods[3].name"
                :variety="goods[3].variety"
                :price="goods[3].price"
                :image="goods[3].image"
              />
              <product-card
                classItem="shop__item"
                :name="goods[4].name"
                :variety="goods[4].variety"
                :price="goods[4].price"
                :image="goods[4].image"
              />
              <product-card
                classItem="shop__item"
                :name="goods[5].name"
                :variety="goods[5].variety"
                :price="goods[5].price"
                :image="goods[5].image"
              />
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
      goods: [
        {
          id: 0,
          name: "Solimo Coffee Beans 2kg",
          variety: "Brazil",
          image: "good-1.jpg",
          price: 10.73,
        },
        {
          id: 1,
          name: "Presto Coffee Beans 1kg",
          variety: "Brazil",
          image: "good-1.jpg",
          price: 15.99,
        },
        {
          id: 2,
          name: "AROMISTICO Coffee 1kg",
          variety: "Brazil",
          image: "good-1.jpg",
          price: 6.99,
        },
        {
          id: 3,
          name: "Solimo Coffee Beans 2kg",
          variety: "Brazil",
          variety: "Brazil",
          image: "good-1.jpg",
          price: 10.73,
        },
        {
          id: 4,
          name: "Solimo Coffee Beans 2kg",
          variety: "Brazil",
          image: "good-1.jpg",
          price: 10.73,
        },
        {
          id: 5,
          name: "Solimo Coffee Beans 2kg",
          variety: "Brazil",
          image: "good-1.jpg",
          price: 10.73,
        },
      ],
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
      ],
    };
  },
};
</script>
