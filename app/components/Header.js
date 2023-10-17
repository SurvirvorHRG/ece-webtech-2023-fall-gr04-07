import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-white text-black py-8 px-20 flex'>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/contacts">Contacts</Link> |{' '}
        <Link href="/articles">Articles</Link>
      </nav>
    </header>
  );
};

export default Header;
