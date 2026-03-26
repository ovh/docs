import { RegionProvider } from '@components/Api/RegionContext';
import { useDark, useFrontmatter } from '@rspress/core/runtime';
import {
  Layout as BasicLayout,
  DocLayout as OriginalDocLayout,
} from '@rspress/core/theme-original';
import type React from 'react';
import { useEffect } from 'react';
import {
  AIChatbotDrawer,
  AIChatbotDrawerProvider,
} from 'theme/components/AIChatbotDrawer';
import Breadcrumbs from 'theme/components/Breadcrumbs/Breadcrumbs.tsx';
import { EditLink } from 'theme/components/EditLink';
import { LlmsViewOptions } from 'theme/components/LlmsViewOptions';
import { Nav } from 'theme/components/Nav';
import { PageFeedback } from 'theme/components/PageFeedback';
import { Sidebar } from 'theme/components/Sidebar';
import { SurveyWidget } from 'theme/components/SurveyWidget';
import { ELearningLayout } from 'theme/layouts/ELearningLayout';
import { HomeLayout } from 'theme/layouts/HomeLayout/HomeLayout';
import { MigrationLayout } from 'theme/layouts/MigrationLayout';
import { OverviewLayout } from 'theme/layouts/OverviewLayout';

// Custom DocLayout that handles overview pages and respects frontmatter
const DocLayout = (props: React.ComponentProps<typeof OriginalDocLayout>) => {
  const { frontmatter } = useFrontmatter();
  const fm = frontmatter as Record<string, unknown>;
  const pageType = fm?.pageType;
  const showOutline = fm?.outline !== false;
  const showSidebar = fm?.sidebar !== false;

  // If pageType is 'overview', use our custom OverviewLayout
  if (pageType === 'overview') {
    return <OverviewLayout {...props} />;
  }

  // If pageType is 'elearning', use our custom ELearningLayout
  if (pageType === 'elearning') {
    return <ELearningLayout {...props} />;
  }

  // If pageType is 'migration', use our custom MigrationLayout
  if (pageType === 'migration') {
    return <MigrationLayout {...props} />;
  }

  // Apply CSS classes based on frontmatter to hide outline/sidebar
  return (
    <div
      className={`custom-doc-layout ${!showOutline ? 'hide-outline' : ''} ${!showSidebar ? 'hide-sidebar' : ''}`}
    >
      <OriginalDocLayout {...props} />
    </div>
  );
};

const Layout = (props: React.ComponentProps<typeof BasicLayout>) => {
  const isDark = useDark();

  useEffect(() => {
    const root = document.documentElement;
    if (!root) {
      return;
    }
    if (isDark) {
      root.classList.add('tw-dark');
    } else {
      root.classList.remove('tw-dark');
    }
  }, [isDark]);

  // Pass DocLayout explicitly to BasicLayout so it uses our custom one
  return (
    <RegionProvider>
      <AIChatbotDrawerProvider>
        <BasicLayout
          {...props}
          beforeDocContent={<Breadcrumbs />}
          beforeDocFooter={<PageFeedback />}
        />
        <AIChatbotDrawer />
        <SurveyWidget />
      </AIChatbotDrawerProvider>
    </RegionProvider>
  );
};

// Re-export everything from original theme first
export * from '@rspress/core/theme-original';

// Then override with custom components (must come AFTER wildcard export)
export {
  DocLayout,
  EditLink,
  ELearningLayout,
  HomeLayout,
  Layout,
  LlmsViewOptions,
  MigrationLayout,
  Nav,
  OverviewLayout,
  Sidebar,
};
