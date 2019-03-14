import React from 'react'

const Loading = (props) => {
  if(props.error) {
    return <div>Error!</div>
  } else if (props.pastDelay) {
    return <div>正在加载.......</div>
  } else {
    return null
  }
}

export default Loading