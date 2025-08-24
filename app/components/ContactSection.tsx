
// 'use client';

// import { useState } from 'react';

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <section id="contact" className="py-32 bg-gray-50/50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-20">
//           <h2 className="text-3xl text-gray-900 mb-6 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.15em' }}>
//             お問い合わせ
//           </h2>
//           <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>
//             商品に関するお問い合わせ等、お気軽にご連絡ください
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
//           <div>
//             <div className="bg-white p-10 rounded-none shadow-sm border border-gray-100 mb-10">
//               <h3 className="text-lg text-gray-900 mb-8 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>会社情報</h3>
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="w-8 h-8 flex items-center justify-center mr-6 mt-1 bg-gray-100 rounded-full">
//                     <i className="ri-map-pin-line text-gray-600 text-lg"></i>
//                   </div>
//                   <div>
//                     <p className="text-gray-900 text-sm mb-2 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>住所</p>
//                     <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>〒107-0062<br />東京都港区南青山3-15-12</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="w-8 h-8 flex items-center justify-center mr-6 mt-1 bg-gray-100 rounded-full">
//                     <i className="ri-phone-line text-gray-600 text-lg"></i>
//                   </div>
//                   <div>
//                     <p className="text-gray-900 text-sm mb-2 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>電話番号</p>
//                     <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>03-1234-5678</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="w-8 h-8 flex items-center justify-center mr-6 mt-1 bg-gray-100 rounded-full">
//                     <i className="ri-mail-line text-gray-600 text-lg"></i>
//                   </div>
//                   <div>
//                     <p className="text-gray-900 text-sm mb-2 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>メールアドレス</p>
//                     <p className="text-gray-600 text-base" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>info@eternal-jewelry.com</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <div className="w-8 h-8 flex items-center justify-center mr-6 mt-1 bg-gray-100 rounded-full">
//                     <i className="ri-time-line text-gray-600 text-lg"></i>
//                   </div>
//                   <div>
//                     <p className="text-gray-900 text-sm mb-2 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>営業時間</p>
//                     <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>平日：10:00 - 19:00<br />土日祝：10:00 - 18:00</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             {/* Googleフォームの埋め込み */}
//             <iframe
//               src="https://docs.google.com/forms/d/e/xxxxxxxxxxxxxxxxxxxx/viewform?embedded=true"
//               width="100%"
//               height="475"
//               frameBorder="0"
//               marginHeight={0}
//               marginWidth={0}
//               className="rounded-md shadow-md"
//               // className="rounded-md shadow-md max-w-full"
//               // style={{ minWidth: '320px', maxWidth: '475px' }}
//               title="お問い合わせフォーム"
//             >
//               読み込んでいます…
//             </iframe>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



'use client';
export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2
            className="text-3xl text-gray-900 mb-6 tracking-widest uppercase"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.15em',
            }}
          >
            お問い合わせ
          </h2>
          <p
            className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 300,
            }}
          >
            商品に関するお問い合わせ等、お気軽にご連絡ください
          </p>
        </div>

        {/* 1カラムにして中央寄せ */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white p-10 rounded-none shadow-sm border border-gray-100">
            <h3
              className="text-lg text-gray-900 mb-8 tracking-widest uppercase text-center"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 400,
                letterSpacing: '0.1em',
              }}
            >
              会社情報
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center mr-6 mt-1 bg-gray-100 rounded-full">
                  <i className="ri-map-pin-line text-gray-600 text-lg"></i>
                </div>
                <div>
                  <p
                    className="text-gray-900 text-sm mb-2 tracking-widest uppercase"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                    }}
                  >
                    住所
                  </p>
                  <p
                    className="text-gray-600 text-base leading-relaxed"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    〒107-0062
                    <br />
                    東京都港区南青山3-15-12
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center mr-6 mt-1 bg-gray-100 rounded-full">
                  <i className="ri-phone-line text-gray-600 text-lg"></i>
                </div>
                <div>
                  <p
                    className="text-gray-900 text-sm mb-2 tracking-widest uppercase"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                    }}
                  >
                    電話番号
                  </p>
                  <p
                    className="text-gray-600 text-base"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    03-1234-5678
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center mr-6 mt-1 bg-gray-100 rounded-full">
                  <i className="ri-mail-line text-gray-600 text-lg"></i>
                </div>
                <div>
                  <p
                    className="text-gray-900 text-sm mb-2 tracking-widest uppercase"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                    }}
                  >
                    メールアドレス
                  </p>
                  <p
                    className="text-gray-600 text-base"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    info@eternal-jewelry.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center mr-6 mt-1 bg-gray-100 rounded-full">
                  <i className="ri-time-line text-gray-600 text-lg"></i>
                </div>
                <div>
                  <p
                    className="text-gray-900 text-sm mb-2 tracking-widest uppercase"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                    }}
                  >
                    営業時間
                  </p>
                  <p
                    className="text-gray-600 text-base leading-relaxed"
                    style={{
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    平日：10:00 - 19:00
                    <br />
                    土日祝：10:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
