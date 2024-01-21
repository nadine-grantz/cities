import { cities } from "@/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";

export default function OneCity() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }

  const { bockwurst } = router.query;
  const city = cities.find((city) => city.slug === bockwurst);

  if (!city) {
    return null;
  }

  return (
    <>
      <h1>{city.name}</h1>
      <h2>{city.country}</h2>
      <p>{city.population}</p>
      <p>{city.description}</p>
      <button>
        <Link href="/cities">Back</Link>
      </button>
    </>
  );
}
