import { Books } from 'src/app/models/books.interface';

export interface Catalog {
     books: Books[];
     error: string;
     loading: boolean;
}

export const initialBooksState: Catalog = {
     books: [],
     error: '',
     loading: true
};
