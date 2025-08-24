
'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl text-gray-900 mb-8 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.15em' }}>
              ジュエリ－デザイナ－
            </h2>
            <p className="text-xl text-gray-900 mb-4 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400 }}>
              吉田 綾子
            </p>
            <div className="space-y-8 text-gray-600">
              <p className="text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>
                デビュ－以来、数々のコンテストに入賞。フランスでは、ジュエリ－デザインの最高峰、D.I.A.を受賞。2000年春からは新世紀に発信するニュ－ブランドアヤコ・コレクションを展開し、自然の美しさと様々な心のときめきを、独自の視点でとらえたユニ－クな作風が注目されている。
              </p>
              {/* <p className="text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>
                厳選された天然石とプレシャスメタルを使用し、
                伝統的な技法と現代的なデザインを融合させた独自のスタイルで、
                世界に一つだけのジュエリーをお作りいたします。
              </p> */}
            </div>

            {/* <div className="mt-16">
              <h3 className="text-lg text-gray-900 mb-6 tracking-widest uppercase" style={{ fontFamily: 'system-ui', fontWeight: 400, letterSpacing: '0.15em' }}>経歴</h3>
              <ul className="space-y-2 text-gray-600 text-base" style={{ fontFamily: 'system-ui', fontWeight: 300 }}>
                <li>京都嵯峨芸術大学 ビジュアルデザイン科 卒業</li>
                <li>1985〜1988　ジョワ宝石ビジネススクール 宝石デザインコース講師</li>
                <li>2000　デザイナーズブランド「アヤココレクション」発表・全国展開開始</li>
                <li>2003　アヤココレクション有限会社 設立</li>
                <li>現在　アヤココレクション有限会社 代表取締役</li>
              </ul>
            </div> */}

            <div className="mt-16">
              <h3 className="text-lg text-gray-900 mb-6 tracking-widest uppercase" style={{ fontFamily: 'system-ui', fontWeight: 400, letterSpacing: '0.15em' }}>受賞歴</h3>
              <ul className="space-y-2 text-gray-600 text-base" style={{ fontFamily: 'system-ui', fontWeight: 300 }}>
                <li>1985　インターナショナル パールデザインコンテスト 入選</li>
                <li>1988　現代宝飾デザイン展 銅賞</li>
                <li>1990　デ・ビアス インターナショナル ダイヤモンドアワード 入賞（D.I.A.）</li>
                <li>1991　デ・ビアス ジャパン ダイヤモンドコンテスト ’91賞</li>
                <li>その他多数</li>
              </ul>
            </div>
            
            {/* <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-sm text-gray-900 mb-4 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>会社名</h3>
                <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>Désert株式会社</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-sm text-gray-900 mb-4 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>設立</h3>
                <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>2025年</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-sm text-gray-900 mb-4 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>代表者</h3>
                <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>代表取締役 山脇 浩司</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-sm text-gray-900 mb-4 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>事業内容</h3>
                <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>高級ジュエリーの企画・製造・販売</p>
              </div>
            </div> */}
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 rounded-none p-2">
              <img
                src="/images/ayaco_profile.jpg"
                className="w-full h-auto rounded-none shadow-md object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
