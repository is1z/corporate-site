
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl text-gray-900 mb-6 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.15em' }}>
            お問い合わせ
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>
            オーダーメイドのご相談、商品に関するお問い合わせはお気軽にご連絡ください
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="bg-white p-10 rounded-none shadow-sm border border-gray-100 mb-10">
              <h3 className="text-lg text-gray-900 mb-8 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>店舗情報</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center mr-6 mt-1 bg-gray-100 rounded-full">
                    <i className="ri-map-pin-line text-gray-600 text-lg"></i>
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm mb-2 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>住所</p>
                    <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>〒107-0062<br />東京都港区南青山3-15-12</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center mr-6 mt-1 bg-gray-100 rounded-full">
                    <i className="ri-phone-line text-gray-600 text-lg"></i>
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm mb-2 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>電話番号</p>
                    <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>03-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center mr-6 mt-1 bg-gray-100 rounded-full">
                    <i className="ri-mail-line text-gray-600 text-lg"></i>
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm mb-2 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>メールアドレス</p>
                    <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>info@eternal-jewelry.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 flex items-center justify-center mr-6 mt-1 bg-gray-100 rounded-full">
                    <i className="ri-time-line text-gray-600 text-lg"></i>
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm mb-2 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>営業時間</p>
                    <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>平日：10:00 - 19:00<br />土日祝：10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-none shadow-sm border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2982475!2d139.7226!3d35.6624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM5JzQ0LjYiTiAxMznCsDQzJzI1LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-none"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-none shadow-sm border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-green-50 rounded-full">
                  <i className="ri-check-line text-3xl text-green-600"></i>
                </div>
                <h3 className="text-lg text-gray-900 mb-3 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>送信完了</h3>
                <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>お問い合わせありがとうございます。3営業日以内にご連絡いたします。</p>
              </div>
            ) : (
              <form id="jewelry-contact">
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm text-gray-700 mb-3 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>
                      お名前 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-4 text-base border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-700 mb-3 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>
                      メールアドレス *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-4 text-base border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-700 mb-3 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-4 text-base border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-700 mb-3 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>
                      お問い合わせ内容 *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-4 text-base border border-gray-200 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent resize-none"
                      placeholder="オーダーメイドのご相談、商品に関するお問い合わせなど、お気軽にお書きください。"
                      style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}
                    />
                    <p className="text-sm text-gray-500 mt-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>
                      {formData.message.length}/500文字
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-5 px-6 rounded-none hover:bg-gray-800 transition-all duration-300 cursor-pointer whitespace-nowrap text-sm tracking-widest uppercase"
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}
                  >
                    送信する
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
