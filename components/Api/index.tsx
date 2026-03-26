import { useRegion } from './RegionContext';
import './index.css';

const REGIONS = {
  eu: { flag: '🇪🇺', label: 'EU', base: 'https://eu.api.ovh.com/console/' },
  ca: { flag: '🇨🇦', label: 'CA', base: 'https://ca.api.ovh.com/console/' },
  us: {
    flag: '🇺🇸',
    label: 'US',
    base: 'https://api.us.ovhcloud.com/console/',
  },
} as const;

type Region = keyof typeof REGIONS;

interface ApiProps {
  version: string;
  section: string;
  route: string;
  method?: string;
  regions?: Region[];
}

export default function Api({
  version,
  section,
  route,
  method = 'GET',
  regions = ['eu', 'ca', 'us'],
}: ApiProps) {
  const { region: globalRegion, setRegion } = useRegion();
  const region = regions.includes(globalRegion) ? globalRegion : regions[0];
  const apiAnchor = `${method.toLocaleLowerCase()}-${route.replace('\\{', '-').replace('\\}', '-')}`;
  const href = `${REGIONS[region].base}?section=${section}&branch=${version}#${apiAnchor}`;

  return (
    <div className="ovh-api-main">
      {regions.length > 1 && (
        <select
          className="ovh-api-region-select"
          value={region}
          onChange={(e) => setRegion(e.target.value as Region)}
        >
          {regions.map((r) => (
            <option key={r} value={r}>
              {REGIONS[r].flag} {REGIONS[r].label}
            </option>
          ))}
        </select>
      )}
      <a target="_blank" href={href} rel="noopener noreferrer">
        {regions.length === 1 && (
          <span className="ovh-api-flag">{REGIONS[region].flag}</span>
        )}
        <span className={`ovh-api-verb ovh-api-verb-${method}`}>{method}</span>
        <span className="ovh-api-endpoint">{route.replace(/\\/g, '')}</span>
      </a>
    </div>
  );
}
