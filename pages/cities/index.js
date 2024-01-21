import { cities } from "@/lib/data";
import Link from "next/link";

export default function Cities() {
  return (
    <>
      <h1>Welcome to the biggest Cities</h1>
      <ul>
        <Link href="/cities"> Go to cities</Link>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </>
  );
}
