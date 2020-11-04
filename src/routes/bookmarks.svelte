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
    <h2 class="text--center">Your bookmarked flags</h2>
    <p>
      You've found your favortite flag and don't want to forget what it was
      called again? You can add flags as bookmarks on their details page and then come back here
      where all your favorite flags (or atleast the ones you just keep forgetting the name of) can be found.
    </p>

    <FlagCards flags={bookmarks} />
  </section>
</div>
