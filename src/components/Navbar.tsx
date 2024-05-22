import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { navLinks } from "../constants/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white bg-white shadow-md p-8 w-full fixed top-0 z-20">
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
        <a
          href="#header"
          className=" fixed md:top-5 top-4 md:left-5 left-5 md:text-4xl text-2xl font-bold text-indigo-500 cursor-pointer"
        >
          M.
        </a>
        <div className="md:hidden fixed">
          <button onClick={toggleMenu} aria-label="Menu">
            {isOpen ? (
              <Icon
                icon="ep:close-bold"
                className="text-indigo-500"
                width="24px"
                height="24px"
              />
            ) : (
              <Icon
                icon="charm:menu-hamburger"
                className="text-indigo-500"
                width="24px"
                height="24px"
              />
            )}
          </button>
        </div>
      </div>
      <Menu as="div" className={`md:hidden ${isOpen ? "block" : "hidden"} `}>
        <Menu.Items
          static
          className="mt-2 space-y-2 text-gray-800 bg-white z-50 right-0 top-12 py-12 px-8 shadow-lg fixed"
        >
          <Menu.Item>
            {({ active }) => (
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
