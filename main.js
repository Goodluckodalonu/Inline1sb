const sampleData = {
  name: 'Goodluck Odalonu',
  bio: 'A passionate frontend engineer with a love for building accessible and responsive web applications. Always learning and excited about new technologies.',
  avatarUrl: 'image/avaterMe.png',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/Goodluckodalonu' },
    { name: 'Twitter', url: 'https://x.com/OdalonuGoodluck' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/goodluck-odalonu' },
  ],
  hobbies: [
    'Reading about web accessibility',
    'Contributing to open source projects',
    'Hiking and nature photography',
    'Gaming and game development',
  ],
  dislikes: [
    'Poor user interfaces',
    'Inaccessible websites',
    'Unnecessary complexity',
    'Slow loading times',
  ],
};

const timeFormatter = new Intl.NumberFormat();
const root = document.getElementById('root');

function createSocialLinks(links) {
  return links
    .map(
      (link) => `<li class="profile-card__social-item"><a href="${link.avatarUrl}" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-${link.name.toLowerCase()}" class="profile-card__social-link">${link.name}</a></li>`,
    )
    .join('');
}

function createList(items, className) {
  return items.map((item) => `<li class="${className}">${item}</li>`).join('');
}

function renderProfileCard() {
  if (!root) return;

  root.innerHTML = `
    <div class="app">
      <main class="app__main">
        <article data-testid="test-profile-card" class="profile-card">
          <div class="profile-card__inner">
            <div class="profile-card__top">
              <figure class="profile-card__avatar-section">
                <img src="${sampleData.avatarUrl}" alt="${sampleData.name}" data-testid="test-user-avatar" class="profile-card__avatar" />
                <figcaption class="sr-only">${sampleData.name}'s profile picture</figcaption>
              </figure>

              <div class="profile-card__top-content">
                <header class="profile-card__header">
                  <h1 class="profile-card__name" data-testid="test-user-name">${sampleData.name}</h1>
                </header>

                <p class="profile-card__bio" data-testid="test-user-bio">${sampleData.bio}</p>

                <div class="profile-card__time-pill" aria-live="polite">
                  <div class="profile-card__time-label">CURRENT TIME (MS)</div>
                  <div class="profile-card__time-value" data-testid="test-user-time" aria-label="Current time in milliseconds">
                    ${timeFormatter.format(Date.now())} ms
                  </div>
                </div>
              </div>
            </div>

            <hr class="profile-card__divider" />

            <div class="profile-card__bottom">
              <nav class="profile-card__social-nav">
                <ul data-testid="test-user-social-links" class="profile-card__social-links">
                  ${createSocialLinks(sampleData.socialLinks)}
                </ul>
              </nav>

              <div class="profile-card__grid">
                <section class="profile-card__hobbies-section">
                  <h2 class="profile-card__section-title">Hobbies</h2>
                  <ul data-testid="test-user-hobbies" class="profile-card__hobbies-list">
                    ${createList(sampleData.hobbies, 'profile-card__hobby-item')}
                  </ul>
                </section>

                <section class="profile-card__dislikes-section">
                  <h2 class="profile-card__section-title dislikes">Dislikes</h2>
                  <ul data-testid="test-user-dislikes" class="profile-card__dislikes-list">
                    ${createList(sampleData.dislikes, 'profile-card__dislike-item')}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  `;
}

function updateTime() {
  const timeValue = document.querySelector('.profile-card__time-value');
  if (!timeValue) return;

  const now = Date.now();
  timeValue.textContent = `${timeFormatter.format(now)} ms`;
  timeValue.setAttribute('aria-label', `Current time in milliseconds ${now}`);
}

renderProfileCard();
updateTime();
setInterval(updateTime, 500);
