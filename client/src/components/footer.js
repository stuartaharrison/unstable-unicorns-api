import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer class="footer mb-0">
            <div class="content has-text-centered">
                <p>
                    Unstable Unicorns and all of it's images are owned by <a href="https://www.unstablegames.com/" target="_blank">Unstable Games</a> and I have no claim to them. 
                    <br />
                    This is a fan made collection for educational purposes only. If you like
                    this game then consider buying it from a source like <a href="https://www.amazon.co.uk/TeeTurtle-TEE3678UUBSG1-Unstable-Unicorns-Multi-Colour/dp/B07BMLQBM1/ref=sr_1_2?crid=2J2YDBBDSBL2Z&keywords=unstable+unicorns&qid=1646502622&sprefix=unstable+unicorns%2Caps%2C688&sr=8-2" target="_blank">Amazon</a>.
                    <hr />
                    Built with
                    &nbsp;
                    <a href="https://bulma.io/" target="_blank">
                        <FontAwesomeIcon icon={faHeart} />
                    </a>
                    &nbsp;
                    by <a href="https://www.stuart-harrison.com" target="_blank">Stuart Harrison</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;