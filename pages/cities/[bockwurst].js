import { cities } from "@/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";
import { Image } from "@/styles";

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
      {/* <Container> */}
      <h1>{city.name}</h1>
      <h2>Country: {city.country}</h2>
      <p>Population: {city.population}</p>
      <img src={city.image} />
      <p>{city.description}</p>
      <button>
        <Link href="/cities">Back</Link>
      </button>
      <button>
        <Link href="/">Back to all Cities</Link>
      </button>
      {/* </Container> */}
    </>
  );
}
