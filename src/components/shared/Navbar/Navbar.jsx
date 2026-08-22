import { Link } from "react-router";

function Navbar() {
  const navOptions = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>

       <li>
  <details>
    <summary>OUR MENU</summary>

    <ul>
      <li>
        <Link to="/menu">All Menu</Link>
      </li>

      <li>
        <Link to="/menu/salads">Salads</Link>
      </li>

      <li>
        <Link to="/menu/pizza">Pizza</Link>
      </li>
    </ul>
  </details>
</li>

      <li>
        <details>
          <summary>OUR SHOP</summary>

          <ul className="bg-base-100 rounded-box p-2 w-40 z-50">
            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <Link to="/about">ABOUT</Link>
      </li>

      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 shadow-sm w-full">

      {/* Mobile Menu */}
      <div className="navbar-start">

        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="btn btn-ghost text-xl"
        >
          Bistro Boss
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">

        <input
          type="text"
          placeholder="Search"
          className="input w-40 lg:w-64"
        />

      </div>

    </div>
  );
}

export default Navbar;