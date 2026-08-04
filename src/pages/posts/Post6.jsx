import React from 'react';
import { Link } from 'react-router-dom';

const Post6 = () => {
  return (
    <div className="container" style={{ paddingTop: '180px', paddingBottom: '80px', maxWidth: '850px', minHeight: '80vh' }}>
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
    </div>
  );
};

export default Post6;
