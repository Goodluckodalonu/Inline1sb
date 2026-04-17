import React, { useState, useEffect } from 'react';
import './ProfileCard.css';

interface SocialLink {
  name: string;
  url: string;
}

interface ProfileCardProps {
  name: string;
  bio: string;
  avatarUrl: string;
  socialLinks: SocialLink[];
  hobbies: string[];
  dislikes: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  bio,
  avatarUrl,
  socialLinks,
  hobbies,
  dislikes,
}) => {
  const [currentTime, setCurrentTime] = useState<number>(Date.now());

  useEffect(() => {
    // Update time every 500ms
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 500);

    return () => clearInterval(interval);
  }, []);
  const nf = new Intl.NumberFormat();

  return (
    <article data-testid="test-profile-card" className="profile-card">
      <div className="profile-card__inner">
        <div className="profile-card__top">
          <figure className="profile-card__avatar-section">
            <img
              src={avatarUrl}
              alt={`${name}`}
              data-testid="test-user-avatar"
              className="profile-card__avatar"
            />
            <figcaption className="sr-only">{name}'s profile picture</figcaption>
          </figure>

          <div className="profile-card__top-content">
            <header className="profile-card__header">
              <h1 className="profile-card__name" data-testid="test-user-name">
                {name}
              </h1>
            </header>

            <p className="profile-card__bio" data-testid="test-user-bio">
              {bio}
            </p>

            <div className="profile-card__time-pill" aria-live="polite">
              <div className="profile-card__time-label">CURRENT TIME (MS)</div>
              <div
                className="profile-card__time-value"
                data-testid="test-user-time"
                aria-label={`Current time in milliseconds ${currentTime}`}
              >
                {nf.format(currentTime)} ms
              </div>
            </div>
          </div>
        </div>

        <hr className="profile-card__divider" />

        <div className="profile-card__bottom">
          <nav className="profile-card__social-nav">
            <ul
              data-testid="test-user-social-links"
              className="profile-card__social-links"
            >
              {socialLinks.map((link) => (
                <li key={link.name} className="profile-card__social-item">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`test-user-social-${link.name.toLowerCase()}`}
                    className="profile-card__social-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="profile-card__grid">
            <section className="profile-card__hobbies-section">
              <h2 className="profile-card__section-title">Hobbies</h2>
              <ul
                data-testid="test-user-hobbies"
                className="profile-card__hobbies-list"
              >
                {hobbies.map((hobby, index) => (
                  <li key={index} className="profile-card__hobby-item">
                    {hobby}
                  </li>
                ))}
              </ul>
            </section>

            <section className="profile-card__dislikes-section">
              <h2 className="profile-card__section-title dislikes">Dislikes</h2>
              <ul
                data-testid="test-user-dislikes"
                className="profile-card__dislikes-list"
              >
                {dislikes.map((dislike, index) => (
                  <li key={index} className="profile-card__dislike-item">
                    {dislike}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </article>
  );

};

export default ProfileCard;
