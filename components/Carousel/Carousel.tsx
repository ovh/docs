import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocalizeHref } from '../../theme/hooks/useLocalizedHref';
import './Carousel.css';

interface CarouselItemProps {
  title: string;
  details: string;
  link: string;
  icon?: string;
}

interface CarouselProps {
  items: CarouselItemProps[];
}

export default function Carousel({ items }: CarouselProps) {
  const localizeHref = useLocalizeHref();
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);

    // Calculate active index based on scroll position
    const itemWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 16; // 1rem gap
    const index = Math.round(scrollLeft / (itemWidth + gap));
    setActiveIndex(Math.min(index, items.length - 1));
  }, [items.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);

    return () => {
      container.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const itemWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 16;
    const scrollAmount = (itemWidth + gap) * (direction === 'left' ? -1 : 1);
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const itemWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 16;
    container.scrollTo({ left: index * (itemWidth + gap), behavior: 'smooth' });
  };

  return (
    <div className="carousel-wrapper">
      <button
        type="button"
        className="carousel__button carousel__button--left"
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        aria-label="Previous"
      >
        ←
      </button>

      <div className="carousel" ref={containerRef}>
        {items.map((item) => (
          <div className="carousel__item" key={item.title}>
            <a href={localizeHref(item.link)}>
              {item.icon && <span className="carousel__icon">{item.icon}</span>}
              <span className="carousel__title">{item.title}</span>
              <span className="carousel__text">{item.details}</span>
            </a>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel__button carousel__button--right"
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        aria-label="Next"
      >
        →
      </button>

      <div className="carousel__indicators">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={`carousel__indicator ${index === activeIndex ? 'carousel__indicator--active' : ''}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
