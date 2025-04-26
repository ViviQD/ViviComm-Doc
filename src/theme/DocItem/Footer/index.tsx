import React from 'react';
import OriginalDocItemFooter from '@theme-original/DocItem/Footer';

export default function DocItemFooter(props): JSX.Element {
  const { lastUpdatedAt } = props;

  const now = new Date();
  const formattedDate = now.toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const formattedTime = now.toLocaleTimeString('hu-HU', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const datetimeAttr = now.toISOString();

  return (
    <>
      <OriginalDocItemFooter {...props} />
      {!lastUpdatedAt && (
        <div
          className="theme-last-updated custom-last-updated"
        >
          Utolsó frissítés{' '}
          <b>
            <time dateTime={datetimeAttr} itemProp="dateModified">
              {formattedDate}
            </time>
          </b>{' '}
          napján{' '}
          <b>{formattedTime}</b>
          -kor
        </div>
      )}
    </>
  );
}
