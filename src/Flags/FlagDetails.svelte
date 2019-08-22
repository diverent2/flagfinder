<script>
  export let activeFlag;
</script>

<style>
  .flagDetails {
    max-width: 640px;
    padding: var(--spacing) var(--spacing-small);
    background: var(--gry-light);
  }

  .flagDetails__title {
    width: 100%;
    text-align: center;
  }

  .flagDetails__image {
    width: 100%;
  }

  .flagDetails__colors {
    width: 100%;
  }

  .colorButton {
    display: block;
    box-sizing: border-box;
    width: var(--spacing-large);
    height: var(--spacing-large);
    background: yellow;
    border-radius: 50%;
    border-color: var(--gry);
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
  }
</style>

<div class="flagDetails">
  <h2 class="flagDetails__title color--rainbow">{activeFlag.name}</h2>
  <img class="flagDetails__image" src={activeFlag.image} alt />

  <table class="flagDetails__colors">
    <tr>
      <th align="left">Color</th>
      <th align="left">Meaning</th>
    </tr>

    {#each activeFlag.props.colors as color}
      <tr>
        <td>
          <span class="colorButton" style="background: {color.value}" />
        </td>
        <td>{color.meaning}</td>
      </tr>
    {/each}
  </table>

  <!--
  <table>
   <tr>
    <th>Symbol</th>
    <th>Meaning</th>
    </tr>
    {#each {flag.symbols} as symbol}
      <tr>
      <td>
        {symbol.sign}
          <td>
        </td>
       {symbol.meaning}
      </td>
      </tr>
    {/each}
  </table>
  -->

</div>
