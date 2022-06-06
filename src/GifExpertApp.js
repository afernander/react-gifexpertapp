import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './componets/AddCategory';
import { GifGrid } from './componets/GifGrid';

export const GifExpertApp = props => {

  
   const [categories, setCategories] = useState(['One punch']);

    //    const handleApp = () => {
    //        setCategories( cats => [ ...categories, 'Hunter x Hunter']);
    //    }

  return (
    <Fragment>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories= {setCategories} />
        <hr />


        <ol>
            {
                categories.map( (category, i) => 
                <GifGrid 
                category={category} 
                key= {category}
                />
                )
            }
        </ol>
    </Fragment>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp