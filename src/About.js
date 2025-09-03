export default function About() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let bday = [1996, 8, 9]
    let age = () =>  {
        if(month < bday[1] || ((month === bday[1]) && (day < bday[2]))) {
            return year - bday[0] - 1;
        } else {
            return year - bday[0];
        }
    }

    const profile = {
        fname: 'Melanie',
        lname: 'Norman',
        age: age(),
        country: 'Norway',
        languages: ['Norwegian', 'English', 'Japanese'],
        hobbys: ['photography', 'travel', 'drawing', 'philately']
    }

    return (
        <>
        <h2 className='grid-item'>About Me</h2>
        <div id='profile' className='grid-item'>
            <img src='profile_photo.webp' alt='profile'/>
            <p className="full-name"><strong>{profile.fname} {profile.lname}</strong></p>
            <p><strong>Age: </strong> {profile.age}</p>
            <p><strong>Country: </strong> {profile.country}</p>
            <p><strong>Languages: </strong> {profile.languages.join(', ')}</p>
            <p><strong>Hobbys: </strong> {profile.hobbys.join(', ')}</p>
        </div>
        <article className='grid-item'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor vel rhoncus bibendum. Vivamus condimentum arcu eu dui tristique 
              consectetur at ut lectus. Aliquam non maximus nunc, pellentesque vestibulum lectus. Morbi nulla purus, malesuada ut blandit sit amet, pharetra sed 
              purus. Donec ut sem ex. Donec in mauris vitae ante varius scelerisque non sit amet justo. Pellentesque id nibh urna.</p>
            <p>Nunc ut sapien fermentum, eleifend ex a, ultricies arcu. Integer pretium elit porta ante elementum blandit. Duis mollis, diam at finibus blandit, 
              sapien felis mollis leo, in congue enim leo sit amet libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Aliquam erat volutpat. Maecenas fringilla luctus nisi, a consequat lectus rutrum maximus. Duis fringilla leo purus, id tincidunt est interdum in. Ut 
              convallis commodo ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In quis augue condimentum, mattis 
              dui non, ultrices felis. Integer consectetur mauris at ipsum efficitur, eu fringilla urna fringilla. Ut pretium ullamcorper erat eget bibendum.</p>
        </article>
        </>
    )
}