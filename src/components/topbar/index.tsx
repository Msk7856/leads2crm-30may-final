// components/TopBar.tsx
import React from "react";

const TopBar: React.FC = () => {
  // Handle opening the search modal (you can update this logic for actual modal functionality)
  const openSearchModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert("Search Modal Opened");
  };

  // Handle closing the search modal (you can update this logic for actual modal functionality)
  const closeSearchModal = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    alert("Search Modal Closed");
  };

  return (
    <div className="page-header container mx-auto">
      {/* Top Navigation */}
      <nav
        role="navigation"
        aria-labelledby="main-navigation-menu"
        id="main-navigation"
        className="block navigation"
      >
        <div className="sr-only" id="main-navigation-menu">
          Top Navigation
        </div>
        <ul className="nav navbar-nav flex space-x-4">
          <li className="nav-item">
            <a
              href="/contact-us/customer"
              className="nav-link text-blue-600 hover:text-blue-800"
              title="Contact Us"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {/* HCL Worldwide Navigation */}
      <nav
        role="navigation"
        aria-labelledby="hcl-navigation-menu"
        id="hcl-navigation"
        className="block navigation"
      >
        <div className="sr-only" id="hcl-navigation-menu">
          HCL Worldwide Navigation
        </div>
        <ul className="nav flex space-x-4">
          <li className="nav-item">
            <a
              href="/global-presence"
              aria-label="HCL Worldwide - Global Presence"
              title="HCL Worldwide"
              className="nav-link text-blue-600 hover:text-blue-800"
            >
              HCL Worldwide
            </a>
          </li>
        </ul>
      </nav>

      {/* Search Bar */}
      <div id="search-top-menu-bar" className="block mt-4">
        <div className="content">
          <div className="header-search-model-block">
            <button
              className="header-search-model-icon text-gray-600 hover:text-gray-800"
              type="button"
              onClick={openSearchModal}
            >
              Search
            </button>

            {/* Search Modal (you can enhance it further) */}
            <div className="modal hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
              <div className="modal-dialog bg-white p-4 max-w-lg mx-auto mt-20">
                <form
                  action="/search"
                  method="GET"
                  className="flex flex-col space-y-4"
                >
                  <input
                    placeholder="Search"
                    type="search"
                    id="query"
                    name="query"
                    className="border border-gray-300 rounded p-2"
                  />
                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white rounded px-4 py-2"
                    >
                      Search
                    </button>
                    <a
                      href="#"
                      className="text-red-600 hover:text-red-800"
                      onClick={closeSearchModal}
                    >
                      Close
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
