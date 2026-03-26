import { useFrontmatter, useI18n } from '@rspress/core/runtime';
import { DocFooter, IconMenu, SvgWrapper } from '@rspress/core/theme-original';
import clsx from 'clsx';
import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { HomeUsecases } from 'theme/components/HomeUsecases';
import { OverviewCTA } from 'theme/components/OverviewCTA';
import { OverviewGoFurther } from 'theme/components/OverviewGoFurther';
import { OverviewQuickstart } from 'theme/components/OverviewQuickstart';
import { OverviewTutorials } from 'theme/components/OverviewTutorials';
import { Sidebar } from 'theme/components/Sidebar';
import './index.scss';

interface FrontmatterItem {
  title: string;
  link: string;
  details?: string;
  icon?: string;
}

interface GoFurtherData {
  title?: string;
  items?: { title: string; link: string }[];
}

interface CTAData {
  title?: string;
  description?: string;
  actions?: { text: string; link: string; theme?: 'brand' | 'alt' }[];
}

interface OverviewFrontmatter {
  title?: string;
  text?: string;
  essentialsTitle?: string;
  essentials?: FrontmatterItem[];
  gettingStartedTitle?: string;
  gettingStarted?: FrontmatterItem[];
  tutorialsTitle?: string;
  tutorials?: FrontmatterItem[];
  goFurther?: GoFurtherData;
  cta?: CTAData;
}

function useOverviewSidebarMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarMenuRef = useRef<HTMLDivElement>(null);
  const sidebarLayoutRef = useRef<HTMLDivElement>(null);
  const t = useI18n();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        isSidebarOpen &&
        sidebarMenuRef.current &&
        sidebarLayoutRef.current &&
        !sidebarMenuRef.current.contains(target) &&
        !sidebarLayoutRef.current.contains(target)
      ) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  const sidebarMenu = useMemo(
    () => (
      <>
        <div className="rp-sidebar-menu" ref={sidebarMenuRef}>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="rp-sidebar-menu__left"
          >
            <SvgWrapper icon={IconMenu} />
            <span>{t('menuTitle')}</span>
          </button>
          <div className="rp-sidebar-menu__right" />
        </div>
        {isSidebarOpen &&
          typeof document !== 'undefined' &&
          createPortal(
            <button
              type="button"
              onClick={() => setIsSidebarOpen(false)}
              onKeyUp={() => setIsSidebarOpen(false)}
              className="rp-sidebar-menu__mask"
              aria-label="Close sidebar"
            />,
            document.getElementById('__rspress_modal_container') ||
              document.body,
          )}
      </>
    ),
    [isSidebarOpen, t],
  );

  return {
    sidebarMenu,
    isSidebarOpen,
    sidebarLayoutRef,
  };
}

export interface OverviewLayoutProps {
  beforeDocFooter?: React.ReactNode;
  afterDocFooter?: React.ReactNode;
  beforeDocContent?: React.ReactNode;
  afterDocContent?: React.ReactNode;
}

export function OverviewLayout(props: OverviewLayoutProps) {
  const { beforeDocFooter, afterDocFooter, beforeDocContent, afterDocContent } =
    props;
  const { frontmatter } = useFrontmatter();
  const {
    essentials,
    essentialsTitle,
    gettingStarted,
    gettingStartedTitle,
    tutorials,
    tutorialsTitle,
    title,
    text,
    goFurther,
    cta,
  } = frontmatter as OverviewFrontmatter;
  const { sidebarMenu, isSidebarOpen, sidebarLayoutRef } =
    useOverviewSidebarMenu();

  return (
    <>
      <div className="rp-doc-layout__menu">{sidebarMenu}</div>
      <div className="rp-doc-layout__container">
        <aside
          className={clsx(
            'rp-doc-layout__sidebar',
            'rp-scrollbar',
            isSidebarOpen && 'rp-doc-layout__sidebar--open',
          )}
          ref={sidebarLayoutRef}
        >
          <Sidebar />
        </aside>
        <div className="rp-overview-layout__content">
          <main className="rp-overview-layout__main">
            {beforeDocContent}

            {/* Header */}
            <div className="rp-overview-header">
              {title && <h1 className="rp-overview-title">{title}</h1>}
              {text && <p className="rp-overview-text">{text}</p>}
            </div>

            {/* Essentials Section */}
            {essentials && essentials.length > 0 && (
              <HomeUsecases items={essentials} sectionTitle={essentialsTitle} />
            )}

            {/* Getting Started Section */}
            {gettingStarted && gettingStarted.length > 0 && (
              <OverviewQuickstart
                items={gettingStarted}
                sectionTitle={gettingStartedTitle}
              />
            )}

            {/* Tutorials Section */}
            {tutorials && tutorials.length > 0 && (
              <OverviewTutorials
                items={tutorials}
                sectionTitle={tutorialsTitle}
              />
            )}

            {/* Go Further Section */}
            {goFurther?.items && goFurther.items.length > 0 && (
              <OverviewGoFurther
                title={goFurther.title}
                items={goFurther.items}
              />
            )}

            {/* CTA Section */}
            {cta?.title && (
              <OverviewCTA
                title={cta.title}
                description={cta.description}
                actions={cta.actions}
              />
            )}

            {afterDocContent}

            {/* Footer */}
            {beforeDocFooter}
            <DocFooter />
            {afterDocFooter}
          </main>
        </div>
      </div>
    </>
  );
}
