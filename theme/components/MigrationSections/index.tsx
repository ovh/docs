import { useLocalizeHref } from '../../hooks/useLocalizedHref';
import './index.scss';

interface SectionItem {
  title: string;
  description?: string;
  link: string;
}

interface Section {
  title: string;
  items: SectionItem[];
}

export interface MigrationSectionsProps {
  sections?: Section[];
}

export function MigrationSections({ sections }: MigrationSectionsProps) {
  const localizeHref = useLocalizeHref();
  if (!sections || sections.length === 0) return null;

  return (
    <div className="rp-migration-sections">
      {sections.map((section) => (
        <section key={section.title} className="rp-migration-sections__group">
          <h3 className="rp-migration-sections__group-title">
            {section.title}
          </h3>
          <div className="rp-migration-sections__grid">
            {section.items.map((item) => (
              <a
                key={item.link}
                href={localizeHref(item.link)}
                className="rp-migration-sections__card"
              >
                <div className="rp-migration-sections__card-content">
                  <h4 className="rp-migration-sections__card-title">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="rp-migration-sections__card-description">
                      {item.description}
                    </p>
                  )}
                </div>
                <span
                  className="rp-migration-sections__card-arrow"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
