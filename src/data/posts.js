// Single source of truth for every mission, event and story.
//
// Previously this data lived in three places (landingpage.js, event_info.js and
// content.json) and had already drifted apart — Mission IV was dated Oct 6 in one
// file and Oct 16 in another. Long-form body copy still lives in content.json,
// keyed by `slug`; everything needed to *list* a post lives here.
//
// `kind` drives which section of the landing page a post appears in:
//   mission — the numbered sequence, the spine of the site
//   event   — fundraisers, fairs, collaborations
//   story   — written pieces, no fieldwork attached

const S3 = 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images';

const posts = [
  {
    slug: 'mission5',
    kind: 'mission',
    missionNo: 5,
    numeral: 'V',
    title: 'Nurturing Smiles',
    place: 'Hương La Charity Home',
    date: '2026-04-20',
    image: `${S3}/mission5.png`,
    blurb:
      'At Hương La Charity Home we ran a session on nutrition for the children, using picture-led lessons and mini games so they could learn about a healthy, balanced diet through play.',
    tags: ['mission', 'nutrition', 'huong-la'],
  },
  {
    slug: 'monci-bakesale',
    kind: 'event',
    title: 'MONCI x H2H Bakesale',
    place: 'BIS Hanoi',
    date: '2025-12-21',
    image: `${S3}/moncih2h.jpg`,
    blurb:
      'Hearts2Hands and Monci Bakehouse collaborated and fundraised together at BIS International School during their Christmas Fair.',
    tags: ['bakesale', 'monci', 'christmas-fair'],
  },
  {
    slug: 'sef-collaboration',
    kind: 'event',
    title: 'SEF Collaboration',
    place: 'Bệnh viện E, Hà Nội',
    date: '2025-12-01',
    image: `${S3}/sefh2h.jpg`,
    blurb:
      'Hearts2Hands members volunteered with our partner organization SEF at Bệnh viện E, where we provided young patients with essential items and emotional encouragement.',
    tags: ['collaboration', 'sef', 'hospital-visit'],
  },
  {
    slug: 'mission4',
    kind: 'mission',
    missionNo: 4,
    numeral: 'IV',
    title: 'Spreading Love',
    place: 'Xóm Chạy Thận, Hà Nội',
    date: '2025-10-16',
    image: `${S3}/mision4.jpg`,
    blurb:
      'Mission IV took place at Xóm Chạy Thận, where we spent time with the community, organized meaningful activities, and decorated a joyful festival environment for underprivileged patients.',
    tags: ['mission', 'autumn-festival', 'gifts'],
  },
  {
    slug: 'mission3',
    kind: 'mission',
    missionNo: 3,
    numeral: 'III',
    title: 'Spreading Smiles',
    place: 'Mái Ấm Thánh Tâm, Hà Nội',
    date: '2025-08-05',
    image: `${S3}/mission3.jpg`,
    blurb:
      "Our third mission focuses on enhancing the wellbeing of children by improving the facilities and accommodations available in Mái Ấm Thánh Tâm's playground.",
    tags: ['mission', 'smiles', 'community'],
  },
  {
    slug: 'storyofmaiamthanhtam',
    kind: 'story',
    title: 'The Story of Mái Ấm Thánh Tâm',
    place: 'Hà Nội',
    date: '2025-08-04',
    image: `${S3}/maiamthanhtam_story.png`,
    blurb:
      'Mái Ấm Thánh Tâm is a charitable home dedicated to caring for orphaned, abandoned, or underprivileged children. Operated by Catholic nuns and volunteers, the shelter provides a safe and nurturing environment.',
    tags: ['story', 'orphanage'],
  },
  {
    slug: 'volleyball-fundraising',
    kind: 'event',
    title: 'Volleyball Fundraiser',
    place: 'Concordia Hanoi',
    date: '2025-02-08',
    image: `${S3}/volleyball_fundraise.jpg`,
    blurb:
      "Hearts2Hands participated in a fundraising activity during Concordia Hanoi's charity volleyball tournament, selling food and drinks to raise funds for our mission at Mái Ấm Thánh Tâm.",
    tags: ['volleyball', 'fundraiser', 'community'],
  },
  {
    slug: '2024-recap',
    kind: 'story',
    title: '2024 Recap',
    place: 'Hà Nội',
    date: '2024-12-31',
    image: `${S3}/h2hfoundation.jpg`,
    blurb:
      'A look back at 2024, and all the missions and achievements we accomplished in our first year.',
    tags: ['recap', 'year-one'],
  },
  {
    slug: 'mission2',
    kind: 'mission',
    missionNo: 2,
    numeral: 'II',
    title: 'Joy for Young Hearts',
    place: 'Mái Ấm Thánh Tâm, Hà Nội',
    date: '2024-12-15',
    image: `${S3}/mission2.jpg`,
    blurb:
      "Hearts2Hands' second mission at Mái Ấm Thánh Tâm orphanage focuses on the children's essential needs and spreading joy through gifts, bringing warmth and hope during the holiday season.",
    tags: ['mission', 'joy', 'gifts'],
  },
  {
    slug: 'our-goal-sdg10',
    kind: 'story',
    title: 'Our Goal: SDG 10',
    place: 'Hà Nội',
    date: '2024-12-15',
    image: `${S3}/sdg10.png`,
    blurb:
      'Hearts2Hands focuses on SDG 10 because reducing inequalities is at the heart of our mission. We aim to bridge gaps in access to education, resources and opportunities.',
    tags: ['sdg10', 'youth-equity'],
  },
  {
    slug: 'maiam-visit',
    kind: 'event',
    title: 'Mái Ấm Thánh Tâm Visit',
    place: 'Mái Ấm Thánh Tâm, Hà Nội',
    date: '2024-12-14',
    image: `${S3}/visit.jpg`,
    blurb:
      'To prepare for Mission II we visited Mái Ấm Thánh Tâm, spending time with the children and residents to better understand their needs before the mission itself.',
    tags: ['visit', 'scouting', 'orphanage'],
    hasPage: false,
  },
  {
    slug: 'bvis-xmas-fair',
    kind: 'event',
    title: 'BVIS Christmas Fair',
    place: 'BVIS Hanoi',
    date: '2024-12-12',
    image: `${S3}/santa.png`,
    blurb:
      "Hearts2Hands took part in the British Vietnamese International School Hanoi Christmas fair, presenting our goals and mission to raise awareness for Vietnamese youth equity.",
    tags: ['xmas-fair', 'bvis', 'festive'],
  },
  {
    slug: 'service-fair',
    kind: 'event',
    title: 'Concordia Service Fair',
    place: 'Concordia Hanoi',
    date: '2024-10-17',
    image: `${S3}/cishservfair.jpg`,
    blurb:
      "We presented at an introductory event at Concordia Hanoi and hosted our own booth at the Service Fair, sharing our club's mission, perspective and goals.",
    tags: ['concordia', 'service-fair', 'introductory'],
  },
  {
    slug: 'mission1',
    kind: 'mission',
    missionNo: 1,
    numeral: 'I',
    title: 'Pathways to E-Education',
    place: 'Tạ Xã 1 School, Phú Thọ',
    date: '2024-10-11',
    image: `${S3}/h2hkidsbanner.JPG`,
    blurb:
      'Our first mission focuses on improving education quality by providing computers to Tạ Xã 1 school in Phú Thọ, Cẩm Khê — creating new educational opportunities through access to technology.',
    tags: ['mission', 'education', 'donation'],
  },
  {
    slug: 'foundation',
    kind: 'event',
    title: 'Hearts2Hands Founded',
    place: 'Hà Nội',
    date: '2024-08-20',
    image: `${S3}/h2hfoundation.jpg`,
    blurb:
      'Hearts2Hands was founded to support Vietnamese young people in line with SDG 10, built on the belief that collective action creates change.',
    tags: ['foundation', 'youth-equity', 'sdg10'],
    hasPage: false,
  },
];

// Newest first, everywhere.
const byDateDesc = (a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0);

export const allPosts = [...posts].sort(byDateDesc);
export const missions = allPosts.filter((p) => p.kind === 'mission');
export const events = allPosts.filter((p) => p.kind === 'event');
export const stories = allPosts.filter((p) => p.kind === 'story');

/** Posts that have a detail route. Some timeline entries are milestones only. */
export const linkTo = (post) => (post.hasPage === false ? null : `/${post.slug}`);

/** "16 Oct 2025" — used wherever a full date is shown. */
export const formatDate = (iso) => {
  const [y, m, d] = iso.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${Number(d)} ${months[Number(m) - 1]} ${y}`;
};

/** Split for the timeline's date marker. */
export const splitDate = (iso) => {
  const [y, m, d] = iso.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return { day: d, month: months[Number(m) - 1], year: y };
};

export default allPosts;
