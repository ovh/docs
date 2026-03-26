import { useI18n, useLang } from '@rspress/core/runtime';
import { useState } from 'react';
import './SurveyWidget.scss';

const SURVEY_URL = 'https://s.elq.fr/ovhabp/LfDet1p?%23+Version=';

export function SurveyWidget() {
  const [dismissed, setDismissed] = useState(false);
  const t = useI18n();
  const lang = useLang();

  if (dismissed) return null;

  const handleRespond = () => {
    window.open(`${SURVEY_URL}${lang}`, '_blank', 'noopener,noreferrer');
    setDismissed(true);
  };

  return (
    <div className="survey-widget">
      <div className="survey-widget__icon">🚀</div>
      <div className="survey-widget__content">
        <h4 className="survey-widget__title">{t('survey.title')}</h4>
        <p className="survey-widget__description">{t('survey.description')}</p>
        <p className="survey-widget__duration">{t('survey.duration')}</p>
        <div className="survey-widget__actions">
          <button
            type="button"
            className="survey-widget__btn survey-widget__btn--dismiss"
            onClick={() => setDismissed(true)}
          >
            {t('survey.dismiss')}
          </button>
          <button
            type="button"
            className="survey-widget__btn survey-widget__btn--respond"
            onClick={handleRespond}
          >
            {t('survey.respond')}
          </button>
        </div>
      </div>
    </div>
  );
}
