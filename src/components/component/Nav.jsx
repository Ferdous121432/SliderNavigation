import React from "react";

export default function Nav() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-between fixed z-2 w-full px-20 py-8 font-oswald ">
      <div className="logo">Timber</div>
      <nav>
        <ul className="flex gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
