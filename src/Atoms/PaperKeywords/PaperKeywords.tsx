import React from 'react';

interface PaperKeywordsProps {
  keywords: string[];
}

export default function PaperKeywords({
  keywords,
}: Readonly<PaperKeywordsProps>) {
  return (
    <div className="paper-keywords">
      <h3>Keywords</h3>
      <ul>
        {keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </div>
  );
}
