export interface GalleryItem {
    platforms: string[]
    tags: string[]
    links?: {
        url: string
        platform?: string
        message: string
    }[]
    images: string[]
    cover: string
    title: string
    description: string
}

export interface Milestone {
    role: string
    institution: string
    start_date: string
    end_date: string
    img: string
    extension?: string
}

export interface IconType {
    name: string
    code: string
}

export interface TechStack {
    category: string
    lst: IconType[]
}