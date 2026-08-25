import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const DEFAULT_IMAGE = "https://i.postimg.cc/X7g6qc8w/1787506109489.jpg";
const DEFAULT_URL = "https://dbkdev.com/";

export const useSEO = ({ title, description, image = DEFAULT_IMAGE, url = DEFAULT_URL }: SEOProps) => {
  useEffect(() => {
    // Document Title
    document.title = title;

    // Helper to update or create meta tag
    const setMetaTag = (selector: string, attribute: string, attributeValue: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', image);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', url);

    // Twitter
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image);

  }, [title, description, image, url]);
};
