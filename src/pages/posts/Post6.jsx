import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BlogLangToggle from '../../components/BlogLangToggle';

const Post6 = () => {
  const [lang, setLang] = useState('en');

  return (
    <div className="container" style={{ paddingTop: '180px', paddingBottom: '80px', maxWidth: '850px', minHeight: '80vh' }}>
      <Helmet>
        <title>
          {lang === 'en'
            ? "Top 10 Must-Try Udupi Foods at Mathuram Cafe, Brahmavara (2026 Guide)"
            : "ಬ್ರಹ್ಮಾವರದ ಮಥುರಾಮ್ ಕೆಫೆಯಲ್ಲಿ ನೀವು ಸವಿಯಲೇಬೇಕಾದ ಟಾಪ್ 10 ಉಡುಪಿ ತಿನಿಸುಗಳು (2026)"}
        </title>
        <meta 
          name="description" 
          content={lang === 'en'
            ? "Looking for the best food in Udupi? Explore the top 10 authentic Udupi dishes from crispy Masala Dosa to Gudbud Ice Cream with full photos at Mathuram Cafe."
            : "ಉಡುಪಿಯ ಅತ್ಯುತ್ತಮ ಆಹಾರ ಯಾವುದು? ಗರಿಗರಿ ಮಸಾಲ ದೋಸೆಯಿಂದ ಹಿಡಿದು ಗಡ್‌ಬಡ್ ಐಸ್‌ಕ್ರೀಮ್‌ವರೆಗೆ ಮಥುರಾಮ್ ಕೆಫೆಯ ಟಾಪ್ 10 ತಿನಿಸುಗಳ ಫೋಟೋ ಸಹಿತ ಪಟ್ಟಿ."}
        />
        <meta 
          name="keywords" 
          content="ಉಡುಪಿಯ ಪ್ರಸಿದ್ಧ ತಿನಿಸುಗಳು, ಮಸಾಲ ದೋಸೆ ಉಡುಪಿ, ಗಡ್‌ಬಡ್ ಐಸ್‌ಕ್ರೀಮ್, ಪೂರಿ ಸಾಗು, ದಾಲ್ ತಡ್ಕಾ, ವೆಜ್ ಬಿರಿಯಾನಿ, top 10 foods udupi, must try food udupi, best masala dosa brahmavara, udupi gudbud ice cream" 
        />
      </Helmet>

      <BlogLangToggle lang={lang} setLang={setLang} />

      {lang === 'en' ? (
        <>
          <h1 className="gold-text" style={{ marginBottom: '20px', fontSize: '2.4rem', lineHeight: '1.2' }}>
            Top 10 Must-Try Udupi Foods at Mathuram Cafe, Brahmavara (2026 Guide)
          </h1>
          
          <div className="glass-panel" style={{ padding: '35px', lineHeight: '1.8', color: 'var(--color-text)' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              If you are searching for <strong>the best food in Udupi</strong>, your food trail is incomplete without stopping by <strong>Mathuram Cafe in Brahmavara</strong>. Udupi is the birthplace of South India's most loved vegetarian cooking, and Mathuram Cafe keeps that tradition alive with real local recipes, pure ghee, fresh coconut, and flavors that taste just like a home-cooked meal from a traditional coastal Brahmin kitchen.
            </p>

            <p style={{ marginBottom: '25px' }}>
              Whether you are a local from Brahmavara, a student from Manipal, a pilgrim visiting the Sri Krishna Matha, or a road-tripper driving along NH 66, here is your no-nonsense local guide to the <strong>top 10 foods you must eat at Mathuram Cafe</strong>.
            </p>

            <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '30px 0' }} />

            {/* 1. Masala Dosa */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>1. Masala Dosa</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/best-masala-dosa-brahmavara.webp" 
                  alt="Crispy Masala Dosa at Mathuram Cafe Brahmavara Udupi" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                No Udupi food list starts without Masala Dosa. Our dosa is roasted crisp with pure ghee on a hot tawa, folded over a spiced potato palya, and served with freshly ground coconut chutney and piping hot Udupi sambar. It is crunchy on the outside, soft on the inside, and completely unpretentious. If you want the real benchmark for <strong>best dosa in Udupi</strong>, this is the one to order.
              </p>
            </div>

            {/* 2. Thatte Idli */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>2. Thatte Idli</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/Thatte Idli.webp" 
                  alt="Soft Thatte Idli with Ghee and Podi at Mathuram Cafe" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                'Thatte' means plate in Kannada. These are large, wide, plate-sized idlis steamed to a super soft, pillowy texture. Smothered in aromatic ghee and spicy gunpowder podi, they soak up our fresh green chutney and dal sambar like a sponge. It is a staple breakfast for anyone traveling through coastal Karnataka.
              </p>
            </div>

            {/* 3. Poori Sagu */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>3. Poori Sagu</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/traditional-poori-saagu-breakfast.webp" 
                  alt="Golden Puffed Poori with Vegetable Sagu at Mathuram Cafe" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                Hot, golden, puffed pooris served with traditional coastal vegetable sagu. Our sagu is made using fresh grated coconut, green chillies, and local herbs—mild, flavorful, and deeply satisfying. It is one of the most ordered morning breakfast items for families visiting Brahmavara.
              </p>
            </div>

            {/* 4. Kesari Bath */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>4. Kesari Bath</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/sweet-kesari-bath-south-indian-dessert.webp" 
                  alt="Traditional Ghee Kesari Bath Sweet at Mathuram Cafe Udupi" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                A classic Karnataka sweet made from semolina (rava), pure melted ghee, sugar, fragrant cardamom, and fried cashews. Rich, melt-in-the-mouth, and made the exact festive way Udupi grandmothers prepare it at home. Perfect alongside a spicy snack for the classic "Chow Chow Bath" combo.
              </p>
            </div>

            {/* 5. Dal Tadka */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>5. Dal Tadka</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/authentic-dal-tadka-restaurant-brahmavara.webp" 
                  alt="Authentic Ghee Dal Tadka at Mathuram Cafe Brahmavara" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                Slow-cooked yellow lentils tempered with hot ghee, roasted cumin seeds, crushed garlic, and dried red chillies. Light on the stomach yet bursting with flavor. It pairs perfectly with hot jeera rice, butter kulcha, or rotis for a wholesome lunch or dinner.
              </p>
            </div>

            {/* 6. South Indian Meals (Full Thali) */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>6. South Indian Meals (Full Thali)</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/south-indian-meals-brahmavara.webp" 
                  alt="Unlimited South Indian Banana Leaf Thali Meals in Udupi Brahmavara" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                This is the king of the menu. A full, unlimited traditional thali featuring steaming local boiled rice or white rice, aromatic sambar, pepper rasam, vegetable palya, kosambari, kootu, crispy appalam (papad), homemade pickle, fresh curd, and sweet payasam. It is 100% pure vegetarian, hygienic, and the truest taste of coastal Karnataka hospitality.
              </p>
            </div>

            {/* 7. Paneer Tikka */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>7. Paneer Tikka</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/Paneer Tikka.webp" 
                  alt="Smoky Char-grilled Paneer Tikka at Mathuram Cafe" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                Soft, fresh paneer cubes marinated in a spiced curd paste, skewered and roasted to smoky perfection with capsicum and onions. Served with zesty mint chutney and onion rings. It is one of our top-rated evening starters for families and friends dining together.
              </p>
            </div>

            {/* 8. Veg Biryani with Gravy */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>8. Veg Biryani with Gravy</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/Veg Biryani with gravy.webp" 
                  alt="Fragrant Veg Biryani with Gravy and Raita at Mathuram Cafe" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                Long-grain basmati rice slow-cooked with fresh garden vegetables, whole cloves, star anise, and cinnamon. Served hot with a spicy vegetable salan gravy and cool cucumber raita. Filling, aromatic, and packed with flavor.
              </p>
            </div>

            {/* 9. Filter Coffee */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>9. Kumbakonam Degree Filter Coffee</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/filter-coffee-mathuram-cafe.webp" 
                  alt="Authentic Filter Coffee in Brass Davara Tumbler at Mathuram Cafe" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                Brewed strong using freshly roasted chicory-blend coffee decoction and thick boiled milk, poured back and forth for that frothy layer, and served in a traditional brass davara-tumbler. One sip will awaken your senses—it is the signature finish to any meal here.
              </p>
            </div>

            {/* 10. Gudbud Ice Cream */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>10. Gudbud Ice Cream</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/Gudbud Icecream.webp" 
                  alt="Famous Coastal Karnataka Gudbud Ice Cream at Mathuram Cafe" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                An iconic coastal Karnataka creation! Layers of vanilla, strawberry, and kesar pista ice creams packed into a tall glass with fresh seasonal fruits, fruit jellies, roasted cashews, and rich syrup. The name 'Gudbud' comes from the Kannada/Tulu word for a delicious mix-up. It is loved by kids and adults alike.
              </p>
            </div>

            <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '35px 0' }} />

            {/* FAQ Section */}
            <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Frequently Asked Questions</h2>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '5px' }}>What is the best food to eat in Udupi?</h3>
              <p>Masala Dosa, Thatte Idli, and the unlimited South Indian Meals thali are the top must-try dishes for real Udupi flavor.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '5px' }}>Where is Mathuram Cafe located?</h3>
              <p>Mathuram Cafe is located in Laxmi Empire Building, near Krishikendra, NH 66 highway, Brahmavara, Udupi district.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '5px' }}>Is Mathuram Cafe good for breakfast and family dining?</h3>
              <p>Yes! We offer ample parking, clean AC and Non-AC family dining halls, clean washrooms, and quick service starting from 7:00 AM daily.</p>
            </div>

            {/* Call to Action */}
            <div style={{ marginTop: '40px', padding: '25px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px', textAlign: 'center' }}>
              <h3 className="gold-text" style={{ marginBottom: '10px' }}>Planning your visit to Brahmavara / Udupi?</h3>
              <p style={{ marginBottom: '20px' }}>
                Come taste authentic Udupi cooking made with care. Check out our menu or get driving directions on NH 66.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn btn-primary">View Full Menu</Link>
                <Link to="/visit" className="btn btn-secondary">Get Location &amp; Directions</Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="gold-text" style={{ marginBottom: '20px', fontSize: '2.4rem', lineHeight: '1.2' }}>
            ಬ್ರಹ್ಮಾವರದ ಮಥುರಾಮ್ ಕೆಫೆಯಲ್ಲಿ ನೀವು ಸವಿಯಲೇಬೇಕಾದ ಟಾಪ್ 10 ಉಡುಪಿ ತಿನಿಸುಗಳು (2026)
          </h1>
          
          <div className="glass-panel" style={{ padding: '35px', lineHeight: '1.8', color: 'var(--color-text)' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              ನೀವು <strong>ಉಡುಪಿಯ ಅತ್ಯುತ್ತಮ ಆಹಾರ</strong>ವನ್ನು ಹುಡುಕುತ್ತಿದ್ದರೆ, <strong>ಬ್ರಹ್ಮಾವರದ ಮಥುರಾಮ್ ಕೆಫೆ</strong>ಗೆ ಭೇಟಿ ನೀಡದೆ ನಿಮ್ಮ ಫುಡ್ ಟೂರ್ ಪೂರ್ಣಗೊಳ್ಳುವುದಿಲ್ಲ. ದಕ್ಷಿಣ ಭಾರತದ ಹೆಮ್ಮೆಯ ಸಸ್ಯಾಹಾರಿ ಪರಂಪರೆಯನ್ನು ಶುದ್ಧ ತುಪ್ಪ, ತಾಜಾ ತೆಂಗಿನಕಾಯಿ ಮತ್ತು ಮನೆ ಅಡುಗೆಯ ಸವಿಯೊಂದಿಗೆ ನಾವು ನಿಮ್ಮ ಮುಂದಿಡುತ್ತಿದ್ದೇವೆ.
            </p>

            <p style={{ marginBottom: '25px' }}>
              ಬ್ರಹ್ಮಾವರದ ಸ್ಥಳೀಯರಿರಲಿ, ಮಣಿಪಾಲದ ವಿದ್ಯಾರ್ಥಿಗಳಿರಲಿ, ಶ್ರೀ ಕೃಷ್ಣ ಮಠದ ಯಾತ್ರಾರ್ಥಿಗಳಿರಲಿ ಅಥವಾ NH 66 ಹೆದ್ದಾರಿಯಲ್ಲಿ ಪ್ರಯಾಣಿಸುವ ಪ್ರವಾಸಿಗರಿರಲಿ—ನೀವು ಮಥುರಾಮ್ ಕೆಫೆಯಲ್ಲಿ ಸವಿಯಲೇಬೇಕಾದ <strong>ಟಾಪ್ 10 ತಿನಿಸುಗಳ ಮಾರ್ಗದರ್ಶಿ</strong> ಇಲ್ಲಿದೆ.
            </p>

            <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '30px 0' }} />

            {/* 1. Masala Dosa */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>೧. ಗರಿಗರಿ ಮಸಾಲ ದೋಸೆ</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/best-masala-dosa-brahmavara.webp" 
                  alt="ಮಥುರಾಮ್ ಕೆಫೆಯ ಗರಿಗರಿ ಮಸಾಲ ದೋಸೆ" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                ಉಡುಪಿ ತಿನಿಸುಗಳ ಪಟ್ಟಿ ಮಸಾಲ ದೋಸೆ ಇಲ್ಲದೆ ಅಪೂರ್ಣ. ಕಾದ ಹೆಂಚಿನ ಮೇಲೆ ಶುದ್ಧ ತುಪ್ಪ ಹಾಕಿ ಗರಿಗರಿಯಾಗಿ ಸುಟ್ಟ ದೋಸೆಗೆ ರುಚಿಕರ ಆಲೂಗಡ್ಡೆ ಪಲ್ಯ ಹಾಗೂ ತಾಜಾ ಕಾಯಿ ಚಟ್ನಿ, ಬಿಸಿ ಸಾಂಬಾರ್ ಜೊತೆ ಸವಿಯುವುದೇ ಒಂದು ಅದ್ಭುತ ಅನುಭವ.
              </p>
            </div>

            {/* 2. Thatte Idli */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>೨. ತುಪ್ಪದ ಪುಡಿ ತಟ್ಟೆ ಇಡ್ಲಿ</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/Thatte Idli.webp" 
                  alt="ಮಥುರಾಮ್ ಕೆಫೆಯ ಸಾಫ್ಟ್ ತಟ್ಟೆ ಇಡ್ಲಿ" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                ಹೂವಿನಂತೆ ಮೃದುವಾದ ದೊಡ್ಡ ಗಾತ್ರದ ತಟ್ಟೆ ಇಡ್ಲಿಗಳು. ಪರಿಮಳಯುಕ್ತ ದೇಸಿ ತುಪ್ಪ ಮತ್ತು ವಿಶೇಷ ಗನ್‌ಪೌಡರ್ ಚಟ್ನಿಪುಡಿ ಬೆರೆಸಿದಾಗ ಸಾಂಬಾರ್ ಮತ್ತು ಚಟ್ನಿಯನ್ನು ಹೀರಿಕೊಂಡು ಬಾಯಲ್ಲಿ ಕರಗುವ ಅನುಭವ ನೀಡುತ್ತದೆ.
              </p>
            </div>

            {/* 3. Poori Sagu */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>೩. ಬಿಸಿಬಿಸಿ ಪೂರಿ ಸಾಗು</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/traditional-poori-saagu-breakfast.webp" 
                  alt="ಉಬ್ಬಿದ ಪೂರಿ ಮತ್ತು ವೆಜಿಟೇಬಲ್ ಸಾಗು" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                ಚಿನ್ನದ ಬಣ್ಣದಲ್ಲಿ ಉಬ್ಬಿ ಬರುವ ಗರಿಗರಿ ಪೂರಿಗಳು ಮತ್ತು ಕರಾವಳಿ ಶೈಲಿಯ ತರಕಾರಿ ಸಾಗು. ತಾಜಾ ತೆಂಗಿನಕಾಯಿ ಮತ್ತು ಹಸಿರು ಮಸಾಲೆಗಳಿಂದ ತಯಾರಿಸಿದ ಈ ಸಾಗು ಮಕ್ಕಳಿಗೂ ಹಿರಿಯರಿಗೂ ಅತ್ಯಂತ ಪ್ರಿಯ.
              </p>
            </div>

            {/* 4. Kesari Bath */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>೪. ಕೇಸರಿ ಬಾತ್</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/sweet-kesari-bath-south-indian-dessert.webp" 
                  alt="ಶುದ್ಧ ತುಪ್ಪದ ಕೇಸರಿ ಬಾತ್" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                ಉತ್ತಮ ರವೆ, ಶುದ್ಧ ದೇಸಿ ತುಪ್ಪ, ಏಲಕ್ಕಿ ಮತ್ತು ತುಪ್ಪದಲ್ಲಿ ಕರಿದ ಗೋಡಂಬಿ-ದ್ರಾಕ್ಷಿಗಳಿಂದ ಸಿದ್ಧಪಡಿಸಿದ ಪಾರಂಪರಿಕ ಕರ್ನಾಟಕದ ಸಿಹಿ ತಿನಿಸು. ಖಾರದ ತಿಂಡಿಯೊಂದಿಗೆ 'ಚೌ ಚೌ ಬಾತ್' ಕಾಂಬಿನೇಶನ್‌ಗೆ ಇದು ಪರಿಪೂರ್ಣ.
              </p>
            </div>

            {/* 5. Dal Tadka */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>೫. ದಾಲ್ ತಡ್ಕಾ</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/authentic-dal-tadka-restaurant-brahmavara.webp" 
                  alt="ಮಥುರಾಮ್ ಕೆಫೆಯ ತುಪ್ಪದ ದಾಲ್ ತಡ್ಕಾ" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                ಹದವಾಗಿ ಬೆಂದ ಬೇಳೆಗೆ ತುಪ್ಪ, ಜೀರಿಗೆ, ಒಣಮೆಣಸು ಮತ್ತು ಬೆಳ್ಳುಳ್ಳಿಯ ಘಮಘಮಿಸುವ ಒಗ್ಗರಣೆ. ಜೀರಾ ರೈಸ್ ಅಥವಾ ಬಟರ್ ಕುಲ್ಚಾ ಜೊತೆಗೆ ಊಟ ಮಾಡಲು ಹಗುರ ಹಾಗೂ ರುಚಿಕರ.
              </p>
            </div>

            {/* 6. South Indian Meals (Full Thali) */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>೬. ದಕ್ಷಿಣ ಭಾರತೀಯ ಸಂಪೂರ್ಣ ಊಟ (Thali)</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/south-indian-meals-brahmavara.webp" 
                  alt="ಅನ್‌ಲಿಮಿಟೆಡ್ ಬಾಳೆಎಲೆ ದಕ್ಷಿಣ ಭಾರತೀಯ ಊಟ" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                ನಮ್ಮ ಮೆನುವಿನ ರಾಜ! ಸ್ಥಳೀಯ ಕುಚ್ಚಲಕ್ಕಿ ಅಥವಾ ಬಿಳಿ ಅನ್ನ, ಸಾಂಬಾರ್, ರಸಂ, ಪಲ್ಯ, ಕೊಸಂಬರಿ, ಕೂಟು, ಹಪ್ಪಳ, ಉಪ್ಪಿನಕಾಯಿ, ತಾಜಾ ಮೊಸರು ಮತ್ತು ಸಿಹಿ ಪಾಯಸ ಒಳಗೊಂಡ ಅನ್‌ಲಿಮಿಟೆಡ್ ಸಾಂಪ್ರದಾಯಿಕ ಊಟ.
              </p>
            </div>

            {/* 7. Paneer Tikka */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>೭. ಪನೀರ್ ಟಿಕ್ಕಾ</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/Paneer Tikka.webp" 
                  alt="ಮಥುರಾಮ್ ಕೆಫೆಯ ತಂದೂರಿ ಪನೀರ್ ಟಿಕ್ಕಾ" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                ಮಸಾಲೆ ಮೊಸರಿನಲ್ಲಿ ನೆನೆಸಿ, ಕ್ಯಾಪ್ಸಿಕಂ ಮತ್ತು ಈರುಳ್ಳಿಯೊಂದಿಗೆ ತಂದೂರಿನಲ್ಲಿ ಸುಟ್ಟ ಮೃದುವಾದ ತಾಜಾ ಪನೀರ್ ತುಂಡುಗಳು. ಪುದೀನಾ ಚಟ್ನಿಯೊಂದಿಗೆ ಸಂಜೆಯ ಅತ್ಯುತ್ತಮ ಸ್ಟಾರ್ಟರ್.
              </p>
            </div>

            {/* 8. Veg Biryani with Gravy */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>೮. ವೆಜ್ ಬಿರಿಯಾನಿ</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/Veg Biryani with gravy.webp" 
                  alt="ಘಮಘಮಿಸುವ ವೆಜ್ ಬಿರಿಯಾನಿ ಮತ್ತು ಗ್ರೇವಿ" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                ಉತ್ತಮ ಬಾಸ್ಮತಿ ಅಕ್ಕಿ, ತಾಜಾ ತರಕಾರಿಗಳು ಮತ್ತು ನೈಜ ಮಸಾಲೆಗಳಿಂದ ದಮ್ ಮಾಡಿದ ಸುವಾಸಿತ ವೆಜ್ ಬಿರಿಯಾನಿ. ಜೊತೆಗೆ ಮಸಾಲಾ ಗ್ರೇವಿ ಹಾಗೂ ತಂಪಾದ ಸೌತೆಕಾಯಿ ರೈತ ನೀಡಲಾಗುತ್ತದೆ.
              </p>
            </div>

            {/* 9. Filter Coffee */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>೯. ಕುಂಭಕೋಣಂ ಡಿಗ್ರಿ ಫಿಲ್ಟರ್ ಕಾಫಿ</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/filter-coffee-mathuram-cafe.webp" 
                  alt="ಹಿತ್ತಾಳೆ ಲೋಟದಲ್ಲಿ ಫಿಲ್ಟರ್ ಕಾಫಿ" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                ಘಾಟಾದ ಕಾಫಿ ಡಿಕಾಕ್ಷನ್ ಮತ್ತು ಗಟ್ಟಿ ಹಾಲಿನಿಂದ ಸಾಂಪ್ರದಾಯಿಕ ಹಿತ್ತಾಳೆ ಲೋಟದಲ್ಲಿ ನೊರೆ ತುಂಬಿ ಬಡಿಸುವ ಅಪ್ಪಟ ಫಿಲ್ಟರ್ ಕಾಫಿ. ಪ್ರತಿಯೊಂದು ಊಟಕ್ಕೂ ಇದು ಶ್ರೇಷ್ಠ ಮುಕ್ತಾಯ.
              </p>
            </div>

            {/* 10. Gudbud Ice Cream */}
            <div style={{ marginBottom: '40px' }}>
              <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>೧೦. ಕರಾವಳಿ ಸ್ಪೆಷಲ್ ಗಡ್‌ಬಡ್ ಐಸ್‌ಕ್ರೀಮ್</h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <img 
                  src="/assets/Photos/Food/Gudbud Icecream.webp" 
                  alt="ಕರಾವಳಿಯ ಪ್ರಸಿದ್ಧ ಗಡ್‌ಬಡ್ ಐಸ್‌ಕ್ರೀಮ್" 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }} 
                />
              </div>
              <p>
                ಕರಾವಳಿ ಕರ್ನಾಟಕದ ಹೆಮ್ಮೆಯ ಐಸ್‌ಕ್ರೀಮ್! ವೆನಿಲ್ಲಾ, ಸ್ಟ್ರಾಬೆರಿ ಹಾಗೂ ಕೇಸರ್ ಪಿಸ್ತಾ ಐಸ್‌ಕ್ರೀಮ್‌ಗಳೊಂದಿಗೆ ತಾಜಾ ಹಣ್ಣುಗಳು, ಜೆಲ್ಲಿ, ಜೇನುತುಪ್ಪ ಮತ್ತು ಹುರಿದ ಗೋಡಂಬಿಯ ಅದ್ಭುತ ಸಮ್ಮಿಶ್ರಣ.
              </p>
            </div>

            <hr style={{ borderColor: 'rgba(212, 175, 55, 0.2)', margin: '35px 0' }} />

            {/* FAQ Section */}
            <h2 className="gold-text" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು (FAQ)</h2>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '5px' }}>ಉಡುಪಿಯ ನೈಜ ರುಚಿಗೆ ಯಾವ ತಿಂಡಿಗಳನ್ನು ಸವಿಯಬೇಕು?</h3>
              <p>ಮಸಾಲ ದೋಸೆ, ತುಪ್ಪದ ತಟ್ಟೆ ಇಡ್ಲಿ ಮತ್ತು ಅನ್‌ಲಿಮಿಟೆಡ್ ದಕ್ಷಿಣ ಭಾರತೀಯ ಊಟ ಉಡುಪಿಯ ನೈಜ ರುಚಿಯನ್ನು ಸವಿಯಲು ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆಗಳಾಗಿವೆ.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '5px' }}>ಮಥುರಾಮ್ ಕೆಫೆ ಎಲ್ಲಿದೆ?</h3>
              <p>ಮಥುರಾಮ್ ಕೆಫೆ ಉಡುಪಿ ಜಿಲ್ಲೆಯ ಬ್ರಹ್ಮಾವರದಲ್ಲಿ, ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ 66 ರ ಪಕ್ಕದಲ್ಲಿರುವ ಲಕ್ಷ್ಮಿ ಎಂಪೈರ್ ಕಟ್ಟಡದಲ್ಲಿದೆ.</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '5px' }}>ಕುಟುಂಬ ಸಮೇತ ಊಟ ಮಾಡಲು ಸೌಲಭ್ಯಗಳಿವೆಯೇ?</h3>
              <p>ಹೌದು! ಪ್ರತಿದಿನ ಬೆಳಗ್ಗೆ 7:00 ರಿಂದ ರಾತ್ರಿ 11:00 ರವರೆಗೆ ವಿಶಾಲ ಪಾರ್ಕಿಂಗ್, ಎಸಿ ಹಾಗೂ ನಾನ್-ಎಸಿ ಹಾಲ್‌ಗಳು ಮತ್ತು ಸ್ವಚ್ಛ ಶೌಚಾಲಯಗಳ ಸೌಲಭ್ಯವಿದೆ.</p>
            </div>

            {/* Call to Action */}
            <div style={{ marginTop: '40px', padding: '25px', backgroundColor: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px', textAlign: 'center' }}>
              <h3 className="gold-text" style={{ marginBottom: '10px' }}>ಬ್ರಹ್ಮಾವರ / ಉಡುಪಿಗೆ ಭೇಟಿ ನೀಡುತ್ತಿದ್ದೀರಾ?</h3>
              <p style={{ marginBottom: '20px' }}>
                ಅಪ್ಪಟ ಉಡುಪಿ ಶೈಲಿಯ ಪ್ರೀತಿಯ ಆತಿಥ್ಯವನ್ನು ಸವಿಯಲು ಬನ್ನಿ. ನಮ್ಮ ಸಂಪೂರ್ಣ ಮೆನು ನೋಡಿ ಅಥವಾ ಲೊಕೇಶನ್ ಪಡೆಯಿರಿ.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                <Link to="/menu" className="btn btn-primary">ಸಂಪೂರ್ಣ ಮೆನು ನೋಡಿ</Link>
                <Link to="/visit" className="btn btn-secondary">ಲೊಕೇಶನ್ &amp; ಮಾರ್ಗಸೂಚಿ</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Post6;
