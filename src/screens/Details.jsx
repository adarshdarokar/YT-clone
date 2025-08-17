import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router';

const Details = () => {
  const location = useLocation();
  const { id } = useParams();
  const video = location.state;

  if (!video) {
    return <p className='text-red-500 p-4'>Video not found for ID: {id}</p>;
  }

  // Like/Dislike logic
  const [likes, setLikes] = useState(120);
  const [dislikes, setDislikes] = useState(10);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) { setLikes(likes - 1); setLiked(false); }
    else {
      setLikes(likes + 1); setLiked(true);
      if (disliked) { setDislikes(dislikes - 1); setDisliked(false); }
    }
  };
  const handleDislike = () => {
    if (disliked) { setDislikes(dislikes - 1); setDisliked(false); }
    else {
      setDislikes(dislikes + 1); setDisliked(true);
      if (liked) { setLikes(likes - 1); setLiked(false); }
    }
  };

  // Share (Web Share API -> fallback copy URL)
  const currentUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/details/${id}`
    : '';

  const handleShare = async () => {
    const shareData = {
      title: video.title,
      text: `Check this video: ${video.title}`,
      url: currentUrl
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
        alert('Link copied to clipboard!');
      } else {
        prompt('Copy this link:', currentUrl);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Download
  const handleDownload = () => {
    if (video.videoUrl) {
      const a = document.createElement('a');
      a.href = video.videoUrl;
      a.download = `${video.title || 'video'}.mp4`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank');
    }
  };

  // Comments (fixed)
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "User1",
      text: "Nice innings",
      likes: 12,
    },
    {
      id: 2,
      user: "User2",
      text: "Masterclass",
      likes: 5,
    }
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const newEntry = {
      id: comments.length + 1,
      user: "You",
      text: newComment,
      likes: 0,
    };
    setComments([newEntry, ...comments]);
    setNewComment("");
  };

  const embedUrl = `https://www.youtube.com/embed/${video.videoId}`;

  return (
    <div className="px-4 md:px-6 font-['Roboto'] pb-6">
      {/* player */}
      <div className="w-full mb-4">
        <iframe
          className="w-full aspect-video md:h-[500px]"
          src={embedUrl}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* title */}
      <h2 className="text-lg md:text-xl font-semibold mb-2">{video.title}</h2>

      {/* channel + actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        {/* channel */}
        <div className='flex items-center'>
          <img src={video.userProfile} alt="User Profile" className="h-12 w-12 rounded-full mr-3" />
          <div>
            <p className='font-medium'>{video.channel}</p>
            <p className='text-gray-400 text-sm'>1.2M subscribers</p>
          </div>
          <button className="ml-4 px-4 h-10 bg-red-500 rounded-full text-white whitespace-nowrap">Subscribe</button>
        </div>

        {/* actions */}
        <div className="flex items-center gap-2">
          {/* like/dislike */}
          <div className="flex bg-neutral-800 rounded-full overflow-hidden">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 ${liked ? 'bg-blue-600' : ''}`}
              title="Like"
            >
              <i className="ri-thumb-up-line"></i>
              <span className="text-sm">{likes}</span>
            </button>
            <div className="w-px bg-neutral-700 my-2" />
            <button
              onClick={handleDislike}
              className={`flex items-center gap-2 px-4 py-2 rounded-r-full ${disliked ? 'bg-red-600' : ''}`}
              title="Dislike"
            >
              <i className="ri-thumb-down-line"></i>
              <span className="text-sm">{dislikes}</span>
            </button>
          </div>

          {/* share */}
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800"
            title="Share"
          >
            <i className="ri-share-forward-line"></i>
            <span className="hidden sm:block text-sm">Share</span>
          </button>

          {/* download */}
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800"
            title="Download"
          >
            <i className="ri-download-2-line"></i>
            <span className="hidden sm:block text-sm">Download</span>
          </button>
        </div>
      </div>

      {/* meta */}
      <p className='text-gray-400 text-sm mb-2'>
        {video.views || "1.5M"} views • {video.date || "2 days ago"}
      </p>

      {/* description */}
      <div className="bg-neutral-900 p-4 rounded-lg mb-6">
        <p className='text-sm whitespace-pre-line'>
          {video.description}
        </p>
      </div>

      {/* comments */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-4">{comments.length} Comments</h3>
        <form onSubmit={handleAddComment} className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-neutral-700" /> {/* empty DP circle */}
          <input
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 bg-transparent border-b border-neutral-700 focus:border-white outline-none py-2 text-sm"
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 rounded-full text-sm">Comment</button>
        </form>

        <div className="flex flex-col gap-6">
          {comments.map(c => (
            <div key={c.id} className="flex gap-3">
              {/* empty user dp */}
              <div className="h-10 w-10 rounded-full bg-neutral-700 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">{c.user}</p>
                <p className="text-sm text-gray-300">{c.text}</p>
                <div className="flex items-center gap-4 mt-1">
                  <button className="flex items-center gap-1 text-gray-400 hover:text-white text-sm">
                    <i className="ri-thumb-up-line"></i> {c.likes}
                  </button>
                  <button className="flex items-center gap-1 text-gray-400 hover:text-white text-sm">
                    <i className="ri-thumb-down-line"></i>
                  </button>
                  <button className="text-sm text-gray-400 hover:text-white">Reply</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
