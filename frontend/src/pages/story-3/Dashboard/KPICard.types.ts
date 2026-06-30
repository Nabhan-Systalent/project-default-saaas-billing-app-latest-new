export interface KPICardProps {
  title: string;
  value: string;
  trend?: string;
  trendType?: 'positive' | 'negative' | 'neutral';
}
