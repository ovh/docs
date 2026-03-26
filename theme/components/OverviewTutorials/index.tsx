import { Carousel } from '@components/Carousel';
import type { JSX } from 'react';
import './index.scss';

interface TutorialItem {
  title: string;
  link: string;
  details?: string;
}

export interface OverviewTutorialsProps {
  items?: TutorialItem[];
  sectionTitle?: string;
}

export function OverviewTutorials({
  items,
  sectionTitle = 'Tutoriels populaires',
}: OverviewTutorialsProps): JSX.Element {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="rp-overview-tutorials">
      {sectionTitle && (
        <h2 className="rp-overview-tutorials__title">{sectionTitle}</h2>
      )}
      <Carousel items={items} />
    </section>
  );
}
