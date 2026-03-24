import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <header className="grid grid-cols-2">
    <div>sheraz</div>
      <nav>
      <ul className="flex gap-3">
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/hero">contact</Link>
        </li>
      </ul>

      </nav>
    
    </header>
  );
};

export default Navigation;
