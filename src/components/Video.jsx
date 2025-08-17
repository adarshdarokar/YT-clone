// Video.jsx
import { nanoid } from 'nanoid';
import React from 'react';
import { Link } from 'react-router'; // <- important

const content = [
{
  "id": "unique-id",
  "title": "Virat Kohli's 149 vs England | Edgbaston 2018",
  "channel": "England and Wales Cricket Board",
  "views": "100M views",
  "time": "7 years ago",
  "userProfile": "https://i.ytimg.com/vi/yFlarM35vxA/hqdefault.jpg",
  "thumbnail": "https://i.ytimg.com/vi/yFlarM35vxA/maxresdefault.jpg",
  "videoId": "yFlarM35vxA",
  "description": "Experience Virat Kohli's remarkable 149-run innings against England at Edgbaston in 2018. Despite challenging conditions, Kohli's resilience and technique shone through, marking one of his finest Test performances. Watch the full highlights to relive this historic knock."
}

,
{
  "id": "unique-id",
  "title": "Virat Kohli's 82* vs Pakistan | T20 World Cup 2022",
  "channel": "ICC",
  "views": "100M views",
  "time": "2 years ago",
  "userProfile": "https://i.ytimg.com/vi/IEQixSBYTf0/hqdefault.jpg",
  "thumbnail": "https://i.ytimg.com/vi/IEQixSBYTf0/maxresdefault.jpg",
  "videoId": "IEQixSBYTf0",
  "description": "Witness Virat Kohli's masterclass in the 2022 T20 World Cup Super 12 match against Pakistan. Chasing 160, Kohli's unbeaten 82 off 53 balls anchored India's thrilling last-ball victory at the MCG. A performance that solidified his status as one of the game's greats. Watch the full highlights to relive the magic!"
}


,
  {
  "id": "unique-id",
  "title": "Virat Kohli's 254* vs South Africa | Pune 2019",
  "channel": "BCCI",
  "views": "100M views",
  "time": "5 years ago",
  "userProfile": "https://i.ytimg.com/vi/t02t381Itm4/hqdefault.jpg",
  "thumbnail": "https://i.ytimg.com/vi/t02t381Itm4/maxresdefault.jpg",
  "videoId": "t02t381Itm4",
  "description": "Watch Virat Kohli's career-best Test score of 254* against South Africa in Pune, 2019. Batting for nearly eight hours, Kohli dominated a strong attack with 33 fours and 2 sixes, powering India to 601/5 and an innings win by 137 runs."
}

  
  ,
{
  "id": "unique-id",
  "title": "Virat Kohli's 113* vs Punjab Kings | IPL 2016",
  "channel": "RCB Official",
  "views": "100M views",
  "time": "9 years ago",
  "userProfile": "https://wallpapers.com/images/hd/athlete-virat-kohli-9nn13isg56b911i7.jpg",
  "thumbnail": "https://wallpapers.com/images/hd/athlete-virat-kohli-9nn13isg56b911i7.jpg",
  "videoId": "Q56t3WCSGPA",
  "description": "Watch Virat Kohli's brilliant century against Punjab Kings in IPL 2016. Kohli's explosive innings led Royal Challengers Bangalore to a commanding total, showcasing his exceptional batting prowess. Relive the highlights of this memorable knock!"
}



,
  {
  "id": "unique-id",
  "title": "Virat Kohli's Match-Winning 84 vs Australia | Champions Trophy 2025",
  "channel": "BCCI",
  "views": "500K views",
  "time": "5 months ago",
  "userProfile": "https://images.mid-day.com/images/images/2023/jul/viratkohli100_d.jpg",
  "thumbnail": "https://images.mid-day.com/images/images/2023/jul/viratkohli100_d.jpg",
  "videoId": "gpKxohYVFH8",
  "description": "Watch Virat Kohli's brilliant 84 runs off 98 balls in the ICC Champions Trophy 2025 semi-final against Australia. His innings led India to a four-wicket victory, securing a spot in the final.",
  "videoUrl": "https://www.youtube.com/watch?v=gpKxohYVFH8",
  "imageUrl": "https://i.ytimg.com/vi/gpKxohYVFH8/maxresdefault.jpg",
  "channelUrl": "https://www.youtube.com/@BCCI",
  "source": "BCCI"
},

{
  "id": "unique-id",
  "title": "Virat Kohli's 113* vs Punjab Kings | IPL 2016",
  "channel": "RCB Official",
  "views": "100M views",
  "time": "9 years ago",
  "userProfile": "https://statico.sportskeeda.com/editor/2025/02/222b5-17403282521774-1920.jpg",
  "thumbnail": "https://statico.sportskeeda.com/editor/2025/02/222b5-17403282521774-1920.jpg",
  "videoId": "Q56t3WCSGPA",
  "description": "Watch Virat Kohli's brilliant century against Punjab Kings in IPL 2016. Kohli's explosive innings led Royal Challengers Bangalore to a commanding total, showcasing his exceptional batting prowess. Relive the highlights of this memorable knock!"
},

{
  "id": "unique-id",
  "title": "Virat Kohli's 113* vs Punjab Kings | IPL 2016",
  "channel": "RCB Official",
  "views": "100M views",
  "time": "9 years ago",
  "userProfile": "https://images.indianexpress.com/2023/11/Kohli-4.jpg",
  "thumbnail": "https://images.indianexpress.com/2023/11/Kohli-4.jpg",
  "videoId": "Q56t3WCSGPA",
  "description": "Watch Virat Kohli's brilliant century against Punjab Kings in IPL 2016. Kohli's explosive innings led Royal Challengers Bangalore to a commanding total, showcasing his exceptional batting prowess. Relive the highlights of this memorable knock!"
},
{
  "id": "unique-id",
  "title": "Virat Kohli's 113* vs Punjab Kings | IPL 2016",
  "channel": "RCB Official",
  "views": "100M views",
  "time": "9 years ago",
  "userProfile": "https://wallpaperaccess.com/full/8852973.jpg",
  "thumbnail": "https://wallpaperaccess.com/full/8852973.jpg",
  "videoId": "Q56t3WCSGPA",
  "description": "Watch Virat Kohli's brilliant century against Punjab Kings in IPL 2016. Kohli's explosive innings led Royal Challengers Bangalore to a commanding total, showcasing his exceptional batting prowess. Relive the highlights of this memorable knock!"
}

];

const Video = () => {
  return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {content.map((item) => (
    <div key={item.id}>
      <Link
        to={`/details/${item.id}`}
        state={item}
        className="block overflow-hidden aspect-video"
      >
        <img
          className="h-full w-full object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
      </Link>

      <div className="py-4 px-4 flex gap-4">
        <div className="h-9 w-9 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={item.userProfile}
            alt="channel logo"
          />
        </div>
        <div>
          <h5 className="font-semibold text-sm">{item.title}</h5>
          <p className="text-xs text-gray-300">
            {item.views} · {item.time}
          </p>
        </div>
        <i className="ri-more-2-line text-xl"></i>
      </div>
    </div>
  ))}
</div>
  );
};

export default Video;
