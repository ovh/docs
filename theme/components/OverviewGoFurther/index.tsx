import type { JSX } from 'react';
import './index.scss';

interface GoFurtherItem {
  title: string;
  link: string;
}

export interface OverviewGoFurtherProps {
  title?: string;
  items?: GoFurtherItem[];
}

const isExternal = (href: string) =>
  href.startsWith('http://') || href.startsWith('https://');

export function OverviewGoFurther({
  title = 'Aller plus loin',
  items,
}: OverviewGoFurtherProps): JSX.Element {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="rp-overview-go-further">
      {title && <h2 className="rp-overview-go-further__title">{title}</h2>}
      <ul className="rp-overview-go-further__list">
        {items.map((item) => {
          const external = isExternal(item.link);
          return (
            <li key={item.title} className="rp-overview-go-further__item">
              <a
                href={item.link}
                className="rp-overview-go-further__link"
                {...(external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                <span>{item.title}</span>
                {external ? (
                  <span className="rp-overview-go-further__icon rp-overview-go-further__icon--external">
                    <svg
                      aria-hidden="true"
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 1H11V8.5M11 1L1 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="rp-overview-go-further__icon">→</span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
