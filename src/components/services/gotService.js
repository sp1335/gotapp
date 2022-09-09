export default class GotService {
    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api'
    }
    async getResource(url) {
        const fetchUrl = this._apiBase + url;
        const res = await fetch(fetchUrl,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json()
    }
    getAllCharacters(){
        return this.getResource(`/characters?page=5&pageSize=10`)
    }
    getCharacter(id){
        return this.getResource(`/characters/${id}`)
    }

}