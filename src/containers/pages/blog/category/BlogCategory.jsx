import React from 'react'
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import {useEffect} from 'react'
import { get_blog_list_category } from 'redux/actions/blog';
import FullWithLayout from 'hocs/layouts/FullWithLayout';


function BlogCategory({get_blog_list_category, blog_list}) {

    const params = useParams()
    const category_id = params.category_id

    useEffect(()=>{
        get_blog_list_category()
    },[])
    
  return (
    <FullWithLayout>
      Blog Category
    </FullWithLayout>
  )
}

const mapStateToProps = state => ({
    blog_list: state.blog.blog_list_category
});


export default connect(mapStateToProps, {
    get_blog_list_category
  })(BlogCategory);
