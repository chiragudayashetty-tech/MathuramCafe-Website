import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './UdupiItinerary.css';

const UdupiItinerary = () => {
  return (
    <>
      <Helmet>
        <title>2 Days in Udupi: The Perfect Travel Itinerary (2026 Guide)</title>
        <meta name="description" content="Plan the perfect weekend trip with our 2 Days in Udupi travel itinerary for 2026. Explore Sri Krishna Temple, Malpe Beach, Kapu Lighthouse, and the best local vegetarian food." />
      </Helmet>

      <div className="itinerary-page">
        <header className="itinerary-hero">
            <div className="itinerary-hero-content">
                <h1 className="gold-text">2 Days in Udupi: The Perfect Travel Itinerary (2026 Guide)</h1>
                <p style={{ fontSize: '1.2rem', color: '#f3f4f6' }}>Explore pristine beaches, historic temples, and the finest South Indian cuisine on this ultimate weekend getaway.</p>
                
                <div className="quick-facts">
                    <div className="fact-item">
                        <strong>Duration</strong>
                        <span>2 Days / 1 Night</span>
                    </div>
                    <div className="fact-item">
                        <strong>Best Season</strong>
                        <span>Oct - March</span>
                    </div>
                    <div className="fact-item">
                        <strong>Est. Budget</strong>
                        <span>₹3,000 / person</span>
                    </div>
                    <div className="fact-item">
                        <strong>Vibe</strong>
                        <span>Culture & Beaches</span>
                    </div>
                </div>
            </div>
        </header>

        <div className="container layout-grid">
            <main className="itinerary-main">
                <article>
                    <div className="toc">
                        <h3>Table of Contents</h3>
                        <ul>
                            <li><a href="#overview">Overview: Why Visit Udupi?</a></li>
                            <li><a href="#day1">Day 1: Temples, Heritage, and Islands</a></li>
                            <li><a href="#day2">Day 2: Lighthouses, Beaches, and Views</a></li>
                            <li><a href="#where-to-eat">Where to Eat: Mathuram Cafe</a></li>
                            <li><a href="#budget">Detailed Budget Breakdown</a></li>
                            <li><a href="#travel-tips">Essential Travel Tips (2026)</a></li>
                            <li><a href="#faq">Frequently Asked Questions</a></li>
                        </ul>
                    </div>

                    <section id="overview">
                        <h2>Overview: Why Visit Udupi?</h2>
                        <p>Nestled between the lush Western Ghats and the Arabian Sea in Karnataka, Udupi is a coastal paradise that offers a rare blend of deep spiritual heritage and untouched natural beauty. Famous globally for its eponymous cuisine, Udupi is much more than just food. From the iconic <strong>Sri Krishna Temple</strong> to the unique basalt rock formations of <strong>St. Mary's Island</strong>, a weekend in Udupi provides an incredibly diverse travel experience.</p>
                        <p>Whether you are traveling from Bangalore (a quick overnight bus or 8-hour drive), Mangalore (just an hour away), or flying into Mangalore International Airport (IXE), Udupi is highly accessible for a 2-day weekend trip.</p>
                    </section>

                    <section id="day1">
                        <h2>Day 1: Temples, Heritage, and Islands</h2>

                        <div className="itinerary-card">
                            <div className="time-badge">7:30 AM</div>
                            <h3>Breakfast at Mathuram Cafe, Brahmavara</h3>
                            <p>Before diving into the crowds of Udupi city, start your day peacefully in the neighboring town of Brahmavara (just 15 minutes north on NH66). <strong>Mathuram Cafe</strong> is renowned as the <Link to="/best-pure-veg-restaurant-in-brahmavara" style={{textDecoration: 'underline'}}>best pure veg restaurant in the area</Link>.</p>
                            <p><strong>What to order:</strong> Skip the hotel buffet and order their legendary <em>Ghee Podi Thatte Idli</em>, a crispy <em>Masala Dosa</em>, and a strong cup of authentic Kumbakonam Filter Coffee. It's the perfect, authentic fuel for a long day of exploring.</p>
                            
                            <div className="image-wrapper">
                                <img src="/assets/Photos/Food/Masala Dose and filter Cofee.webp" alt="Authentic Masala Dosa and Filter Coffee at Mathuram Cafe, Brahmavara" loading="lazy" />
                                <div className="image-caption">The iconic Masala Dosa and Filter Coffee breakfast to start your Udupi trip.</div>
                            </div>
                        </div>

                        <div className="itinerary-card">
                            <div className="time-badge">9:00 AM</div>
                            <h3>Sri Krishna Temple & Temple Square</h3>
                            <p>Drive into Udupi city and head straight to the historic <strong>Sri Krishna Mutt</strong>, founded in the 13th century by Saint Madhvacharya. The temple is famous for the <em>Kanakana Kindi</em>, a silver-plated window with nine holes through which devotees view Lord Krishna.</p>
                            <div className="alert-box">
                                <strong>Travel Tip:</strong> There is <strong>no entry fee</strong> for general darshan. The temple opens at 4:30 AM and stays open until 9:30 PM. Men must remove their shirts before entering the inner sanctum, and traditional attire is recommended for all.
                            </div>
                            <div className="image-wrapper">
                                <img src="/assets/Photos/Travel/krishna-mutt.webp" alt="Sri Krishna Mutt Udupi" loading="lazy" />
                                <div className="image-caption">The historic Sri Krishna Mutt in Udupi.</div>
                            </div>
                        </div>

                        <div className="itinerary-card">
                            <div className="time-badge">11:30 AM</div>
                            <h3>Hasta Shilpa Heritage Village (Manipal)</h3>
                            <p>Take a short 15-minute auto-rickshaw ride up to Manipal to visit the incredible <strong>Hasta Shilpa Heritage Village</strong>. This is an open-air museum where traditional coastal Karnataka houses (which were facing demolition) have been painstakingly relocated and restored.</p>
                            <p><strong>Details:</strong> Entry fee is ₹300 per adult (₹150 for students). It operates from 10:00 AM to 5:00 PM, but note that it is <strong>closed on Mondays</strong>. The ticket counter strictly closes at 3:45 PM.</p>
                            <div className="image-wrapper">
                                <img src="/assets/Photos/Travel/hasta-shilpa.webp" alt="Hasta Shilpa Heritage Village Manipal" loading="lazy" />
                                <div className="image-caption">Beautifully preserved heritage homes at Hasta Shilpa.</div>
                            </div>
                        </div>

                        <div className="itinerary-card">
                            <div className="time-badge">2:30 PM</div>
                            <h3>Ferry to St. Mary's Island from Malpe Beach</h3>
                            <p>After grabbing a quick lunch, head to the Malpe Harbor. Here, you will board a ferry to the breathtaking <strong>St. Mary's Island</strong>, famous for its unique hexagonal basalt rock formations created by volcanic activity millions of years ago.</p>
                            
                            <div className="image-wrapper">
                                <img src="/assets/Photos/Travel/st-marys-island.webp" alt="St. Mary's Island Malpe" loading="lazy" />
                                <div className="image-caption">The unique geological formations of St. Mary's Island.</div>
                            </div>

                            <div className="alert-box">
                                <strong>Ferry Details (2026):</strong> The ferry costs approximately ₹300 per person for a round trip. Ferries operate from 9:00 AM to 5:00 PM. <strong>CRITICAL:</strong> St. Mary's Island is completely closed to visitors during the monsoon season (mid-May to mid-September) due to rough seas. Plastic bottles are strictly banned on the island.
                            </div>
                        </div>
                    </section>

                    <section id="day2">
                        <h2>Day 2: Lighthouses, Rivers, and Sunsets</h2>

                        <div className="itinerary-card">
                            <div className="time-badge">9:30 AM</div>
                            <h3>Manipal End Point & Arbi Falls</h3>
                            <p>Start your second morning with a peaceful walk at <strong>Manipal End Point</strong>. It's a beautifully maintained park situated on a cliff overlooking the Swarna River. If you are visiting just after the monsoon (September-November), take a slight detour to see the seasonal <strong>Arbi Falls</strong> nearby.</p>
                            <div className="image-wrapper">
                                <img src="/assets/Photos/Travel/arbi-falls.webp" alt="Arbi Falls Manipal" loading="lazy" />
                                <div className="image-caption">The serene Arbi Falls, a hidden gem near Manipal.</div>
                            </div>
                        </div>

                        <div className="itinerary-card">
                            <div className="time-badge">1:00 PM</div>
                            <h3>Lunch Feast at Mathuram Cafe</h3>
                            <p>Head back down NH66 for a proper sit-down lunch. A trip to this region isn't complete without a traditional <Link to="/lunch-in-brahmavara" style={{textDecoration: 'underline'}}>South Indian Banana Leaf Meal (Thali)</Link>. Mathuram Cafe serves an incredible Thali featuring rice, sambar, rasam, multiple vegetable palyas, curd, and payasam. If you prefer something heavier, their North Indian Paneer Butter Masala and Veg Biryani are top-tier.</p>
                            
                            <div className="image-wrapper">
                                <img src="/assets/Photos/Food/south-indian-meals-brahmavara.webp" alt="Traditional South Indian Thali Meals served on a banana leaf in Udupi" loading="lazy" />
                                <div className="image-caption">The ultimate South Indian Thali experience.</div>
                            </div>
                        </div>

                        <div className="itinerary-card">
                            <div className="time-badge">3:30 PM</div>
                            <h3>Mattu Beach Drive</h3>
                            <p>Drive along the secluded and pristine <strong>Mattu Beach</strong>. The road runs parallel to the ocean on one side and a backwater river on the other. It is incredibly scenic and much less crowded than Malpe. (Fun fact: At certain times of the year, Mattu Beach exhibits bioluminescence at night!).</p>
                            <div className="image-wrapper">
                                <img src="/assets/Photos/Travel/mattu-beach.webp" alt="Mattu Beach Udupi" loading="lazy" />
                                <div className="image-caption">The incredible coastal drive along Mattu Beach.</div>
                            </div>
                        </div>

                        <div className="itinerary-card">
                            <div className="time-badge">5:00 PM</div>
                            <h3>Sunset at Kapu (Kaup) Lighthouse</h3>
                            <p>End your 2-day Udupi trip at the iconic <strong>Kapu Lighthouse</strong>. Built in 1901 by the British, this lighthouse stands on a rocky outcrop against the crashing waves of the Arabian Sea.</p>
                            
                            <div className="image-wrapper">
                                <img src="/assets/Photos/Travel/kapu-lighthouse.webp" alt="Kaup Lighthouse" loading="lazy" />
                                <div className="image-caption">The historic Kapu Lighthouse offers the best sunset views in the district.</div>
                            </div>

                            <div className="alert-box">
                                <strong>Visitor Info:</strong> The lighthouse is only open for climbing between <strong>4:00 PM and 6:00 PM</strong> daily. The entry fee is a nominal ₹10. Be prepared for a steep climb up the spiral staircase, but the panoramic sunset view from the balcony is worth every step!
                            </div>
                        </div>
                    </section>

                    <section id="where-to-eat">
                        <h2>Where to Eat: Spotlight on Mathuram Cafe</h2>
                        <p>While Udupi city has many traditional eateries, locals know that some of the best, most hygienic food is found just a short drive away on the highway. <strong>Mathuram Cafe</strong>, located in the Lakshmi Empire building in Brahmavara, is the ultimate <Link to="/family-restaurant-in-brahmavara" style={{textDecoration: 'underline'}}>family restaurant</Link>.</p>
                        <ul>
                            <li><strong>100% Pure Vegetarian:</strong> Absolute peace of mind with a strictly vegetarian kitchen.</li>
                            <li><strong>Ambiance:</strong> Spacious AC dining halls, perfect to escape the coastal humidity.</li>
                            <li><strong>Parking:</strong> Massive parking lot right on NH66, ideal for road-trippers.</li>
                            <li><strong>Must Try:</strong> Ghee Podi Idli, Gudbud Ice Cream, and Indo-Chinese Veg Fried Rice.</li>
                        </ul>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <Link to="/contact" className="btn btn-primary">Get Directions to Mathuram Cafe</Link>
                        </div>
                    </section>

                    <section id="budget">
                        <h2>Detailed Budget Breakdown (Per Person)</h2>
                        <p>Udupi is highly affordable. Here is a realistic estimated budget for a 2-day weekend trip in 2026 (excluding your travel *to* Udupi and hotel stay):</p>
                        
                        <table className="budget-table">
                            <thead>
                                <tr>
                                    <th>Expense Category</th>
                                    <th>Details</th>
                                    <th>Estimated Cost (INR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Food & Dining</strong></td>
                                    <td>2 Breakfasts, 2 Lunches, 1 Dinner (e.g., Mathuram Cafe)</td>
                                    <td>₹1,200</td>
                                </tr>
                                <tr>
                                    <td><strong>Attraction Entry Fees</strong></td>
                                    <td>Hasta Shilpa (₹300), Kapu Lighthouse (₹10), Sri Krishna (Free)</td>
                                    <td>₹310</td>
                                </tr>
                                <tr>
                                    <td><strong>St. Mary's Island Ferry</strong></td>
                                    <td>Round trip from Malpe Harbor</td>
                                    <td>₹300</td>
                                </tr>
                                <tr>
                                    <td><strong>Local Transport</strong></td>
                                    <td>Auto-rickshaws between Malpe, Manipal, and Kapu</td>
                                    <td>₹800</td>
                                </tr>
                                <tr>
                                    <td><strong>Miscellaneous</strong></td>
                                    <td>Snacks, bottled water, temple offerings</td>
                                    <td>₹390</td>
                                </tr>
                                <tr>
                                    <td><strong>Total Estimated Cost</strong></td>
                                    <td><strong>2 Days / 1 Night Pocket Money</strong></td>
                                    <td><strong>₹3,000</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section id="travel-tips">
                        <h2>Essential Travel Tips (2026)</h2>
                        <ul>
                            <li><strong>Monsoon Warning:</strong> Do not plan a trip to St. Mary's Island between June and September; ferry services are suspended due to dangerous sea levels.</li>
                            <li><strong>Temple Dress Code:</strong> While the beaches allow casual wear, Udupi Sri Krishna Temple requires modest clothing. Men must remove their upper garments to enter the inner queue.</li>
                            <li><strong>Hydration:</strong> The coastal humidity is intense. Carry a reusable water bottle. Mathuram Cafe provides complimentary filtered RO water.</li>
                            <li><strong>Payments:</strong> While UPI (Google Pay, PhonePe) is accepted almost everywhere, including auto-rickshaws, carry about ₹1,000 in cash for small beach vendors and the Kapu Lighthouse ticket counter.</li>
                        </ul>
                    </section>

                    <section id="faq">
                        <h2>Frequently Asked Questions</h2>
                        
                        <div className="faq-item">
                            <h4>1. How many days are enough for Udupi?</h4>
                            <p>2 days and 1 night is the perfect amount of time to see the major highlights: Sri Krishna Temple, St. Mary's Island, and Kapu Beach.</p>
                        </div>
                        <div className="faq-item">
                            <h4>2. Is St. Mary's Island open right now?</h4>
                            <p>It is open from October to May. It is strictly closed during the monsoon season (June to September) for safety reasons.</p>
                        </div>
                        <div className="faq-item">
                            <h4>3. How much does the St. Mary's ferry cost?</h4>
                            <p>The ferry from Malpe Harbor costs approximately ₹300 per adult for a round trip.</p>
                        </div>
                        <div className="faq-item">
                            <h4>4. What is the entry fee for Udupi Sri Krishna Temple?</h4>
                            <p>General Darshan is completely free. Paid tickets are only required if you wish to perform specific personalized pujas (Sevas).</p>
                        </div>
                        <div className="faq-item">
                            <h4>5. What are the timings for Kapu Lighthouse?</h4>
                            <p>You can only climb the Kapu Lighthouse between 4:00 PM and 6:00 PM daily. Arrive by 5:00 PM to catch the sunset.</p>
                        </div>
                        <div className="faq-item">
                            <h4>6. Where is the best vegetarian food near Udupi?</h4>
                            <p>Mathuram Cafe in Brahmavara (just 15 mins away on NH66) is highly rated for its 100% pure veg South Indian Thalis, Dosas, and family-friendly AC dining.</p>
                        </div>
                        <div className="faq-item">
                            <h4>7. Is Udupi safe for solo female travelers?</h4>
                            <p>Yes, Udupi and Manipal are known as educational and religious hubs and are generally considered very safe for solo travelers.</p>
                        </div>
                        <div className="faq-item">
                            <h4>8. Are shorts allowed in Udupi temple?</h4>
                            <p>No, shorts and sleeveless clothing are not permitted inside the Sri Krishna Temple. Traditional Indian attire is highly recommended.</p>
                        </div>
                    </section>
                </article>
            </main>

            <aside>
                <div className="sidebar-widget">
                    <h3>About Mathuram Cafe</h3>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: '15px' }}>Located on NH66 in Brahmavara, we serve the finest, 100% pure vegetarian cuisine in the district. From crispy Dosas to North Indian feasts, we are your perfect highway dining stop.</p>
                    <img src="/assets/Photos/Resturant/family-restaurant-mathuram-cafe-brahmavara.webp" alt="Family Restaurant AC Dining at Mathuram Cafe" style={{ width: '100%', borderRadius: '8px', marginBottom: '15px' }} loading="lazy" />
                    <Link to="/menu" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', boxSizing: 'border-box' }}>View Our Menu</Link>
                </div>

                <div className="sidebar-widget">
                    <h3>Related Articles</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '15px' }}><Link to="/blog/south-indian-breakfast-udupi">The Best South Indian Breakfast in Udupi</Link></li>
                        <li style={{ marginBottom: '15px' }}><Link to="/best-pure-veg-restaurant-in-brahmavara">Why We Are the Best Pure Veg Restaurant</Link></li>
                        <li style={{ marginBottom: '15px' }}><Link to="/family-restaurant-in-brahmavara">Hosting a Family Dinner in Brahmavara</Link></li>
                        <li style={{ marginBottom: '15px' }}><Link to="/lunch-in-brahmavara">The Ultimate South Indian Lunch Experience</Link></li>
                    </ul>
                </div>
            </aside>
        </div>
      </div>
    </>
  );
};

export default UdupiItinerary;
