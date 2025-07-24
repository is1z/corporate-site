
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl text-gray-900 mb-8 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.15em' }}>
              会社情報
            </h2>
            <div className="space-y-8 text-gray-600">
              <p className="text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>
                私たちは30年以上にわたり、最高品質のジュエリーを提供し続けております。
                一つ一つの作品に込められた想いと、熟練した職人の技術により、
                お客様の特別な瞬間を永遠に輝かせるジュエリーを創造しています。
              </p>
              <p className="text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>
                厳選された天然石とプレシャスメタルを使用し、
                伝統的な技法と現代的なデザインを融合させた独自のスタイルで、
                世界に一つだけのジュエリーをお作りいたします。
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-sm text-gray-900 mb-4 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>会社名</h3>
                <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>エターナルジュエリー株式会社</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-sm text-gray-900 mb-4 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>設立</h3>
                <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>1993年</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-sm text-gray-900 mb-4 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>代表者</h3>
                <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>代表取締役 田中美香</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-sm text-gray-900 mb-4 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>事業内容</h3>
                <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>高級ジュエリーの企画・製造・販売</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 rounded-none p-2">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20jewelry%20craftsman%20working%20on%20elegant%20diamond%20ring%20in%20luxury%20workshop%2C%20skilled%20artisan%20hands%20with%20precision%20tools%2C%20warm%20workshop%20lighting%2C%20traditional%20jewelry%20making%20process%20with%20modern%20equipment%2C%20premium%20craftsmanship%20aesthetic&width=600&height=700&seq=craftsman-1&orientation=portrait"
                alt="職人の技術"
                className="w-full h-auto rounded-none shadow-md object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
