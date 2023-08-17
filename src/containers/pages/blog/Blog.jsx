import FullWithLayout from 'hocs/layouts/FullWithLayout'
import {connect} from 'react-redux'
import {useEffect} from 'react'
import BlogList from 'components/blog/BlogList'
import Header from 'components/blog/Header'

function Blog({
   
}) {

  return (
    <FullWithLayout>
        <Header />
        <BlogList />
    </FullWithLayout>

  )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
    
})(Blog)
