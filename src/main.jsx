import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, ShoppingBag, Instagram } from 'lucide-react';
import './styles.css';

const products = [
  { name: 'The Everyday Brief', color: 'Olive / 3-pack', price: '$42', image: 'photo-1618354691373-d851c5c3a990', tag: 'BEST SELLER' },
  { name: 'The Sunday Trunk', color: 'Cobalt / 2-pack', price: '$38', image: 'photo-1587017539504-67cfbddac569', tag: 'NEW COLOR' },
  { name: 'The No Show Brief', color: 'Sand / 3-pack', price: '$42', image: 'photo-1620799140408-edc6dcb6d633', tag: 'LOW STOCK' },
];
const photo = (id, w=1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
function App() {
  return <main>
    <div className="announcement">A little more room to move. Free shipping on orders $75+ <span>✳</span></div>
    <header className="nav wrap">
      <a className="wordmark" href="#top">MANS<span>BRIEF</span><i>®</i></a>
      <nav><a href="#shop">SHOP ALL</a><a href="#why">WHY WEAR US</a><a href="#story">OUR STORY</a></nav>
      <div className="nav-actions"><button className="account">ACCOUNT</button><button className="bag" aria-label="Shopping bag"><ShoppingBag size={17}/><span>0</span></button><button className="menu" aria-label="Open menu"><Menu/></button></div>
    </header>

    <section className="hero" id="top">
      <div className="hero-photo" style={{backgroundImage:`url(${photo('photo-1515886657613-9f3515b0c78f',1800)})`}}></div>
      <div className="hero-shade"></div>
      <div className="hero-copy"><p className="eyebrow light">A BETTER KIND OF BASIC &nbsp; / &nbsp; EST. 2024</p><h1>Feel good<br/>down <em>there.</em></h1><p className="hero-sub">The everyday brief, rethought.<br/>Ridiculously comfortable. Zero fuss.</p><a className="pill-button" href="#shop">SHOP THE BRIEF <ArrowRight size={15}/></a></div>
      <div className="hero-note"><span>01 / 05</span><span>BUILT FOR REAL LIFE</span></div>
      <div className="hero-side">GOOD THINGS GO UNDER</div>
      <a className="scroll" href="#shop"><ArrowDown size={15}/> SCROLL A LITTLE</a>
    </section>

    <div className="ticker" aria-label="Our promise"><div>NO RIDE-UP <span>✳</span> ALL-DAY SOFT <span>✳</span> NO RIDE-UP <span>✳</span> ALL-DAY SOFT <span>✳</span> NO RIDE-UP <span>✳</span> ALL-DAY SOFT <span>✳</span></div></div>

    <section className="shop section-pad" id="shop">
      <div className="section-heading"><div><p className="eyebrow">THE LINEUP &nbsp; / &nbsp; 01</p><h2>Meet your new<br/><em>everyday.</em></h2></div><a className="text-link" href="#shop">SHOP ALL UNDERWEAR <ArrowUpRight size={15}/></a></div>
      <div className="product-grid">{products.map((p,i)=><article className="product" key={p.name}><a className="product-image" href="#shop"><img src={photo(p.image,900)} alt=""/><span className="product-tag">{p.tag}</span><span className="quick-add">QUICK ADD <b>+</b></span><span className="product-index">0{i+1}</span></a><div className="product-info"><div><h3>{p.name}</h3><p>{p.color}</p></div><span>{p.price}</span></div></article>)}</div>
      <div className="shop-foot"><span>DESIGNED TO DISAPPEAR. MADE TO BE FELT.</span><span>01 — 03</span></div>
    </section>

    <section className="manifesto" id="why">
      <div className="manifesto-image"><img src={photo('photo-1529139574466-a303027c1d8b',1300)} alt="A sunlit, relaxed everyday moment"/><span className="image-caption">THE FEELING IS THE THING. &nbsp;↗</span></div>
      <div className="manifesto-copy"><p className="eyebrow">A SMALL CHANGE. A BIG DEAL. &nbsp; / &nbsp; 02</p><h2>Life's too short<br/>for <em>bad briefs.</em></h2><p className="body-copy">You have a lot going on. What’s underneath should be the least of it. So we made one brief, really well: ridiculously soft cotton, a no-pinch waistband, and a fit that stays put from first coffee to last call.</p><div className="benefits"><div><span>01</span><p><b>SOFT WHERE IT COUNTS</b><small>Combed cotton with a little stretch.</small></p></div><div><span>02</span><p><b>THE STAY-PUT FIT</b><small>Supportive, never restrictive.</small></p></div><div><span>03</span><p><b>THOUGHTFUL BY DESIGN</b><small>Better materials, less waste.</small></p></div></div><a href="#shop" className="text-link">GET TO KNOW YOUR BRIEF <ArrowRight size={15}/></a></div>
    </section>

    <section className="story section-pad" id="story"><div className="story-top"><p className="eyebrow">NOTHING FANCY. JUST RIGHT. &nbsp; / &nbsp; 03</p><span>THE MANS BRIEF POV</span></div><div className="story-content"><h2>Good underwear<br/>is a <em>quiet</em><br/>kind of confidence.</h2><div className="story-aside"><p>For the big days, the slow days, and all the very normal ones in between. We believe the best things are the ones you don't have to think about.</p><a href="#shop" className="circle-link">THE SHORT<br/>VERSION <ArrowUpRight size={19}/></a></div></div><div className="story-bottom"><span>MADE FOR YOUR EVERY DAY</span><span>✳ &nbsp; WELL MADE. WELL WORN.</span></div></section>

    <section className="newsletter"><div className="newsletter-left"><p className="eyebrow light">A NOTE FROM DOWN THERE &nbsp; / &nbsp; 04</p><h2>Good things<br/>in your <em>inbox.</em></h2><p>New colors, good stories, and 10% off your first order. No weird stuff.</p></div><form className="signup" onSubmit={e=>{e.preventDefault(); e.currentTarget.querySelector('button').textContent='YOU’RE ON THE LIST ✓';}}><label htmlFor="email">YOUR EMAIL ADDRESS</label><div className="email-row"><input id="email" type="email" required placeholder="you@somewhere.com"/><button type="submit" aria-label="Subscribe"><ArrowRight/></button></div><small>BY SIGNING UP, YOU AGREE TO RECEIVE THE OCCASIONAL GOOD EMAIL.</small></form><span className="newsletter-spark">✳</span></section>

    <footer className="footer"><div className="footer-top"><a className="wordmark footer-mark" href="#top">MANS<span>BRIEF</span><i>®</i></a><p>Made for the everyday extraordinary.<br/>Designed in New York. Worn everywhere.</p><a className="social" href="#top"><Instagram size={16}/> &nbsp; FOLLOW ALONG</a></div><div className="footer-bottom"><span>© 2024 MANS BRIEF. ALL RIGHTS RESERVED.</span><div><a href="#top">INSTAGRAM</a><a href="#top">FAQ</a><a href="#top">CONTACT</a><a href="#top">PRIVACY</a></div><span>MADE WITH A LITTLE MORE FEELING.</span></div></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App/>);
