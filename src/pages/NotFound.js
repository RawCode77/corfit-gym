import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!!</h2>
      <p>A 404 error is an HTTP status code that means the page you were trying to reach on a website couldn`t be found on their server.

        To be clear, the error indicates that while the server itself is reachable, the specific page showing the error is not.

        404 Not Found individual websites frequently customize error messages. So, keep in mind that the error might show up in just about any way imaginable, depending on what website it`s shown from.
      </p>

      <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  );
}
