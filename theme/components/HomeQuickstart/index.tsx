import { Carousel } from '@components/Carousel';
import { useFrontmatter, useI18n } from '@rspress/core/runtime';
import type { JSX } from 'react';
import './index.scss';

interface QuickstartItem {
  title: string;
  link: string;
  details?: string;
  icon?: string;
}

export interface HomeQuickstartProps {
  items?: QuickstartItem[];
  sectionTitle?: string;
}

export function HomeQuickstart({
  items: itemsProp,
  sectionTitle,
}: HomeQuickstartProps): JSX.Element {
  const { frontmatter } = useFrontmatter();
  const t = useI18n();
  const title = sectionTitle ?? t('homeQuickstartTitle');
  const items =
    itemsProp ?? (frontmatter as { carousel?: QuickstartItem[] })?.quickstart;

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="rp-home-quickstart">
      {title && <h2 className="rp-home-quickstart__title">{title}</h2>}
      <Carousel items={items} />
    </section>
  );
}
