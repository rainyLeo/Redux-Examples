import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibilityFilter } from '../actions';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch) => ({
  onClick: bindActionCreators(setVisibilityFilter, dispatch)
  
  /* 写法 2
   onClick: () => {
     dispatch(setVisibilityFilter(ownProps.filter));
   }
   // Link中: onClick={() => onClick()}
  */
})

/* 写法3
  const mapDispatchToProps = {
    onClick: setVisibilityFilter
  };
*/

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;

