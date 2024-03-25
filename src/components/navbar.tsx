import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex bg-red-500 gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="./contato">Contato</Link>
        </li>
        <li>
          <Link href="./sobre">Sobre</Link>
        </li>
        <li>
          <Link href="./sobre#equipe">Equipe</Link>
        </li>
        <li>
          <Link href="./dom">Estudo DOM</Link>
        </li>
      </ul>
    </nav>
  );
}
