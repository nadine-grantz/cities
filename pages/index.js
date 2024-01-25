import Link from "next/link";
// import styled from "styled-components";
import { StyledContainer, StyledHead } from "@/styles";

export default function HomePage() {
  return (
    <>
      <StyledContainer>
        <StyledHead>Welcome to the City App</StyledHead>
        <Link href="/cities">Go to the Cities</Link>
        <Link href="/cities/new-york-city">Favorite City</Link>
      </StyledContainer>
    </>
  );
}
