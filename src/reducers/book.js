import { ACTIONS } from "../actions/types";

const initialBookListState = {
  bookList: []
}

export const bookList = (state = initialBookListState, action) => {
  switch (action.type) {
    case ACTIONS.SET_BOOK_LIST:
      let arr = action.payload.sort(
        function (a, b) { return a.title.toLowerCase() > b.title.toLowerCase() }
      );
      return {
        bookList: arr
      }
    case ACTIONS.SET_BOOK_DELETED:
      return {
        ...state,
        bookList: state.bookList.filter(book => book.id !== action.payload)
      }
    default:
      return state;
  }
}


const initialBookState = {
  book: {
    id: 0,
    title: "",
    categoryId: 0,
    publisherId: 0,
    authorId: 0
  },
  status: ""
}

export const book = (state = initialBookState, action) => {
  switch (action.type) {
    case ACTIONS.SET_BOOK:
      let book = action.payload;
      if (book.categoryId === null) {
        book.categoryId = 0;
      }
      if (book.publisherId === null) {
        book.publisherId = 0;
      }
      if (book.authorId === null) {
        book.authorId = 0;
      }
      return {
        ...state,
        book: book
      };
    case ACTIONS.INIT_BOOK:
      return {
        ...initialBookState
      };

    case ACTIONS.SET_BOOK_VALUE:
      return {
        ...state,
        book: {
          ...state.book,
          ...action.payload
        }
      };

    case ACTIONS.SET_BOOK_STATUS:
      if (action.payload === "saved") {
        return {
          ...initialBookState,
          status: action.payload
        };
      } else {
        return {
          ...state,
          status: action.payload
        };
      }

    default:
      return state;
  }
}