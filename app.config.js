import 'dotenv/config';

// Define environment variables
const APP_VARIANT = process.env.APP_VARIANT || 'production'; // Fallback to 'production' if undefined
const IS_DEV = APP_VARIANT === 'development';
const IS_PREVIEW = APP_VARIANT === 'preview';
const IS_PRODUCTION = process.env.NODE_ENV === 'production'; // Ensure NODE_ENV is set properly

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.asktiba.RNStudio.dev';
  }
  if (IS_PREVIEW) {
    return 'com.asktiba.RNStudio.preview';
  }
  return 'com.asktiba.RNStudio';
};
const getAppName = () => {
  if (IS_DEV) {
    return 'CodeBloom (Dev)';
  }
  if (IS_PREVIEW) {
    return 'CodeBloom (Preview)';
  }
  return 'CodeBloom';
};

export default {
  expo: {
    name: getAppName(),
    slug: 'RN-Studio',
    version: '1.0.0',
    scheme: 'RN-Studio',
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/favicon.png',
    },
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#F8F4E1',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#F8F4E1',
      },
      package: getUniqueIdentifier(),
    },
    extra: {
      appVariant: APP_VARIANT,
      isDev: IS_DEV,
      isPreview: IS_PREVIEW,
      isProduction: IS_PRODUCTION,
      router: {
        origin: false,
      },
      eas: {
        projectId: '06f7012d-de56-4a2c-a7b8-6f4d3af9a766',
      },
    },
    updates: {
      url: 'https://u.expo.dev/06f7012d-de56-4a2c-a7b8-6f4d3af9a766',
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
    plugins: [
      'expo-router',
      [
        'expo-font',
        {
          fonts: [
            './assets/fonts/Roboto-Regular.ttf',
            './assets/fonts/RubikGlitchPop-Regular.ttf',
            './assets/fonts/Inter-VariableFont_opsz,wght.ttf',
          ],
        },
      ],
      [
        '@rnmapbox/maps',
        {
          RNMapboxMapsVersion: '11.4.0',
          RNMapboxMapsDownloadToken: process.env.MAPBOX_SECRET_KEY, // Uses environment variable here
        },
      ],
      [
        'expo-location',
        {
          locationWhenInUsePermission: 'Show current location on map.',
        },
      ],
    ],
  },
};
