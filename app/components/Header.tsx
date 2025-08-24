
// 'use client';

// import Link from 'next/link';

// export default function Header() {
//   return (
//     <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex items-center">
//             <Link href="/" className="text-2xl text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontStretch: 'condensed' }}>
//               Désert
//             </Link>
//           </div>
//           <nav className="hidden md:flex space-x-12">
//             <Link href="#products" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-sm tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>
//               コレクション
//             </Link>
//             <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-sm tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>
//               会社情報
//             </Link>
//             <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-sm tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>
//               お問い合わせ
//             </Link>
//           </nav>
//           <div className="w-6 h-6 flex items-center justify-center md:hidden">
//             <i className="ri-menu-line text-xl text-gray-700"></i>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl text-gray-900"
                style={{
                  fontFamily:
                    'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  fontStretch: 'condensed',
                }}
              >
                Désert
              </Link>
            </div>

            {/* PCメニュー */}
            <nav className="hidden md:flex space-x-12">
              <Link
                href="#products"
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-sm tracking-widest uppercase"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                }}
              >
                コレクション
              </Link>
              <Link
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-sm tracking-widest uppercase"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                }}
              >
                会社情報
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-sm tracking-widest uppercase"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                }}
              >
                お問い合わせ
              </Link>
            </nav>

            {/* ハンバーガーメニューアイコン */}
            <button
              className="w-6 h-6 flex items-center justify-center md:hidden focus:outline-none"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              type="button"
            >
              <i className="ri-menu-line text-xl text-gray-700"></i>
            </button>
          </div>
        </div>
      </header>

      {/* オーバーレイ＆スライドメニュー */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } bg-black bg-opacity-40`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col p-8`}
        aria-hidden={!menuOpen}
      >
        <button
          className="self-end mb-8 text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          type="button"
        >
          <i className="ri-close-line text-3xl"></i>
        </button>

        <nav
          className="flex flex-col space-y-6 text-base font-light tracking-widest uppercase"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          <Link
            href="#products"
            className="text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            コレクション
          </Link>
          <Link
            href="#about"
            className="text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            会社情報
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            お問い合わせ
          </Link>
        </nav>

      </aside>
    </>
  );
}
