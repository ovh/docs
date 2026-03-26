import type { Feature } from '@rspress/core';
import { useFrontmatter } from '@rspress/core/runtime';
import { renderHtmlOrText, useLinkNavigate } from '@theme-original';
import type { JSX } from 'react';
import './index.scss';
import { useCardAnimation } from './useCardAnimation';

function HomeFeatureItem({ feature }: { feature: Feature }): JSX.Element {
  const { bgImage, icon, title, details, link } = feature;

  const { innerProps, outerProps, outerRef, shineDom } = useCardAnimation();
  const navigate = useLinkNavigate();
  const hasImage = Boolean(bgImage);

  return (
    <div
      key={title}
      {...outerProps}
      className={`rp-home-feature__item  `}
      ref={outerRef}
    >
      <div className="rp-home-feature__item-wrapper " {...innerProps}>
        <article
          key={title}
          className={`rp-home-feature__card ${link ? 'rp-home-feature__card--clickable' : ''} !h-56 p-6 flex flex-col !rounded-lg`}
          style={{
            cursor: link ? 'pointer' : 'auto',
            backgroundImage: hasImage ? `url(${bgImage})` : undefined,
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'right',
            backgroundPositionY: 'bottom',
          }}
          onClick={() => {
            if (link) {
              navigate(link);
            }
          }}
          onKeyDown={() => {
            if (link) {
              navigate(link);
            }
          }}
        >
          <div className="rp-home-feature__title-wrapper">
            {icon ? (
              <div
                className="rp-home-feature__icon"
                {...renderHtmlOrText(icon)}
              ></div>
            ) : null}

            <h2 className="rp-home-feature__title">{title}</h2>
          </div>
          <p
            className="rp-home-feature__detail"
            {...renderHtmlOrText(details)}
          ></p>
          <div className="grow"></div>
          <div className="p-2 border border-blue-700 rounded-md text-blue-700 font-semibold w-fit ">
            Découvrir
          </div>
        </article>
      </div>
      {shineDom}
    </div>
  );
}

export function HomeFeature({
  features: featuresProp,
}: {
  features?: Feature[];
}): JSX.Element {
  const { frontmatter } = useFrontmatter();
  const features = featuresProp ?? frontmatter?.features;

  return (
    <div className="rp-home-feature !grid !grid-cols-2 !gap-4">
      {features?.map((feature) => {
        return <HomeFeatureItem key={feature.title} feature={feature} />;
      })}
    </div>
  );
}
