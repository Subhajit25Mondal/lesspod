import { store } from 'react-easy-state';

const settingsStore = store({
  global: {
    siteName: '',
    tagline: '',
    disableBlogMenu: false,
    disableNewRegistrations: false,
    squareLogoURL: '',
    horizontalLogoURL: '',
  },
  landingPage: {},
  footer: {
    showNavigation: true,
    phoneNumber: '',
    aboutUs: '',
    address: '',
    email: '',
    facebookURL: '',
    twitterURL: '',
    showWidgets: true,
  },
});

export default settingsStore;