const navigation = [
  { name: "Predicción", href: "/forecast", icon: "fa-chart-line" },
];

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between p-6 lg:px-8 text-[#223646]">
        <div className="flex items-center gap-x-2 hover:scale-105 duration-200">
          <i className="fa-solid fa-mortar-pestle text-2xl text-[#63AEAB]"></i>
          <a href="/" className="-m-1.5 p-1.5  font-bold text-lg">
            ALEFARMA
          </a>
        </div>
        <div className="lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold hover:text-[#63AEAB] duration-200"
            >
              <i className={`fa-solid ${item.icon} mr-2`}></i>
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
