import { MapPin, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ProfileCard = ({ profile, onClick }) => {
  return (
    <Card 
      onClick={onClick}
      className="group cursor-pointer overflow-hidden bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:scale-[1.02] hover:border-primary/50"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-primary p-0.5">
              <img
                src={profile.foto}
                alt={profile.nome}
                className="w-full h-full rounded-full object-cover bg-card"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.nome)}&background=0ea5e9&color=fff&size=200`;
                }}
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent border-2 border-card rounded-full"></div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-[#700422] dark:text-[#E4B34B] truncate group-hover:text-[#8B4155] dark:group-hover:text-[#E8BE65] transition-colors">
              {profile.nome}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{profile.cargo}</p>
          </div>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-4 min-h-[2.5rem]">
          {profile.resumo}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate">{profile.localizacao}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="truncate">{profile.area}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {profile.habilidadesTecnicas.slice(0, 3).map((skill) => (
            <Badge 
              key={skill} 
              className="text-xs bg-[#E4B34B]/20 text-[#700422] border border-[#E4B34B] hover:bg-[#E4B34B] hover:text-white dark:bg-[#700422]/20 dark:text-[#E4B34B] dark:border-[#700422] dark:hover:bg-[#700422] dark:hover:text-[#E4B34B] transition-colors"
            >
              {skill}
            </Badge>
          ))}
          {profile.habilidadesTecnicas.length > 3 && (
            <Badge 
              className="text-xs border bg-[#E4B34B]/30 border-[#700422] text-[#700422] dark:border-[#E4B34B] dark:text-[#E4B34B] hover:bg-[#E4B34B] hover:text-white"
            >
              +{profile.habilidadesTecnicas.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
};

