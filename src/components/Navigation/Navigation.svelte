<script>
  import { app_version } from "../../data/global.js";

  import Sidenav from "./Sidenav.svelte";
  import Footernav from "./Footernav.svelte";
  import Flagmenu from "./Navcontext/Flagmenu.svelte";

  const currentYear = new Date().getFullYear();
  const year = `2019 - ${currentYear}`;

  export let segment;
</script>

<style lang="scss">
  @import "../../../styles/z-index";

  .navigation {
    position: relative;
  }

  .sidenav {
    display: none;
  }

  .flagmenu {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: $z-index-navigation-flagmenu;
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

<div class="navigation" data-cy-navigation>
  <div class="sidenav">
    <Sidenav version={app_version} {year} />
  </div>
  <div class="footernav">
    <Footernav version={app_version} {year} {segment} />
  </div>
  {#if segment == 'flag'}
    <div class="flagmenu">
      <Flagmenu />
    </div>
  {/if}
</div>
