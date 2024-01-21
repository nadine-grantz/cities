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
      <h2>{city.country}</h2>
      <p>{city.population}</p>
      <p>{city.description}</p>
      <img src={city.image} />
      <button>
        <Link href="/cities">Back</Link>
      </button>
      {/* </Container> */}
    </>
  );
}
