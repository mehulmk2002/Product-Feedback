import React, { useState } from 'react';
import FeedbackCard from './FeedbackCard';
import './PopusForm.css'
import axios from 'axios';

const EditProduct = (props) => {
   
  const [companyName, setCompanyName] = useState(props.item.companyName);
  const [category, setCategory] = useState(props.item.category_list.toString());
  const [logoUrl, setLogoUrl] = useState(props.item.logoUrl);
  const [productLink, setProductLink] = useState(props.item.productLink);
  const [description, setDescription] = useState(props.item.description);
  const [_id, setId] = useState(props.item._id);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      companyName,
      category,
      logoUrl,
      productLink,
      description,
    };
const category_list=category.split(',');
    axios.patch('http://localhost:4000/product',{ _id,companyName,
    category_list,
    logoUrl,
    productLink,
    description,} )
    .then((response) => {
      console.log("response");
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
    setCompanyName('');
    setCategory('');
    setLogoUrl('');
    setProductLink('');
    setDescription('');
  };

  return (
    <div className='popupform-main-container'>
    <div className='add-product-form-container'>
      <div className='add-product-form-header'>Edit your product</div>
      <form onSubmit={handleSubmit}>
        <div className='product-input-container'>
          <input
            type='text'
            placeholder='Name of the company'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className='product-input-container'>
          <input
            type='text'
            placeholder='Category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className='product-input-container'>
          <input
            type='text'
            placeholder='Add logo url'
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
          />
        </div>

        <div className='product-input-container'>
          <input
            type='text'
            placeholder='Link of product'
            value={productLink}
            onChange={(e) => setProductLink(e.target.value)}
          />
        </div>

        <div className='product-input-container'>
          <input
            type='text'
            placeholder='Add description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

       <div className='product-btn'><button  type='submit'>+Add</button></div> 
      </form>
    </div>
    <div className='Popup-FeedbackCard' style={{margin:"0"}}><FeedbackCard/></div>
    </div>
  );
};

export default EditProduct;
