import { writable } from 'svelte/store';

export const information = writable({
    name: "",
    date: "",
    time: "",
    description: "",
    logo: "",
    url: ""
});