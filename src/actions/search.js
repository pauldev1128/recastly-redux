import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
    // create an object containing keys and query
    var options = {
      key: YOUTUBE_API_KEY,
      query: q
    }
    // dipatch action, which takes in data
    // dispatch in callback

    return dispatch => {
      searchYouTube(options, (videos) => {
        dispatch(changeVideo(videos[0]))
        dispatch(changeVideoList(videos))
      })
    }
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
// });

// const handleVideoSearchDone = (q) => ({
//   type: 'HANDLE_VIDEO_SEARCH_DONE',
//   videos: q
// });
