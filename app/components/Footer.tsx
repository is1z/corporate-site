
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl mb-6 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.15em' }}>
              Eternal Jewelry
            </h3>
            <p className="text-gray-300 mb-8 max-w-md text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>
              30年以上にわたり、最高品質のジュエリーを提供し続けております。
              一つ一つの作品に込められた想いと、熟練した職人の技術により、
              お客様の特別な瞬間を永遠に輝かせるジュエリーを創造しています。
            </p>
            <div className="flex space-x-6">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 transition-colors">
                <i className="ri-facebook-fill text-xl"></i>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 transition-colors">
                <i className="ri-instagram-line text-xl"></i>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 transition-colors">
                <i className="ri-twitter-line text-xl"></i>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm mb-6 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>サービス</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white cursor-pointer text-base transition-colors" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>オーダーメイド</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer text-base transition-colors" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>リペア・修理</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer text-base transition-colors" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>リサイズ</a></li>
              <li><a href="#" className="hover:text-white cursor-pointer text-base transition-colors" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>鑑定書発行</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm mb-6 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>お問い合わせ</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>〒107-0062</li>
              <li className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>東京都港区南青山3-15-12</li>
              <li className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>TEL: 03-1234-5678</li>
              <li className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>info@eternal-jewelry.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p className="text-sm" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>&copy; 2024 Eternal Jewelry Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
