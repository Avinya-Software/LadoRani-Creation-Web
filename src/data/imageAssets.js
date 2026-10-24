/**
 * Centralized Image & Media Asset Registry
 * Organized into semantic subfolders in /images/ with fallback support
 */

export const IMAGES = {
  // Brand & Logos
  logo: {
    png: '/images/logo/logo_lado_rani_creation.png',
    webp: '/images/logo/logo_lado_rani_creation.webp',
    jpg: '/images/logo/logo_lado_rani_creation.jpg',
    cropped: '/images/logo/logo_lado_rani_creation_cropped.png',
    iconTransparent: '/images/logo/logo_icon_transparent.png',
    emblem: '/images/logo/lr_emblem_transparent.png',
  },

  // Hero Section
  hero: {
    posterJpg: '/images/hero/hero_machine_poster.jpg',
    posterWebp: '/images/hero/hero_machine_poster.webp',
    videoPoster: '/images/hero/hero_video_poster.jpg',
    videoMp4: '/images/hero/Hero_video.mp4',
    heroVideo: '/images/hero/Hero_video.mp4',
    videoWebm: '/images/videos/hero_machine_video.webm',
    originalVideo: '/images/videos/machine_printing_video_original.mp4',
  },

  // Industries We Serve
  industries: {
    saree: '/images/industries/crop_saree.webp',
    dupatta: '/images/industries/crop_dupatta.webp',
    kurti: '/images/industries/crop_kurti.webp',
    sportswear: '/images/industries/crop_sportswear.webp',
    curtains: '/images/industries/crop_curtains.webp',
    fabrics: '/images/industries/crop_fabrics.webp',
    swirl: '/images/industries/crop_swirl.webp',
  },

  // Services
  services: {
    machine: '/images/services/crop_machine.webp',
    fabrics: '/images/services/crop_fabrics.webp',
    textile1: '/images/services/photo_textile_1.jpg',
    textile2: '/images/services/photo_textile_2.jpg',
  },

  // About Us
  about: {
    machine: '/images/about/crop_machine.webp',
    textile1: '/images/about/photo_textile_1.jpg',
    textile2: '/images/about/photo_textile_2.jpg',
    banner: '/images/about/brand_banner_reference.png',
  },
};

export default IMAGES;
