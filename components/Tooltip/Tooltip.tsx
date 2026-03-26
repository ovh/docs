import type React from 'react';
import { useEffect, useId, useRef, useState } from 'react';
import './Tooltip.css';

interface TooltipProps {
  /** Markdown content for the tooltip */
  content: string;
  /** Trigger text (inline) */
  children: React.ReactNode;
  /** Preferred placement (default: 'top') */
  placement?: 'top' | 'bottom';
}

function parseSimpleMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(
      /\[(.+?)\]\((.+?)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
    );
}

export function Tooltip({
  content,
  children,
  placement = 'top',
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [actualPlacement, setActualPlacement] = useState(placement);
  const id = useId();
  const triggerRef = useRef<HTMLSpanElement>(null);
  const popupRef = useRef<HTMLSpanElement>(null);
  const tooltipId = `tooltip-${id}`;

  // Position the popup and flip if overflowing viewport
  useEffect(() => {
    if (!isOpen || !popupRef.current || !triggerRef.current) return;

    const popup = popupRef.current;
    const trigger = triggerRef.current;
    const triggerRect = trigger.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();

    // Flip vertically if overflowing viewport
    if (placement === 'top' && triggerRect.top - popupRect.height - 8 < 0) {
      setActualPlacement('bottom');
    } else if (
      placement === 'bottom' &&
      triggerRect.bottom + popupRect.height + 8 > window.innerHeight
    ) {
      setActualPlacement('top');
    } else {
      setActualPlacement(placement);
    }

    // Clamp horizontal position
    const popupLeft =
      triggerRect.left + triggerRect.width / 2 - popupRect.width / 2;
    const popupRight = popupLeft + popupRect.width;

    if (popupLeft < 8) {
      const offset = 8 - popupLeft;
      popup.style.transform = `translateX(calc(-50% + ${offset}px)) translateY(0)`;
    } else if (popupRight > window.innerWidth - 8) {
      const offset = popupRight - (window.innerWidth - 8);
      popup.style.transform = `translateX(calc(-50% - ${offset}px)) translateY(0)`;
    }
  }, [isOpen, placement]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (
        triggerRef.current?.contains(e.target as Node) ||
        popupRef.current?.contains(e.target as Node)
      )
        return;
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  if (!content) {
    return <>{children}</>;
  }

  return (
    // biome-ignore lint/a11y/useSemanticElements: must be inline <span>, not <button>, for paragraph flow
    <span
      ref={triggerRef}
      className="tooltip-trigger"
      role="button"
      tabIndex={0}
      aria-describedby={isOpen ? tooltipId : undefined}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      onKeyDown={handleKeyDown}
    >
      {children}
      <span
        ref={popupRef}
        id={tooltipId}
        role="tooltip"
        className={`tooltip-popup${isOpen ? ' tooltip-popup--visible' : ''}`}
        data-placement={actualPlacement}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: content comes from MDX files, not user input
        dangerouslySetInnerHTML={{ __html: parseSimpleMarkdown(content) }}
      />
    </span>
  );
}

export default Tooltip;
