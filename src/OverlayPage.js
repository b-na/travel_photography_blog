import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function OverlayPage({link, alt, location, func, handleSubmit}) {
    const locArr = location.split(', ');

    return (
        <div id='overlay-page-bg' onClick={(e) => {
            if (e.target.id == 'overlay-page-bg') func()}}>
        <div id='overlay-page'>
        <FontAwesomeIcon icon={faX} id='x' onClick={() => func()}/>
        <img src={link} alt={alt}/>
        <article className='overlay-grid-item'>
        <p><strong>{location}</strong></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas varius tortor vel rhoncus bibendum. Vivamus 
            condimentum arcu eu dui tristique 
            consectetur at ut lectus. Aliquam non maximus nunc, 
            pellentesque vestibulum lectus. Morbi nulla purus, malesuada 
            ut blandit sit amet, pharetra sed 
            purus. Donec ut sem ex. Donec in mauris vitae ante varius 
            scelerisque non sit amet justo. Pellentesque id nibh urna.
        </p>
        <p>Nunc ut sapien fermentum, eleifend ex a, ultricies arcu. 
            Integer pretium elit porta ante elementum blandit. Duis mollis, 
            diam at finibus blandit, 
            sapien felis mollis leo, in congue enim leo sit amet libero. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
            posuere cubilia curae; 
            Aliquam erat volutpat. Maecenas fringilla luctus nisi, a 
            consequat lectus rutrum maximus. Duis fringilla leo purus, id 
            tincidunt est interdum in. Ut 
            convallis commodo ornare. Class aptent taciti sociosqu ad litora 
            torquent per conubia nostra, per inceptos himenaeos. In quis augue 
            condimentum, mattis 
            dui non, ultrices felis. Integer consectetur mauris at ipsum efficitur, 
            eu fringilla urna fringilla. Ut pretium ullamcorper erat eget bibendum.
        </p>
        <p>
        In id mauris nec ipsum ornare tincidunt at eu leo. Cras facilisis vestibulum 
        purus, ac auctor mauris pretium ac. Nam euismod ultrices vehicula. Praesent 
        ultrices nisl ut ex eleifend pharetra. Sed a commodo dolor. In ultricies finibus 
        lacus at tincidunt. Quisque sodales, nunc eu mollis volutpat, dui lacus ultricies 
        odio, in volutpat metus lectus at tortor. Duis efficitur ligula nec magna viverra
         porta. In sit amet nunc faucibus, mattis lectus sit amet, rhoncus urna. Ut eu 
         ipsum vitae magna sodales accumsan. Ut lectus leo, finibus at leo eu, rhoncus luctus lectus.
        </p>
        </article>
        <form action="" method="get" onSubmit={e => handleSubmit(e)}>
            <p className='overlay-grid-item'><strong>Have you evet been to {locArr[0]} in {locArr[locArr.length - 1]}?<br/> 
            Share your unforgettable experiences, cherished memories, and hidden gems with us. Your words can inspire 
            others to embark on their own adventure!</strong></p>
            <textarea id="story" name="story" minLength="10" maxLength="2000" placeholder="Share your story..." required/>
            <input type='submit' value="Send"></input>
        </form>
        </div>
        </div>
    )
}