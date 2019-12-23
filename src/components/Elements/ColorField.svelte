<script>
  export let name = "red";
  export let hue = name;
  export let color = "#e20004";
</script>

<style>
  .colorField {
    width: 4rem;
  }

  .colorField__color {
    height: 2rem;
    border-color: var(--black);
    border-width: 1px;
    border-style: solid;
    box-shadow: var(--box-shadow);
  }

  .colorField__name {
    font-size: 0.8rem;
    line-height: 1;
  }

  .colorField__value {
    font-size: 0.6rem;
  }
</style>

<div class="colorField">
  <div class="colorField__color" style="background: {color}" />
  <div class="colorField__name">
    {name}
    {#if name.includes(hue) == false}
      <span>({hue})</span>
    {/if}
  </div>
  <div class="colorField__value">{color}</div>
</div>
