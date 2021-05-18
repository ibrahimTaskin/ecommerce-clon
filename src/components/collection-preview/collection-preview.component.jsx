import React from 'react'
import { CollectionItem } from '../collection-item/collection-item.component'

import './collection-preview.style.scss'

export const CollectionPreview = ({title,items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='collection-title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {// sadece ilk 4 ürünü gösterdik.
                    items
                    .filter((item,index)=>index<4)
                    .map(({id,...otherProps})=>(
                        <CollectionItem key={id}{...otherProps}/>
                    ))
                }
            </div>
        </div>
    )
}
