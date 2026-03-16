import StockistsPage from "./bannerpage";
import CategoryBanner from "./categorybanner";
import TrustCertificationSection from "./certificate";
import SkinProductHero from "./homepage";
import SkynJourneySection from "./mam";
import ProductDetailSection from "./product";
import ProductShowcase from "./product";
import SkynRealityDetailSection from "./product3";
import LuxuryEyeSection from "./proudct2";


export default function Home() {
  return (
    <div>
      
  <SkinProductHero/>
  
 <SkynJourneySection/>
<ProductDetailSection/>
<TrustCertificationSection/>
<SkynRealityDetailSection/>
<StockistsPage/>
<LuxuryEyeSection/>
 <CategoryBanner/>

    </div>
  );
}
