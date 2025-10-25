import agencyImage from "./Shubham_agency.png";
import aiPetCareImage from "./Ai_petcare.png";
import bandTemplateImage from "./Shubham_Band_project.png";
import bannerImage from "./Bannar Big.svg";
import booklyImage from "./Shubham_Bookly.png";
import cocktailExplorerImage from "./Shubham_Cocktail.png";
import coffeeShopImage from "./Shubham_cofee.png";
import colorFlipperImage from "./Shubham_ColorFlipper.png";
import colorPaletteImage from "./Shubham_Color_Generator.png";
import cricketCraftImage from "./shubham_cricket_Craft.png";
import doctorMobileImage from "./Shubham_doctor_app.png";
import doctorWebImage from "./doctorWebShubham.png";
import ecommerceImage from "./Shubham_Eccomerce.png";
import fallbackImage from "./shubham_no_Image_found.jpg";
import fiverrLogo from "./fiverr-1.svg";
import freelancerLogo from "./freelancer-.jpg";
import gingeeGrainsImage from "./GingeeGrains.png";
import globeImage from "./Shubham_glob.jpeg";
import lipSyncPreview from "./lypsync.mp4";
import logoImage from "./sslogo.png";
import menuTabsImage from "./Shubham_Menu.png";
import movieAppImage from "./Shubham_Moview_app.png";
import parallaxImage from "./Shubham_Parallex.jpg";
import physiotherapyImage from "./shubham_physiotherapy_demo.png";
import responsiveStartupImage from "./Shubham_Responsive_img.png";
import sliderStarImage from "./Shubham_star.png";
import testimonialSliderImage from "./Shubham_Card.png";
import textBackgroundImage from "./Shubham_textBackgound.png";
import travelPlannerImage from "./Shubham_Travel.png";
import universityImage from "./Shubham_University.png";
import upworkLogo from "./upwork.svg";
import weatherAppImage from "./Shubham_Weather.png";
import realEstatePrimaryImage from "./RealEstateShubham.png";
import realEstateSecondaryImage from "./realEstate2Shubham.png";

export const projectMedia = {
  doctorMobile: doctorMobileImage,
  colorPalette: colorPaletteImage,
  travelPlanner: travelPlannerImage,
  responsiveStartup: responsiveStartupImage,
  cocktailExplorer: cocktailExplorerImage,
  bandTemplate: bandTemplateImage,
  ecommerceStorefront: ecommerceImage,
  colorFlipper: colorFlipperImage,
  movieApp: movieAppImage,
  university: universityImage,
  testimonialSlider: testimonialSliderImage,
  menuShowcase: menuTabsImage,
  agencyLanding: agencyImage,
  bookly: booklyImage,
  weatherDashboard: weatherAppImage,
  shoperyBanner: bannerImage,
  doctorWeb: doctorWebImage,
  realEstatePrimary: realEstatePrimaryImage,
  realEstateSecondary: realEstateSecondaryImage,
  cricketCraft: cricketCraftImage,
  gingeeGrains: gingeeGrainsImage,
  lipSyncDemo: lipSyncPreview,
  coffeeShop: coffeeShopImage,
  physiotherapy: physiotherapyImage,
  aiPetCare: aiPetCareImage,
} as const;

export type ProjectMediaKey = keyof typeof projectMedia;

export const backgroundMedia = {
  globe: globeImage,
  star: sliderStarImage,
  parallax: parallaxImage,
  textTexture: textBackgroundImage,
} as const;

export const brandMedia = {
  logo: logoImage,
  freelancer: freelancerLogo,
  upwork: upworkLogo,
  fiverr: fiverrLogo,
} as const;

export const sharedMedia = {
  fallback: fallbackImage,
} as const;

export const mediaAssets = {
  project: projectMedia,
  background: backgroundMedia,
  brand: brandMedia,
  shared: sharedMedia,
} as const;

export default mediaAssets;
