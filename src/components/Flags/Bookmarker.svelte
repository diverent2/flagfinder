<script>
import { bookmarkedFlags } from '../../data/stores/bookmarkedFlags.js';

import Icon from "../Elements/Icon.svelte";

export let flagId = "";
export let isBookmarked = false;
$: isBookmarked;

function setBookmarkedStatus() {
    if(isBookmarked) {
        bookmarkedFlags.add((flagId))
    } else {
        bookmarkedFlags.remove((flagId))
    }
}
</script>

<style lang="scss">

@keyframes addToBookmarks {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  20% {
    transform: scale(1.1);
  }
  30% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}

.bookmarker {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
    transform-origin: top;
    transition: all 0.2s ease-in-out;
    transition-property: opacity, transform;
    z-index: 1;

    --bookmarker-size: 2rem;
    margin-right: 0.5rem;

    @media (--medium-up) {
        --bookmarker-size: 4.5rem;
        margin-right: 1rem;
    }

    &[data-bookmarked="true"] {
        cursor: pointer;
        animation: {
            name: addToBookmarks;
            duration: 1s;
        };
        opacity: 0.8;

        &:hover, &:focus {
            opacity: 1;
        }
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }
</style>

<label
    class="bookmarker"
    title="Click here to bookmark this flag"
    class:selected={isBookmarked}
    data-bookmarked={isBookmarked}>
    <input 
        id="bookmark-{flagId}"
        type="checkbox" 
        bind:checked={isBookmarked} 
        on:change={setBookmarkedStatus}
        disabled={!isBookmarked}>
    <Icon
    icon="bookmark"
    color="var(--blue-dark)"
    scale="var(--bookmarker-size)"
    aria="Click here to bookmark this flag" />
</label>

