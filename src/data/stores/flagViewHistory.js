import { writable } from 'svelte/store';

const array = [];

export const flagViewHistory = writable(array);
