import React from 'react';
import type { Props } from '@theme/LastUpdatedAt';

export default function LastUpdatedAt({ lastUpdatedAt }: Props): JSX.Element {
  if (!lastUpdatedAt) {
    return null;
  }

  const date = new Date(lastUpdatedAt * 1000);
  const formattedDateTime = date.toLocaleString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <span className="theme-last-updated">
      {`Utolsó frissítés: `}
      <b>{formattedDateTime}</b>
    </span>
  );
}
