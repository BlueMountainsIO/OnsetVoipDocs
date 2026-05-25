import React, {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';

export default function ZoomableImage({alt = '', className, src, ...props}) {
  const [isOpen, setIsOpen] = useState(false);
  const imageClassName = ['zoomable-image', className].filter(Boolean).join(' ');

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const openImage = () => {
    if (src) {
      setIsOpen(true);
    }
  };

  const onImageKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openImage();
    }
  };

  const lightbox = (
    <div
      aria-label={alt ? `${alt} full size` : 'Full size image'}
      aria-modal="true"
      className="image-lightbox"
      onClick={() => setIsOpen(false)}
      role="dialog">
      <button
        aria-label="Close full size image"
        className="image-lightbox__close"
        onClick={() => setIsOpen(false)}
        type="button">
        Close
      </button>
      <img
        alt={alt}
        className="image-lightbox__image"
        onClick={() => setIsOpen(false)}
        src={src}
      />
    </div>
  );

  return (
    <>
      <img
        {...props}
        alt={alt}
        className={imageClassName}
        onClick={openImage}
        onKeyDown={onImageKeyDown}
        role="button"
        src={src}
        tabIndex={0}
      />
      {isOpen && typeof document !== 'undefined'
        ? createPortal(lightbox, document.body)
        : null}
    </>
  );
}
