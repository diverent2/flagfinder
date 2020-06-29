<script>
  import RoundButton from "../../Elements/Buttons/RoundButton.svelte";

  function copyCurrentUrl() {
    const currentUrl = window.location.href;

    if (navigator.share) {
      shareMobile(currentUrl);
    } else {
      copyUrlToClipboard(currentUrl);
    }
  }

  function shareMobile(currentUrl) {
    navigator
      .share({
        title: "Prideflags.info",
        text: "🤔🏳‍🌈🔎\n",
        url: currentUrl
      })
      .catch(error => console.log("Error sharing ", error));
  }

  function copyUrlToClipboard(currentUrl) {
    const copyText = document.getElementById("hiddenUrlCatcher");
    copyText.type = "text";
    copyText.value = currentUrl;
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    copyText.type = "hidden";
    alert("Link copied to clipboard!");
  }
</script>

<style lang="scss">
  @import "./styles/footer.scss";

  .options-flag {
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing);
    */
    margin: var(--spacing-small);

    @media (--medium-up) {
      margin: var(--spacing);
    }
  }
</style>

<div class="options-flag">
  <div class="button" data-cy-footernav-option="bookmark">
    <RoundButton
      icon="bookmark"
      scale="1.8rem"
      colorBackground="var(--blue-dark-500)"
      colorBackgroundHover="var(--blue-dark)">
      bookmark
    </RoundButton>
  </div>
  <div
    class="button active"
    data-cy-footernav-option="share"
    title="share this flag"
    on:click={copyCurrentUrl}>
    <input id="hiddenUrlCatcher" type="hidden" data-cy-hidden-url />
    <RoundButton
      icon="share"
      scale="1.8rem"
      colorBackground="var(--blue-dark-500)"
      colorBackgroundHover="var(--blue-dark)">
      share
    </RoundButton>
  </div>
</div>
