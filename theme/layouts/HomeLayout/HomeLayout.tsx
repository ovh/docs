import { useI18n, useLocation, usePageData } from '@rspress/core/runtime';
import { IconMenu, SvgWrapper } from '@rspress/core/theme';
import { HomeFooter } from '@theme-original';
import clsx from 'clsx';
import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { HomeExplore } from 'theme/components/HomeExplore';
import { HomeFeature } from 'theme/components/HomeFeature';
import { HomeHero } from 'theme/components/HomeHero';
import { HomeQuickstart } from 'theme/components/HomeQuickstart';
import { HomeUsecases } from 'theme/components/HomeUsecases';
import { Sidebar } from 'theme/components/Sidebar';
import './HomeLayout.scss';

export interface HomeLayoutProps {
  beforeHero?: React.ReactNode;
  afterHero?: React.ReactNode;
  beforeFeatures?: React.ReactNode;
  afterFeatures?: React.ReactNode;
}

function useHomeSidebarMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarMenuRef = useRef<HTMLDivElement>(null);
  const sidebarLayoutRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const t = useI18n();

  // Close sidebar on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is intentionally used to trigger on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  // Close sidebar when clicking outside
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

export function HomeLayout(props: HomeLayoutProps) {
  const { beforeHero, afterHero, beforeFeatures, afterFeatures } = props;
  const {
    page: { frontmatter, routePath },
  } = usePageData();

  const { sidebarMenu, isSidebarOpen, sidebarLayoutRef } = useHomeSidebarMenu();

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
        <div className="rp-home-layout__content">
          <div className="relative">
            <div className="pb-12">
              {beforeHero}
              <HomeHero frontmatter={frontmatter} routePath={routePath} />
              {afterHero}
              {beforeFeatures}
              <HomeFeature frontmatter={frontmatter} routePath={routePath} />
              {afterFeatures}
              <HomeExplore />
              <HomeQuickstart />
              <HomeUsecases />
            </div>
            <HomeFooter />
          </div>
        </div>
      </div>
    </>
  );
}
