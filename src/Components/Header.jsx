import React, { useState } from "react";

import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/pic.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  // const [currentLink, setCurrentLink] = useState(true);

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Skills", href: "/Skills", current: false },
    { name: "Projects", href: "/Projects", current: false },
    { name: "Video", href: "/Video", current: false },
    { name: "Blog", href: "/Blog", current: false },
  ];

  const icons = [
    {
      name: "Github",
      icon: <BsGithub className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "Twitter",
      icon: <BsTwitter className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "Facebook",
      icon: <BsFacebook className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "whatsapp",
      icon: <BsWhatsapp className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "LinkedIn",
      icon: <BsLinkedin className="h-6 w-6" aria-hidden="true" />,
    },
  ];
  
  return (
    <Disclosure as="nav" className="fixed bg-transparent left-0 right-0 top-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center w-52 ">
                  <img
                    className="block lg:hidden h-10 w-8 rounded-full object-contain"
                    src={logo}
                    alt="shubham"
                  />
                  <img
                    className="hidden lg:block h-10 w-8 rounded-full object-contain"
                    src={logo}
                    alt="shubham"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {icons.map((icon) => {
                  return (
                    <button
                      key={icon.name}
                      type="button"
                      className="bg-transparent mx-2 text-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">{icon.name}</span>
                      {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                      {icon.icon}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default Header;
