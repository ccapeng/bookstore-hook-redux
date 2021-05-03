//import React, {Suspense, lazy} from "react";
import React, {Suspense} from "react"
import { Route, Switch } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import Header from "./layout/Header"
import NotFound from "./NotFound"
import Loading from "./Loading"

import BookList from "./book/BookList"
import Book from "./book/Book"
import CategoryList from "./category/CategoryList"
import Category from "./category/Category"
import PublisherList from "./publisher/PublisherList"
import Publisher from "./publisher/Publisher"
import AuthorList from "./author/AuthorList"
import Author from "./author/Author"
import Alerts from "./layout/Alerts"

// const BookList = lazy(() => import("./book/BookList"));
// const Book = lazy(() => import("./book/Book"));
// const CategoryList = lazy(() => import("./category/CategoryList"));
// const Category = lazy(() => import("./category/Category"));
// const PublisherList = lazy(() => import("./publisher/PublisherList"));
// const Publisher = lazy(() => import("./publisher/Publisher"));
// const AuthorList = lazy(() => import("./author/AuthorList"));
// const Author = lazy(() => import("./author/Author"));
// const Alerts = lazy(() => import("./layout/Alerts"));

const ErrorFallback = ({error}) => {
  console.log(error.message);
  return (
    <div>
      This is unusual.
    </div>
  )
}

const App = () => {
  return (
      <Suspense fallback={<Loading/>}>
        <Header />
        <div className="container mt-5">
          <ErrorBoundary Fallbackcomponent={ErrorFallback}>
            <Switch>
              <Route exact path="/" component={BookList} />
              <Route exact path="/book" component={BookList} />
              <Route path="/book/add/" component={Book} />
              <Route path="/book/:id/" component={Book} />
              <Route exact path="/category" component={CategoryList} />
              <Route path="/category/add/" component={Category} />
              <Route path="/category/:id/" component={Category} />
              <Route exact path="/author" component={AuthorList} />
              <Route path="/author/add/" component={Author} />
              <Route path="/author/:id/" component={Author} />
              <Route exact path="/publisher" component={PublisherList} />
              <Route path="/publisher/add/" component={Publisher} />
              <Route path="/publisher/:id/" component={Publisher} />
              <Route component={NotFound} />
            </Switch>
          </ErrorBoundary>
        </div>
        <Alerts />
      </Suspense>
  );
}

export default App;