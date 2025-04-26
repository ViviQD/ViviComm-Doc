/*import React from 'react';
import type { Props } from '@theme/LastUpdatedAt';
import { format } from 'date-fns';
import { hu } from 'date-fns/locale';

export default function LastUpdatedAt({ lastUpdatedAt }: Props): JSX.Element {
  return (
    <span>
      {`Utolsó frissítés: `}
      {format(new Date(lastUpdatedAt * 1000), 'yyyy. MMMM d. HH:mm', { locale: hu })}
    </span>
  );
}*/

import React from 'react';
import type { Props } from '@theme/LastUpdatedAt';

export default function LastUpdatedAt({ lastUpdatedAt }: Props): JSX.Element {
  const date = new Date(lastUpdatedAt * 1000);
  const formattedDateTime = date.toLocaleString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <span>
      {`Utolsó frissítés: ${formattedDateTime}`}
    </span>
  );
}

