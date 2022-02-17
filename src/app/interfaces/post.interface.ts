
export interface Post {
    userId?: number
    id?: number
    img: string
    date: string
    title: string 
    article: string
}

export interface News {
    id: number
    title: string
    url: string
    imageUrl: string
    newsSite: string
    summary: string
    publishedAt: any
    updatedAt: any
    featured: false
    launches: any
    events: any
}

