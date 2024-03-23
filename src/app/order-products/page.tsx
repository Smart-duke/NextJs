"use client";

import { useRouter } from "next/navigation";

export default function OrderProducts() {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.push("/");
  };
  return (
    <>
      <h2>Order your products</h2>
      <button onClick={handleClick}>Order now</button>
    </>
  );
}
