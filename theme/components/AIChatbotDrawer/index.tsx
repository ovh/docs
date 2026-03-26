import { AIChatbot } from '@components/AIChatbot';
import { useLang } from '@rspress/core/runtime';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import './index.scss';

interface AIChatbotDrawerContextValue {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const AIChatbotDrawerContext = createContext<AIChatbotDrawerContextValue>({
  isOpen: false,
  toggle: () => {},
  close: () => {},
});

export function useAIChatbotDrawer() {
  return useContext(AIChatbotDrawerContext);
}

export function AIChatbotDrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, toggle, close }),
    [isOpen, toggle, close],
  );

  return (
    <AIChatbotDrawerContext.Provider value={value}>
      {children}
    </AIChatbotDrawerContext.Provider>
  );
}

export function AIChatbotDrawer() {
  const { isOpen, close } = useAIChatbotDrawer();
  const lang = useLang();

  return (
    <>
      {/* Backdrop */}
      {/* biome-ignore lint/a11y/useSemanticElements: backdrop overlay is not a semantic button */}
      <div
        role="button"
        tabIndex={-1}
        className={`ai-drawer-backdrop ${isOpen ? 'ai-drawer-backdrop--open' : ''}`}
        onClick={close}
        onKeyDown={(e) => {
          if (e.key === 'Escape') close();
        }}
      />
      {/* Panel */}
      <div
        className={`ai-drawer-panel ${isOpen ? 'ai-drawer-panel--open' : ''}`}
      >
        <div className="ai-drawer-content">
          <AIChatbot locale={lang} onClose={close} />
        </div>
      </div>
    </>
  );
}
