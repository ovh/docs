import { useFrontmatter, useI18n } from '@rspress/core/runtime';
import { DocFooter, IconMenu, SvgWrapper } from '@rspress/core/theme-original';
import clsx from 'clsx';
import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { ELearningCoursesProps } from 'theme/components/ELearningCourses';
import { ELearningCourses } from 'theme/components/ELearningCourses';
import type { ELearningCTAProps } from 'theme/components/ELearningCTA';
import { ELearningCTA } from 'theme/components/ELearningCTA';
import type { ELearningHeroProps } from 'theme/components/ELearningHero';
import { ELearningHero } from 'theme/components/ELearningHero';
import { Sidebar } from 'theme/components/Sidebar';
import './index.scss';

interface ELearningFrontmatter {
  hero?: ELearningHeroProps;
  courses?: ELearningCoursesProps;
  cta?: ELearningCTAProps;
}

function useELearningSidebarMenu() {
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

export interface ELearningLayoutProps {
  beforeDocFooter?: React.ReactNode;
  afterDocFooter?: React.ReactNode;
  beforeDocContent?: React.ReactNode;
  afterDocContent?: React.ReactNode;
}

export function ELearningLayout(props: ELearningLayoutProps) {
  const { beforeDocFooter, afterDocFooter, beforeDocContent, afterDocContent } =
    props;
  const { frontmatter } = useFrontmatter();
  const { hero, courses, cta } = frontmatter as ELearningFrontmatter;
  const { sidebarMenu, isSidebarOpen, sidebarLayoutRef } =
    useELearningSidebarMenu();

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
        <div className="rp-elearning-layout__content">
          <main className="rp-elearning-layout__main">
            {beforeDocContent}

            <ELearningHero {...hero} />
            <ELearningCourses {...courses} />
            <ELearningCTA {...cta} />

            {afterDocContent}

            {beforeDocFooter}
            <div className="rp-elearning-layout__footer">
              <DocFooter />
            </div>
            {afterDocFooter}
          </main>
        </div>
      </div>
    </>
  );
}
