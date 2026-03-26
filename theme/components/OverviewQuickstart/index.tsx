import type { JSX } from 'react';
import conceptIcon from './concept.svg';
import configurationIcon from './configuration.svg';
import firstStepsIcon from './first-steps.svg';
import './index.scss';

const iconMap: Record<string, string> = {
  concept: conceptIcon,
  'first-steps': firstStepsIcon,
  configuration: configurationIcon,
};

interface QuickstartItem {
  title: string;
  link: string;
  details?: string;
  icon?: string;
  viewLabel?: string;
}

export interface OverviewQuickstartProps {
  items?: QuickstartItem[];
  sectionTitle?: string;
}

export function OverviewQuickstart({
  items,
  sectionTitle = 'Pour démarrer',
}: OverviewQuickstartProps): JSX.Element {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="rp-overview-quickstart">
      {sectionTitle && (
        <h2 className="rp-overview-quickstart__title">{sectionTitle}</h2>
      )}
      <div className="rp-overview-quickstart__grid">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="rp-overview-quickstart__card"
          >
            {item.icon && (
              <span className="rp-overview-quickstart__icon">
                {iconMap[item.icon] ? (
                  <img src={iconMap[item.icon]} alt="" width="24" height="24" />
                ) : (
                  item.icon
                )}
              </span>
            )}
            <span className="rp-overview-quickstart__card-title">
              {item.title}
            </span>
            {item.details && (
              <span className="rp-overview-quickstart__card-details">
                {item.details}
              </span>
            )}
            <span className="rp-overview-quickstart__card-link">
              View {item.viewLabel || item.title} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
