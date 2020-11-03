import { writable } from 'svelte/store';

function createBookmarks() {

    const bookmarkedFlags = new Set();
    const { subscribe, set, update } = writable(bookmarkedFlags);
    
	return {
		subscribe,
        add: (value) => update(bookmarks => {
            if(bookmarks.has(value)) return;
            
            bookmarks.add(value);
            return bookmarks;
        }),
        remove: (value) => update(bookmarks => {
            if(!bookmarks.has(value)) return;

            bookmarks.delete(value);
            return bookmarks;
        }),
		reset: () => set([])
	};
}

export const bookmarkedFlags = createBookmarks();