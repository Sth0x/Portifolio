function Header() {
    return (
      <header className="bg-white text-white p-4 shadow-sm flex items-center">
  <h1 className="bg-clip-text text-transparent inline-block bg-gradient-to-r from-blue-500 to-blue-900 text-2xl font-bold font-mono ml-42 mr-290">
    Felipe Santos
  </h1>

  {/* Botões */}
  {["Inicio", "Sobre", "Projetos", "Contato"].map((text) => (
    <div key={text} className="group relative mr-4 cursor-pointer">
      <p className="text-lg text-black group-hover:text-blue-500">{text}</p>
      <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </div>
  ))}
</header>
    );
  }
  
  export default Header;
  