import React, { useState } from "react";
import { useRouter } from "next/router";

interface Location {
  display: string;
  pathname: string;
}

interface NavigationProps {
  locations: Location[];
}

const Navigation: React.FC<NavigationProps> = ({ locations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (pathname: string) => {
    router.push(pathname);
    setIsOpen(false);
  };

  return (
    <nav>
      <button onClick={toggleMenu} className="hamburger-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            fill="currentColor"
            d="M3 5h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm0 6h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm0 6h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2z"
          />
        </svg>
      </button>
      {isOpen && (
        <ul>
          {locations.map((location) => (
            <li
              key={location.pathname}
              onClick={() => handleItemClick(location.pathname)}
            >
              {location.display}
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .hamburger-icon {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        svg {
          fill: currentColor;
          width: 24px;
          height: 24px;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
