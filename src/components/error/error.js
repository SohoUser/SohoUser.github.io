import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return(
    <>
    <div className="alert alert-warning">
      <h1>Error 404, page not found</h1>
      <hr/>
      <Link className="btn btn-primary" to="/">Back to Shop</Link>
    </div>
    </>
  );
}