import { LinkCard } from '@components/LinkCard';
import { useFrontmatter, useI18n } from '@rspress/core/runtime';
import type { JSX } from 'react';
import './index.scss';

interface Explore {
  title: string;
  link?: string;
  details?: string;
}

// explore: can be a flat array OR an array of rows (array of arrays)
type ExploreData = Explore[] | Explore[][];

export interface HomeExploreProps {
  cards?: ExploreData;
  sectionTitle?: string;
}

export function HomeExplore({
  cards: cardsProp,
  sectionTitle,
}: HomeExploreProps): JSX.Element {
  const { frontmatter } = useFrontmatter();
  const t = useI18n();
  const title = sectionTitle ?? t('homeExploreTitle');
  const rawCards =
    cardsProp ?? (frontmatter as { explore?: ExploreData })?.explore;

  if (!rawCards || rawCards.length === 0) {
    return null;
  }

  const isRows = Array.isArray(rawCards[0]);

  return (
    <section className="rp-home-explore">
      {title && <h2 className="rp-home-explore__title">{title}</h2>}
      {isRows ? (
        (rawCards as Explore[][]).map((row, i) => (
          <div key={i} className="rp-home-explore__row">
            {row.map((card) => (
              <LinkCard
                key={card.title}
                href={card.link || '#'}
                title={card.title}
                description={card.details}
              />
            ))}
          </div>
        ))
      ) : (
        <div className="rp-home-explore__grid">
          {(rawCards as Explore[]).map((card) => (
            <LinkCard
              key={card.title}
              href={card.link || '#'}
              title={card.title}
              description={card.details}
            />
          ))}
        </div>
      )}
    </section>
  );
}
