import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';

interface ChallengeAxiosRequestConfig extends InternalAxiosRequestConfig {
  _challengeRetry?: boolean;
}

interface ChallengeErrorResponse {
  class: string;
  message: string;
  body: {
    payload: string;
  };
}

function handleChallenge(payload: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!document.body) {
      reject(new Error('Document body not available'));
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.src = payload;
    iframe.style.display = 'none';

    const timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error('Challenge timeout'));
    }, 30000);

    const messageHandler = (event: MessageEvent) => {
      try {
        const iframeOrigin = new URL(iframe.src).origin;
        if (event.origin !== iframeOrigin) {
          return;
        }
      } catch {
        cleanup();
        reject(new Error('Invalid iframe URL'));
        return;
      }

      if (
        event.data?.type === 'challengeResponse' &&
        event.data.challenge_response
      ) {
        cleanup();
        resolve(event.data.challenge_response);
      }
    };

    const cleanup = () => {
      clearTimeout(timeoutId);
      window.removeEventListener('message', messageHandler);
      if (iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    };

    window.addEventListener('message', messageHandler, false);

    iframe.addEventListener('load', () => {
      iframe.contentWindow?.postMessage(
        { type: 'challengeRequest' },
        iframe.src,
      );
    });

    iframe.addEventListener('error', () => {
      cleanup();
      reject(new Error('Failed to load challenge iframe'));
    });

    document.body.appendChild(iframe);
  });
}

/**
 * Sets up an axios interceptor to handle challenge-based authentication.
 * When a request receives a 400 error with 'ChallengeRequired' message,
 * it creates an iframe to complete the challenge and retries the request
 * with the challenge response headers.
 */
export function setupChallengeInterceptor() {
  axios.interceptors.response.use(
    (response) => response,
    async (error: AxiosError<ChallengeErrorResponse>) => {
      const { response, config } = error;
      const challengeConfig = config as ChallengeAxiosRequestConfig;

      if (
        response?.status === 400 &&
        response.data?.class === 'Client::BadRequest::ChallengeRequired' &&
        !challengeConfig._challengeRetry &&
        config
      ) {
        const { body } = response.data;

        if (!body?.payload) {
          return Promise.reject(
            new Error('Invalid challenge response: missing payload'),
          );
        }

        const challengeResponse = await handleChallenge(body.payload);

        challengeConfig._challengeRetry = true;
        challengeConfig.headers = challengeConfig.headers || {};
        challengeConfig.headers['X-Challenge-Payload'] = body.payload;
        challengeConfig.headers['X-Challenge-Response'] = challengeResponse;

        return axios.request(challengeConfig);
      }

      return Promise.reject(error);
    },
  );
}
