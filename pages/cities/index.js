import { cities } from "@/lib/data";
import Link from "next/link";

export default function Cities() {
  return (
    <>
      <h1>Welcome to the biggest Cities</h1>
      {cities.map((city) => (
        <li key={city.id}>
          <Link href={`/cities/${city.slug}`}>{city.name}</Link>
        </li>
      ))}
      <button>
        <Link href="../">Back</Link>
      </button>
    </>
  );
}
