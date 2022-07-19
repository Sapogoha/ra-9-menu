import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <article className="article">
      <h1 className="article__title">Страница не найдена</h1>
      <p className="article__paragraph">
        Пожалуйста, вернитесь на{' '}
        <Link to="/" className="not-found">
          {' '}
          главную
        </Link>
        .
      </p>
    </article>
  );
}

export default NotFound;
