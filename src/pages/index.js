import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Link href="http://localhost:3000/question/1">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">
          Start Quiz
        </button>
      </Link>
    </main>
  );
}
