import { NEWS_API_KEY } from "@env"
import axios from "axios"
import { News } from "../types/news"

const getTopHeadlines = async (country: string): Promise<News.Article[] | undefined> => {
    try {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEWS_API_KEY}`)
        if (res.status === 200) {
            return Array.isArray(res.data.articles) ? res.data.articles as News.Article[] : []
        }
    } catch (error) {
        console.error("Error getting top headlines", error)
    }
}

export { getTopHeadlines }