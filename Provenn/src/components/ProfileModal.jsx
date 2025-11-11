import { X, MapPin, Mail, ThumbsUp, Briefcase, GraduationCap, Award, Globe, Heart } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

export const ProfileModal = ({ profile, open, onClose }) => {
  if (!profile) return null;

  const handleRecommend = () => {
    toast({
      title: "Recomendação enviada!",
      description: `Você recomendou ${profile.nome} para sua rede.`,
    });
  };

  const handleMessage = () => {
    toast({
      title: "Mensagem enviada!",
      description: `Sua mensagem foi enviada para ${profile.nome}.`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-white dark:bg-[#1a1a1a] p-0 flex flex-col">
        <div className="overflow-y-auto flex-1">
        <DialogHeader className="bg-[#700422] dark:bg-[#E4B34B] p-6 text-white rounded-t-lg">
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 rounded-full bg-white p-1">
              <img
                src={profile.foto}
                alt={profile.nome}
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.nome)}&background=0ea5e9&color=fff&size=200`;
                }}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1 text-white">{profile.nome}</h2>
              <p className="text-white/90 mb-2">{profile.cargo}</p>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{profile.localizacao}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 mt-4">
            <Button 
              onClick={handleMessage}
              className="flex-1 bg-[#E4B34B] text-[#700422] hover:bg-[#E8BE65] dark:bg-[#700422] dark:text-[#E4B34B] dark:hover:bg-[#8B4155]"
            >
              <Mail className="w-4 h-4 mr-2" />
              Enviar Mensagem
            </Button>
            <button 
              onClick={handleRecommend}
              className="flex-1 h-10 px-4 py-2 border-2 border-white text-white bg-transparent hover:bg-white/20 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#700422] disabled:pointer-events-none disabled:opacity-50 dark:border-[#E4B34B] dark:text-[#E4B34B] dark:hover:bg-[#E4B34B]/20"
            >
              <div className="flex items-center justify-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                Recomendar
              </div>
            </button>
          </div>
        </DialogHeader>

        <div className="p-6 space-y-6 bg-white dark:bg-[#1a1a1a]">
          {/* Resumo */}
          <section>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#700422] dark:text-[#E4B34B]">
              <Briefcase className="w-5 h-5 text-[#700422] dark:text-[#E4B34B]" />
              Sobre
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{profile.resumo}</p>
          </section>

          <Separator />

          {/* Habilidades Técnicas */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-[#700422] dark:text-[#E4B34B]">Habilidades Técnicas</h3>
            <div className="flex flex-wrap gap-2">
              {profile.habilidadesTecnicas.map((skill) => (
                <Badge key={skill} className="bg-[#E4B34B]/20 text-[#700422] border border-[#E4B34B] hover:bg-[#E4B34B] hover:text-white dark:bg-[#700422]/20 dark:text-[#E4B34B] dark:border-[#700422] dark:hover:bg-[#700422] dark:hover:text-[#E4B34B]">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          <Separator />

          {/* Soft Skills */}
          <section>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#700422] dark:text-[#E4B34B]">
              <Heart className="w-5 h-5 text-[#8B4155] dark:text-[#E8BE65]" />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.softSkills.map((skill) => (
                <Badge key={skill} className="bg-[#8B4155]/20 text-[#700422] border border-[#8B4155] hover:bg-[#8B4155] hover:text-white dark:bg-[#E8BE65]/20 dark:text-[#E4B34B] dark:border-[#E8BE65] dark:hover:bg-[#E8BE65] dark:hover:text-[#700422]">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          <Separator />

          {/* Experiências */}
          <section>
            <h3 className="text-lg font-semibold mb-4 text-[#700422] dark:text-[#E4B34B]">Experiência Profissional</h3>
            <div className="space-y-4">
              {profile.experiencias.map((exp, index) => (
                <div key={index} className="border-l-2 border-[#700422] dark:border-[#E4B34B] pl-4">
                  <h4 className="font-semibold text-[#700422] dark:text-[#E4B34B]">{exp.cargo}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.empresa}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {exp.inicio} - {exp.fim}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{exp.descricao}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Formação */}
          <section>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#700422] dark:text-[#E4B34B]">
              <GraduationCap className="w-5 h-5 text-[#700422] dark:text-[#E4B34B]" />
              Formação Acadêmica
            </h3>
            <div className="space-y-3">
              {profile.formacao.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-[#700422] dark:text-[#E4B34B]">{edu.curso}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.instituicao}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{edu.ano}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Projetos */}
          {profile.projetos && profile.projetos.length > 0 && (
            <>
              <section>
                <h3 className="text-lg font-semibold mb-4 text-[#700422] dark:text-[#E4B34B]">Projetos</h3>
                <div className="space-y-3">
                  {profile.projetos.map((proj, index) => (
                    <div key={index} className="bg-[#FFF2D7]/50 dark:bg-[#700422]/20 p-4 rounded-lg border border-[#E4B34B]/30 dark:border-[#E4B34B]/30">
                      <h4 className="font-semibold text-[#700422] dark:text-[#E4B34B]">{proj.titulo}</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{proj.descricao}</p>
                      {proj.link && (
                        <a 
                          href={proj.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-[#700422] dark:text-[#E4B34B] hover:underline mt-2 inline-block font-medium"
                        >
                          Ver projeto →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
              <Separator />
            </>
          )}

          {/* Certificações */}
          {profile.certificacoes && profile.certificacoes.length > 0 && (
            <>
              <section>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#700422] dark:text-[#E4B34B]">
                  <Award className="w-5 h-5 text-[#8B4155] dark:text-[#E8BE65]" />
                  Certificações
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  {profile.certificacoes.map((cert, index) => (
                    <li key={index} className="text-gray-700 dark:text-gray-300">{cert}</li>
                  ))}
                </ul>
              </section>
              <Separator />
            </>
          )}

          {/* Idiomas */}
          <section>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[#700422] dark:text-[#E4B34B]">
              <Globe className="w-5 h-5 text-[#700422] dark:text-[#E4B34B]" />
              Idiomas
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.idiomas.map((lang, index) => (
                <Badge key={index} className="bg-[#E4B34B]/20 text-[#700422] border border-[#E4B34B] dark:bg-[#700422]/20 dark:text-[#E4B34B] dark:border-[#700422]">
                  {lang.idioma} - {lang.nivel}
                </Badge>
              ))}
            </div>
          </section>

          <Separator />

          {/* Áreas de Interesse */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-[#700422] dark:text-[#E4B34B]">Áreas de Interesse</h3>
            <div className="flex flex-wrap gap-2">
              {profile.areaInteresses.map((area, index) => (
                <Badge key={index} className="bg-[#8B4155]/20 text-[#700422] border border-[#8B4155] dark:bg-[#E8BE65]/20 dark:text-[#E4B34B] dark:border-[#E8BE65]">
                  {area}
                </Badge>
              ))}
            </div>
          </section>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
