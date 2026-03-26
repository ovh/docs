import './index.scss';

interface CourseItem {
  level?: string;
  title: string;
  description?: string;
  link: string;
  modules?: number;
  language?: string;
}

export interface ELearningCoursesProps {
  title?: string;
  description?: string;
  items?: CourseItem[];
}

export function ELearningCourses({
  title,
  description,
  items,
}: ELearningCoursesProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="rp-elearning-courses">
      {title && <h2 className="rp-elearning-courses__title">{title}</h2>}
      {description && (
        <p className="rp-elearning-courses__description">{description}</p>
      )}
      <div className="rp-elearning-courses__grid">
        {items.map((item) => (
          <a
            key={item.link}
            href={item.link}
            className="rp-elearning-courses__card"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.level && (
              <div className="rp-elearning-courses__badge">{item.level}</div>
            )}
            <h3 className="rp-elearning-courses__card-title">{item.title}</h3>
            {item.description && (
              <p className="rp-elearning-courses__card-description">
                {item.description}
              </p>
            )}
            <div className="rp-elearning-courses__card-meta">
              {item.modules != null && (
                <span className="rp-elearning-courses__meta-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 3h5v10H2V3zm7 0h5v10H9V3z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item.modules} modules
                </span>
              )}
              {item.language && (
                <span className="rp-elearning-courses__meta-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M2 8h12M8 2c-1.5 2-2 4-2 6s.5 4 2 6c1.5-2 2-4 2-6s-.5-4-2-6z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                  {item.language}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
