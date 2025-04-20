import React, { useEffect } from 'react';
import mermaid from 'mermaid';

type MermaidProps = {
  chart: string;
};

const Mermaid = ({ chart }: MermaidProps) => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, [chart]);

  return <div className="mermaid">{chart}</div>;
};

export default Mermaid;
