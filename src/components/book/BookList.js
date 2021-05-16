import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import BookService from '../../services/book';
import { setBookList, setBookDeleted } from '../../actions/book';

const BookList = () => {

  const bookList = useSelector(state => {
    return state.bookList.bookList
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const _fetch = async () => {
      let data = await BookService.list();
      dispatch(setBookList(data));
    }
    _fetch();
    // eslint-disable-next-line
  }, []);

  const onDeleteBook = (id) => {
    const _del = async () => {
      let result = await BookService.delete(id);
      if (result === "deleted") {
        dispatch(setBookDeleted(id));
      }
    }
    _del();
  }

  return (
    <>
      <section className="d-flex align-items-center">
        <h1>Books</h1>
        <Link to="/book/add/" className="ml-auto">Add Book</Link>
      </section>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>Book</th>
            <th>Category</th>
            <th>Publisher</th>
            <th>Author</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookList.map(book =>
            <tr key={book.id}>
              <td>
                <Link to={`/book/${book.id}/`}>{book.title}</Link>
              </td>
              <td>
                {book.category && book.category.name}
              </td>
              <td>
                {book.publisher && book.publisher.name}
              </td>
              <td>
                {book.author && book.author.firstName} {book.author && book.author.lastName}
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => { onDeleteBook(book.id) }}
                >
                  Delete
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
};

export default BookList;