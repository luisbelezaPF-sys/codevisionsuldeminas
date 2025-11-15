'use client'

import { Zap, Award, Headphones, Cpu, Instagram, MessageCircle, Play, Smartphone, Video, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [hoveredApp, setHoveredApp] = useState<number | null>(null)

  const projects = [
    { 
      id: 2, 
      title: 'Pizzaria Bella Napoli', 
      category: 'Vídeo Promocional', 
      type: 'Pizza',
      videoUrl: 'https://www.youtube.com/embed/sv3TXMSv6Lw'
    },
  ]

  const apps = [
    {
      id: 1,
      name: 'DeliveryPro',
      description: 'Sistema completo de delivery com painel administrativo e app mobile',
      features: ['Pedidos em tempo real', 'Gestão de cardápio', 'Relatórios avançados']
    },
    {
      id: 2,
      name: 'AgendaFácil',
      description: 'Plataforma de agendamento online para salões e clínicas',
      features: ['Calendário inteligente', 'Notificações automáticas', 'Gestão de clientes']
    },
    {
      id: 3,
      name: 'StockManager',
      description: 'Controle de estoque e vendas para pequenos negócios',
      features: ['Controle de estoque', 'PDV integrado', 'Dashboard analítico']
    },
  ]

  const differentials = [
    { icon: Zap, title: 'Rapidez', description: 'Entrega ágil sem comprometer qualidade' },
    { icon: Award, title: 'Alta Qualidade', description: 'Padrão premium em cada detalhe' },
    { icon: Headphones, title: 'Atendimento Exclusivo', description: 'Suporte dedicado do início ao fim' },
    { icon: Cpu, title: 'Tecnologia de Ponta', description: 'Ferramentas e técnicas mais avançadas' },
  ]

  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Glow effect background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] opacity-5 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white opacity-5 blur-[120px] rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 py-20">
          {/* Logo/Brand */}
          <div className="mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider mb-2 bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent animate-fade-in">
              CodeVisionSulDeMinas
            </h1>
            <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Transformamos Ideias em{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
              Experiências Digitais
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Vídeos profissionais, conteúdos automáticos, designs impactantes e aplicativos sob medida para sua marca.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://wa.me/5537998367198"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp — (37) 99836-7198
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="https://instagram.com/CodeVisionSulDeMinas"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <Instagram className="w-5 h-5" />
                Ver Instagram — @CodeVisionSulDeMinas
              </span>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-[#D4AF37] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Projetos que{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
                Falam por Si
              </span>
            </h2>
            <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-[#D4AF37] transition-all duration-500"
                style={{
                  boxShadow: hoveredProject === project.id ? '0 0 30px rgba(212,175,55,0.3)' : 'none'
                }}
              >
                {/* Video iframe */}
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                  <span className="text-[#D4AF37] text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.type}</p>
                </div>

                {/* Golden glow border effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(212,175,55,0.1) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: hoveredProject === project.id ? 'shimmer 2s infinite' : 'none'
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Aplicativos Criados Para{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
                Resultados Reais
              </span>
            </h2>
            <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-6"></div>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => (
              <div
                key={app.id}
                onMouseEnter={() => setHoveredApp(app.id)}
                onMouseLeave={() => setHoveredApp(null)}
                className="group relative p-8 rounded-2xl border border-gray-800 hover:border-[#D4AF37] transition-all duration-500 backdrop-blur-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  boxShadow: hoveredApp === app.id ? '0 0 40px rgba(212,175,55,0.2)' : 'none'
                }}
              >
                {/* App Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="w-8 h-8 text-black" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 text-black" />
                  </div>
                </div>

                {/* App Name */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {app.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {app.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {app.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Glass effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Por que escolher o{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
                CodeVisionSulDeMinas?
              </span>
            </h2>
            <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-6"></div>
          </div>

          {/* Differentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {differentials.map((diff, index) => {
              const Icon = diff.icon
              return (
                <div
                  key={index}
                  className="group text-center p-8 rounded-2xl border border-gray-800 hover:border-[#D4AF37] transition-all duration-500 hover:scale-105"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                  }}
                >
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-300">
                      <Icon className="w-10 h-10 text-[#D4AF37] group-hover:text-black transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {diff.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Bottom text */}
          <div className="text-center">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada projeto é feito sob medida, com foco total no seu resultado.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        {/* Glow effect background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] opacity-10 blur-[150px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-white bg-clip-text text-transparent">
              elevar sua marca?
            </span>
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="https://wa.me/5537998367198"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-[#D4AF37] text-black font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Falar no WhatsApp — (37) 99836-7198
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="https://instagram.com/CodeVisionSulDeMinas"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                <Instagram className="w-6 h-6" />
                Ver Portfólio no Instagram
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
                CodeVisionSulDeMinas
              </h3>
              <p className="text-gray-400 text-sm">
                Seu projeto começa aqui.
              </p>
            </div>

            {/* Links */}
            <div className="text-center space-y-3">
              <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Contato</h4>
              <a
                href="https://wa.me/5537998367198"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>(37) 99836-7198</span>
              </a>
              <a
                href="https://instagram.com/CodeVisionSulDeMinas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>@CodeVisionSulDeMinas</span>
              </a>
            </div>

            {/* Services */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Serviços</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Vídeos Profissionais</li>
                <li>Design de Conteúdos</li>
                <li>Desenvolvimento de Apps</li>
                <li>Automação de Processos</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-900 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CodeVisionSulDeMinas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}
