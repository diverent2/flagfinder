<script>
  export let name = "red";
  export let hue = name;
  export let color = "#e20004";
</script>

<style>
  .colorField {
    width: 100%;
  }

  .colorField__color {
    height: 2rem;
    margin-bottom: var(--spacing-tiny);
    border-color: var(--black);
    border-width: 1px;
    border-style: solid;
    box-shadow: var(--box-shadow-light);
  }

  .colorField__name {
    font-size: 0.8rem;
    line-height: 1;
    text-transform: capitalize;
  }

  .colorField__name--hue {
    text-transform: lowercase;
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
      <span class="colorField__name--hue">({hue})</span>
    {/if}
  </div>
  <div class="colorField__value">{color}</div>
</div>
