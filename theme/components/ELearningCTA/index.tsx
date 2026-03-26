import { Button, renderHtmlOrText } from '@theme-original';
import './index.scss';

interface CTAAction {
  text: string;
  link: string;
  theme?: 'brand' | 'alt';
}

export interface ELearningCTAProps {
  title?: string;
  description?: string;
  actions?: CTAAction[];
}

export function ELearningCTA({
  title,
  description,
  actions,
}: ELearningCTAProps) {
  if (!title) return null;

  return (
    <div className="rp-elearning-cta">
      <h2 className="rp-elearning-cta__title">{title}</h2>
      {description && (
        <p
          className="rp-elearning-cta__description"
          {...renderHtmlOrText(description)}
        />
      )}
      {actions && actions.length > 0 && (
        <div className="rp-elearning-cta__actions">
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
