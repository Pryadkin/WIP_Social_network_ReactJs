import { connect } from 'react-redux';

// components
import Sitebar from './Sitebar';

let mapStateToProps = (state) => {
  return {
    state
  }
}

const SitebarContainer = connect(mapStateToProps)(Sitebar);

export default SitebarContainer;
