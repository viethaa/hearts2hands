# Hearts2Hands README.md
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Change Log  

### `v3.0.0`  

#### 🎨 Complete Redesign
- The entire site has been rebuilt around a warm Vietnamese lacquer palette (```src/styles/theme.css```), replacing three files that each set their own background.
- Three typefaces now do real work — Bricolage Grotesque, Source Serif 4 and JetBrains Mono — all verified to render Vietnamese diacritics, replacing five loaded families of which only one actually rendered.
- Missions are now presented on a continuous lacquer rule with their numerals set on it; the timeline draws the same rule at full length with year markers.
- Events are now a dated index and blog posts an editorial set, giving the page rhythm instead of three identical card grids.
- Impact figures moved from the footer to a dedicated band under the hero.

#### 🐛 Bug Fixes
- **Fixed mobile navigation** – links were hidden behind a desktop-only breakpoint with no way to open them. Added a real menu with Escape-to-close, focus return and scroll lock.
- **Fixed duplicated footer stats** – every figure was printed once per language, so "52.4M VND raised" sat beside "52.4M VND Khuyên Góp." Each figure is now stated once, and "Khuyên góp" is spelled correctly.
- **Fixed footer social icons** – previously positioned with hardcoded negative margins that only lined up at one window width.
- **Fixed event row hover** – the highlight used to overlap the rows above and below.
- **Fixed a hash nav link** that did nothing when clicked a second time.
- **Fixed the photo gallery** loading 48 full-size images eagerly with resize params plain S3 was ignoring.
- Added missing alt text, ```rel="noreferrer"```, route keys and focus styles throughout.

#### 📰 Content
- All missions, events and posts now come from a single source (```src/data/posts.js```), instead of three places that had drifted out of sync.
- Added **Mission V – Nurturing Smiles** at Hương La Charity Home.
- Updated the total raised to **67M VND** and the mission count to **5**.

#### ⚖️ Housekeeping
- Removed 9 unused components and, with them, MUI, Joy, Emotion, react-awesome-reveal, scrollreveal and Tailwind.
- ```node_modules``` dropped from 608MB to 428MB.

Visit now: https://hearts2hands.netlify.app

#

### `v2.0.2`  

#### 📰 Updated Posts
- Added 2 Event Posts
- Added 1 Blog Post
- Updated Timeline

Visit now: https://hearts2hands.online

#

### `v2.0.1`  

#### 🐛 Bug Fixed
- Resolved file corruption in ```footer.css``` 

Visit now: https://hearts2hands.online

#

### `v2.0.0`

####  🎨 UI Redesign
- Website has been completely redesigned with updated UI and formatting.

Visit now: https://hearts2hands.online

#

### `v1.1.1`  

#### 🔧 Deployment Fixed
- The website has been migrated to a new hosting environment and deployed under a new domain.

Visit now: https://hearts2hands.online

#

### `v1.1.0`  

#### 🚀 New Features  
- 🖼 **Added a Photo Gallery Page** – Browse and view images in a dedicated gallery section.  

#### 🎨 UI Improvements  
- **Changed Background Image** – Fresh new look for better aesthetics.  

- **Buffed Opacity:**  
  - Quote block opacity increased to `95%`.  
  - Event boxes opacity increased to `90%`.  
  - News boxes opacity increased to `90%`.
    
- #️⃣ **Changed Hashtags Text Color** – Improved readability and contrast.  

#### ⚖️ Other Updates  
- **Added Copyright License to Footer** 

Visit now: https://hearts2hands.site

#

### `v1.0.0`  

### 🛠 Initial Commit  
The first official release of **Hearts2Hands**! This version lays the foundation for the website with essential pages and functionality.

#### 🌍 Landing Page  
- Includes a **web banner** for a welcoming introduction.  
- **Quote section** to inspire visitors.  
- **Blog post & News section** to share updates and stories.  
- **Footer** for additional site navigation and information.  

#### 🔗 Blog & News Navigation  
- Clicking on a **blog post** or **news box** redirects users to a **separate page** where they can read more details.  

#### 🕰 Timeline Page  
- A dedicated **Timeline Page** displaying all of **Hearts2Hands'** activities from its **foundation until now**.

Visit now: https://hearts2hands.site
