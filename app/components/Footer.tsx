
'use client';
import { withBasePath } from '@/utils/url';

export default function Footer() {
  return (
    <footer className="bg-[#eae4d6] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-center text-center">
            <img
              src={withBasePath("/images/desert_logo.jpg")}
              className="rounded-full w-[250px] h-[200px] mb-8"
            />
            <p className="text-gray-300 mb-8 max-w-md text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>
              {/* 会社の一言 */}
            </p>
            <div className="flex space-x-6 justify-center">
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
            <h4 className="text-gray-900 text-sm mb-6 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 500, letterSpacing: '0.1em' }}>サービス</h4>
            <ul className="space-y-4 text-gray-900">
              <li><a href="#" className="hover:text-gray-900 cursor-pointer text-base transition-colors" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>オーダーメイド</a></li>
              <li><a href="#" className="hover:text-gray-900 cursor-pointer text-base transition-colors" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>リペア・修理</a></li>
              <li><a href="#" className="hover:text-gray-900 cursor-pointer text-base transition-colors" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>リサイズ</a></li>
              <li><a href="#" className="hover:text-gray-900 cursor-pointer text-base transition-colors" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>鑑定書発行</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 text-sm mb-6 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 500, letterSpacing: '0.1em' }}>お問い合わせ</h4>
            <ul className="space-y-4 text-gray-900">
              <li className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>〒107-0062</li>
              <li className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>東京都港区南青山3-15-12</li>
              <li className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>TEL: 03-1234-5678</li>
              <li className="text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>info@eternal-jewelry.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-900">
          <p className="text-sm" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>&copy; 2025 Désert Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
