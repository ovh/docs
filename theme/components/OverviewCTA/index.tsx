import { Button, renderHtmlOrText } from '@theme-original';
import './index.scss';

interface CTAAction {
  text: string;
  link: string;
  theme?: 'brand' | 'alt';
}

export interface OverviewCTAProps {
  title?: string;
  description?: string;
  actions?: CTAAction[];
}

export function OverviewCTA({ title, description, actions }: OverviewCTAProps) {
  if (!title) return null;

  return (
    <div className="rp-overview-cta">
      <h2 className="rp-overview-cta__title">{title}</h2>
      {description && (
        <p
          className="rp-overview-cta__description"
          {...renderHtmlOrText(description)}
        />
      )}
      {actions && actions.length > 0 && (
        <div className="rp-overview-cta__actions">
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
