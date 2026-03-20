import Counter from "./component/Counter";
import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <div>
        Home Page
        <Counter />
        <div>
          <ul>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <Link href={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

//If create page.js/jsx then route level
