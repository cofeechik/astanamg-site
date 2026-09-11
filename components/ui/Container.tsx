import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/**
 * Контент максимум 1280px, поля 24px / 64px.
 * box-content — чтобы max-width ограничивал именно контент, а поля добавлялись сверху.
 */
export function Container({ as: Tag = 'div', className, children }: Props) {
  return <Tag className={cn('mx-auto box-content max-w-page px-6 lg:px-16', className)}>{children}</Tag>;
}
