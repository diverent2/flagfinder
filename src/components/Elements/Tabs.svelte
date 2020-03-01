<script>
  export let tab1, tab2;

  export let activeTab = 1;
  $: activeTab;

  function switchTab(e, newTab) {
    const oldActiveTab = document.querySelector("[data-tab-active]");
    delete oldActiveTab.dataset.tabActive;

    const newActiveTab = e.target;
    newActiveTab.dataset.tabActive = "";

    activeTab = newTab;
  }
</script>

<style>
  .tabButtons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 35px;
    background: var(--blue-dark);
  }

  .tabButton {
    padding-top: var(--spacing-tiny);
    padding-bottom: var(--spacing-tiny);
    padding-left: var(--spacing-small);
    padding-right: var(--spacing-small);
    box-sizing: border-box;
    border: none;
    border-radius: 35px;
    color: var(--white);
    text-transform: capitalize;
    cursor: pointer;
    background: transparent;
  }

  .tabButton[data-tab-active] {
    border: 1.5px var(--white) solid;
  }
</style>

<div class="tabButtons" data-cy-tabs>
  <button
    class="tabButton"
    data-tab-active
    on:click={e => switchTab(e, 1)}
    data-cy-tab>
    {tab1}
  </button>
  <button class="tabButton" on:click={e => switchTab(e, 2)} data-cy-tab>
    {tab2}
  </button>
</div>
