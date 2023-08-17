import FullWithLayout from 'hocs/layouts/FullWithLayout'
import {useEffect} from 'react'
import {connect} from 'react-redux'
import { get_blog_list, get_blog_list_page } from 'redux/actions/blog'

function Blog({
  get_blog_list,
  get_blog_list_page,
  blog_list
}) {

  useEffect(()=>{
    get_blog_list,
    get_blog_list_page
  })

  return (
    <FullWithLayout>
        <div>
            Blog
        </div>
    </FullWithLayout>
  )
}

const mapStateToProps = state =>({
  blog_list: state.blog.blog_list
})

export default connect(mapStateToProps,{
  get_blog_list,
  get_blog_list_page
})(Blog)
