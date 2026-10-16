
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Bienvenue sur mon site</h1>
      <p>Je crée mon premier site avec Next.js !</p>

      <nav>
        <Link href="/contact">Ma page Contact</Link>
        {' | '}
        <Link href="/hello">Ma page Bonjour</Link>
      </nav>
    </main>
  );
}