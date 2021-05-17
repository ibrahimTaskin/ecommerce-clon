import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './directory.style.scss'

class Directory extends React.Component{
    constructor(){
        super();

        this.state ={
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.picsum.photos/id/964/400/200.jpg?hmac=S80BLkyyY-nqLoxOoG_VEJF4yizXUe1IZegBZH_5LMU',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.picsum.photos/id/327/400/200.jpg?hmac=XDn1avtxh1hOzcxaX0tgamQxmNP9Eq4lHak7_uW5cFk',
                  id: 2,
                  linkUrl: 'jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.picsum.photos/id/694/400/200.jpg?hmac=Lcs2ZwEO4VyDVFA-fJWWyDkJWa65CABPpk271hx5t5A',
                  id: 3,
                  linkUrl: 'sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.picsum.photos/id/68/400/200.jpg?hmac=GWDbCvcSjiZGb1ctazpvtojY17W8XFla6cB7VqRueII',
                  size: 'large',
                  id: 4,
                  linkUrl: 'womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.picsum.photos/id/797/400/200.jpg?hmac=ERKQVVgWpdjl102UTOfDM07-QVh0-pwIp0Res0SXrE0',
                  size: 'large',
                  id: 5,
                  linkUrl: 'mens'
                }
              ]
        }
    }

    render(){


        return(
            <div className="directory-menu">
                {this.state.sections.map(({id,...otherSectionProps})=>(
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
                
            </div>
        )
    }


}
export default Directory;