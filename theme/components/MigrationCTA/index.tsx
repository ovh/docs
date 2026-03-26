import { Button, renderHtmlOrText } from '@theme-original';
import './index.scss';

interface CTAAction {
  text: string;
  link: string;
  theme?: 'brand' | 'alt';
}

export interface MigrationCTAProps {
  title?: string;
  description?: string;
  actions?: CTAAction[];
}

export function MigrationCTA({
  title,
  description,
  actions,
}: MigrationCTAProps) {
  if (!title) return null;

  return (
    <div className="rp-migration-cta">
      <h2 className="rp-migration-cta__title">{title}</h2>
      {description && (
        <p
          className="rp-migration-cta__description"
          {...renderHtmlOrText(description)}
        />
      )}
      {actions && actions.length > 0 && (
        <div className="rp-migration-cta__actions">
          {actions.map((action) => (
            <Button
              type="a"
              key={action.link}
              href={action.link}
              theme={action.theme}
              {...renderHtmlOrText(`${action.text} →`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
