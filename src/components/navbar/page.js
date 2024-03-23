import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="./page/contato">Contato</Link>
        </li>
        <li>
          <Link href="./page/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
