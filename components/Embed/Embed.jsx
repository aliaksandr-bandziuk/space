import YouTube from 'react-youtube';

export const Embed = ({ originalContent }) => {
  const videoUrl = originalContent.match(/https:\/\/www\.youtube\.com\/watch\?v=([\w-]+)/)?.[0];

  const opts = {
    width: '560',
    height: '315',
    origin: typeof window !== 'undefined' ? window.location.origin : '', // Проверяем доступность window перед использованием
  };

  return (
    <div className='max-w-[1220px] px-[10px] mx-auto flex justify-center'>
      {videoUrl && (
        <YouTube videoId={videoUrl} opts={opts} />
      )}
    </div>
  );
};
