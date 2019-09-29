<script>
  let toggled = false;
</script>

<style>
  .toggleSwitch {
    --slider-height: var(--spacing-large);
    --slider-width: calc(2 * var(--slider-height));
    --slider-width-dot: 24px;
    --slider-background-color: var(--gry);
    --slider-background-color-active: var(--gry-light);
  }

  .toggleSwitch {
    display: inline-block;
    position: relative;
    width: var(--slider-width);
    height: var(--slider-height);
  }

  .toggleSwitch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .toggleSwitch__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--slider-background-color);
    transition: 0.4s;
  }

  .toggleSwitch__slider:before {
    content: "";
    position: absolute;
    height: var(--slider-width-dot);
    width: var(--slider-width-dot);
    top: 4px;
    left: 4px;
    background-color: var(--white);
    transition: 0.4s;
  }

  .toggleSwitch__slider {
    border-radius: var(--spacing-large);
  }

  .toggleSwitch__slider:before {
    border-radius: 50%;
  }

  input:checked + .toggleSwitch__slider {
    background-color: var(--slider-background-color-active);
  }

  input:checked + .toggleSwitch__slider:before {
    transform: translateX(calc(0.5 * var(--slider-width)));
  }
</style>

<label class="toggleSwitch" title="toggle view">
  <input type="checkbox" bind:checked={toggled} />
  <span class="toggleSwitch__slider" />
</label>
{#if !toggled}
  <p>Menu 1</p>
{:else}
  <p>Menu 2</p>
{/if}
