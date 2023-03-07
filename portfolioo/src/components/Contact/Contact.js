import { Facebook, Instagram, LinkedIn, WhatsApp } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import {Element} from 'react-scroll'
import "./Contact.css"

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>martin.enoch.caleb@gmail.com</span>
            </p>

            <p>
                Github Username : <span>@MartinEnoch</span>
            </p>
            <div className='contact_icons'>
                 <a href=''>
                    <IconButton>
                    <LinkedIn/>
                    </IconButton>
                </a>   
                <a href=''>
                    <IconButton>
                    <Instagram/>
                    </IconButton>
                </a> 
                <a href=''>
                    <IconButton>
                    <WhatsApp/>
                    </IconButton>
                </a> 
                <a href=''>
                    <IconButton>
                    <Facebook/>
                    </IconButton>
                </a> 
            </div>
        </div>

    </Element>
  )
}

export default Contact