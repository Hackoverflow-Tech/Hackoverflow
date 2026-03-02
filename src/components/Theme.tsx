import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

const Themes = () => {
  const [showVideo, setShowVideo] = useState(false);

  // After 3 seconds text disappears and video appears
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .themes-section {
          min-height: 100vh;
          background: #0F0F0F;
          padding: 100px 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .themes-container {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .announcement-box {
          margin-top: 40px;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(252, 178, 22, 0.25);
          border-radius: 24px;
          padding: 80px 40px;
          position: relative;
          overflow: hidden;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.6s ease;
        }

        .animated-text {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(90deg, #FCB216, #E85D24, #FCB216);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
          opacity: 1;
          transition: opacity 0.8s ease;
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }

        .fade-out {
          opacity: 0;
        }

        .theme-video {
          width: 100%;
          border-radius: 20px;
          opacity: 0;
          transform: scale(0.95);
          transition: all 1s ease;
        }

        .theme-video.show {
          opacity: 1;
          transform: scale(1);
        }

        @media (max-width: 768px) {
          .animated-text {
            font-size: 2rem;
          }

          // .announcement-box {
          // 
          // }
        }
      `}</style>

      <section className="themes-section">
        <div className="themes-container">
          <SectionHeader
            badge=""
            title="Hackoverflow"
            gradientText="Theme"
            subtitle="The moment you've been waiting for."
          />

          <div className="">
            {!showVideo ? (
              <div className={`animated-text ${showVideo ? "fade-out" : ""}`}>
                THEME REVEALING ...
              </div>
            ) : (
              <video
                autoPlay
                loop
                muted
                playsInline
                className={`theme-video ${showVideo ? "show" : ""}`}
              >
                <source
                  src="/images/Theme/citywebsite0000-0180-1.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Themes;