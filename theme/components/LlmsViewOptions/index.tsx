import { useI18n } from '@rspress/core/runtime';
import { useMdUrl } from '@rspress/core/theme-original';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAIChatbotDrawer } from 'theme/components/AIChatbotDrawer';
import './index.scss';

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 4L5 6.5L7.5 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17l-5-5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AIAssistantIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

const ChatGPTIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
  </svg>
);

const ClaudeIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.957 4.386l-5.08 15.228a.807.807 0 0 1-1.024.512.81.81 0 0 1-.512-1.024l5.08-15.228a.807.807 0 0 1 1.536.512zm3.471 2.186l-2.334 4.268 2.334 4.268a.81.81 0 0 0 1.097.312.81.81 0 0 0 .312-1.098L17.95 10.84l1.887-3.482a.81.81 0 0 0-.312-1.098.807.807 0 0 0-1.098.312zM5.572 6.572L7.906 10.84 5.572 14.322a.81.81 0 0 0 .312 1.098.807.807 0 0 0 1.098-.312l2.334-4.268-2.334-4.268a.81.81 0 0 0-1.098-.312.81.81 0 0 0-.312 1.098z" />
  </svg>
);

interface MenuOption {
  title: string;
  description: string;
  icon: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
  href?: string;
}

export function LlmsViewOptions() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { toggle: toggleChatbot } = useAIChatbotDrawer();
  const { pathname } = useMdUrl();
  const t = useI18n();

  const fullMarkdownUrl = useMemo(() => {
    if (typeof window === 'undefined') return '';
    return new URL(pathname, window.location.origin).toString();
  }, [pathname]);

  const handleCopyMarkdownLink = useCallback(() => {
    navigator.clipboard.writeText(fullMarkdownUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [fullMarkdownUrl]);

  const options: MenuOption[] = useMemo(
    () => [
      {
        title: t('aiAssistantTitle'),
        description: t('aiAssistantDesc'),
        icon: <AIAssistantIcon />,
        onClick: () => {
          toggleChatbot();
          setIsOpen(false);
        },
      },
      {
        title: t('openInText', { name: 'ChatGPT' }),
        description: t('analyzePageText', { name: 'ChatGPT' }),
        icon: <ChatGPTIcon />,
        external: true,
        href: `https://chatgpt.com/?${new URLSearchParams({
          hints: 'search',
          q: `Read ${fullMarkdownUrl}, I want to ask questions about it.`,
        })}`,
      },
      {
        title: t('openInText', { name: 'Claude' }),
        description: t('analyzePageText', { name: 'Claude' }),
        icon: <ClaudeIcon />,
        external: true,
        href: `https://claude.ai/new?${new URLSearchParams({
          q: `Read ${fullMarkdownUrl}, I want to ask questions about it.`,
        })}`,
      },
    ],
    [fullMarkdownUrl, toggleChatbot, t],
  );

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Click-outside detection
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleItemClick = (option: MenuOption) => {
    if (option.onClick) {
      option.onClick();
    } else if (option.href) {
      window.open(option.href, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="rp-llms-view-options__trigger"
      data-active={isOpen || undefined}
    >
      <button
        type="button"
        className="rp-llms-button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
        <span>{t('askAiButtonText')}</span>
        <span
          className="rp-llms-view-options__arrow"
          data-rotated={isOpen || undefined}
        >
          <ArrowIcon />
        </span>
      </button>

      {isOpen && (
        <div className="rp-llms-view-options__menu" role="menu">
          {options.map((option) => (
            <button
              key={option.title}
              type="button"
              className="rp-llms-view-options__menu-item"
              role="menuitem"
              onClick={() => handleItemClick(option)}
            >
              <span className="rp-llms-view-options__item-icon">
                {option.icon}
              </span>
              <div className="rp-llms-view-options__item-text">
                <span className="rp-llms-view-options__item-title">
                  {option.title}
                </span>
                <span className="rp-llms-view-options__item-desc">
                  {option.description}
                </span>
              </div>
              {option.external && (
                <span className="rp-llms-view-options__external-icon">
                  <ExternalLinkIcon />
                </span>
              )}
            </button>
          ))}
          <div className="rp-llms-view-options__separator" />
          <button
            type="button"
            className="rp-llms-view-options__menu-item rp-llms-view-options__menu-item--copy"
            role="menuitem"
            onClick={handleCopyMarkdownLink}
            data-copied={copied || undefined}
          >
            <span className="rp-llms-view-options__item-icon">
              {copied ? <CheckIcon /> : <LinkIcon />}
            </span>
            <span className="rp-llms-view-options__item-title">
              {copied ? t('copiedText') : t('copyMarkdownLinkText')}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
