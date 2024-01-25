import { cities } from "@/lib/data";
import Link from "next/link";
import { StyledContainer, StyledHead } from "@/styles";

export default function Cities() {
  return (
    <>
      <StyledContainer>
        <StyledHead>These are the biggest Cities</StyledHead>
        {cities.map((city) => (
          <li key={city.id}>
            <Link href={`/cities/${city.slug}`}>{city.name}</Link>
          </li>
        ))}
        <button>
          <Link href="../">Back</Link>
        </button>
      </StyledContainer>
    </>
  );
}
