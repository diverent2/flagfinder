<script>
  export let source = {
    link: "",
    name: "",
    researchDate: ""
  };
</script>

<style>
  .form-source {
    display: grid;
    color: var(--black);
    grid-template-columns: 1fr;
    grid-gap: var(--spacing-small);
    margin-bottom: var(--spacing-xlarge);
  }
</style>

<div class="form-source">

  <div>
    <label for="sourceName" class="formField--required">
      Name [Website - Description]
    </label>
    <input
      type="text"
      name="sourceName"
      placeholder="Wiki Commons - sexual identity symbols"
      bind:value={source.name}
      required />
  </div>

  <div>
    <label for="sourceLink" class="formField--required">Link</label>
    <input
      type="text"
      name="sourceLink"
      placeholder="https://commons.wikimedia.org/wiki/Sexual_identity_symbols"
      bind:value={source.link}
      required />
  </div>

  <div>
    <label for="sourceResearchDate" class="formField--required">
      Research Date
    </label>
    <input
      value="2017-06-01"
      type="date"
      name="sourceResearchDate"
      bind:value={source.researchDate}
      required />
  </div>

</div>
