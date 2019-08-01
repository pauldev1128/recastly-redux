import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

  return dispatch => (searchYouTube(q));
};


export default handleVideoSearch;

// var handleVideoSearch = (q) => {
//   console.log(q);
//   //TODO:  Write an asynchronous action to handle a video search!

//   return dispatch => {
//     dispatch(handleVideoSearchStart(q));
//   }
// };

// const handleVideoSearchStart = (q) => ({
//   type: 'HANDLE_VIDEO_SEARCH_START',
//   videos: q
// })