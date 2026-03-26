import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const REGIONS = ['eu', 'ca', 'us'] as const;
type Region = (typeof REGIONS)[number];

const STORAGE_KEY = 'ovhcloud-docs:api-region';

function isRegion(value: unknown): value is Region {
  return typeof value === 'string' && REGIONS.includes(value as Region);
}

function getInitialRegion(): Region {
  if (typeof window === 'undefined') return 'eu';
  const stored = localStorage.getItem(STORAGE_KEY);
  return isRegion(stored) ? stored : 'eu';
}

interface RegionContextValue {
  region: Region;
  setRegion: (region: Region) => void;
}

const RegionContext = createContext<RegionContextValue>({
  region: 'eu',
  setRegion: () => {},
});

export function useRegion() {
  return useContext(RegionContext);
}

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegionState] = useState<Region>(getInitialRegion);

  const setRegion = useCallback((r: Region) => {
    setRegionState(r);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, region);
  }, [region]);

  const value = useMemo(() => ({ region, setRegion }), [region, setRegion]);

  return (
    <RegionContext.Provider value={value}>{children}</RegionContext.Provider>
  );
}
