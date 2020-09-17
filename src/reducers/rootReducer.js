import { combineReducers } from "redux";
import { categories, category } from "./category";
import { publishers, publisher } from "./publisher";
import { authors, author } from "./author";
import { books, book } from "./book";
import { errors } from "./errors";
import { messages } from "./messages";
import { tab } from "./tab";

export const rootReducer = combineReducers({
  categories,
  category,
  publishers,
  publisher,
  authors,
  author,
  books,
  book,
  errors,
  messages,
  tab
})