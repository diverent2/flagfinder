<script>
  export let searchTerm;

  function formSubmitted() {}
</script>

<form on:submit={formSubmitted}>
  <label for="search">Search</label>
  <input bind:value={searchTerm} id="search" name="search" />
  <button type="submit">send</button>
</form>
