export const GA_TRACKING_ID = 'UA-107887524-1';

export const trackPageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
  });
};

export const trackEvent = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};