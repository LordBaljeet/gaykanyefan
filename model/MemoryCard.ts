export class Card {
    title: string
    description: string
    images: string[] = [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    ]
    tags: string[] = []
    relations: string[] = []

    constructor(title: string, description: string, tags: string[]);

    constructor(
        title: string, 
        description: string,
        tags?: string[],
        images?: string[],
        relations?: string[]
    ) {
        this.title = title
        this.description = description
        if (images) this.images = images
        if (tags) this.tags = tags
        if (relations) this.relations = relations
    }
}