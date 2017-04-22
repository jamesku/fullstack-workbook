import { connect } from 'react-redux';
import wall from '../../components/wall';
import {deletePost} from '../../actions';

const mapStateToProps = (state) => {

  let hashtag = window.location.href.substr(22);

  const indexArray = state.reducers.HTOperations.HTWall.indexArray;

  const index = indexArray.indexOf(hashtag);
  let postArray = [];
  postArray = state.reducers.HTOperations.HTWall[index];

  if(!postArray){
    postArray = false;
  }
  
  return {
    postArray
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (movieId) => dispatch(deletePost(movieId))
  };
};

const Wall = connect(
  mapStateToProps,
  mapDispatchToProps
)(wall);

export default Wall;
