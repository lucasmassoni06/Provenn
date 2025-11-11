import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input
        type="text"
        placeholder="Buscar por nome, cargo ou habilidades..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 h-12 bg-card border-border focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
};
