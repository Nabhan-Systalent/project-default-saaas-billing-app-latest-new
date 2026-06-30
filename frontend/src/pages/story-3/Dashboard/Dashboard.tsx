'use client';

import React from 'react';
import { KPICard } from './KPICard';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  // In a real app, these would come from an API hook
  const kpis = [
    { title: 'Total Revenue', value: '$45,231.89', trend: '+20.1%', trendType: 'positive' as const },
    { title: 'Pending Invoices', value: '12', trend: '-2', trendType: 'positive' as const },
    { title: 'Active Subscriptions', value: '573', trend: '+12', trendType: 'positive' as const },
  ];

  return (
    <div className="p-8 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
        <p className="text-neutral-500">Overview of your financial health</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>
    </div>
  );
};
