import { useEffect, useState } from "react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url?: string;
}

export function useGoogleReviews(placeId: string) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://draamandanazareth.adv.br/google-reviews.php?place_id=${placeId}`
    )
      .then(res => res.json())
      .then(data => {
        setReviews(data.result?.reviews || []);
      })
      .finally(() => setLoading(false));
  }, [placeId]);

  return { reviews, loading };
}