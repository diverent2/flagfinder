<script>
  export let tab1 = "overview";
  export let tab2 = "details";

  let activeTab = 1;
  $: activeTab;

  function switchTab(e, newTab) {
    const oldActiveTab = document.querySelector(".tabButton--activeTab");
    oldActiveTab.classList.remove("tabButton--activeTab");

    const newActiveTab = e.target;
    newActiveTab.classList.add("tabButton--activeTab");

    activeTab = newTab;
  }
</script>

<style>
  .tabButtons {
    display: flex;
    border-radius: 35px;
    background: var(--blue-dark);
  }

  .tabButton {
    width: 100%;
    padding: var(--spacing-small);
    box-sizing: border-box;
    border: none;
    border-radius: 35px;
    color: var(--white);
    text-transform: capitalize;
    background: transparent;
  }

  .tabButton--activeTab {
    border: 1px var(--white) solid;
  }
</style>

<div class="tabButtons">
  <button
    class="tabButton tabButton--activeTab"
    on:click={e => switchTab(e, 1)}>
    {tab1}
  </button>
  <button class="tabButton" on:click={e => switchTab(e, 2)}>{tab2}</button>
</div>

{#if activeTab === 1}
  <slot name="tab1" />
{:else}
  <slot name="tab2" />
{/if}
