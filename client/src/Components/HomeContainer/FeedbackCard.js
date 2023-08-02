import React, { useEffect, useState } from 'react'

import { FaCommentAlt,FaRegCommentDots } from "react-icons/fa";
import { TbCircleFilled,TbChevronUp } from "react-icons/tb";
import {IoSendSharp} from "react-icons/io5";
import axios from 'axios';
import Modal from 'react-modal';
import EditProduct from '../PopusForm/EditProduct';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    margin:'0'
  },
};

const FeedbackCard = (props) => {
    const [isShowcomments,setShowcomments]=useState(false)
    const [upvotes_val,setUpvotes_val]=useState(0)
    const [commentValue,setcommentValue]=useState('')

    const upvotes_Increament=(votes_val)=>{
        
        console.log(props.item._id+"=="+votes_val)
        const product_id=props.item._id
        axios.patch('http://localhost:4000/upvotes',{ votes_val,product_id,} )
        .then((response) => {
          console.log("response==upvotes");
          console.log(response.data);
          setUpvotes_val(votes_val)
    
        })
        .catch((error) => {
         
          console.error(error);
        });
      
    }

    const openComments=()=>{
        setShowcomments(!isShowcomments)
        console.log(commentValue)
    }
    
    const insertComment=()=>{
        const product_id=props.item._id
        console.log(commentValue)
        axios.patch('http://localhost:4000/addComment',{ commentValue,product_id,} )
        .then((response) => {
          console.log("response");
          console.log(response.data);
          setcommentValue('');
        })
        .catch((error) => {
          console.error(error);
        });
    }
    useEffect(()=>{
        props.reload()
    },[commentValue,upvotes_val])


    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  return (
 <div className='header-company-feedback-box'>
    <div className='company-feedback-box'>
        <div className='right-company-feedback-box'>
            <div className='company-logo'><img src={props.item.logoUrl} alt={props.item.imgUrl} /></div>
            <div style={{margin:'0 15px'}}>
                <div className='company-name-title'>{props.item.companyName}</div>
                <div className='company-disc'>{props.item.description} </div>
                <div className='company-cat-comment'>
                <div  className='company-cat-comment ccc'>
                   {props.item.category_list.map((cat,index)=>(<div className='category-btn-box'>{cat}</div>))} 
                  </div>
                    <div onClick={()=>{openComments()}} style={{color:'#ABABAB'}} ><FaRegCommentDots style={{fontSize:'22px'}}/><span className='commentStr' style={{fontSize:'18px'}}> Comment</span></div>
                    <div onClick={()=>openModal()} className='Edit-btn' >
                       <span >Edit</span>
                      </div>
                </div>
            </div>
        </div>

        <div className='left-company-feedback-box'>
            <div onClick={()=>{upvotes_Increament(parseInt(props.item.upvotes)+1)}} className='upvotes-count'>
                <div style={{textAlign:'center'}}><TbChevronUp style={{color:'#36416A'}}/></div>
                <div style={{textAlign:'center'}}>{props.item.upvotes}</div>
            </div>
            <div className='comment-count-sec' style={{marginTop:'30px',float:'right'}}>
                <label style={{ marginRight:'8px'}}>{props.item.comments.length}</label>
                <label><FaCommentAlt/></label>
            </div>
        </div>
    </div>

    
    {isShowcomments?
    <> 
    <div className='input-comment'>
        <input type='text' name='comment' placeholder='Add a comment....' value={commentValue} onChange={event => setcommentValue(event.target.value)} /> <div onClick={()=>{insertComment()}} ><IoSendSharp/></div>
    </div>
    <div className='list-comment'>{
     props.item.comments.map((comment, commentIndex) => (
      <div style={{display:'flex',fontSize:'14px',margin:'10px 0px'}}>
        <TbCircleFilled style={{fontSize:'22px',color:'#36416A',margin:'0 10px'}}/>
        <div style={{fontSize:'14px'}} key={commentIndex}>{comment}</div>
      </div>
            ))}
    </div></>
            :<></>
            }
    
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal" >
      <EditProduct item={props.item}/>
    </Modal>
    </div>

  )
}

export default FeedbackCard 