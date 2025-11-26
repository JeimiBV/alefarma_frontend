export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 p-4 text-center text-sm rounded-xl">
      © 2025 Jeimi Alejandra Barral Valverde | Diplomado en Ciencia de Datos |
      UMSS | Modelo Prophet en
      <span
        className="ml-1 cursor-pointer hover:text-gray-900"
        onClick={() => window.open("https://github.com/jeimibarral", "_blank")}
      >
        <i className="fa-brands fa-github"></i>
      </span>
    </footer>
  );
}
