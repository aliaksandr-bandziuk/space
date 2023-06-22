import YouTube from 'react-youtube';

import styles from './Embed.module.scss';

export const Embed = ({ originalContent }) => {
  const videoUrl = originalContent.match(/https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)/)?.[0];

  const opts = {
    width: '100%',
    height: '100%',
    origin: typeof window !== 'undefined' ? window.location.origin : '',
  };

  return (
    <div className='max-w-[1220px] px-[10px] mx-auto flex justify-center'>
      <div className={styles.embedContainer}>
        {videoUrl && (
          <YouTube videoId={videoUrl} opts={opts} containerClassName={styles.embedIframe} />
        )}
      </div>
    </div>
  );
};