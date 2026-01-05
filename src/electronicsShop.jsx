import React from 'react';
import HeroSection from "./heroSection"
import Footer from "./footer"
import ContactSection from "./contactUsSection"
import lightsImage1 from "./assets/categoriesImage1.webp"
import lightsImage2 from "./assets/categoriesImage6.webp"
import lightsImage3 from "./assets/categoriesImage11.webp"
import lightsImage4 from "./assets/homeBanner11.webp"
import lightsImage5 from "./assets/categoriesImage2.webp"
import mccbCircuitBreaker from "./assets/mccb.png"
import flatIron from "./assets/flat-iron.jpg"

const ElectronicsShop = () => {
  const solarProducts = [
    { name: 'Solar Monocrystalline', image: 'https://www.pv-magazine.com/wp-content/uploads/2021/08/thumbnail_7ac546b2f4d2b9e59a1105a1dfcbe5a-e1631538708157-1200x608.png' },
    // { name: 'Lithium Solar Batteries', image: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3525598664182546389' },
    // { name: 'Lead Acid Storage (MF Batteries - Chloride)', image: 'x-raw-image:///ae714ce727c254fa91f6c6505017059a0375ebddf815e45c7a92250aa7b34197' },
    // { name: 'Solar Inverters', image: 'https://img.ctmon.com.cn/oss/sren/userfiles/assets/2023/10/17/2023101717425461.png' },
    { name: 'Solar Charge Controllers (MPPT)', image: 'https://m.media-amazon.com/assets/I/71Lb7O9te6L._AC_UF894,1000_QL80_.jpg' },
    { name: 'Solar Street Lights', image: 'https://www.elitesemicon.com/uploads/%E5%9B%BE%E7%89%8718.png' },
    // { name: 'Solar Flood Lights', image: 'https://www.elitesemicon.com/uploads/%E5%9B%BE%E7%89%8718.png' },
  ];

  const lightsProducts = [
    { name: 'Ceiling Lights', image: 'https://m.media-amazon.com/assets/S/aplus-media-library-service-media/01c7e943-a563-4119-b9ed-d542fc91af24.__CR0,0,970,600_PT0_SX970_V1___.jpg' },
    { name: 'Panel Lights', image: lightsImage1 },
    { name: 'Mega Lights', image: lightsImage2 },
    { name: 'Spot Lights', image: lightsImage3 },
    { name: 'LED Crystal Lights', image: lightsImage4 },
    { name: 'Flood Lights', image: lightsImage5 },
  ];

  const cablesProducts = [
    { name: 'Twin with Earth Cable', image: 'https://thumbs.dreamstime.com/b/electrical-cable-white-background-d-render-electrical-cable-187358488.jpg' },
    // { name: 'Twin with Earth Cable', image: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10237176532453967' },
    { name: 'Underground Cables', image: 'https://www.ssgcable.com/wp-content/uploads/2019/09/AWA-Cable-0.jpg' },
    { name: 'Earth Cables', image: 'https://thumbs.dreamstime.com/b/illustration-network-cable-connected-to-global-representation-earth-symbolizing-worldwide-data-connection-digital-409345410.jpg' },
    { name: 'A-B-C Cables', image: 'https://i.ytimg.com/vi/atKnMDSjmoY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDkgXChyMA8=&rs=AOn4CLBZl_30X9U488naBEKR4nH_Vra1GQ' },
    { name: 'Stay Wires', image: 'https://3.imimg.com/data3/VU/GX/MY-2925277/stay-wire-250x250.jpg' },
    { name: 'Strain Clamps', image: 'https://www.pole-hardware.com/wp-content/uploads/2024/10/1-Strain-Clamp.jpg' },
    { name: 'Suspension Clamps', image: 'https://cablegrip.co.uk/media/cat-4/pole-line-suspension-clamps-1a.jpg' },
    { name: 'Stay Rods', image: 'https://assets.wired2fish.com/uploads/2022/10/8686be5f-7b23-4695-8436-5a1194eaa8d8.webp' },
    { name: 'Flexible Cables', image: 'https://cdn.shopify.com/s/files/1/0213/7895/7412/files/shutterstock_560390944_large.jpg?v=1595955906' },
    { name: 'Multi-Strand Cables', image: 'https://thumbs.dreamstime.com/b/exposed-multi-core-cable-colorful-insulated-wires-copper-conductors-splayed-black-sheath-white-background-space-422673543.jpg' },
    { name: 'Single Core Cables', image: 'https://i.ebayimg.com/assets/g/ut0AAOSw2jdfHkPW/s-l1200.jpg' },
    { name: 'Flat Iron Cables', image: 'https://www.electricaltechnology.org/wp-content/uploads/2020/04/Types-of-Electrical-Wires-Cables.jpg' },
    { name: 'Extension Cables', image: 'https://bench-force.com/cdn/shop/files/100-02908-corrected_300x300.png?v=1749482371' },
    { name: 'Com Cables', image: 'https://m.media-amazon.com/assets/I/51toMdUK9xL._AC_UF1000,1000_QL80_.jpg' },
    { name: 'Fire Alarm Cables', image: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3Ntb2tlLWRldGVjdG9yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fX19' },
    { name: 'Coaxial Cables', image: 'http://www.thecimpleco.com/cdn/shop/products/71TscB3o_2BAL._SL1500_d7e0b3bc-7e3f-4c4c-bb1c-dcaccf3b4420_1024x.jpg?v=1752690947' },
  ];

  const circuitBreakers = [
    { name: 'Single Pole Circuit Breakers', image: 'https://i.ebayimg.com/assets/g/UPYAAOSwhJtd6UVp/s-l1200.jpg' },
    // { name: 'Double Pole Circuit Breakers', image: 'https://magnifyelectric.com/wp-content/uploads/2024/11/What-is-a-Double-Pole-Circuit-Breaker.jpg' },
    { name: 'Triple Pole Circuit Breakers', image: 'http://www.simplybreakers.com/cdn/shop/files/CB-THQL32040-1.jpg?v=1748186772' },
    { name: 'MCCB (Molded Case) Circuit Breakers', image: mccbCircuitBreaker },
    { name: 'MCB (Miniature) Circuit Breakers', image: 'https://www.geya.net/wp-content/uploads/2024/06/mcb-banner-scaled.webp' },
  ];

  const mainSwitches = [
    { name: 'Single Phase Main Switches', image: 'https://www.electricaltechnology.org/wp-content/uploads/2013/05/Wiring-of-the-Distribution-Board-with-RCD-Single-Phase-Home-Supply-From-Utility-Pole-Energy-Meter-to-the-Consumer-Unit.png' },
    { name: 'Three Phase Main Switches', image: 'https://i.ytimg.com/vi/PfPd9vXSrpk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARB6sdqbSKz1uSPxFSWxbNSAov8g' },
  ];

  const contactors = [
    { name: 'AC Timers', image: 'https://m.media-amazon.com/assets/I/61QxwWMHs8L._AC_UF894,1000_QL80_.jpg' },
    { name: 'Push Buttons', image: 'https://thumbs.dreamstime.com/b/close-up-multi-function-industrial-switch-block-isolated-white-background-each-colorful-pushbutton-represents-critical-415293827.jpg' },
    { name: 'Indicator Lamps', image: 'https://thumbs.dreamstime.com/z/alert-indicator-lamp-isolated-white-transparent-background-png-image-stunning-vibrant-high-quality-375123097.jpg' },
    { name: 'Emergency Stop Push Buttons', image: 'https://thumbs.dreamstime.com/b/red-stop-button-white-d-emergency-start-vector-illustration-mechanism-asset-machinery-panic-411353213.jpg' },
    { name: 'Liquid Level Controllers', image: 'https://www.danfoss.com/media/1271/electronic-valve-control-eke-347-danfoss.jpg' },
    { name: 'Photocells', image: 'https://cdn.sick.com/media/pim/1/91/291/IM0108291.png' },
    { name: 'Liquid Level Controller Timers', image: 'https://cdn.thewirecutter.com/wp-content/media/2023/08/smart-sprinkler-controller-2048px-0321.jpg?auto=webp&quality=75&width=1024' },
  ];

  const otherProducts = [
    { name: 'Flat Irons (All Types)', image: flatIron },
    { name: 'Fans', image: 'https://thumbs.dreamstime.com/b/golden-vintage-electric-fan-d-render-illustration-object-isolated-white-background-shadows-94977440.jpg' },
    { name: 'Fan Regulators', image: 'https://thumbs.dreamstime.com/b/detailed-rear-view-modern-automotive-alternator-isolated-clean-white-background-image-clearly-displays-intricate-413778682.jpg' },
    { name: 'Smoke Detectors', image: 'https://thumbs.dreamstime.com/b/smoke-detektor-25686041.jpg' },
    { name: 'Fire Alarms', image: 'https://thumbs.dreamstime.com/b/smoke-fire-alarm-systems-illustration-detector-sensor-safety-alert-protection-security-394098805.jpg' },
    { name: 'Electric Bells', image: 'https://cdn1.byjus.com/wp-content/uploads/2020/09/Working-Of-An-Electric-Bell.png' },
  ];

  const switches = [
    { name: 'Gold Switches', image: 'https://thumbs.dreamstime.com/b/exquisite-gold-light-switch-detailed-elegant-design-element-modern-interior-spaces-stunning-aerial-photograph-showcases-378341024.jpg' },
    { name: 'White Switches', image: 'https://thumbs.dreamstime.com/b/close-view-three-switch-panel-white-wall-soft-light-clean-lines-modern-electrical-hardware-minimalist-style-macro-398664329.jpg' },
    { name: 'Black Switches', image: 'https://thumbs.dreamstime.com/b/socket-switch-various-type-electrical-connectors-standard-power-supply-d-equipment-black-toggle-buttons-interior-plastic-424363445.jpg' },
    { name: 'Silver Switches', image: 'https://thumbs.dreamstime.com/b/power-switch-10960697.jpg' },
    { name: 'Bell Switches', image: 'https://thumbs.dreamstime.com/b/bell-features-round-push-button-top-ringing-silver-service-polished-metallic-finish-classic-dome-shape-420762355.jpg' },
    { name: 'Dimmer Switches', image: 'https://thumbs.dreamstime.com/b/combination-switch-plate-dimmer-19100408.jpg' },
    { name: 'Pull Switches', image: 'https://thumbs.dreamstime.com/b/hand-pulling-pull-switch-off-cartoon-drawing-mono-line-illustration-human-light-bulb-fixture-to-turn-done-black-397239747.jpg' },
  ];

  const sockets = [
    { name: 'Double Gold Sockets', image: 'https://cdn.socketstore.co.uk/resize/?src=/assets/catalog/0094688/oversized-sockets-and-switches.jpg&width=360&height=270&crop=cc&keepformat=False&u=1' },
    { name: 'Double White Sockets', image: 'https://thumbs.dreamstime.com/b/white-double-electrical-outlet-background-395758127.jpg' },
    { name: 'Double Silver Sockets', image: 'http://prismalighting.co.uk/cdn/shop/articles/Desktop_Define_Socket_Banner.png?v=1732598320' },
    { name: 'Single Gold Sockets', image: 'https://thumbs.dreamstime.com/b/capture-mesmerizing-close-up-image-single-glowing-ethernet-cable-plug-bathed-ethereal-light-against-dark-sleek-404788738.jpg' },
    { name: 'Single Silver Sockets', image: 'https://i.ytimg.com/vi/qX_Ag9U29yA/sddefault.jpg' },
    { name: 'Single White Sockets', image: 'https://thumbs.dreamstime.com/b/electric-plug-20266251.jpg' },
  ];

  const renderProducts = (products, bgColor = 'bg-gray-200') => (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4 gap-4`}>
      {products.map((product, index) => (
        <div key={index} className={`${bgColor} p-4 rounded-xl shadow-md text-center`}>
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-2" />
          <p className="text-md font-medium text-gray-800">{product.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <HeroSection/>

      {/* Solar Products */}
      <section className="py-12 px-4 bg-gray-300" id="solar">
        <div className="max-w-full mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">Solar Products</h2>
          {renderProducts(solarProducts, 'bg-white')}
        </div>
      </section>

      {/* Lights Products */}
      <section className="py-12 px-4 bg-gray-400" id="lights">
        <div className="max-w-full mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">Lights</h2>
          {renderProducts(lightsProducts, 'bg-white')}
        </div>
      </section>

      {/* Cables Products */}
      <section className="py-12 px-4 bg-gray-300" id="cables">
        <div className="max-w-full mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">Cables</h2>
          {renderProducts(cablesProducts, 'bg-white')}
        </div>
      </section>

      {/* Circuit Breakers */}
      <section className="py-12 px-4 bg-gray-400" id="cables">
        <div className="max-w-full mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">Circuit Breakers</h2>
          {renderProducts(circuitBreakers, 'bg-white')}
        </div>
      </section>

      {/* Main Switches */}
      <section className="py-12 px-4 bg-gray-300">
        <div className="max-w-full mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">Main Switches</h2>
          {renderProducts(mainSwitches, 'bg-white')}
        </div>
      </section>

      {/* Contactors and Related */}
      <section className="py-12 px-4 bg-gray-400">
        <div className="max-w-full mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">Contactors & Controls</h2>
          {renderProducts(contactors, 'bg-white')}
        </div>
      </section>

      {/* Other Products */}
      <section className="py-12 px-4 bg-gray-300">
        <div className="max-w-full mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">Other Products</h2>
          {renderProducts(otherProducts, 'bg-white')}
        </div>
      </section>

      {/* Switches */}
      <section className="py-12 px-4 bg-gray-400">
        <div className="max-w-full mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">Switches</h2>
          {renderProducts(switches, 'bg-white')}
        </div>
      </section>

      {/* Sockets */}
      <section className="py-12 px-4 bg-gray-300">
        <div className="max-w-full mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-800">Sockets</h2>
          {renderProducts(sockets, 'bg-white')}
        </div>
      </section>

      <ContactSection/>

      <Footer />
    </div>
  );
};

export default ElectronicsShop;