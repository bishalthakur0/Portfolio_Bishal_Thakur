import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { getProfileBanner } from '../queries/getProfileBanner';
import { ProfileBanner as ProfileBannerType } from '../types';

const ProfileBanner: React.FC = () => {


  const [bannerData, setBannerData] = useState<ProfileBannerType | null>({
    backgroundImage: { url: '' },
    headline: "Software Engineer & Technical Consultant",
    resumeLink: { url: 'https://drive.google.com/file/d/10yc484HFFguaQQZIr9B_KAiQ4TDI4Ceq/view?usp=drive_link' },
    linkedinLink: 'https://www.linkedin.com/in/bishal-thakur',
    profileSummary: "Skilled in backend development, distributed systems, cloud, and debugging complex enterprise applications. Experienced in building microservices, event-driven systems, analytics pipelines, CI/CD workflows, and modular frontends. Currently working in Microsoft Dynamics 365 F&O (X++, C#, Azure) where I design, debug, and optimize large-scale enterprise financial modules."
  });

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getProfileBanner();
  //     setBannerData(data);
  //   }
  //   fetchData();
  // }, []);

  if (!bannerData) return <div>Loading...</div>;

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank');
  }

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
