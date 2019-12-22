import React from 'react';
import Sitebar from './Sitebar';
import StoreContext from '../../redux/StoreContext';


const SitebarContainer = () => {
  return (
    <StoreContext.Consumer> 
      {
        store => {
          
          return (
            <Sitebar state={store.getState()}/>
          )
        }  
      }      
    </StoreContext.Consumer>
  )
}

export default SitebarContainer;
