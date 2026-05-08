import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Typewriter({ sequence, wrapper = 'span', cursor = true, repeat = Infinity, style = {} }) {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper={wrapper}
      cursor={cursor}
      repeat={repeat}
      style={{
        fontFamily: 'Space Mono, monospace',
        color: 'var(--accent-cyan)',
        ...style
      }}
      speed={80}
      deletionSpeed={40}
    />
  );
}
