
'use client';

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "エタニティリング",
      price: "¥850,000",
      image: "https://readdy.ai/api/search-image?query=Elegant%20diamond%20eternity%20ring%20on%20white%20marble%20surface%2C%20sparkling%20diamonds%20in%20continuous%20band%2C%20luxury%20jewelry%20photography%2C%20clean%20minimal%20background%2C%20professional%20lighting%20with%20soft%20shadows%2C%20premium%20aesthetic&width=400&height=400&seq=ring-1&orientation=squarish"
    },
    {
      id: 2,
      name: "パールネックレス",
      price: "¥320,000",
      image: "https://readdy.ai/api/search-image?query=Elegant%20pearl%20necklace%20with%20lustrous%20white%20pearls%20on%20silk%20fabric%2C%20luxury%20jewelry%20photography%2C%20clean%20minimal%20background%2C%20soft%20natural%20lighting%2C%20premium%20aesthetic%20with%20sophisticated%20styling&width=400&height=400&seq=necklace-1&orientation=squarish"
    },
    {
      id: 3,
      name: "ダイヤモンドイヤリング",
      price: "¥1,200,000",
      image: "https://readdy.ai/api/search-image?query=Sparkling%20diamond%20earrings%20on%20white%20marble%20surface%2C%20brilliant%20cut%20diamonds%20catching%20light%2C%20luxury%20jewelry%20photography%2C%20clean%20minimal%20background%2C%20professional%20lighting%20with%20elegant%20shadows&width=400&height=400&seq=earrings-1&orientation=squarish"
    },
    {
      id: 4,
      name: "ゴールドブレスレット",
      price: "¥450,000",
      image: "https://readdy.ai/api/search-image?query=Elegant%20gold%20bracelet%20with%20delicate%20chain%20links%20on%20white%20silk%20fabric%2C%20luxury%20jewelry%20photography%2C%20clean%20minimal%20background%2C%20warm%20golden%20lighting%2C%20premium%20aesthetic%20with%20sophisticated%20styling&width=400&height=400&seq=bracelet-1&orientation=squarish"
    },
    {
      id: 5,
      name: "エメラルドリング",
      price: "¥2,300,000",
      image: "https://readdy.ai/api/search-image?query=Stunning%20emerald%20ring%20with%20brilliant%20green%20gemstone%20on%20white%20marble%20surface%2C%20luxury%20jewelry%20photography%2C%20clean%20minimal%20background%2C%20professional%20lighting%20highlighting%20the%20emerald%20brilliance&width=400&height=400&seq=ring-2&orientation=squarish"
    },
    {
      id: 6,
      name: "プラチナチェーン",
      price: "¥180,000",
      image: "https://readdy.ai/api/search-image?query=Elegant%20platinum%20chain%20necklace%20with%20delicate%20links%20on%20white%20silk%20fabric%2C%20luxury%20jewelry%20photography%2C%20clean%20minimal%20background%2C%20cool%20metallic%20lighting%2C%20premium%20aesthetic%20with%20sophisticated%20styling&width=400&height=400&seq=chain-1&orientation=squarish"
    }
  ];

  return (
    <section id="products" className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl text-gray-900 mb-6 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.15em' }}>
            コレクション
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>
            最高品質の素材と職人技により生み出される、永遠の美しさを持つジュエリーコレクション
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square mb-6 overflow-hidden bg-white rounded-none shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="text-center">
                <h3 className="text-sm text-gray-900 mb-3 tracking-widest uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>{product.name}</h3>
                <p className="text-lg text-gray-800 tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300 }}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button className="bg-gray-900 text-white px-8 py-4 text-sm tracking-widest uppercase rounded-none hover:bg-gray-800 transition-all duration-300 cursor-pointer whitespace-nowrap" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}>
            すべてのコレクションを見る
          </button>
        </div>
      </div>
    </section>
  );
}
