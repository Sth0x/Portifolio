function Sidebar() {
    return (
      <aside className="w-64 bg-gray-900 text-white p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="block py-2 px-4 bg-gray-800 border-2 border-blue-500 hover:bg-blue-500 hover:text-black transition">
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#projects" className="block py-2 px-4 bg-gray-800 border-2 border-blue-500 hover:bg-blue-500 hover:text-black transition">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 px-4 bg-gray-800 border-2 border-blue-500 hover:bg-blue-500 hover:text-black transition">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
  
  export default Sidebar;
  