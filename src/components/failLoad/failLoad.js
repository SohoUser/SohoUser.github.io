import React from 'react';

export default function () {
  return (
    <main>
      <div className='container'>
        <div className="row">
          <div className="alert alert-warning">
            <h1>Fail to load product. Try next time</h1>
            <p className="text-muted">You can to refresh the page</p>
          </div>
        </div>
      </div>
    </main>
  );
}