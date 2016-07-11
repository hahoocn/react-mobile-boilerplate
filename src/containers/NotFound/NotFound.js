import React from 'react';

export default function NotFound() {
  const styles = require('./NotFound.css');
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>This is not the web page you are looking for.</p>
    </div>
  );
}
