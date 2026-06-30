import React from 'react';
import { KPICardProps } from './KPICard.types';
import { cn } from '@/lib/utils';

export const KPICard: React.FC<KPICardProps> = ({ title, value, trend, trendType = 'neutral' }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
      <h3 className="text-sm font-medium text-neutral-500 mb-2">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-neutral-900">{value}</span>
        {trend && (
          <span className={cn(
            "text-xs font-semibold",
            trendType === 'positive' ? 'text-emerald-600' : 
            trendType === 'negative' ? 'text-rose-600' : 'text-neutral-600'
          )}>
            {trend}
          </span>
        )}
      </div>
    </div>
  );
};
