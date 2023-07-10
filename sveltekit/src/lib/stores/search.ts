import { writable } from "svelte/store"

export interface SearchStoreModel<T extends Record<PropertyKey, any>> {
    data: T[],
    filtered: T[],
    search: string,
    filters: string[],
}

export const createSearchStore = <T extends Record<PropertyKey, any>>(data: T[]) => {
    const { subscribe, set, update } = writable<SearchStoreModel<T>>({
        data: data,
        filtered: data,
        search: "",
        filters: [],
    })

    return {
        subscribe,
        set,
        update,
    }
}

export const searchHandler = <T extends Record<PropertyKey, any>>(store: SearchStoreModel<T>) => {
    const searchTerm = store.search.toLowerCase() || "";
    const match_in = store.data.filter((item) => {
        if (store.filters.length == 0){
            return true;
        }
        for (const key in store.filters) {
            if (item.searchTerms.toLowerCase().includes(store.filters[key])) {
                return true;
            }
        }
    });

    store.filtered = match_in.filter((item) => {
        let matches: number = 0;
        for (const key in searchTerm.split(" ")) {
            if (item.searchTerms.toLowerCase().includes(searchTerm.split(" ")[key])) {
                matches += 1;
            }
        }
        return matches == searchTerm.split(" ").length;
    });
}