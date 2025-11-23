import React from 'react';
import { LucideIcon } from 'lucide-react';

type StatCardProps = {
  icon: LucideIcon; 
  value: React.ReactNode;
  label: string;
};

export default function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-2">
        <Icon className="text-white w-4 h-4" />
      </div>
      <div>
        <p className="font-bold">{value}</p>
        <p className="text-sm text-gray-200">{label}</p>
      </div>
    </div>
  );
}