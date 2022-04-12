import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import asset from './assets/asset.jpg';



function RelatedProductCard (props) {

 if (props.prop1.photos[0].thumbnail_url) {
  return (
   <div name={props.prop1.style_id} className='relatedProductCards'>
     <svg onClick={props.prop2} xmlns="http://www.w3.org/2000/svg" name={props.prop1.style_id} className="h-5 w-5 comparison_but" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" name={props.prop1.style_id} d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
</svg>
<div onClick={props.addCard} name={props.prop1.style_id}>
<img alt='shoe' src={props.prop1.photos[0].thumbnail_url} name={props.prop1.style_id}></img>
      <h3 name={props.prop1.style_id}>SHOES</h3>
      <p name={props.prop1.style_id}>{props.prop1.name}</p>
      <span name={props.prop1.style_id}>{props.prop1.original_price}</span>
      <div name={props.prop1.style_id} className='stars'>review here</div>
</div>

    </div>
  )
 } else {
    return<div name={props.prop1.style_id} className='relatedProductCards'>
      <svg onClick={props.prop2} xmlns="http://www.w3.org/2000/svg" name={props.prop1.style_id} className="h-5 w-5 comparison_but" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" id={props.prop1.style_id} d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
</svg>
<div onClick={props.addCard} name={props.prop1.style_id}>
<img name={props.prop1.style_id} alt='whatever' src={require('./assets/asset.jpg')}></img>
      <h3 name={props.prop1.style_id}>SHOES</h3>
    <p name={props.prop1.style_id}>{props.prop1.name}</p>
    <span name={props.prop1.style_id}>{props.prop1.original_price}</span>
    <div name={props.prop1.style_id} className='stars'>review here</div>
</div>

    </div>
 }

}

export default RelatedProductCard;