<script>
  import { onMount, beforeUpdate } from "svelte";
  
  import { app_name, app_baseUrl } from '../data/global.js';
  import { bookmarkedFlags } from '../data/stores/bookmarkedFlags.js'
  import flags from "../data/_flags";
  
  import FlagCards from '../components/Flags/FlagCards.svelte';
  import Metainfos from './../components/Helpers/Metainfos.svelte';
  import Header from './../components/Header.svelte';
  
  let bookmarks = [];
  $: bookmarks;

  onMount(() => {
    getBookmarks();
  });

  beforeUpdate(() => {
    console.log($bookmarkedFlags);
    getBookmarks();
  });

  function getBookmarks() {
    bookmarks = [];
    bookmarks = bookmarks;
    if (!$bookmarkedFlags.size) return;

    for (const flag of flags) {
      const flagIsBookmarked = $bookmarkedFlags.has(flag.id);
      const flagIsAlreadyInBookmarks = bookmarks.includes(flag.id);
      if(flagIsBookmarked && !flagIsAlreadyInBookmarks) {
        bookmarks.push(flag);
        bookmarks = bookmarks;
      }
    }
  }

  
  const meta = {
    title: `Bookmarks | ${app_name}`,
    desc: `See all of your favortite prideflags in one place!`,
    url: `${app_baseUrl}/bookmarks`,
    image: `${app_baseUrl}/socialcards/search.png`,
  };
</script>

<style>
  h2 {
    margin-top: 0.5rem;
  }
</style>

<Metainfos {...meta} showInSearch="false" />

<Header backLink="/">Bookmarks</Header>

<div class="container container-padding-top">
  <section>
    <h2 class="text--center">Coming soon</h2>
    <p>
      You've found your favortite flag and don't want to forget what it was
      called again? Soon you'll have to look no further than this very page
      where all your beloved (or the ones you just keep forgetting the name of)
      flags can be found.
    </p>

    <FlagCards flags={bookmarks} />
  </section>
</div>
