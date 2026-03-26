import { useDark } from '@rspress/core/dist/runtime/index.js';
import { useEffect, useRef, useState } from 'react';

interface ChatBotInstance {
  unmount: () => void;
  update: (params: Record<string, unknown>) => void;
}

interface ChatBotModule {
  render: (
    container: HTMLElement,
    options: {
      locale: string;
      linkPolicy: string;
      darkTheme: boolean;
      onClose?: () => void;
      onTracking?: (event: unknown) => void;
    },
  ) => ChatBotInstance;
}

interface AIChatbotProps {
  locale?: string;
  linkPolicy?: string;
  darkTheme?: boolean;
  onClose?: () => void;
  onTracking?: (event: unknown) => void;
}

// Internal component that loads the federated module (client-only)
function AIChatbotClient({
  locale,
  linkPolicy,
  darkTheme,
  onClose,
  onTracking,
}: AIChatbotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chatbotInstanceRef = useRef<ChatBotInstance | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: darkTheme is handled by a separate useEffect to avoid full remount
  useEffect(() => {
    let isMounted = true;

    async function loadAndRenderChatBot() {
      try {
        // Load the federated ChatBot module dynamically at runtime
        // Using Function constructor to hide import from bundler static analysis
        const remoteUrl =
          'https://www.ovhcloud.com/website/assistant_ia/assets/remoteEntry.js';
        const dynamicImport = new Function('url', 'return import(url)');
        const assistantia = await dynamicImport(remoteUrl);
        const factory = await assistantia.get('./ChatBot');
        const ChatBotModule: ChatBotModule = factory();

        if (!isMounted || !containerRef.current) return;

        setIsLoading(false);

        // Clean up any existing instance
        if (chatbotInstanceRef.current) {
          chatbotInstanceRef.current.unmount();
        }

        // Render the ChatBot
        chatbotInstanceRef.current = ChatBotModule.render(
          containerRef.current,
          {
            locale: locale ?? 'fr',
            linkPolicy: linkPolicy ?? 'https://www.ovhcloud.com/',
            darkTheme: darkTheme ?? false,
            onClose,
            onTracking,
          },
        );
      } catch (err) {
        console.error('Failed to load federated ChatBot module:', err);
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : 'Failed to load chatbot',
          );
          setIsLoading(false);
        }
      }
    }

    loadAndRenderChatBot();

    // Cleanup on unmount
    return () => {
      isMounted = false;
      if (chatbotInstanceRef.current) {
        chatbotInstanceRef.current.unmount();
        chatbotInstanceRef.current = null;
      }
    };
  }, [locale, linkPolicy, onClose, onTracking]);

  useEffect(() => {
    if (chatbotInstanceRef.current) {
      chatbotInstanceRef.current.update({ darkTheme: darkTheme ?? false });
    }
  }, [darkTheme]);

  if (error) {
    return <div className="chatbot-error">Error: {error}</div>;
  }

  return (
    <div className="ai-chatbot" style={{ width: '100%', height: '100%' }}>
      {isLoading && <div className="chatbot-loading">Loading chatbot...</div>}
      <div style={{ width: '100%', height: '100%' }} ref={containerRef} />
    </div>
  );
}

// Wrapper that skips SSG - only renders on client
export function AIChatbot({
  locale = 'fr',
  linkPolicy = 'https://www.ovhcloud.com/',
  onClose,
  onTracking,
}: AIChatbotProps) {
  const [isClient, setIsClient] = useState(false);
  const isDark = useDark();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Skip rendering during SSG
  if (!isClient) {
    return (
      <div className="ai-chatbot" style={{ width: '100%', height: '100%' }} />
    );
  }

  return (
    <AIChatbotClient
      locale={locale}
      linkPolicy={linkPolicy}
      darkTheme={isDark}
      onClose={onClose}
      onTracking={onTracking}
    />
  );
}

export default AIChatbot;
