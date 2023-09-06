import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const apiResult = await fetch("http://localhost:3000/api/hello");
  const data = await apiResult.json();

  console.log("apiResult ", data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/posts"}>Posts</Link>
      <div>{data.message}</div>
    </main>
  );
}
