import Link from "next/link"
export default function Home() {
  return (
    <main>
      <Link href="/about">About</Link>
      <h1>Welcome to Dan's Blog</h1>
      <p>This is my first Next.js page!</p>
    </main>
  )
}