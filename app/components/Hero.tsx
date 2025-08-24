
'use client';
import { withBasePath } from '@/utils/url';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${withBasePath('/images/hero2.jpg')}')`
          // backgroundImage: `url('https://readdy.ai/api/search-image?query=Elegant%20luxury%20jewelry%20collection%20arranged%20on%20minimal%20white%20marble%20surface%2C%20featuring%20diamond%20rings%2C%20pearl%20necklaces%2C%20and%20gold%20bracelets%2C%20soft%20natural%20lighting%2C%20high-end%20jewelry%20photography%2C%20clean%20minimalist%20aesthetic%20with%20sophisticated%20styling%2C%20premium%20quality%20precious%20stones&width=1920&height=1080&seq=hero-jewelry-1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  );
}
