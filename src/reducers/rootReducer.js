import { combineReducers } from "redux";
import { categoryList, category } from "./category";
import { publisherList, publisher } from "./publisher";
import { authorList, author } from "./author";
import { bookList, book } from "./book";
import { errors } from "./errors";
import { messages } from "./messages";

export const rootReducer = combineReducers({
  categoryList,
  category,
  publisherList,
  publisher,
  authorList,
  author,
  bookList,
  book,
  errors,
  messages
})