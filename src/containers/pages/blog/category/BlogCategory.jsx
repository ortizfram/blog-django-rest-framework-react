import React from 'react'
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import {useEffect} from 'react'
import { get_blog_list_category, get_blog_list_category_page } from 'redux/actions/blog';
import FullWithLayout from 'hocs/layouts/FullWithLayout';
import CategoryBlogList from 'components/blog/CategoryBlogList';


function BlogCategory({
    get_blog_list_category,
     blog_list,
     count,
     get_blog_list_category_page
    }) {

    const params = useParams()
    const category_id = params.category_id


    
  return (
    <FullWithLayout>
        <CategoryBlogList
        blog_list={blog_list && blog_list} 
        count={count &&count} 
        get_blog_list_page={get_blog_list_category_page}
        category_id={category_id}
        />
    </FullWithLayout>
  )
}

const mapStateToProps = state => ({
    blog_list: state.blog.blog_list_category,
    count: state.blog.count
});


export default connect(mapStateToProps, {
    get_blog_list_category,
    get_blog_list_category_page
  })(BlogCategory);
