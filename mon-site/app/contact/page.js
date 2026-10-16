import Link from 'next/link';
export default function Hello(){
    return(
        <div>
            <nav>
                <Link href="/">acceuil</Link>
                <Link href="/hello">bonjour</Link>
            </nav>
        <main>
            <h1>bonjour tout le monde !</h1>
        </main>
        </div>
    )
}