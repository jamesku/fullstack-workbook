import { connect } from 'react-redux';
import wall from '../../components/wall';
import {deletePost} from '../../actions';

const mapStateToProps = (state) => {

  let hashtag = window.location.href.substr(22);
  // console.log(hashtag);
  // console.log("container");
  console.log(state.reducers.HTOperations);
  const indexArray = state.reducers.HTOperations.HTWall.indexArray;
console.log(indexArray);
  //const index = indexArray.indexOf(hashtag);
  let postArray = [];
  //postArray = state.reducers.HTOperations.HTWall[index];
console.log(postArray);
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
