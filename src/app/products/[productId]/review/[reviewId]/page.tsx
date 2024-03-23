import { notFound } from "next/navigation";
export default function ProductReviews({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h2>
      Review {params.reviewId} for Product {params.productId}
    </h2>
  );
}
