import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Articles = () => {
  return (
    <div>
      <Header />
      <h1>Articles</h1>
      <ul>
        <li>
          <Link href="/articles/[articleId]" as="/articles/1">
            Article 1
          </Link>
        </li>
        <li>
          <Link href="/articles/[articleId]" as="/articles/2">
            Article 2
          </Link>
        </li>
        <li>
          <Link href="/articles/[articleId]" as="/articles/3">
            Article 3
          </Link>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Articles;
