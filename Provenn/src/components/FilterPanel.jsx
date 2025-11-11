import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const areas = ['Todas', 'Desenvolvimento', 'Design', 'Marketing', 'Dados', 'Gestão', 'DevOps', 'Mobile', 'UX/UI'];
const cidades = ['Todas', 'São Paulo/SP', 'Rio de Janeiro/RJ', 'Belo Horizonte/MG', 'Curitiba/PR', 'Porto Alegre/RS', 'Brasília/DF', 'Salvador/BA', 'Florianópolis/SC'];
const tecnologias = ['Todas', 'React', 'Python', 'JavaScript', 'TypeScript', 'Node.js', 'Java', 'SQL', 'AWS', 'Docker', 'Figma'];

export const FilterPanel = ({ area, cidade, tecnologia, onAreaChange, onCidadeChange, onTecnologiaChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Select value={area} onValueChange={onAreaChange}>
        <SelectTrigger className="bg-card border-border h-12">
          <SelectValue placeholder="Área" />
        </SelectTrigger>
        <SelectContent>
          {areas.map((a) => (
            <SelectItem key={a} value={a}>
              {a}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={cidade} onValueChange={onCidadeChange}>
        <SelectTrigger className="bg-card border-border h-12">
          <SelectValue placeholder="Cidade" />
        </SelectTrigger>
        <SelectContent>
          {cidades.map((c) => (
            <SelectItem key={c} value={c}>
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={tecnologia} onValueChange={onTecnologiaChange}>
        <SelectTrigger className="bg-card border-border h-12">
          <SelectValue placeholder="Tecnologia" />
        </SelectTrigger>
        <SelectContent>
          {tecnologias.map((t) => (
            <SelectItem key={t} value={t}>
              {t}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

