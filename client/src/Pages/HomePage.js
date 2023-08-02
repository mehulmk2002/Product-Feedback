import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HomeContainer from '../Components/HomeContainer/HomeContainer'
import Feedback_Left_Sec from '../Components/HomeContainer/Feedback_Left_Sec'
import Feedback_Right_Sec from '../Components/HomeContainer/Feedback_Right_Sec'
import axios from 'axios'

const HomePage = (prop) => {

  const [feedback_data, setDetails] = useState([]);
  const [sort_category, setSort_category] = useState('All');
  const [sorting_order, setSorting_order] = useState('comments');
//Fetching filtered Data
  const loadDatafeedback_data=()=>{
    axios.get(`http://localhost:4000/product/${sort_category}/${sorting_order}`)
      .then(response => {
        setDetails(response.data.Products);
        console.log(response.data.Products)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(  () => {
    loadDatafeedback_data()
    loadAllData()
  }, [sort_category,sorting_order]);

//Fetch for Categories
  const [feedback_Whole_data, setFeedback_Whole_data] = useState([]);
  const loadAllData=()=>{
    axios.get('http://localhost:4000/product')
      .then(response => {
        setFeedback_Whole_data(response.data.Products);
        console.log(response.data.Products)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  useEffect(  () => {
    loadAllData()
  }, []);
  
  var result = [];
  var uniqueCategory = []
  {
  feedback_Whole_data.map((items, index) => (
    items.category_list.map((cat,index)=>( result.push(cat)))        
  ))
  uniqueCategory = [...new Set(result)]}

    const categoryWiseFilter=(category_str)=>{
      setSort_category(category_str)
      console.log("Suggestions are")
    }
  return (
    <div className='main-home-page'>
       <Navbar log_out={prop.log_out} isLogIn={prop.isLogIn} />
      <HomeContainer/>
      <div className='Feeback-section'>
        <Feedback_Left_Sec  isLogIn={prop.isLogIn} categoryWiseFilter={categoryWiseFilter} categories={uniqueCategory} />
        <Feedback_Right_Sec  log_out={prop.log_out}  isLogIn={prop.isLogIn} noOfSuggestions={feedback_Whole_data.length} loadData={loadDatafeedback_data} sorting_order={sorting_order} orderWiseFilter={setSorting_order} feedback_data={feedback_data}  setSorting_order={setSorting_order} />
      </div>
    </div>
  )
}

export default HomePage
