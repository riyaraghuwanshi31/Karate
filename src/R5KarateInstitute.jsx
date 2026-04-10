import { useState, useEffect, useRef } from "react";
import photo1 from "./images/photo1.webp";
import photo2 from "./images/photo2.webp";
import photo3 from "./images/photo3.webp";
import photo4 from "./images/grp.jpeg";
import photo5 from "./images/photo5.webp";
import photo6 from "./images/photo6.jpeg";

const photos = {
  groupClass: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Karate_practice.jpg/640px-Karate_practice.jpg",
};

// Inline SVG icons
const PhoneIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15v1.92z" />
  </svg>
);

const MapIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg width="16" height="16" fill={filled ? "#FFD700" : "none"} stroke="#FFD700" strokeWidth="1.5" viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const reviews = [
  { name: "Anita Rai", rating: 5, text: "If you are looking for a best karate class for your kids, this is the best & right place to learn. Rinky Khare mam is the best, experienced and very friendly Coach. Kids are very comfortable with her.", time: "4 weeks ago" },
  { name: "Ankit Mishra", rating: 5, text: "Karate is one such important physical activity that teaches balance, coordination, and flexibility. Excellent teacher. Rinky mam is very good with kids. She teaches Karate from basics. She is high disciplined and supports child at every step.", time: "4 weeks ago" },
  { name: "Ganesh Pawar", rating: 5, text: "Great martial arts and karate classes. The instructors are skilled, patient, and very supportive. The training helps build discipline, confidence, and fitness. Highly recommended for both beginners and experienced students.", time: "4 weeks ago" },
  { name: "Aarti Patil", rating: 5, text: "A very interesting and fantastic class. My daughters have become very disciplined and strong ever since they joined the class. Rinky ma'am is both friendly and experienced. Learning with her is really fun.", time: "4 weeks ago" },
  { name: "pragati sadani", rating: 5, text: "Best karate institute! We had a great experience with coach Rinky ma'am — she is very motivating and understands how to bring out the best in kids.", time: "4 weeks ago" },
  { name: "Surbhi Bajaj", rating: 5, text: "The coach is very loyal about her work and caring, doing hard work and responsible. Properly guides students, handles with care especially small kids. Really great coach!", time: "3 weeks ago" },
  { name: "PAVAN SARVARIYA", rating: 5, text: "Fantastic training and great atmosphere. The instructors are very patient and focus on fine-tuning every technique. My confidence and discipline have improved significantly since joining.", time: "4 weeks ago" },
  { name: "Anaya Sharma", rating: 5, text: "A very nice karate class. Rinky mam is very experienced and friendly. So lucky to know this class.", time: "4 weeks ago" },
];

const galleryImages = [photo6, photo1, photo4, photo3, photo2, photo5];

const IMAGE_PATHS = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6
  // "/mnt/user-data/uploads/WhatsApp_Image_2026-04-04_at_5_57_15_PM.jpeg",
  // "/mnt/user-data/uploads/photo_4.webp",
  // "/mnt/user-data/uploads/Photo1.webp",
  // "/mnt/user-data/uploads/photo2.webp",
  // "/mnt/user-data/uploads/photo3.webp",
  // "/mnt/user-data/uploads/photo5.webp",
];

// Since images are local, we'll use placeholder color blocks styled nicely
// We'll use the actual uploaded filenames as src (they'd work on local server)

const features = [
  { icon: "🥋", title: "Expert Instructors", desc: "Trained under certified Funakoshi Shotokan Karate masters with national & international competition experience." },
  { icon: "💪", title: "All Age Groups", desc: "Specialized programs for kids (5+), teenagers, and adults. Everyone is welcome at R5." },
  { icon: "🏆", title: "Competition Ready", desc: "Our students have won medals at national championships including the World Funakoshi Shotokan Karate events." },
  { icon: "🛡️", title: "Self-Defense", desc: "Practical self-defense techniques for real-world situations, especially designed for women and children." },
  { icon: "🧠", title: "Discipline & Focus", desc: "Beyond kicks and punches — we build character, confidence, and leadership in every student." },
  { icon: "🏫", title: "Two Locations", desc: "Main branch at Mahalaxmi Nagar and a branch at Pragmatic Public School, Indore." },
];

export default function R5KarateLanding() {
  const [activeReview, setActiveReview] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview(r => (r + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0a0a0a", color: "#f0ede6", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .cinzel { font-family: 'Cinzel', serif; }
        .crimson { font-family: 'Crimson Text', serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(180,20,20,0.4); }
          50% { box-shadow: 0 0 50px rgba(180,20,20,0.9), 0 0 80px rgba(180,20,20,0.3); }
        }
        @keyframes slideLeft {
          from { transform: translateX(60px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .hero-text { animation: fadeUp 1s ease forwards; }
        .hero-text-delay { animation: fadeUp 1s ease 0.3s both; }
        .hero-text-delay2 { animation: fadeUp 1s ease 0.6s both; }
        .hero-btn { animation: fadeUp 1s ease 0.9s both; }

        .cta-btn {
          background: linear-gradient(135deg, #b41414, #8b0000);
          color: #fff;
          border: none;
          padding: 16px 40px;
          font-family: 'Cinzel', serif;
          font-size: 14px;
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s;
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .cta-btn:hover { transform: scale(1.04); }
        .cta-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        .cta-btn:hover::after { left: 150%; }

        .feature-card {
          background: linear-gradient(145deg, #141414, #1a1a1a);
          border: 1px solid #2a2a2a;
          border-left: 3px solid #b41414;
          padding: 28px 24px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(180,20,20,0.05), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .feature-card:hover { transform: translateY(-4px); border-left-color: #e02020; }
        .feature-card:hover::before { opacity: 1; }

        .gallery-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          filter: grayscale(30%) contrast(1.1);
          transition: all 0.4s ease;
          display: block;
        }
        .gallery-img:hover { filter: grayscale(0%) contrast(1.2); transform: scale(1.03); }

        .review-card {
          background: linear-gradient(145deg, #111, #1a1a1a);
          border: 1px solid #222;
          padding: 28px;
          transition: all 0.3s;
        }

        .nav-link {
          color: #ccc;
          text-decoration: none;
          font-family: 'Cinzel', serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.2s;
          background: none;
          border: none;
        }
        .nav-link:hover { color: #e02020; }

        .section-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #b41414, transparent);
          margin: 12px 0 32px;
        }

        .badge {
          display: inline-block;
          background: rgba(180,20,20,0.15);
          border: 1px solid rgba(180,20,20,0.4);
          color: #e05050;
          padding: 6px 16px;
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #333, transparent);
          margin: 80px 0;
        }

        .img-overlay {
          position: relative;
          overflow: hidden;
        }
        .img-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
          pointer-events: none;
        }

        .shimmer-text {
          background: linear-gradient(90deg, #f0ede6 0%, #b41414 30%, #f0ede6 60%, #b41414 90%, #f0ede6 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .contact-card {
          background: linear-gradient(145deg, #111, #181818);
          border: 1px solid #222;
          padding: 32px;
          position: relative;
        }
        .contact-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #b41414, #8b0000);
        }

        .floating-belt {
          position: absolute;
          font-size: 80px;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
          user-select: none;
          pointer-events: none;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .grid-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        @media (max-width: 768px) {
          .grid-2, .grid-3, .grid-gallery { grid-template-columns: 1fr 1fr; }
          .hero-title { font-size: 36px !important; }
        }
        @media (max-width: 480px) {
          .grid-2, .grid-3, .grid-gallery { grid-template-columns: 1fr; }
          .hero-title { font-size: 28px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrollY > 60 ? "rgba(8,8,8,0.97)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(12px)" : "none",
        borderBottom: scrollY > 60 ? "1px solid #1a1a1a" : "none",
        transition: "all 0.4s ease",
        padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 38, height: 38, background: "#b41414",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: "bold", fontFamily: "Cinzel, serif"
          }}>R5</div>
          <span className="cinzel" style={{ fontSize: 14, letterSpacing: 3, color: "#f0ede6" }}>MARTIAL ARTS</span>
        </div>
        <div style={{ display: "flex", gap: 32 }}>
          {["about", "features", "gallery", "reviews", "contact"].map(s => (
            <button key={s} className="nav-link" onClick={() => scrollTo(s)}>{s}</button>
          ))}
        </div>
        <button className="cta-btn" style={{ padding: "10px 24px", fontSize: 11, animation: "none" }} onClick={() => scrollTo("contact")}>
          Join Now
        </button>
      </nav>

      {/* HERO */}
      <section ref={heroRef} style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000 0%, #0d0005 40%, #0a0000 70%, #000 100%)",
        display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
        padding: "120px 60px 80px"
      }}>
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: "15%", right: "8%", fontSize: 180, opacity: 0.1, fontFamily: "serif", color: "#b41414", userSelect: "none" }}>武</div>
        <div className="floating-belt" style={{ top: "20%", right: "20%", animationDelay: "2s" }}>🥋</div>
        <div className="floating-belt" style={{ bottom: "20%", left: "5%", animationDelay: "1s", fontSize: 60 }}>🏆</div>

        {/* Diagonal red accent */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "40%", height: "100%",
          background: "linear-gradient(135deg, transparent 50%, rgba(180,20,20,0.06) 100%)",
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, #b41414 40%, transparent)"
        }} />

        <div style={{ maxWidth: 800, position: "relative", zIndex: 2 }}>
          <div className="badge hero-text">★ INDORE'S PREMIER KARATE INSTITUTE ★</div>

          <h1 className="cinzel hero-title hero-text-delay" style={{
            fontSize: 64, fontWeight: 900, lineHeight: 1.05,
            marginBottom: 24, letterSpacing: 2
          }}>
            <span className="shimmer-text">R5 MARTIAL ARTS</span>
            <br />
            <span style={{ color: "#f0ede6" }}>& KARATE INSTITUTE</span>
          </h1>

          <p className="crimson hero-text-delay2" style={{
            fontSize: 20, lineHeight: 1.8, color: "#aaa",
            maxWidth: 560, marginBottom: 40
          }}>
            Where discipline meets excellence. Professional karate training for kids, teens, and adults in Mahalaxmi Nagar, Indore — forging champions since day one.
          </p>

          <div className="hero-btn" style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
            <button className="cta-btn" onClick={() => scrollTo("contact")}>
              Start Training Today
            </button>
            <button className="nav-link" style={{ color: "#888", fontSize: 13, letterSpacing: 1 }} onClick={() => scrollTo("gallery")}>
              ▶ View Gallery
            </button>
          </div>

          <div style={{ display: "flex", gap: 48, marginTop: 64 }}>
            {[["4.8★", "Google Rating"], ["8+", "Reviews"], ["2", "Branches"], ["All Ages", "Welcome"]].map(([val, label]) => (
              <div key={label}>
                <div className="cinzel" style={{ fontSize: 26, fontWeight: 700, color: "#b41414" }}>{val}</div>
                <div style={{ fontSize: 12, color: "#666", letterSpacing: 1 }}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="badge">About Us</div>
        <div className="section-line" />
        <div className="grid-2" style={{ alignItems: "start", gap: 60 }}>
          <div>
            <h2 className="cinzel" style={{ fontSize: 42, fontWeight: 700, marginBottom: 24, lineHeight: 1.2 }}>
              More Than Just Karate —<br />
              <span style={{ color: "#b41414" }}>A Way of Life</span>
            </h2>
            <p className="crimson" style={{ fontSize: 18, lineHeight: 1.9, color: "#aaa", marginBottom: 20 }}>
              R5 Martial Arts and Karate Institute is one of the best karate training centers in Mahalaxmi Nagar, Indore. We offer professional martial arts and self-defense training for kids, teenagers, and adults under expert guidance.
            </p>
            <p className="crimson" style={{ fontSize: 18, lineHeight: 1.9, color: "#aaa", marginBottom: 28 }}>
              Our institute focuses on discipline, confidence building, physical fitness, and practical self-defense techniques. We provide a safe and motivating environment where students develop strength, focus, and leadership qualities.
            </p>
            {/* <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["📍 Main Branch: Mahalaxmi Nagar, Indore", "🏫 Branch: Pragmatic Public School"].map(item => (
                <div key={item} className="crimson" style={{ fontSize: 16, color: "#ccc", display: "flex", alignItems: "center", gap: 8 }}>
                  {item}
                </div>
              ))}
            </div> */}
          </div>
          <div style={{ position: "relative" }}>
            {/* Decorative card stack */}
            <div style={{
              position: "absolute", top: 12, left: 12, right: -12, bottom: -12,
              border: "1px solid rgba(180,20,20,0.2)", background: "rgba(180,20,20,0.03)"
            }} />
            <div style={{
              background: "linear-gradient(145deg, #141414, #1e0a0a)",
              border: "1px solid #2a1515",
              padding: 40, position: "relative", zIndex: 1
            }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🥋</div>
              <div className="cinzel" style={{ fontSize: 13, letterSpacing: 3, color: "#b41414", marginBottom: 16 }}>OUR MISSION</div>
              <p className="crimson" style={{ fontSize: 19, lineHeight: 1.8, color: "#ccc", fontStyle: "italic" }}>
                "To cultivate champions not just in the dojo, but in life — building discipline, respect, and excellence in every student who steps on our mat."
              </p>
              <div style={{ marginTop: 28, paddingTop: 28, borderTop: "1px solid #2a2a2a" }}>
                <div className="cinzel" style={{ fontSize: 12, letterSpacing: 2, color: "#666" }}>HEAD COACH</div>
                <div className="crimson" style={{ fontSize: 20, color: "#f0ede6", marginTop: 4 }}>Sensei Rinky Khare</div>
                <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>Certified Funakoshi Shotokan Karate Instructor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" style={{ margin: "0 60px" }} />

      {/* FEATURES */}
      <section id="features" style={{ padding: "100px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="badge">Why Choose R5</div>
        <div className="section-line" />
        <h2 className="cinzel" style={{ fontSize: 40, fontWeight: 700, marginBottom: 48 }}>
          Training That <span style={{ color: "#b41414" }}>Transforms</span>
        </h2>
        <div className="grid-3">
          {features.map((f, i) => (
            <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
              <h3 className="cinzel" style={{ fontSize: 16, fontWeight: 700, color: "#f0ede6", marginBottom: 10, letterSpacing: 1 }}>{f.title}</h3>
              <p className="crimson" style={{ fontSize: 16, lineHeight: 1.7, color: "#888" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" style={{ margin: "0 60px" }} />

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "100px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="badge">Photo Gallery</div>
        <div className="section-line" />
        <h2 className="cinzel" style={{ fontSize: 40, fontWeight: 700, marginBottom: 12 }}>
          Life at <span style={{ color: "#b41414" }}>R5</span>
        </h2>
        <p className="crimson" style={{ fontSize: 18, color: "#888", marginBottom: 40 }}>
          From training sessions to national tournaments — our students' journey captured.
        </p>

        <div className="grid-gallery">
          {[
            { label: "Team at Indore District TT Hall", desc: "Group training session" },
            { label: "National Funakoshi Open", desc: "Young champion with medal" },
            { label: "Young Warriors", desc: "Training" },
            { label: "World Funakoshi Championship", desc: "Coaches" },
            { label: "Champions' Team", desc: "Coaches & winners" },
            { label: "National Medal Winners", desc: "Proud medalists with Indian flag" },
          ].map((item, i) => (
            <div key={i} className="img-overlay" style={{ position: "relative", overflow: "hidden", background: "#1a1a1a", border: "1px solid #2a2a2a" }}>
              {/* We'll render colored blocks with emojis since local files can't be accessed via src in artifact */}

              <img src={galleryImages[i]} alt="karate" className="gallery-img" />
              {/* <div style={{
                height: 220,
                background: `linear-gradient(135deg, hsl(${i * 35}, 40%, 10%), hsl(${i * 35 + 15}, 30%, 5%))`,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                borderBottom: "2px solid rgba(180,20,20,0.3)"
              }}>
                <div style={{ fontSize: 48, marginBottom: 8 }}>
                  {["🥋", "🏆", "👊", "🌟", "🎖️", "🇮🇳"][i]}
                </div>
                <div className="cinzel" style={{ fontSize: 10, letterSpacing: 2, color: "#b41414", textAlign: "center", padding: "0 12px" }}>
                  {item.label.toUpperCase()}
                </div>
              </div> */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 14px", background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)" }}>
                <div className="crimson" style={{ fontSize: 13, color: "#ccc" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="crimson" style={{ textAlign: "center", marginTop: 24, color: "#555", fontSize: 14 }}>
          Visit our institute to see the training in person · National tournament participants since 2023
        </p>
      </section>

      <div className="divider" style={{ margin: "0 60px" }} />

      {/* REVIEWS */}
      <section id="reviews" style={{ padding: "100px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="badge">Google Reviews</div>
        <div className="section-line" />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
          <h2 className="cinzel" style={{ fontSize: 40, fontWeight: 700 }}>
            What Our <span style={{ color: "#b41414" }}>Students</span> Say
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex" }}>{[1, 2, 3, 4, 5].map(i => <StarIcon key={i} filled />)}</div>
            <span className="cinzel" style={{ fontSize: 20, color: "#f0ede6" }}>4.8</span>
            <span className="crimson" style={{ color: "#666" }}>on Google</span>
          </div>
        </div>

        {/* Featured review */}
        <div style={{ marginBottom: 32 }}>
          <div className="review-card" style={{ borderLeft: "3px solid #b41414", position: "relative", minHeight: 180 }}>
            <div style={{ display: "flex", marginBottom: 12 }}>
              {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} filled />)}
            </div>
            <p className="crimson" style={{ fontSize: 20, lineHeight: 1.8, color: "#ddd", fontStyle: "italic", marginBottom: 20 }}>
              "{reviews[activeReview].text}"
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div className="cinzel" style={{ fontSize: 13, color: "#f0ede6", letterSpacing: 1 }}>{reviews[activeReview].name}</div>
                <div style={{ fontSize: 12, color: "#555", marginTop: 2 }}>{reviews[activeReview].time}</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {reviews.map((_, i) => (
                  <div key={i} onClick={() => setActiveReview(i)} style={{
                    width: i === activeReview ? 24 : 8, height: 8,
                    background: i === activeReview ? "#b41414" : "#333",
                    cursor: "pointer", transition: "all 0.3s", borderRadius: 4
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid-3">
          {reviews.slice(0, 6).map((r, i) => (
            <div key={i} className="review-card" style={{ borderTop: "1px solid #222", padding: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ display: "flex" }}>{[1, 2, 3, 4, 5].map(j => <StarIcon key={j} filled={j <= r.rating} />)}</div>
                <div style={{ fontSize: 11, color: "#555" }}>{r.time}</div>
              </div>
              <p className="crimson" style={{ fontSize: 15, lineHeight: 1.7, color: "#888" }}>"{r.text.slice(0, 120)}..."</p>
              <div className="cinzel" style={{ fontSize: 12, color: "#b41414", marginTop: 12, letterSpacing: 1 }}>— {r.name}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" style={{ margin: "0 60px" }} />

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="badge">Get In Touch</div>
        <div className="section-line" />
        {/* <div className="grid-2" style={{ gap: 60, alignItems: "start" }}> */}
        <div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: 40
}}>
          <div>
            <h2 className="cinzel" style={{ fontSize: 42, fontWeight: 700, marginBottom: 24, lineHeight: 1.2 }}>
              Begin Your <span style={{ color: "#b41414" }}>Journey</span><br />Today
            </h2>
            <p className="crimson" style={{ fontSize: 18, color: "#888", lineHeight: 1.8, marginBottom: 40 }}>
              Join R5 Martial Arts and Karate Institute today and start your journey towards fitness, discipline, and self-confidence with the best karate classes in Indore.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="contact-card">
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ color: "#b41414", marginTop: 2 }}><MapIcon /></div>
                  <div>
                    <div className="cinzel" style={{ fontSize: 12, letterSpacing: 2, color: "#666", marginBottom: 6 }}>MAIN BRANCH</div>
                    <div className="crimson" style={{ fontSize: 17, color: "#ccc", lineHeight: 1.6 }}>
                      300-301, Sector R, Mahalaxmi Nagar<br />
                      Indore, Madhya Pradesh 452010
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ color: "#b41414", fontSize: 20 }}><MapIcon /></div>
                  <div>
                    <div className="cinzel" style={{ fontSize: 12, letterSpacing: 2, color: "#666", marginBottom: 6 }}>SECOND BRANCH</div>
                    <div className="crimson" style={{ fontSize: 17, color: "#ccc" }}>Pragmatic Public School, Indore</div>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ color: "#b41414" }}><PhoneIcon /></div>
                  <div>
                    <div className="cinzel" style={{ fontSize: 12, letterSpacing: 2, color: "#666", marginBottom: 6 }}>PHONE</div>
                    <a href="tel:+919009767600" className="crimson" style={{ fontSize: 20, color: "#f0ede6", textDecoration: "none", fontWeight: 600 }}>
                      090097 67600
                    </a>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

          {/* Enroll form
          <div style={{
            background: "linear-gradient(145deg, #111, #181818)",
            border: "1px solid #222",
            padding: 40,
            position: "relative"
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: "linear-gradient(90deg, #b41414, #8b0000)"
            }} />
            <h3 className="cinzel" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#f0ede6" }}>
              Enquire Now
            </h3>
            <p className="crimson" style={{ fontSize: 15, color: "#666", marginBottom: 28 }}>Free trial class available for new students</p>

            {["Your Full Name", "Phone Number", "Age Group (Child / Teen / Adult)"].map((placeholder, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <input
                  placeholder={placeholder}
                  style={{
                    width: "100%", padding: "14px 18px",
                    background: "#0d0d0d", border: "1px solid #2a2a2a",
                    color: "#f0ede6", fontSize: 15,
                    fontFamily: "Crimson Text, serif",
                    outline: "none",
                  }}
                  onFocus={e => e.target.style.borderColor = "#b41414"}
                  onBlur={e => e.target.style.borderColor = "#2a2a2a"}
                />
              </div>
            ))}
            <textarea
              placeholder="Any questions or special requirements?"
              rows={3}
              style={{
                width: "100%", padding: "14px 18px",
                background: "#0d0d0d", border: "1px solid #2a2a2a",
                color: "#f0ede6", fontSize: 15,
                fontFamily: "Crimson Text, serif",
                outline: "none", resize: "vertical", marginBottom: 24
              }}
              onFocus={e => e.target.style.borderColor = "#b41414"}
              onBlur={e => e.target.style.borderColor = "#2a2a2a"}
            />
            <button className="cta-btn" style={{ width: "100%", textAlign: "center" }}>
              Send Enquiry
            </button>
            <p className="crimson" style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "#555" }}>
              Or call us directly: <a href="tel:+919009767600" style={{ color: "#b41414", textDecoration: "none" }}>090097 67600</a>
            </p>
          </div> */}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: "1px solid #1a1a1a",
        padding: "40px 60px",
        background: "#050505",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 32, height: 32, background: "#b41414",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Cinzel, serif", fontWeight: "bold", fontSize: 14
          }}>R5</div>
          <div>
            <div className="cinzel" style={{ fontSize: 12, letterSpacing: 2, color: "#f0ede6" }}>R5 MARTIAL ARTS</div>
            <div style={{ fontSize: 11, color: "#555" }}>Mahalaxmi Nagar, Indore</div>
          </div>
        </div>
        <div className="crimson" style={{ color: "#555", fontSize: 14 }}>
          © 2025 R5 Martial Arts & Karate Institute. All rights reserved.
        </div>
        <a href="tel:+919009767600" style={{ color: "#b41414", textDecoration: "none", fontFamily: "Cinzel, serif", fontSize: 13, letterSpacing: 1 }}>
          090097 67600
        </a>
      </footer>
    </div>
  );
}
