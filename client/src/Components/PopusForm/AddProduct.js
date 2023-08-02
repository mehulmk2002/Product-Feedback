import React, { useState } from 'react';
import FeedbackCard from './FeedbackCard';
import './PopusForm.css'
import axios from 'axios';

const AddProduct = (props) => {
  const [companyName, setCompanyName] = useState('');
  const [category, setCategory] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [productLink, setProductLink] = useState('');
  const [description, setDescription] = useState('');

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
    axios.post('http://localhost:4000/product',{ companyName,
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
      <div className='add-product-form-header'>Add your product</div>
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

export default AddProduct;
