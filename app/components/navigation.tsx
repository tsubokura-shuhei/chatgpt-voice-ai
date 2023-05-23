"use client";

import Link from "next/link";

//ナビゲーション
const Navigation = () => {
  return (
    <div>
      <header className="py-5">
        <div className="text-center">
          <Link href="/" className="font-bold text-xl cursor-pointer">
            TsubokuraShuhei
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
