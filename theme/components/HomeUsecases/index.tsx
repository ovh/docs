import { useFrontmatter, useI18n } from '@rspress/core/runtime';
import type { JSX } from 'react';
import { useLocalizeHref } from '../../hooks/useLocalizedHref';
import './index.scss';

interface Usecase {
  title: string;
  link?: string;
}

export interface HomeUsecasesProps {
  items?: Usecase[];
  sectionTitle?: string;
}

export function HomeUsecases({
  items: itemsProp,
  sectionTitle,
}: HomeUsecasesProps): JSX.Element {
  const { frontmatter } = useFrontmatter();
  const t = useI18n();
  const localizeHref = useLocalizeHref();
  const title = sectionTitle ?? t('homeUsecasesTitle');
  const items =
    itemsProp ?? (frontmatter as { usecases?: Usecase[] })?.usecases;

  if (!items || items.length === 0) {
    return null;
  }

  const isExternal = (href: string) =>
    href.startsWith('http://') || href.startsWith('https://');

  return (
    <section className="rp-home-usecases">
      {title && <h2 className="rp-home-usecases__title">{title}</h2>}
      <div className="rp-home-usecases__grid">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.link ? localizeHref(item.link) : '#'}
            className="rp-home-usecases__link"
            {...(item.link &&
              isExternal(item.link) && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
          >
            <span className="rp-home-usecases__link-text">{item.title}</span>
            <span className="rp-home-usecases__link-arrow">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
