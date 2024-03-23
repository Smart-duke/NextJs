import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Welcome to my Home Page</h1>
      <Link href="/blog">My Blog</Link>
      <Link href="/products">My Products</Link>
    </>
  );
}
