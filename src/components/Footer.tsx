export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="flex flex-col items-center justify-center space-x-2 text-sm text-gray-400 dark:text-gray-600">
        <span>© {year} Kameel Kasumu. All rights reserved.</span>
        <span>Last updated: August 2025</span>
      </div>
    </footer>
  );
}
