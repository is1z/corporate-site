
'use client';
import { withBasePath } from '@/utils/url';

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "black_silver",
      price: "¥850,000",
      image: "/images/black_silver_ accessory.jpeg"
    },
    {
      id: 2,
      name: "necklace1_back_green",
      price: "¥320,000",
      image: "/images/necklace1.jpg"
    },
    {
      id: 3,
      name: "necklace_green",
      price: "¥1,200,000",
      image: "/images/necklace2.jpg"
    },
    {
      id: 4,
      name: "necklace3_amethyst",
      price: "¥450,000",
      image: "/images/necklace3_amethyst.jpg"
    },
    {
      id: 5,
      name: "ring1",
      price: "¥180,000",
      image: "/images/ring1.jpg"
    },
    {
      id: 6,
      name: "ring_2",
      price: "¥180,000",
      image: "/images/ring2.jpg"
    },
    {
      id: 7,
      name: "necklace_back_lightGreen",
      price: "¥2,300,000",
      image: "/images/necklace3.jpg"
    },
    {
      id: 8,
      name: "red-accessory",
      price: "¥180,000",
      image: "/images/red-accessory.jpg"
    },
  ];

  return (
    <section id="products" className="py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl text-gray-900 mb-6 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.15em' }}>
            コレクション
          </h2>
          {/* <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>
            最高品質の素材と職人技により生み出される、永遠の美しさを持つジュエリーコレクション
          </p> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square mb-6 overflow-hidden bg-white rounded-none shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500">
                <img
                  src={withBasePath(product.image)}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center">
                {/* <h3 className="text-sm text-gray-900 mb-3 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>{product.name}</h3> */}
                {/* <p className="text-lg text-gray-800 tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>{product.price}</p> */}
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-20">
          <button className="bg-gray-900 text-white px-8 py-4 text-sm tracking-widest uppercase rounded-none hover:bg-gray-800 transition-all duration-300 cursor-pointer whitespace-nowrap" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>
            すべてのコレクションを見る
          </button>
        </div> */}
      </div>
    </section>
  );
}
