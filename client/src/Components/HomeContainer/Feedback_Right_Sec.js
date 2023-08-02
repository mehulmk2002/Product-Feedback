import React, { useState,useEffect } from 'react'
import './HomeContainer.css'
import { Link } from 'react-router-dom';
import { FaCommentAlt,FaRegCommentDots } from "react-icons/fa";
import { TbCircleFilled } from "react-icons/tb";
import Modal from 'react-modal';
import AddProduct from '../PopusForm/AddProduct';
import axios from "axios";
import FeedbackCard from './FeedbackCard';
import Signup_Popup from '../PopusForm/Signup_Popup';
import Login_Popup from '../PopusForm/Login_Popup';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const Feedback_Right_Sec = (prop) => {


  let subtitle;  


  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [loginSignupFlag, setloginSignupFlag] = React.useState(true);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [feedback_data, setDetails] = useState([]);

  const loadData=()=>{
    axios.get('http://localhost:4000/product')
      .then(response => {
        setDetails(response.data.Products);
        console.log(response.data.Products)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  useEffect(  () => {
    loadData()
    prop.loadData()
  }, [modalIsOpen]);


  return (
    <div className='Feedback_Right_Sec_Container'>
  <div className='filter-bar'> 
      <div className='left-filter-bar'>
        <div className='suggestions'>{prop.noOfSuggestions} Suggestions</div>
        <div className='sortby-box'>
            <div style={{color:'#8B8B8B',marginTop: '3px'}}>Sort by: </div>
            <select style={{height:'25px'}}
                id="inquiry_status"
                name="inquiry_status"
                value={prop.sorting_order}
                onChange={(e)=>{prop.orderWiseFilter(e.target.value)}}
                >
                <option value="upvotes">Upvotes</option>
                <option value="comments">Comment</option>
            </select>
          </div>
        </div>
          <div> 
                <div onClick={openModal} className="add-btn-box" ><div className="add-btn">+ Add product</div></div> 
          </div>
    </div>

    {prop.feedback_data.map((items, index) => (
   <FeedbackCard item={items} reload={prop.loadData}/>
    ))}
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal" >
        {prop.isLogIn?<AddProduct/>:loginSignupFlag?<Signup_Popup setloginSignupFlag={setloginSignupFlag} />:<Login_Popup  log_out={prop.log_out} setloginSignupFlag={setloginSignupFlag} />}
        
    </Modal>


    </div>
  )
}

export default Feedback_Right_Sec