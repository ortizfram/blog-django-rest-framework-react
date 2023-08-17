import FullWithLayout from 'hocs/layouts/FullWithLayout'
import {connect} from 'react-redux'
import React from 'react'
import {useEffect} from 'react'
import { useParams } from 'react-router'
import { get_blog } from 'redux/actions/blog'


function BlogPost({
    
}) {

    const params = useParams()
    const slug = params.slug

    useEffect(()=>{
        get_blog()
    },[])

  return (
    <FullWithLayout>
        <div>
            BlogPost
        </div>
    </FullWithLayout>
  )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
    
})(BlogPost)
