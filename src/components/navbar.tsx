import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex bg-red-500 gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pages/contato">Contato</Link>
        </li>
        <li>
          <Link href="/pages/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/pages/sobre#equipe">Equipe</Link>
        </li>
        <li>
          <Link href="/pages/dom">Estudo DOM</Link>
        </li>
      </ul>
    </nav>
  );
}
