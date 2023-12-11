export interface IVolumeInfo {
  title: string;
  authors: string[];
  description: string;
  categories: string[];
  previewLink: string;
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
  };
}

export interface IBook {
  id: string;
  volumeInfo: IVolumeInfo;
}

export interface IBooksApi {
  totalItems: number;
  items: IBook[];
}

export interface BooksState {
  items: Book[];
  totalItems: null
}

export type TBooksArgs = {
  query?: string;
}

export interface Books {
  totalItems: number;
  books: {
    id: string;
    volumeInfo: {
      title?: string;
      subtitle?: string;
      authors?: string[];
      categories?: string[];
      description?: string;
      imageLinks?: {
        smallThumbnail: string;
        thumbnail: string;
      };
    };
  };
};

export interface ICategories {
  id: number;
  category: string;
}