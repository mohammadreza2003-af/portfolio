// src/components/Navbar.tsx
import { useState } from "react";
import { Menu } from "@headlessui/react";
// import menuIcon from "@iconify/icons-mdi/menu";
// import closeIcon from "@iconify/icons-mdi/close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "about",
      href: "#about",
    },
    {
      name: "skills",
      href: "#skills",
    },
    {
      name: "portfolio",
      href: "#portfolio",
    },
    {
      name: "work",
      href: "#work",
    },
    {
      name: "contact",
      href: "#contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white p-4 w-full">
      <div className="mx-auto flex justify-end items-center">
        <ul className="hidden md:flex gap-x-8">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className="flex justify-center items-center gap-x-2 text-[18px] font-[500]"
            >
              <span className="text-indigo-500">0{index + 1}.</span>
              <a
                href={item.href}
                className="hover:text-indigo-500 text-gray-600"
              >
                {`<${item.name}>`}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden fixed">
          <button onClick={toggleMenu} aria-label="Menu">
            {/* <Icon icon={isOpen ? "😀" : "😁"} className="w-6 h-6" /> */}
            {isOpen ? "😀" : "😁"}
          </button>
        </div>
      </div>
      <Menu as="div" className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Menu.Items
          static
          className="mt-2 space-y-2 text-gray-800 bg-white left-0 top-12 py-12 px-8 shadow-lg fixed"
        >
          <Menu.Item>
            {({ active }) => (
              <a
                href="#about"
                className={`block px-4 py-2 ${active ? "bg-blue-500" : ""}`}
              >
                About
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#skills"
                className={`block px-4 py-2 ${active ? "bg-blue-500" : ""}`}
              >
                Skills
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#portfolio"
                className={`block px-4 py-2 ${active ? "bg-blue-500" : ""}`}
              >
                Portfolio
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#work"
                className={`block px-4 py-2 ${active ? "bg-blue-500" : ""}`}
              >
                Career
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#contact"
                className={`block px-4 py-2 ${active ? "bg-blue-500" : ""}`}
              >
                Contact
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </nav>
  );
};

export default Navbar;
