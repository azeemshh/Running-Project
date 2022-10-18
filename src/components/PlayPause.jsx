import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ song, handlePlay, handlePause, activeSong, isPlaying }) => (
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle
      size={40}
      className='text-gray-300'
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={40}
      className='text-gray-300'
      onClick={handlePlay}
    />
  )
);

export default PlayPause;
