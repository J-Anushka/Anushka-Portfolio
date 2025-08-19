
'use client';

import Link from 'next/link';

type TimelineItemProps = {
  year: string;
  title: string;
  description: React.ReactNode;
  align: 'left' | 'right';
};

export const TimelineItem = ({ year, title, description, align }: TimelineItemProps) => {
  const isLeft = align === 'left';
  const alignmentClass = isLeft ? 'md:self-start md:pr-12' : 'md:self-end md:pl-12';
  const textAlignClass = isLeft ? 'md:text-left' : 'md:text-right';
  const isHighlighted = year === '2025';

  return (
    <div className={`relative flex w-full flex-col items-center md:w-1/2 ${alignmentClass}`}>
      <div className={`absolute top-5 hidden md:block ${isLeft ? 'right-[-2px]' : 'left-[-2px]'}`}>
        <div
          className={`relative h-4 w-4 rounded-full ${
            isHighlighted ? 'bg-gradient-to-r from-accent to-primary' : 'bg-primary'
          } shadow-[0_0_10px_hsl(var(--primary))]`}
        >
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
        </div>
      </div>
      <h3
        className={`font-headline text-5xl font-bold ${
          isHighlighted ? 'bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent' : 'text-primary'
        }`}
      >
        {year}
      </h3>
      <div className={`w-full rounded-lg bg-secondary p-6 shadow-lg mt-4 text-center ${textAlignClass}`}>
        <h4 className="font-headline text-2xl font-bold">{title}</h4>
        <div className="mt-2 text-muted-foreground">{description}</div>
      </div>
    </div>
  );
};
