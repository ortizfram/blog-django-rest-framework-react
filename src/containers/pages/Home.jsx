import FullWithLayout from 'hocs/layouts/FullWithLayout'
import {connect} from 'react-redux'
import React from 'react'

function Home({

}) {

  return (
    <FullWithLayout>
        <div>
            Home
        </div>
    </FullWithLayout>
  )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
  
})(Home)
