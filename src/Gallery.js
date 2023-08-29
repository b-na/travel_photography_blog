function Gallery({pic, func}) {
    return(
    <div className='photo_container' >
        <figure>
            <img src={pic.link_small} alt={pic.alt} loading="lazy" onClick={() => func(pic)}></img>
            <figcaption className='overlay'>{pic.location}</figcaption>
        </figure>
    </div>
    )
  }

const gal = [
    {
        link:'travel_photography_blog/pics/gallery/gal-1.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-1.webp', 
        location:'Husfjell, Norway', 
        alt:'Fjord and Mountain'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-2.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-2.webp',  
        location:'Veneto, Italy', 
        alt:'Boat on River Between Buildings'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-3.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-3.webp',  
        location:'Tulum, Q.R., Mexico', 
        alt:'Empty Balcony Near Beach'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-4.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-4.webp',  
        location:'Agra, UP, India', 
        alt:'Old Famous Taj Mahal during Daytime'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-5.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-5.webp',  
        location:'Thera, Greece', 
        alt:'White Concrete Church Near Body of Water'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-6.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-6.webp',  
        location:'Chichén-Itzá, Yuc., Mexico', 
        alt:'Gray Pyramid on Grass Field during Day'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-7.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-7.webp',  
        location:'Braies, Trentino-Alto Adige, Italy', 
        alt:'Mountains Near Body of Water Panoramic Photo'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-8.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-8.webp',  
        location:'Kyoto, Kyoto, Japan', 
        alt:'Fushimi Inari Taisha Shrine in Kyoto'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-9.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-9.webp',  
        location:'Bali, Indonesia', 
        alt:'Handara Gate Uner Blue Sky'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-10.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-10.webp',  
        location:'Kerkyra, Graikija', 
        alt:'Ampelaki'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-11.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-11.webp',  
        location:'Cusco, Peru', 
        alt:'Machu Pichu, Peru'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-12.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-12.webp',  
        location:'Aqaba Governorate, Jordan', 
        alt:'Cliffs on Desert'
    }, 
    {
        link:'travel_photography_blog/pics/gallery/gal-13.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-13.webp',  
        location:'Ankara, Turkey', 
        alt:'Ferris Wheel at Sunset'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-14.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-14.webp',  
        location:'Istanbul, Turkey', 
        alt:'Golden Horn Bridge Reflecting in the Bosphorus Strait at Sunset'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-15.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-15.webp',  
        location:'Desenzano del Garda BS, Italy', 
        alt:'Concrete Pathway'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-16.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-16.webp',  
        location:'Cappadocia, Turkey', 
        alt:'Hot Air Balloons Flying'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-17.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-17.webp',  
        location:'Lausanne, VD, Switzerland', 
        alt:'Vineyard by Lake'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-18.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-18.webp',  
        location:'Folgaria, Trentino-Alto Adige, Italy', 
        alt:'A House in a Rural Area'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-19.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-19.webp',  
        location:'New York, NY, United States', 
        alt:'Manhattan Cityscape with Skyscrapers'
    },
    {
        link:'travel_photography_blog/pics/gallery/gal-20.jpeg',
        link_small:'travel_photography_blog/pics/gallery/gal-m-20.webp',  
        location:'Giza Governorate, Egypt', 
        alt:'Photo Of Pyramid During Daytime'
    }
    
  ]

  const countries = [];
  gal.map(element => countries.push(element.location.split(', ').reverse()[0]))

export { gal, Gallery, countries };