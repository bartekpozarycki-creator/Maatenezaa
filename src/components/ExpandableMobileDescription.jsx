import React, { useState } from 'react';

const WORD_LIMIT = 26;

function truncateToWords(text, wordLimit) {
  const normalized = text.trim();
  const words = normalized.split(/\s+/);

  if (words.length <= wordLimit) {
    return { preview: normalized, isTruncated: false };
  }

  return {
    preview: `${words.slice(0, wordLimit).join(' ')}…`,
    isTruncated: true,
  };
}

export default function ExpandableMobileDescription({ text }) {
  const [expanded, setExpanded] = useState(false);
  const { preview, isTruncated } = truncateToWords(text, WORD_LIMIT);

  return (
    <>
      <p className="hidden lg:block text-sm sm:text-base text-gray-700 leading-snug sm:leading-relaxed whitespace-pre-line">
        {text}
      </p>

      <div className="lg:hidden">
        <p className="text-sm text-gray-700 leading-snug whitespace-pre-line">
          {expanded || !isTruncated ? text : preview}
        </p>
        {isTruncated && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            {expanded ? 'Zwiń' : 'Czytaj więcej'}
          </button>
        )}
      </div>
    </>
  );
}
