declare const __BASE_URL__: string;

const fixNavigationLinks = () => {
  const baseUrl = __BASE_URL__;

  if (baseUrl === '/') return;

  const linksToFix = document.querySelectorAll('a[href="/"], a[href^="/"][href$=".html"]');

  linksToFix.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    if (href === '/') {
      link.setAttribute('href', baseUrl);
    } else if (href.startsWith('/') && !href.startsWith(baseUrl)) {
      const newHref = baseUrl + href.slice(1);
      link.setAttribute('href', newHref);
    }
  });

  const imagesToFix = document.querySelectorAll('img[src^="/"]');
  imagesToFix.forEach((img) => {
    const src = img.getAttribute('src');
    if (src && src.startsWith('/') && !src.startsWith(baseUrl)) {
      img.setAttribute('src', baseUrl + src.slice(1));
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fixNavigationLinks);
} else {
  fixNavigationLinks();
}

export { fixNavigationLinks };
