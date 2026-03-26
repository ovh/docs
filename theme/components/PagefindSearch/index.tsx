import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './index.css';

interface SubResult {
  title: string;
  url: string;
  excerpt: string;
}

interface SearchResult {
  url: string;
  title: string;
  excerpt: string;
  subResults: SubResult[];
  titleMatchScore: number;
}

function stripAccents(s: string): string {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

type Locale = 'fr' | 'en' | 'de' | 'es' | 'it' | 'pl' | 'pt';

function getLocale(): Locale {
  const lang = (document.documentElement.lang || 'fr')
    .slice(0, 2)
    .toLowerCase();
  return (['fr', 'en', 'de', 'es', 'it', 'pl', 'pt'] as Locale[]).includes(
    lang as Locale,
  )
    ? (lang as Locale)
    : 'fr';
}

/**
 * Stop words per locale (accent-stripped). Stripped from queries before sending
 * to Pagefind so common articles/prepositions don't dominate result ranking.
 */
const STOP_WORDS_BY_LOCALE: Record<Locale, Set<string>> = {
  fr: new Set([
    'le',
    'la',
    'les',
    'un',
    'une',
    'des',
    'du',
    'de',
    'et',
    'ou',
    'a',
    'au',
    'aux',
    'en',
    'par',
    'sur',
    'pour',
    'avec',
    'dans',
    'vers',
    'ce',
    'qui',
    'que',
    'se',
    'sa',
    'son',
    'ses',
    'il',
    'elle',
    'ils',
    'elles',
    'nous',
    'vous',
    'je',
    'tu',
    'on',
    'y',
    'est',
    'sont',
    'pas',
    'ne',
    'plus',
    'aussi',
    'd',
    'l',
  ]),
  en: new Set([
    'a',
    'an',
    'the',
    'and',
    'or',
    'but',
    'in',
    'on',
    'at',
    'to',
    'for',
    'of',
    'with',
    'by',
    'from',
    'up',
    'about',
    'into',
    'is',
    'are',
    'was',
    'were',
    'be',
    'been',
    'have',
    'has',
    'had',
    'do',
    'does',
    'did',
    'will',
    'can',
    'your',
    'how',
    'my',
    'its',
    'it',
    'this',
    'that',
    'i',
    'you',
  ]),
  de: new Set([
    'der',
    'die',
    'das',
    'den',
    'dem',
    'des',
    'ein',
    'eine',
    'einer',
    'einem',
    'einen',
    'eines',
    'und',
    'oder',
    'aber',
    'in',
    'an',
    'auf',
    'zu',
    'fur',
    'mit',
    'von',
    'bei',
    'nach',
    'vor',
    'durch',
    'uber',
    'unter',
    'ist',
    'sind',
    'war',
    'waren',
    'haben',
    'hat',
    'hatte',
    'wird',
    'wurde',
    'ich',
    'sie',
    'wir',
  ]),
  es: new Set([
    'el',
    'la',
    'los',
    'las',
    'un',
    'una',
    'unos',
    'unas',
    'y',
    'o',
    'pero',
    'en',
    'a',
    'para',
    'de',
    'del',
    'con',
    'por',
    'que',
    'se',
    'su',
    'sus',
    'es',
    'son',
    'era',
    'eran',
    'al',
    'lo',
    'le',
    'nos',
    'yo',
    'tu',
    'mi',
  ]),
  it: new Set([
    'il',
    'lo',
    'la',
    'i',
    'gli',
    'le',
    'un',
    'uno',
    'una',
    'e',
    'o',
    'ma',
    'in',
    'a',
    'per',
    'di',
    'del',
    'della',
    'dei',
    'degli',
    'delle',
    'con',
    'da',
    'su',
    'che',
    'si',
    'e',
    'sono',
    'era',
    'mi',
    'ti',
    'ci',
    'vi',
    'li',
  ]),
  pl: new Set([
    'i',
    'w',
    'z',
    'na',
    'do',
    'nie',
    'sie',
    'to',
    'ze',
    'jest',
    'sa',
    'byl',
    'byla',
    'bylo',
    'byli',
    'jak',
    'ktory',
    'ktora',
    'ktore',
    'tego',
    'tej',
    'ten',
    'ta',
    'te',
    'o',
    'po',
    'ale',
    'moze',
    'czy',
    'co',
    'ja',
  ]),
  pt: new Set([
    'o',
    'a',
    'os',
    'as',
    'um',
    'uma',
    'uns',
    'umas',
    'e',
    'ou',
    'mas',
    'em',
    'para',
    'de',
    'do',
    'da',
    'dos',
    'das',
    'com',
    'por',
    'que',
    'se',
    'seu',
    'sua',
    'e',
    'sao',
    'era',
    'ao',
    'no',
    'na',
    'nos',
    'nas',
    'eu',
    'tu',
    'ele',
    'ela',
  ]),
};

/**
 * Tech-doc synonyms per locale (keys accent-stripped, values include accented
 * canonical forms first so Pagefind's language stemmer matches indexed content).
 */
const SYNONYMS_BY_LOCALE: Record<Locale, Record<string, string[]>> = {
  fr: {
    modifier: ['éditer', 'editer', 'changer', 'configurer', 'paramétrer'],
    editer: ['éditer', 'modifier', 'changer'],
    supprimer: ['effacer', 'enlever', 'retirer', 'désactiver', 'desactiver'],
    creer: [
      'créer',
      'ajouter',
      'générer',
      'generer',
      'initialiser',
      'déployer',
    ],
    configurer: ['paramétrer', 'parametrer', 'modifier', 'définir', 'definir'],
    installer: ['déployer', 'deployer', 'mettre en place', 'créer'],
    verifier: ['vérifier', 'contrôler', 'controler', 'tester', 'valider'],
    gerer: ['gérer', 'administrer', 'superviser', 'piloter'],
    connecter: ['accéder', 'acceder', 'ouvrir'],
    acceder: ['accéder', 'connecter', 'ouvrir', 'naviguer'],
    desactiver: ['désactiver', 'supprimer', 'retirer', 'enlever'],
    migrer: ['transférer', 'transferer', 'déplacer', 'deplacer', 'importer'],
    sauvegarder: ['backup', 'copier', 'exporter'],
    restaurer: ['récupérer', 'recuperer', 'réinitialiser', 'reinitialiser'],
  },
  en: {
    edit: ['modify', 'update', 'change', 'configure'],
    modify: ['edit', 'update', 'change', 'configure'],
    create: ['add', 'generate', 'deploy', 'initialize', 'set up', 'setup'],
    delete: ['remove', 'disable', 'uninstall', 'drop'],
    remove: ['delete', 'disable', 'uninstall'],
    configure: ['set up', 'setup', 'customize', 'edit', 'manage'],
    install: ['deploy', 'set up', 'setup'],
    check: ['verify', 'validate', 'test', 'monitor'],
    verify: ['check', 'validate', 'test'],
    manage: ['administer', 'control', 'configure'],
    connect: ['access', 'login', 'log in', 'sign in'],
    access: ['connect', 'open', 'navigate', 'login'],
    disable: ['deactivate', 'remove', 'delete'],
    migrate: ['transfer', 'move', 'import'],
    backup: ['save', 'copy', 'export'],
    restore: ['recover', 'reset', 'reinitialize'],
  },
  de: {
    // Keys are accent-stripped (u for ü, etc.)
    bearbeiten: ['ändern', 'andern', 'konfigurieren', 'editieren', 'anpassen'],
    andern: ['ändern', 'bearbeiten', 'konfigurieren'],
    erstellen: [
      'hinzufugen',
      'hinzufügen',
      'generieren',
      'anlegen',
      'deployen',
    ],
    loschen: ['löschen', 'entfernen', 'deaktivieren', 'deinstallieren'],
    entfernen: ['löschen', 'loschen', 'deaktivieren'],
    konfigurieren: ['einrichten', 'anpassen', 'einstellen', 'bearbeiten'],
    installieren: ['deployen', 'einrichten', 'bereitstellen'],
    prufen: [
      'überprüfen',
      'uberprufen',
      'verifizieren',
      'testen',
      'validieren',
    ],
    verwalten: ['administrieren', 'steuern', 'managen'],
    verbinden: ['zugreifen', 'anmelden', 'einloggen'],
    migrieren: ['ubertragen', 'übertragen', 'verschieben', 'importieren'],
    sichern: ['backup', 'kopieren', 'exportieren'],
    wiederherstellen: ['zurucksetzen', 'zurücksetzen', 'recuperieren'],
  },
  es: {
    editar: ['modificar', 'cambiar', 'configurar', 'actualizar'],
    modificar: ['editar', 'cambiar', 'configurar'],
    crear: [
      'añadir',
      'anadir',
      'agregar',
      'generar',
      'desplegar',
      'inicializar',
    ],
    eliminar: ['borrar', 'desactivar', 'quitar', 'remover', 'suprimir'],
    borrar: ['eliminar', 'quitar', 'remover'],
    configurar: ['establecer', 'ajustar', 'parametrizar', 'editar'],
    instalar: ['desplegar', 'implementar'],
    verificar: ['comprobar', 'validar', 'probar', 'revisar'],
    gestionar: ['administrar', 'manejar', 'controlar'],
    conectar: ['acceder', 'iniciar sesion', 'autenticar'],
    acceder: ['conectar', 'abrir', 'navegar'],
    migrar: ['transferir', 'mover', 'importar'],
    guardar: ['backup', 'copiar', 'exportar'],
    restaurar: ['recuperar', 'restablecer', 'reinicializar'],
  },
  it: {
    modificare: ['editare', 'cambiare', 'configurare', 'aggiornare'],
    editare: ['modificare', 'cambiare', 'configurare'],
    creare: ['aggiungere', 'generare', 'distribuire', 'inizializzare'],
    eliminare: ['cancellare', 'disattivare', 'rimuovere', 'sopprimere'],
    rimuovere: ['eliminare', 'cancellare', 'disattivare'],
    configurare: ['impostare', 'personalizzare', 'modificare'],
    installare: ['distribuire', 'configurare', 'implementare'],
    verificare: ['controllare', 'validare', 'testare'],
    gestire: ['amministrare', 'governare', 'controllare'],
    connettere: ['accedere', 'collegarsi', 'autenticarsi'],
    accedere: ['connettere', 'aprire', 'navigare'],
    migrare: ['trasferire', 'spostare', 'importare'],
    salvare: ['backup', 'copiare', 'esportare'],
    ripristinare: ['recuperare', 'reimpostare', 'reinizializzare'],
  },
  pl: {
    edytowac: ['modyfikowac', 'zmieniac', 'konfigurowac', 'aktualizowac'],
    modyfikowac: ['edytowac', 'zmieniac', 'konfigurowac'],
    tworzyc: ['dodac', 'generowac', 'wdrozuc', 'inicjowac'],
    usunac: ['wylaczyc', 'odinstalowac', 'skasowac'],
    konfigurowac: ['ustawic', 'dostosowac', 'edytowac'],
    instalowac: ['wdrozuc', 'konfigurowac'],
    sprawdzac: ['weryfikowac', 'testowac', 'walidowac'],
    zarzadzac: ['administrowac', 'kontrolowac'],
    polaczyc: ['uzyskac dostep', 'zalogowac sie'],
    migrowac: ['przeniesc', 'importowac', 'transferowac'],
    zapisac: ['backup', 'kopiowac', 'eksportowac'],
    przywrocic: ['odzyskac', 'zresetowac', 'reinicjowac'],
  },
  pt: {
    editar: ['modificar', 'alterar', 'configurar', 'atualizar'],
    modificar: ['editar', 'alterar', 'configurar'],
    criar: ['adicionar', 'gerar', 'implantar', 'inicializar', 'implementar'],
    eliminar: ['excluir', 'remover', 'desativar', 'apagar'],
    remover: ['eliminar', 'excluir', 'desativar'],
    configurar: ['definir', 'personalizar', 'ajustar', 'editar'],
    instalar: ['implantar', 'implementar', 'configurar'],
    verificar: ['checar', 'validar', 'testar', 'conferir'],
    gerenciar: ['administrar', 'gerir', 'controlar'],
    conectar: ['acessar', 'fazer login', 'autenticar'],
    acessar: ['conectar', 'abrir', 'navegar'],
    migrar: ['transferir', 'mover', 'importar'],
    salvar: ['backup', 'copiar', 'exportar'],
    restaurar: ['recuperar', 'redefinir', 'reinicializar'],
  },
};

/** Remove stop words; falls back to original if all words are stop words. */
function stripStopWords(query: string, locale: Locale): string {
  const stopWords = STOP_WORDS_BY_LOCALE[locale];
  const filtered = query
    .split(/\s+/)
    .filter((w) => !stopWords.has(stripAccents(w.toLowerCase())))
    .join(' ')
    .trim();
  return filtered || query;
}

/**
 * Returns the stop-word-filtered query plus one variant per synonym match.
 * Used to run multiple Pagefind searches in parallel.
 */
function expandQuery(query: string, locale: Locale): string[] {
  const synonyms = SYNONYMS_BY_LOCALE[locale];
  const base = stripStopWords(query, locale);
  const queries = new Set<string>([base]);
  const words = base.split(/\s+/);
  words.forEach((word, i) => {
    const norm = stripAccents(word.toLowerCase());
    for (const syn of synonyms[norm] ?? []) {
      const expanded = [...words];
      expanded[i] = syn;
      queries.add(expanded.join(' '));
    }
  });
  return Array.from(queries);
}

interface TermGroup {
  terms: string[]; // original term + its synonyms
  weight: number; // specific nouns (DNS, zone…) = 1.0, common verbs (edit, modify…) = 0.5
}

/**
 * Returns one weighted group per significant query term.
 * Terms whose root is a key in SYNONYMS are generic action verbs → weight 0.5.
 * Specific nouns with no synonyms (DNS, zone, VPS…) → weight 1.0.
 */
function getTermGroups(query: string, locale: Locale): TermGroup[] {
  const synonyms = SYNONYMS_BY_LOCALE[locale];
  return stripStopWords(query, locale)
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const norm = stripAccents(word.toLowerCase());
      const isCommonVerb = norm in synonyms;
      return {
        terms: [norm, ...(synonyms[norm] ?? [])],
        weight: isCommonVerb ? 0.5 : 1.0,
      };
    });
}

/**
 * Weighted title score: specific nouns count twice as much as generic verbs.
 * Returns 2 when all groups match (perfect), fractional when partial, 0 when none.
 */
function titleTermScore(titleNorm: string, termGroups: TermGroup[]): number {
  if (termGroups.length === 0) return 0;
  const titleWords = titleNorm.split(/\s+/);
  let total = 0;
  let matched = 0;
  for (const { terms, weight } of termGroups) {
    total += weight;
    if (
      terms.some((t) => titleWords.some((tw) => tw === t || tw.startsWith(t)))
    ) {
      matched += weight;
    }
  }
  if (total === 0) return 0;
  const ratio = matched / total;
  return ratio >= 1 ? 2 : ratio;
}

export function PagefindSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [resultCount, setResultCount] = useState(0);
  const pagefindRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const loadPagefind = useCallback(async () => {
    if (pagefindRef.current) return pagefindRef.current;
    try {
      // new Function bypasses Vite's static module bundling so the browser
      // fetches /pagefind/pagefind.js at runtime from the built output.
      const dynamicImport = new Function('u', 'return import(u)') as (
        u: string,
      ) => Promise<any>;
      const pf = await dynamicImport('/pagefind/pagefind.js');
      if (!pf?.search) throw new Error('Pagefind search API not found');
      // Disable page-length penalty so short focused guides aren't
      // outranked by long hub pages that merely reference them.
      await pf.options?.({ ranking: { pageLength: 0 } });
      pagefindRef.current = pf;
      return pf;
    } catch {
      // Expected in dev mode (no built index). Silently ignored.
      return null;
    }
  }, []);

  const doSearch = useCallback(
    async (q: string) => {
      if (!q.trim()) {
        setResults([]);
        setResultCount(0);
        return;
      }
      setLoading(true);
      try {
        const pf = await loadPagefind();
        if (!pf) {
          setResults([]);
          setResultCount(-1); // sentinel: index not available
          return;
        }

        // Strip stop words + expand synonyms, run all variants in parallel
        const locale = getLocale();
        const queries = expandQuery(q, locale);
        const allSearchResults = await Promise.all(
          queries.map((eq) => pf.search(eq)),
        );

        // Take top 15 from EACH query independently, then merge.
        // This ensures synonym-query results are always represented in the pool
        // even when the primary query has many more results.
        const PER_QUERY = 30;
        const seenIds = new Set<string>();
        const mergedResults: any[] = [];
        for (const sr of allSearchResults) {
          for (const r of sr.results.slice(0, PER_QUERY)) {
            if (!seenIds.has(r.id)) {
              seenIds.add(r.id);
              mergedResults.push(r);
            }
          }
        }
        setResultCount(allSearchResults[0].results.length); // show primary query count

        const topN = mergedResults;
        const data = await Promise.all(topN.map((r: any) => r.data()));

        // Re-rank: synonym-aware term-group title scoring
        const termGroups = getTermGroups(q, locale);
        const ranked = data
          .map((d: any) => {
            const titleNorm = stripAccents((d.meta?.title || '').toLowerCase());
            const score = titleTermScore(titleNorm, termGroups);
            return { d, titleMatchScore: score };
          })
          .sort((a, b) => b.titleMatchScore - a.titleMatchScore)
          .slice(0, 20)
          .map(({ d, titleMatchScore }) => ({
            url: (d.url as string).replace(/\.html$/, ''),
            title: d.meta?.title || d.url,
            excerpt: d.excerpt as string,
            subResults: ((d.sub_results as any[]) || [])
              .slice(0, 3)
              .map((sr: any) => ({
                title: sr.title as string,
                url: (sr.url as string).replace(/\.html$/, ''),
                excerpt: sr.excerpt as string,
              })),
            titleMatchScore,
          }));

        setResults(ranked);
      } catch (e) {
        console.error('Search error:', e);
      } finally {
        setLoading(false);
      }
    },
    [loadPagefind],
  );

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => doSearch(query), 200);
    return () => clearTimeout(timer);
  }, [query, doSearch]);

  // Cmd+K / Ctrl+K toggle
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // Focus input & preload pagefind on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      loadPagefind();
    }
  }, [isOpen, loadPagefind]);

  const modal = isOpen
    ? createPortal(
        <>
          <div
            className="pagefind-overlay"
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
            role="button"
            tabIndex={-1}
          />
          <div className="pagefind-modal-wrapper">
            <button
              type="button"
              className="pagefind-close"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <div className="pagefind-modal">
              <div className="pagefind-form">
                <svg
                  className="pagefind-form__icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-label="Search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  ref={inputRef}
                  type="search"
                  className="pagefind-form__input"
                  placeholder="Search documentation..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoComplete="off"
                />
                {query && (
                  <button
                    type="button"
                    className="pagefind-form__clear"
                    onClick={() => {
                      setQuery('');
                      inputRef.current?.focus();
                    }}
                  >
                    ⌫
                  </button>
                )}
              </div>

              {query && (
                <div className="pagefind-results">
                  {loading && <p className="pagefind-status">Searching…</p>}
                  {!loading && resultCount === -1 && (
                    <p className="pagefind-status">
                      Search index not available — run a full build first.
                    </p>
                  )}
                  {!loading && resultCount === 0 && (
                    <p className="pagefind-status">
                      No results for <strong>{query}</strong>
                    </p>
                  )}
                  {!loading && resultCount > 0 && (
                    <p className="pagefind-status">
                      {resultCount} results for <strong>{query}</strong>
                    </p>
                  )}
                  {results.map((result) => (
                    <div key={result.url} className="pagefind-result">
                      <a
                        href={result.url}
                        className="pagefind-result__title"
                        onClick={() => setIsOpen(false)}
                      >
                        {result.title}
                      </a>
                      {result.excerpt && (
                        <p
                          className="pagefind-result__excerpt"
                          // biome-ignore lint/security/noDangerouslySetInnerHtml: pagefind excerpt with <mark> highlights
                          dangerouslySetInnerHTML={{ __html: result.excerpt }}
                        />
                      )}
                      {result.subResults.map((sub) => (
                        <div key={sub.url} className="pagefind-sub">
                          <a
                            href={sub.url}
                            className="pagefind-sub__title"
                            onClick={() => setIsOpen(false)}
                          >
                            ↳ {sub.title}
                          </a>
                          {sub.excerpt && (
                            <p
                              className="pagefind-sub__excerpt"
                              // biome-ignore lint/security/noDangerouslySetInnerHtml: pagefind excerpt with <mark> highlights
                              dangerouslySetInnerHTML={{ __html: sub.excerpt }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>,
        document.getElementById('__rspress_modal_container') || document.body,
      )
    : null;

  return (
    <>
      <button
        type="button"
        className="pagefind-trigger"
        onClick={() => setIsOpen(true)}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-label="Search"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span>Search</span>
        <kbd>⌘K</kbd>
      </button>
      {modal}
    </>
  );
}
