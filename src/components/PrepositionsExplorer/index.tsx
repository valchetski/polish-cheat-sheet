import React, { useState, useRef } from 'react';
import styles from './styles.module.css';
import { prepositionsData } from './prepositions-data';

const caseColors = {
  biernik: '#4CAF50',
  miejscownik: '#2196F3',
  dopełniacz: '#FF9800',
  narzędnik: '#9C27B0',
  celownik: '#00BCD4',
  mianownik: '#F44336'
};

type ViewType = 'byCases' | 'byPrepositions';

export default function PrepositionsExplorer() {
  const [viewType, setViewType] = useState<ViewType>('byCases');
  const prepRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const caseRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handlePrepClick = (prepName: string) => {
    setViewType('byPrepositions');
    setTimeout(() => {
      prepRefs.current[prepName]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 0);
  };

  const handleCaseClick = (caseType: string) => {
    setViewType('byCases');
    setTimeout(() => {
      caseRefs.current[caseType]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 0);
  };

  const getGradientForPreposition = (prepName: string) => {
    const prep = prepositionsData.find(p => p.name === prepName);
    if (!prep || prep.cases.length === 1) {
      return caseColors[prep?.cases[0] as keyof typeof caseColors];
    }
    
    const colors = prep.cases.map(c => caseColors[c as keyof typeof caseColors]);
    return `linear-gradient(90deg, ${colors[0]} 0%, ${colors[colors.length - 1]} 100%)`;
  };

  const renderByCase = () => {
    const caseOrder = ['mianownik', 'dopełniacz', 'celownik', 'biernik', 'narzędnik', 'miejscownik'];
    
    const caseMap: { [key: string]: string[] } = {};
    prepositionsData.forEach(prep => {
      prep.cases.forEach(caseType => {
        if (!caseMap[caseType]) {
          caseMap[caseType] = [];
        }
        caseMap[caseType].push(prep.name);
      });
    });

    const sortedCases = caseOrder.filter(c => caseMap[c]);

    return (
      <div className={styles.caseView}>
        {sortedCases.map(caseType => (
          <div key={caseType} className={styles.caseSection} ref={(el) => { if (el) caseRefs.current[caseType] = el; }}>
            <h3 
              className={styles.caseHeader}
              style={{ 
                borderLeftColor: caseColors[caseType as keyof typeof caseColors],
                color: caseColors[caseType as keyof typeof caseColors]
              }}
            >
              {caseType}
            </h3>
            <div className={styles.prepList}>
              {caseMap[caseType].map(prep => (
                <span 
                  key={prep} 
                  className={styles.prepTag}
                  style={{ background: getGradientForPreposition(prep) }}
                  onClick={() => handlePrepClick(prep)}
                >
                  {prep}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderByPreposition = () => {
    const sortedPrepositions = [...prepositionsData].sort((a, b) => a.name.localeCompare(b.name));
    
    return (
      <div className={styles.prepView}>
        {sortedPrepositions.map(prep => (
          <div key={prep.name} className={styles.prepSection} ref={(el) => { if (el) prepRefs.current[prep.name] = el; }}>
            <h3 className={styles.prepHeader}>{prep.name}</h3>
            <div className={styles.casesInPrep}>
              {prep.cases.map(caseType => (
                <div key={caseType} className={styles.caseItem}>
                  <h4 
                    className={styles.caseItemHeader}
                    style={{ color: caseColors[caseType as keyof typeof caseColors] }}
                    onClick={() => handleCaseClick(caseType)}
                  >
                    {caseType}
                  </h4>
                  {prep.usage && prep.usage[caseType as keyof typeof prep.usage] && (
                    <>
                      <p className={styles.description}>{prep.usage[caseType as keyof typeof prep.usage]?.description}</p>
                      <ul className={styles.examples}>
                        {prep.usage[caseType as keyof typeof prep.usage]?.examples.map((example, idx) => (
                          <li key={idx}>{example}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button
          className={`${styles.button} ${viewType === 'byCases' ? styles.active : ''}`}
          onClick={() => setViewType('byCases')}
        >
          Grupuj po przypadkach
        </button>
        <button
          className={`${styles.button} ${viewType === 'byPrepositions' ? styles.active : ''}`}
          onClick={() => setViewType('byPrepositions')}
        >
          Grupuj po przyimkach
        </button>
      </div>

      <div className={styles.content}>
        {viewType === 'byCases' ? renderByCase() : renderByPreposition()}
      </div>
    </div>
  );
}
