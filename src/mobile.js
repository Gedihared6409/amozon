
  import React from 'react'
  import useMediaQuery from '@material-ui/core/useMediaQuery'
  export default function MyWrapperComponent(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    const textStyle = isMobile ? 'text-mobile' : 'text-mobile';
  
      return (
          <div>
              <div className={textStyle}>
       {props.children}
      </div>
          </div>
      )
  }
  