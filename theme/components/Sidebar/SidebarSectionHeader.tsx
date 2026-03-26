import { renderInlineMarkdown, Tag } from '@theme-original';
import './SidebarSectionHeader.scss';

export function SidebarSectionHeader({
  sectionHeaderText,
  tag,
}: {
  sectionHeaderText: string;
  tag?: string;
}) {
  const isDocHeader =
    sectionHeaderText === 'sidebar.documentation' ||
    sectionHeaderText === 'Documentation';

  return (
    <div className="rp-sidebar-section-header">
      <div className="rp-sidebar-section-header__left">
        <span {...renderInlineMarkdown(sectionHeaderText)}></span>
        {isDocHeader && (
          <span
            className="rp-badge rp-badge--info"
            style={{ marginLeft: '0.5rem', fontSize: '0.7rem' }}
          >
            Beta
          </span>
        )}
      </div>
      <div className="rp-sidebar-section-header__right">
        <Tag tag={tag} />
      </div>
    </div>
  );
}
