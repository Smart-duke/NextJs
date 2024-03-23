import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};
export default function Block() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>This is the Precious Longe Blog Page</h1>;
    </>
  );
}
