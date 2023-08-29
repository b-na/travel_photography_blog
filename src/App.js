import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown, faCaretUp, faEarthAmericas, faMountainSun } from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faYoutube, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { createContext, useEffect, useState, useMemo, useRef } from 'react';
import { gal, Gallery } from './Gallery.js'
import About from './About';
import OverlayPage from './OverlayPage';
import MyMap from './Map';


function Pic({pic, func}) {
  return (
    <div className='flex-item' style={{backgroundImage: 'url(' + gal[pic].link + ')'}} alt={gal[pic].alt} onClick={() => {func(gal[pic])}}>
      <figcaption>{gal[pic].location}</figcaption>
    </div>
  )
}

function HandleSmallScreen({pic, func}) {
  return (
    <div className='cover' style={{backgroundImage: 'url(' + gal[pic].link + ')'}} alt={gal[pic].alt} onClick={() => {func(gal[pic])}}>
        <figcaption>{gal[pic].location}</figcaption>
    </div>
  )
}

function Nav() {
  return (
    <>
      <a className='nav_link' href='#about_me'>About Me</a>
      <a className='nav_link' href='#gallery'>Gallery</a>
      <a className='nav_link' href='#myMap'>My Map</a>
      <a className='nav_link' href='#newsletter'>Newsletter</a>
    </>
  )
}

function NavDronDown() {
  return (
  <details id="btn-group">
    <summary><FontAwesomeIcon id='bars' icon={faBars} /></summary>
      <a href='#start' aria-label='scroll to the start section'><FontAwesomeIcon icon={faCaretUp} className='angle' id='up'/></a>
      <a class="dropdown-item" href="#about_me">About Me</a>
      <a class="dropdown-item" href="#gallery">Gallery</a>
      <a class="dropdown-item" href="#myMap">My Map</a>
      <a class="dropdown-item" href="#newsletter">Newsletter</a>
  </details>
  )
}


function handleSubmit(e) {
  let str = 'Prototype Notification';
  e.preventDefault();
  alert('\n\n' + str.toUpperCase() + ' \n\n Thank you for your interaction! Please note that this is a prototype web page, and your submitted data will not be sent or stored. This is for demonstration purposes only. We appreciate your understanding and hope you enjoy exploring our concept.')
}

function Photo() {

  const [page, setPage] = useState({pic: undefined, visible: false});
  const [screenSmall, setScreenSmall] = useState(window.innerWidth > 750 ? 'L' :  window.innerWidth <= 550 ? 'XS' : 'S');

  function display (pic) {
    setPage({pic: pic, visible: true});
  }
  function hide () {
    setPage({pic: undefined, visible: false});
  }
   
  function htmlScrollable() {
    page.visible ? 
    document.getElementsByTagName('html')[0].style.overflow = 'hidden' : 
    document.getElementsByTagName('html')[0].style.overflow = 'auto';
   }

  useEffect(() => {
    if ( page.visible && page.pic) {
      document.getElementById('overlay-page-bg').style.visibility = 'visible';
    } 
    htmlScrollable()}, [page.visible])

  useEffect(() => {
    function screen() {
      window.innerWidth > 750 ? setScreenSmall('L') : window.innerWidth <= 560 ? setScreenSmall('XS') : setScreenSmall('S')
    }
    window.addEventListener('resize', screen);
    return() => window.removeEventListener('resize', screen);
  })
    

  //Navbar progress
  let scroll = useRef(0);
  useEffect(() => {
    let aboutPos = document.getElementById('about_me').getBoundingClientRect();
    let galPos = document.getElementById('gallery').getBoundingClientRect();
    let mapPos = document.getElementById('myMap').getBoundingClientRect();
    let newsPos = document.getElementById('newsletter').getBoundingClientRect();
    let body = document.body.getBoundingClientRect();

    function Prog() { 
      scroll.current = window.scrollY;
      const prog1 = document.getElementById('progress1');
      const prog2 = document.getElementById('progress2');
      const prog3 = document.getElementById('progress3');

      prog1.value = (scroll.current + 1 -(aboutPos.top - body.top))/ (galPos.top - aboutPos.top);
      prog2.value = (scroll.current + 1 - (galPos.top - body.top))/ (mapPos.top - galPos.top);
      prog3.value = (scroll.current + 1 - (mapPos.top - body.top))/ (newsPos.top - mapPos.top);

      const parent = document.getElementById('v_navbar').children[0].children[3];
      (prog1.value < 1 && prog1.value > 0) ? parent.children[1].classList.add("style_on_scroll") : parent.children[1].classList.remove("style_on_scroll");
      (prog2.value < 1 && prog2.value > 0) ? parent.children[2].classList.add("style_on_scroll") : parent.children[2].classList.remove("style_on_scroll");
      (prog3.value < 1 && prog3.value > 0) ? parent.children[3].classList.add("style_on_scroll") : parent.children[3].classList.remove("style_on_scroll");
      (prog3.value === 1 ) ? parent.children[4].classList.add("style_on_scroll") : parent.children[4].classList.remove("style_on_scroll");
    }

    "scroll resize".split(" ").forEach(function(e){
      document.addEventListener(e, Prog)})

    
    return () => 
      "scroll resize".split(" ").forEach(function(e){
        document.removeEventListener(e, Prog)
      })
  })

  const State = createContext();

  const random = useMemo(() => {
    let arr = [];
    for (let i = 0; i < gal.length; i++) {
      arr.push(i)
    }
    arr.sort(() => Math.random() - 0.5);
    return arr.slice(0, 10)}, []
    )
  
    function FadeIn(props) {
      const [isVisible, setVisible] = useState(false);
      const domRef = useRef();
      useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
      }, []);
      return (
        <div
          className={`fadeIn ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}
        >
          {props.children}
        </div>
      );
    }


  const gallery = useMemo(() => 
    gal.map(
    (pic, i)=> <FadeIn key={i}><Gallery pic={pic} func={display}/></FadeIn>
  ), [])

  return (
    <div className="App">
      <section id='start'>
        <nav id='h_navbar' className='navbar'>
        {screenSmall === 'XS' ? <NavDronDown/> : <Nav/>}
        </nav>
        <h1>World through my lens</h1>
        <div id='photos-flexbox'>
        {screenSmall === 'L' ? random.map((pic, i) => <Pic pic={pic} func={display} key={i}/>) : <HandleSmallScreen pic={random[0]} func={display}/>}
        </div>
        <a id='down' href='#about_me' aria-label='scroll to the about me section'>
          <FontAwesomeIcon icon={faCaretDown} className='angle'/>
        </a>
      </section>
      <aside id='v_navbar' className='navbar'>
        <div>
          <meter id='progress1' className='progress' value={0} min='0' max='1'></meter>
          <meter id='progress2' className='progress' value={0} min='0' max='1'></meter>
          <meter id='progress3' className='progress' value={0} min='0' max='1'></meter>
          <nav>
              <a href='#start' aria-label='scroll to the start section'><FontAwesomeIcon icon={faCaretUp} className='angle' id='up'/></a>
              <Nav/>
          </nav>
        </div>
      </aside>
      <section id='about_me'>
        <div id='my_story'>
          <About />
        </div>
      </section>
      <section id='gallery'>
      <State.Provider value={[display, hide, handleSubmit]}>
        <div id='gallery-container'>
          {gallery}
        </div>
        {page.visible && <OverlayPage link={page.pic.link} alt={page.pic.alt} location={page.pic.location} func={hide} handleSubmit={handleSubmit}/>}
      </State.Provider> 
      </section>
      <section id='myMap'>
          <p>Countries I have already visited: </p>
          <MyMap/>
      </section>
      <section id='newsletter'>
        <div id='nl_form'>
                <h3>Subscribe</h3>
                <p>
                  Join our vibrant community of travel enthusiasts! Subscribe to our newsletter for captivating travel stories, photography tips, and 
                  exclusive updates that will ignite your wanderlust.
                </p>
                <div id='icons'>
                  <FontAwesomeIcon icon={faMountainSun} />
                  <FontAwesomeIcon icon={faCameraRetro} />
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <div><label htmlFor='fname'>First Name* :</label>
                <input type="text" id="fname" name="fname" required/></div>
                <div><label htmlFor='lname'>Last Name :</label>
                <input type="text" id="lname" name="lname"/></div>
                <div><label htmlFor='email'>You Email* :</label>
                <input type="email" id="email" name="email" required/></div>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
      </section>
      <footer>
        <div id='follow'>
          <p>Follow: </p>
          <a href='https://www.instagram.com/'  aria-label='link to my Instagram'><FontAwesomeIcon icon={faInstagram}/></a>
          <a href='https://www.tiktok.com/'  aria-label='link to my Tiktok'><FontAwesomeIcon icon={faTiktok} /></a>
          <a href='https://facebook.com/'  aria-label='link to my Facebook'><FontAwesomeIcon icon={faFacebook}/></a>
          <a href='https://youtube.com/'  aria-label='link to my Youtube Channel'><FontAwesomeIcon icon={faYoutube}/></a>
          <a href='https://twitter.com/'  aria-label='link to my Twitter'><FontAwesomeIcon icon={faTwitter}/></a>
        </div>
      </footer>
    </div>
  );
}

export default Photo;
