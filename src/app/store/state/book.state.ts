import { Books } from 'src/app/models/books.interface';

export interface Bookk {
     book: Books;
     error: string;
     loading: boolean;
}

export const initialBookState: Bookk = {
     book: {
          id: '',
          count: 0,
          price: 0,
          title: '',
          author: 0,
          level: '',
          description: '',
          cover: '',
          tags: []
     },
     error: '',
     loading: true
};
