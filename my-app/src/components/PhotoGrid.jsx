import React from 'react';
import './PhotoGrid.css';

const PhotoGrid = ({ photos = [] }) => {
  if (!photos || photos.length === 0) return <div className="photo-empty">No photos yet</div>;

  return (
    <div className="photo-grid">
      {photos.map((p) => (
        <a
          key={p.id}
          className="photo-link"
          href={p.links?.html || '#'}
          target="_blank"
          rel="noopener noreferrer"
          title={p.alt_description || p.description || 'Unsplash photo'}
        >
          <img
            src={p.urls?.small || p.urls?.thumb}
            alt={p.alt_description || p.description || 'Unsplash photo'}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
};

export default PhotoGrid;
