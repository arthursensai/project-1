import Link from "next/link";
import { copy } from "@/data/copy";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-5">
      <h1 className="font-display text-4xl leading-tight">{copy.notFound.title}</h1>
      <p className="mt-3 text-muted">{copy.notFound.text}</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 w-fit items-center border-b-2 border-ink font-medium"
      >
        {copy.notFound.back}
      </Link>
    </main>
  );
}
