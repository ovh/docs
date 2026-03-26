import guideIcon from './guide.svg';
import './index.scss';

interface ResourceItem {
  title: string;
  description?: string;
  link: string;
  linkText?: string;
}

export interface MigrationResourcesProps {
  title?: string;
  description?: string;
  items?: ResourceItem[];
}

export function MigrationResources({
  title,
  description,
  items,
}: MigrationResourcesProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="rp-migration-resources">
      {title && <h2 className="rp-migration-resources__title">{title}</h2>}
      <div className="rp-migration-resources__grid">
        {items.map((item) => (
          <div key={item.link} className="rp-migration-resources__card">
            <div className="rp-migration-resources__card-icon">
              <img src={guideIcon} alt="" width="24" height="24" />
            </div>
            <h3 className="rp-migration-resources__card-title">{item.title}</h3>
            {item.description && (
              <p className="rp-migration-resources__card-description">
                {item.description}
              </p>
            )}
            <a
              href={item.link}
              className="rp-migration-resources__card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.linkText || 'Accéder'} &#8599;
            </a>
          </div>
        ))}
      </div>
      {description && (
        <p className="rp-migration-resources__description">{description}</p>
      )}
    </section>
  );
}
