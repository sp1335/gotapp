export default class GotService {
    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api'
    }
    async getResource(url) {
        const fetchUrl = this._apiBase + url;
        const res = await fetch(fetchUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json()
    }
    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`)
        return res.map(this.transformCharacter)
    }
    async getCharacter(id) {
        const char = await this.getResource(`/characters/${id}`)
        return this.transformCharacter(char)
    }
    getAllHouses() {
        return this.getResource(`/houses/`)
    }
    getAllHouse(id) {
        return this.getResource(`/houses/${id}`)
    }
    getAllBooks() {
        return this.getResource(`/books/`)
    }
    getBook(id) {
        return this.getResource(`/books/${id}`)
    }

    transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
    transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}