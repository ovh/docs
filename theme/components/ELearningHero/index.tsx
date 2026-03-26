import { Button, renderHtmlOrText } from '@theme-original';
import './index.scss';

interface HeroAction {
  text: string;
  link: string;
  theme?: 'brand' | 'alt';
}

export interface ELearningHeroProps {
  title?: string;
  description?: string;
  actions?: HeroAction[];
}

export function ELearningHero({
  title,
  description,
  actions,
}: ELearningHeroProps) {
  if (!title) return null;

  return (
    <div className="rp-elearning-hero">
      <div className="rp-elearning-hero__illustration">
        <img src="/images/elearning.svg" alt="" aria-hidden="true" />
      </div>
      <div className="rp-elearning-hero__content">
        <h1 className="rp-elearning-hero__title">{title}</h1>
        {description && (
          <p
            className="rp-elearning-hero__description"
            {...renderHtmlOrText(description)}
          />
        )}
        {actions && actions.length > 0 && (
          <div className="rp-elearning-hero__actions">
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
    </div>
  );
}
