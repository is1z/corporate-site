
'use client';

import Link from 'next/link';

export default function firstView() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontStretch: 'condensed' }}>
              HOGEHOGE
            </Link>
          </div>
          <nav className="hidden md:flex space-x-12">
            <Link href="#products" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-sm tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>
              コレクション
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-sm tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>
              会社情報
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-sm tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>
              お問い合わせ
            </Link>
          </nav>
          <div className="w-6 h-6 flex items-center justify-center md:hidden">
            <i className="ri-menu-line text-xl text-gray-700"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
