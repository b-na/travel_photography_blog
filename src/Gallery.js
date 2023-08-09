function Gallery({pic, func}) {
    return(
    <div className='photo_container' >
      <img src={pic.link} alt={pic.alt} loading="lazy" onClick={() => func(pic)}></img>
      <figcaption className='overlay'>{pic.location}</figcaption>
    </div>
    )
  }

const gal = [
    {
        link:'Pics/Gallery/gal-1.jpeg', 
        location:'Husfjell, Norway', 
        alt:'Fjord and Mountain'
    },
    {
        link:'Pics/Gallery/gal-2.jpeg', 
        location:'Veneto, Italy', 
        alt:'Boat on River Between Buildings'
    },
    {
        link:'Pics/Gallery/gal-3.jpeg', 
        location:'Tulum, Q.R., Mexico', 
        alt:'Empty Balcony Near Beach'
    },
    {
        link:'Pics/Gallery/gal-4.jpeg', 
        location:'Agra, UP, India', 
        alt:'Old Famous Taj Mahal during Daytime'
    },
    {
        link:'Pics/Gallery/gal-5.jpeg', 
        location:'Thera, Greece', 
        alt:'White Concrete Church Near Body of Water'
    },
    {
        link:'Pics/Gallery/gal-6.jpeg', 
        location:'Chichén-Itzá, Yuc., Mexico', 
        alt:'Gray Pyramid on Grass Field during Day'
    },
    {
        link:'Pics/Gallery/gal-7.jpeg', 
        location:'Braies, Trentino-Alto Adige, Italy', 
        alt:'Mountains Near Body of Water Panoramic Photo'
    },
    {
        link:'Pics/Gallery/gal-8.jpeg', 
        location:'Kyoto, Kyoto, Japan', 
        alt:'Fushimi Inari Taisha Shrine in Kyoto'
    },
    {
        link:'Pics/Gallery/gal-9.jpeg', 
        location:'Bali, Indonesia', 
        alt:'Handara Gate Uner Blue Sky'
    },
    {
        link:'Pics/Gallery/gal-10.jpeg', 
        location:'Kerkyra, Graikija', 
        alt:'Ampelaki'
    },
    {
        link:'Pics/Gallery/gal-11.jpeg', 
        location:'Cusco, Peru', 
        alt:'Machu Pichu, Peru'
    },
    {
        link:'Pics/Gallery/gal-12.jpeg', 
        location:'Aqaba Governorate, Jordan', 
        alt:'Cliffs on Desert'
    }, 
    {
        link:'Pics/Gallery/gal-13.jpeg', 
        location:'Ankara, Turkey', 
        alt:'Ferris Wheel at Sunset'
    },
    {
        link:'Pics/Gallery/gal-14.jpeg', 
        location:'Istanbul, Turkey', 
        alt:'Golden Horn Bridge Reflecting in the Bosphorus Strait at Sunset'
    },
    {
        link:'Pics/Gallery/gal-15.jpeg', 
        location:'Desenzano del Garda BS, Italy', 
        alt:'Concrete Pathway'
    },
    {
        link:'Pics/Gallery/gal-16.jpeg', 
        location:'Cappadocia, Turkey', 
        alt:'Hot Air Balloons Flying'
    },
    {
        link:'Pics/Gallery/gal-17.jpeg', 
        location:'Lausanne, VD, Switzerland', 
        alt:'Vineyard by Lake'
    },
    {
        link:'Pics/Gallery/gal-18.jpeg', 
        location:'Folgaria, Trentino-Alto Adige, Italy', 
        alt:'A House in a Rural Area'
    },
    {
        link:'Pics/Gallery/gal-19.jpeg', 
        location:'New York, NY, United States', 
        alt:'Manhattan Cityscape with Skyscrapers'
    },
    {
        link:'Pics/Gallery/gal-20.jpeg', 
        location:'Giza Governorate, Egypt', 
        alt:'Photo Of Pyramid During Daytime'
    }
    
  ]

  const countries = [];
  gal.map(element => countries.push(element.location.split(', ').reverse()[0]))

export { gal, Gallery, countries };