<script>
  import { app_version } from "../../data/global.js";

  import Sidenav from "./Sidenav.svelte";
  import Footernav from "./Footernav.svelte";

  const currentYear = new Date().getFullYear();
  const year = `2019 - ${currentYear}`;

  export let has_secondary_options = false;
</script>

<style>
  .navigation {
    position: relative;
  }

  .sidenav {
    display: none;
  }

  @media (--medium-up) and (--min-height) {
    .sidenav {
      display: block;
    }
    .footernav {
      display: none;
    }
  }
</style>

<div class="navigation">
  <div class="sidenav">
    <Sidenav version={app_version} {year} />
  </div>
  <div class="footernav">
    <Footernav version={app_version} {year} {has_secondary_options} />
  </div>
</div>
