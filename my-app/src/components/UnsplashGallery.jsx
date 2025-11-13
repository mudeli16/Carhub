import React, { useEffect, useState } from 'react';
import { searchPhotos, getRandomPhotos } from '../Api/unsplashService';
import PhotoGrid from './PhotoGrid';

const UnsplashGallery = ({ query = '' }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        if (query) {
          const data = await searchPhotos(query, 1, 12);
          if (!mounted) return;
          setPhotos(data.results || []);
        } else {
          const data = await getRandomPhotos(12);
          if (!mounted) return;
          // random returns array when count > 1
          setPhotos(Array.isArray(data) ? data : [data]);
        }
      } catch (e) {
        if (!mounted) return;
        setError(e.message || 'Failed to load photos');
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => {
      mounted = false;
    };
  }, [query]);

  if (loading) return <div>Loading photos…</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return <PhotoGrid photos={photos} />;
};

export default UnsplashGallery;
