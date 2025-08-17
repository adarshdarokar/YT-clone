import React from "react";
import 'remixicon/fonts/remixicon.css';

const Sidebar = () => {
  const primary = [
    { icon: "ri-home-5-line", label: "Home" },
    { icon: "ri-video-line", label: "Shorts" },
    { icon: "ri-play-list-2-line", label: "Subscriptions" },
  ];

  const you = [
    { icon: "ri-history-line", label: "History" },
    { icon: "ri-folder-line", label: "Playlists" },
    { icon: "ri-film-line", label: "Your videos" },
    { icon: "ri-time-line", label: "Watch later" },
    { icon: "ri-thumb-up-line", label: "Liked videos" },
  ];

  return (
    <aside className="hidden md:block w-60 bg-black text-white fixed left-0 top-[94px] bottom-0 border-r border-neutral-800 overflow-y-auto">
      <ul className="px-3 py-3 border-b border-neutral-800">
        {primary.map((m, i) => (
          <li key={i} className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-neutral-900">
            <i className={`${m.icon} text-xl`} />
            <span>{m.label}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-xs text-neutral-400 px-4 mt-3 uppercase">You</h3>
      <ul className="px-3 py-3">
        {you.map((m, i) => (
          <li key={i} className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-neutral-900">
            <i className={`${m.icon} text-xl`} />
            <span>{m.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
