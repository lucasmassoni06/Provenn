import { useState, useMemo, useEffect } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { FilterPanel } from '@/components/FilterPanel';
import { ProfileCard } from '@/components/ProfileCard';
import { ProfileModal } from '@/components/ProfileModal';
import { Button } from '@/components/ui/button';

const Professional = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('Todas');
  const [selectedCidade, setSelectedCidade] = useState('Todas');
  const [selectedTecnologia, setSelectedTecnologia] = useState('Todas');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profiles, setProfiles] = useState([]);
  // Estado para controlar quantos perfis estão visíveis
  const [visibleCount, setVisibleCount] = useState(8);

  // Load profiles from JSON
  useEffect(() => {
    fetch('/data/profiles.json')
      .then(res => res.json())
      .then(data => setProfiles(data))
      .catch(err => console.error('Error loading profiles:', err));
  }, []);

  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const matchesSearch = 
        profile.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.habilidadesTecnicas.some(skill => 
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesArea = selectedArea === 'Todas' || profile.area === selectedArea;
      const matchesCidade = selectedCidade === 'Todas' || profile.localizacao === selectedCidade;
      const matchesTecnologia = selectedTecnologia === 'Todas' || 
        profile.habilidadesTecnicas.includes(selectedTecnologia);

      return matchesSearch && matchesArea && matchesCidade && matchesTecnologia;
    });
  }, [profiles, searchTerm, selectedArea, selectedCidade, selectedTecnologia]);

  // Resetar contador de perfis visíveis quando filtros ou busca mudarem
  useEffect(() => {
    setVisibleCount(8);
  }, [searchTerm, selectedArea, selectedCidade, selectedTecnologia]);

  // Função para carregar mais perfis
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  // Perfis visíveis (limitados pelo contador)
  const visibleProfiles = filteredProfiles.slice(0, visibleCount);
  
  // Verificar se há mais perfis para exibir
  const hasMoreProfiles = filteredProfiles.length > visibleCount;

  const handleCardClick = (profile) => {
    setSelectedProfile(profile);
    setIsModalOpen(true);
  };

  return (
    <div id="professional" className="min-h-screen bg-background py-16">
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <FilterPanel
            area={selectedArea}
            cidade={selectedCidade}
            tecnologia={selectedTecnologia}
            onAreaChange={setSelectedArea}
            onCidadeChange={setSelectedCidade}
            onTecnologiaChange={setSelectedTecnologia}
          />
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredProfiles.length} {filteredProfiles.length === 1 ? 'profissional encontrado' : 'profissionais encontrados'}
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onClick={() => handleCardClick(profile)}
            />
          ))}
        </div>

        {/* Botão "Ver mais" */}
        {hasMoreProfiles && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleLoadMore}
              className="bg-[#700422] hover:bg-[#8B4155] text-white dark:bg-[#E4B34B] dark:hover:bg-[#E8BE65] dark:text-[#700422] px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105"
            >
              Ver mais
            </Button>
          </div>
        )}

        {/* Empty State */}
        {filteredProfiles.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2 text-foreground">Nenhum profissional encontrado</h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou termo de busca
            </p>
          </div>
        )}
      </main>

      {/* Profile Modal */}
      <ProfileModal
        profile={selectedProfile}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Professional;

