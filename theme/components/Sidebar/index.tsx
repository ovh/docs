import type {
  SidebarDivider as ISidebarDivider,
  SidebarItem as ISidebarItem,
  SidebarSectionHeader as ISidebarSectionHeader,
  NormalizedSidebarGroup,
  SidebarData,
} from '@rspress/core';
import { useSidebarDynamic } from '@rspress/core/runtime';
import { SocialLinks, SwitchAppearance } from '@theme-original';
import { useAIChatbotDrawer } from 'theme/components/AIChatbotDrawer';
import { PagefindSearch } from 'theme/components/PagefindSearch';
import { SidebarDivider } from './SidebarDivider';
import { SidebarGroup } from './SidebarGroup';
import { SidebarItem } from './SidebarItem';
import { SidebarSectionHeader } from './SidebarSectionHeader';
import {
  isSidebarDivider,
  isSidebarGroup,
  isSidebarSectionHeader,
} from './utils';

export function Sidebar() {
  const [sidebarData, setSidebarData] = useSidebarDynamic();

  return (
    <SidebarList sidebarData={sidebarData} setSidebarData={setSidebarData} />
  );
}

export function SidebarList({
  sidebarData,
  setSidebarData,
}: {
  sidebarData: SidebarData;
  setSidebarData: React.Dispatch<React.SetStateAction<SidebarData>>;
}) {
  const { toggle } = useAIChatbotDrawer();

  return (
    <div className="flex flex-col gap-4 h-full overflow-hidden">
      <div className="flex items-center gap-2">
        <PagefindSearch />
        <button
          type="button"
          onClick={toggle}
          title="Ask our AI"
          style={{ background: 'linear-gradient(135deg,#fdef61,#77fbfb)' }}
          className="w-10 h-10 block p-2 rounded-lg cursor-pointer"
        >
          <img src="/images/ai.svg" alt="" className="w-6 h-6" />
        </button>
      </div>
      <div className="overflow-auto">
        {sidebarData.map((item, index) => {
          return (
            <SidebarListItem
              // biome-ignore lint/suspicious/noArrayIndexKey: sidebar items have no stable unique ID
              key={index}
              item={item}
              index={index}
              setSidebarData={setSidebarData}
            />
          );
        })}
      </div>
      <div className="grow"></div>
      <div className="flex flex-row align-items border-t border-gray-200 px-2">
        <SocialLinks />
        <div className="grow"></div>
        <div className="pt-2">
          <SwitchAppearance />
        </div>
      </div>
    </div>
  );
}

function SidebarListItem(props: {
  item:
    | NormalizedSidebarGroup
    | ISidebarItem
    | ISidebarDivider
    | ISidebarSectionHeader;
  index: number;
  setSidebarData: React.Dispatch<React.SetStateAction<SidebarData>>;
}) {
  const { item, index, setSidebarData } = props;
  if (isSidebarDivider(item)) {
    return (
      <SidebarDivider key={index} depth={0} dividerType={item.dividerType} />
    );
  }

  if (isSidebarSectionHeader(item)) {
    return (
      <SidebarSectionHeader
        key={index}
        sectionHeaderText={item.sectionHeaderText}
        tag={item.tag}
      />
    );
  }

  if (isSidebarGroup(item)) {
    return (
      <SidebarGroup
        id={String(index)}
        key={`${item.text}-${index}`}
        item={item}
        depth={0}
        setSidebarData={setSidebarData}
      />
    );
  }

  return <SidebarItem item={item} key={index} depth={0} />;
}
