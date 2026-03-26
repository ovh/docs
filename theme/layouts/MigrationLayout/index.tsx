import { useFrontmatter, useI18n } from '@rspress/core/runtime';
import { DocFooter, IconMenu, SvgWrapper } from '@rspress/core/theme-original';
import clsx from 'clsx';
import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { MigrationCTAProps } from 'theme/components/MigrationCTA';
import { MigrationCTA } from 'theme/components/MigrationCTA';
import type { MigrationResourcesProps } from 'theme/components/MigrationResources';
import { MigrationResources } from 'theme/components/MigrationResources';
import type { MigrationSectionsProps } from 'theme/components/MigrationSections';
import { MigrationSections } from 'theme/components/MigrationSections';
import { Sidebar } from 'theme/components/Sidebar';
import './index.scss';

interface MigrationFrontmatter {
  title?: string;
  description?: string;
  sections?: MigrationSectionsProps['sections'];
  resources?: MigrationResourcesProps;
  cta?: MigrationCTAProps;
}

function useMigrationSidebarMenu() {
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

export interface MigrationLayoutProps {
  beforeDocFooter?: React.ReactNode;
  afterDocFooter?: React.ReactNode;
  beforeDocContent?: React.ReactNode;
  afterDocContent?: React.ReactNode;
}

export function MigrationLayout(props: MigrationLayoutProps) {
  const { beforeDocFooter, afterDocFooter, beforeDocContent, afterDocContent } =
    props;
  const { frontmatter } = useFrontmatter();
  const { title, description, sections, resources, cta } =
    frontmatter as MigrationFrontmatter;
  const { sidebarMenu, isSidebarOpen, sidebarLayoutRef } =
    useMigrationSidebarMenu();

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
        <div className="rp-migration-layout__content">
          <main className="rp-migration-layout__main">
            {beforeDocContent}

            <div className="rp-migration-layout__header">
              {title && <h1 className="rp-migration-layout__title">{title}</h1>}
              {description && (
                <p className="rp-migration-layout__description">
                  {description}
                </p>
              )}
            </div>

            <MigrationSections sections={sections} />
            <MigrationResources {...resources} />
            <MigrationCTA {...cta} />

            {afterDocContent}

            {beforeDocFooter}
            <div className="rp-migration-layout__footer">
              <DocFooter />
            </div>
            {afterDocFooter}
          </main>
        </div>
      </div>
    </>
  );
}
