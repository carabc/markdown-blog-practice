import Link from "next/link";

export default function CategoryLabel({ children }) {
  return (
    <div
      className={`px-2 py-1 ${
        children === "JavaScript"
          ? "bg-yellow-600"
          : children === "CSS"
          ? "bg-blue-600"
          : children === "Python"
          ? "bg-green-600"
          : children === "PHP"
          ? "bg-purple-600"
          : "bg-red-600"
      } text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
