export interface GalleryItem {
    platforms: string[]
    tags: string[]
    links: {
        url: string
        platform: string
        message: string
    }[]
    images: string[]
    cover: string
    title: string
    description: string
}