'use client';

import { useEffect } from 'react';

const useInstagramEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', '//www.instagram.com/embed.js');
    script.async = true;
    document.body.appendChild(script);
  }, []);
};

export default useInstagramEmbed;
