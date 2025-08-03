import React from 'react';
import { View } from 'react-native';
import Markdown from 'react-native-markdown-display';

interface ParagraghComponentProps {
  module: {
    content: string;
  };
}

export const ParagraghComponent: React.FC<ParagraghComponentProps> = ({ module }) => {
  return (
    <Markdown
      style={{
        body: { fontSize: 14, color: '#333' },
        heading1: { fontSize: 20, fontWeight: 'bold' },
        heading2: { fontSize: 18, fontWeight: 'bold' },
        heading3: { fontSize: 16, fontWeight: 'bold' },
        bullet_list: { marginVertical: 4 },
        ordered_list: { marginVertical: 4 },
        link: { color: '#007AFF' },
        code_inline: {
          backgroundColor: '#f0f0f0',
          paddingHorizontal: 4,
          paddingVertical: 2,
          borderRadius: 4,
          fontFamily: 'monospace',
        },
        fence: {
          backgroundColor: '#f6f8fa',
          padding: 8,
          borderRadius: 6,
          fontFamily: 'monospace',
        },
      }}
    >
      {module.content}
    </Markdown>
  );
};