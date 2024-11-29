import 'dotenv/config';

const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

// Dynamic function to get the unique identifier based on environment
const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.asktiba.RNStudio.dev';
  }

  if (IS_PREVIEW) {
    return 'com.asktiba.RNStudio.preview';
  }

  return 'com.asktiba.RNStudio';
};

// Dynamic function to get the app name based on environment
const getAppName = () => {
  if (IS_DEV) {
    return 'RNStudio (Dev)';
  }

  if (IS_PREVIEW) {
    return 'RNStudio (Preview)';
  }

  return 'Studio: Experimentation';
};

export default {
  expo: {
    name: getAppName(), // Set app name dynamically based on the environment
    owner: 'asktiba',
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
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(), // Set the iOS bundleIdentifier dynamically
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#F8F4E1',
      },
      package: getUniqueIdentifier(), // Set the Android package name dynamically
    },
    extra: {
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
          RNMapboxMapsDownloadToken: process.env.MAPBOX_SECRET_KEY, // Use environment variable for the Mapbox secret key
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
