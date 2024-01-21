import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the City App</h1>
      {/* <FlexContainer> */}
      <Link href="/cities">Go to the Cities</Link>
      {/* </FlexContainer> */}
    </div>
  );
}
