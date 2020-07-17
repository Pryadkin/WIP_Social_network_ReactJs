import React from 'react';
import StoreContext from '../../redux/StoreContext';

// components
import Sitebar from './Sitebar';

const SitebarContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {

          return (
            <Sitebar state={store.getState()} />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default SitebarContainer;
