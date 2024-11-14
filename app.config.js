import 'dotenv/config';

export default {
  expo: {
    name: 'RN-Studio',
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
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.asktiba.RNStudio',
    },
    extra: {
      eas: {
        projectId: '06f7012d-de56-4a2c-a7b8-6f4d3af9a766',
      },
    },
    plugins: [
      'expo-router',
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