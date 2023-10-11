import envInfo from '../../env.json';

export const config = {
  apiUrl: envInfo.apiUrl,
  mainUrl: envInfo.mainUrl,
  videoUrl: envInfo.videoUrl,
  googleMapKey: envInfo.googleMapKey,
  profileImageUrl: envInfo.profileImageUploadUrl,
};

export default config;
