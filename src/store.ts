import { writable } from "svelte/store";

export const filter = writable("")

const storedFavorites = localStorage.getItem("favorites")
export const favorites = writable(storedFavorites || "[]")

favorites.subscribe(value => {
    localStorage.setItem("favorites", value)
})