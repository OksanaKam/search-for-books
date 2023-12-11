

export default interface Book {
  id: string,
  volumeInfo: {
    title?: string,
    subtitle?: string,
    authors?: string[],
    categories?: string[],
    description?: string,
    imageLinks?: {
      smallThumbnail: string,
      thumbnail: string,
    },
  },
}
