<script>
  import Sidenav from "./Sidenav.svelte";
  import Footernav from "./Footernav.svelte";

  const version = "ALPHA VERSION 0.2";
  const currentYear = new Date().getFullYear();
  const year = `2019 - ${currentYear}`;
</script>

<style>
  .navigation {
    position: relative;
  }

  .navigation__sidenav {
    display: none;
  }

  @media only screen and (min-width: 650px) and (min-height: 450px) {
    .navigation__sidenav {
      display: block;
    }
    .navigation__footernav {
      display: none;
    }
  }
</style>

<div class="navigation">
  <div class="navigation__sidenav">
    <Sidenav {version} {year} />
  </div>
  <div class="navigation__footernav">
    <Footernav {version} {year} />
  </div>
</div>
