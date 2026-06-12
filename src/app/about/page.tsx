import Image from "next/image";
import { StatsSection } from "@/components/sections/stats-section";

const team = [
  {
    name: "Sarah Murphy",
    role: "Diretora de Operações",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Conor Byrne",
    role: "Gerente de Frota",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Aoife Kelly",
    role: "Coordenadora de Guias",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-8">
      <div className="container-page grid gap-10 py-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-3xl font-extrabold sm:text-4xl">Sobre Nós</h1>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Há mais de 20 anos, a City Sightseeing Dublin leva visitantes do mundo todo
            para conhecer os pontos mais icônicos da capital irlandesa. Nossa frota de
            ônibus open-top percorre diariamente o centro histórico, conectando
            atrações culturais, gastronômicas e paisagens únicas.
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Combinamos tradição com inovação: motoristas e guias locais experientes,
            áudio guias em 10 idiomas e uma experiência pensada para todos os perfis de
            viajante, sozinhos, em família ou em grupo.
          </p>
        </div>
        <div className="grid h-72 grid-cols-2 gap-3 sm:h-96">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://d3hrj27b4bz3ky.cloudfront.net/webp/large/116953ea1-13df-44f1-b20e-0d9f9be5b00d"
              alt="Ônibus turístico em Dublin"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="https://d3hrj27b4bz3ky.cloudfront.net/webp/large/2feb0ca7a-b7f0-448b-abbc-209f45b0dc2f"
              alt="Pontos turísticos de Dublin"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container-page">
        <div className="relative h-56 overflow-hidden rounded-2xl sm:h-80">
          <Image
            src="https://d3hrj27b4bz3ky.cloudfront.net/webp/large/342043978-ec33-4e69-be06-6d2df9b7b1a7"
            alt="Dublin vista panorâmica"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <StatsSection />

      <div className="container-page py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Nossa Equipe</h2>
          <p className="mt-3 text-text-secondary">
            Pessoas apaixonadas por Dublin, dedicadas a fazer da sua visita uma
            experiência inesquecível.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                <Image src={member.photo} alt={member.name} fill sizes="128px" className="object-cover" />
              </div>
              <p className="mt-4 font-semibold">{member.name}</p>
              <p className="text-sm text-text-secondary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
