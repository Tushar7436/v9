
export const InfinityColorPreloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black z-11">
      <svg
        className="w-64 h-64"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6">
              <animate
                attributeName="stop-color"
                values="#3b82f6; #ef4444; #eab308; #22c55e; #3b82f6"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#ef4444">
              <animate
                attributeName="stop-color"
                values="#ef4444; #eab308; #22c55e; #3b82f6; #ef4444"
                dur="8s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <path
          d="M20.288 9.463a4.856 4.856 0 0 0-4.336-2.3 4.586 4.586 0 0 0-3.343 1.767c.071.116.148.226.212.347l.879 1.652.134-.254a2.71 2.71 0 0 1 2.206-1.519 2.845 2.845 0 1 1 0 5.686 2.708 2.708 0 0 1-2.205-1.518L13.131 12l-1.193-2.26a4.709 4.709 0 0 0-3.89-2.581 4.845 4.845 0 1 0 0 9.682 4.586 4.586 0 0 0 3.343-1.767c-.071-.116-.148-.226-.212-.347l-.879-1.656-.134.254a2.71 2.71 0 0 1-2.206 1.519 2.855 2.855 0 0 1-2.559-1.369 2.825 2.825 0 0 1 0-2.946 2.862 2.862 0 0 1 2.442-1.374h.121a2.708 2.708 0 0 1 2.205 1.518l.7 1.327 1.193 2.26a4.709 4.709 0 0 0 3.89 2.581h.209a4.846 4.846 0 0 0 4.127-7.378z"
          fill="url(#infinityGradient)"
          className="animate-fill-draw"
        />
      </svg>
    </div>
  );
};

export default InfinityColorPreloader;
