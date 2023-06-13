import React from 'react';
import Link from 'next/link';

export const PageList = ({ pages }) => {
  return (
    <div>
      <h1>Список страниц</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <Link href={`/${page.uri}`}>
              <a>{page.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
