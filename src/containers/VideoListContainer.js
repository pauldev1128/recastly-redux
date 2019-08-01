import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => {};

const mapDispatchToProps = (dispatch, ownProps) => {
  VideoListContainer: () => dispatch(VideoListContainer(ownProps.video))
}

// connect(mapDispatchToProps)(VideoListContainer)

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
