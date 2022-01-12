import axios, { AxiosInstance } from 'axios'

export class Database {
    databaseURL: string
    databaseAPI: AxiosInstance
    constructor({ databaseURL }) {
        this.databaseURL = databaseURL
        this.databaseAPI = axios.create({
            baseURL: this.databaseURL
        })
    }

    async get({ key }: { key: string }) {
        await this.databaseAPI.get(`${key}`)
    }

    async set({ key, value }: { key: string, value: string }) {
        await this.databaseAPI.post('/', `${key}=${value}`)
    }
}
