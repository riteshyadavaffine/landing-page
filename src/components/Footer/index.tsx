export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
        Copyright {new Date().getFullYear()} TaskFlow AI. All rights reserved.
      </div>
    </footer>
  );
}
