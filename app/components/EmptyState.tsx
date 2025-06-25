'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import Heading from './Heading';
import Buttons from './Buttons';

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: FC<EmptyStateProps> = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing your filters',
  showReset,
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />

      <div className="w-48 mt-4">
        {showReset && (
          <Buttons
            outline
            label="Remove all filters"
            onclick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
