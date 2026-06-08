import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <h1 className="text-xl font-semibold tracking-tight" onClick={navigate("/")}>
          Outera
        </h1>
      </div>
    </header>
  );
};

export default Navbar;