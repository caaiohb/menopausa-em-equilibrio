import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

const WHATS = "https://wa.me/5500000000000?text=Quero%20agendar%20minha%20avalia%C3%A7%C3%A3o";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto Trizi · Emagrecimento na Menopausa" },
      { name: "description", content: "Programa médico de emagrecimento para mulheres 40+ na menopausa: hormônios, nutrição e força muscular." },
      { property: "og:title", content: "Instituto Trizi" },
      { property: "og:description", content: "Emagreça na menopausa com acompanhamento médico de 90 dias." },
    ],
  }),
  component: Index,
});

const Btn = ({ children }: { children: React.ReactNode }) => (
  <a href={WHATS} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg transition hover:opacity-90">
    {children}
  </a>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-3xl md:text-5xl leading-tight">{children}</h2>
);

function Index() {
  return (
    <main className="font-sans">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="font-display text-2xl">Instituto <span className="text-primary">Trizi</span></span>
        <a href={WHATS} className="text-sm font-semibold text-accent underline-offset-4 hover:underline">Agendar avaliação</a>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-10 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-4 inline-block rounded-full bg-secondary px-4 py-1 text-sm font-semibold text-secondary-foreground">Para mulheres 40+ na peri e pós-menopausa</p>
          <h1 className="font-display text-4xl leading-[1.05] md:text-6xl">Seu corpo mudou. <em className="text-primary">Seu tratamento também precisa mudar.</em></h1>
          <p className="mt-6 text-lg text-muted-foreground">Programa médico de 90 dias que trata a causa da barriga que não sai: hormônios, músculo, sono e metabolismo — sem dietas da moda.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Btn>Quero minha avaliação</Btn>
            <span className="text-sm text-muted-foreground">Vagas limitadas por mês</span>
          </div>
        </div>
        <img src={hero} alt="Paciente sorrindo no jardim da clínica" width={1024} height={1280} className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl" />
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-6">
          <H2>Você se reconhece?</H2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Engordou na barriga mesmo comendo igual", "Ondas de calor, insônia e cansaço", "Já tentou dietas e o peso sempre volta", "Perda de massa muscular e flacidez", "Inchaço, ansiedade e compulsão por doces", "Sente que ninguém leva a menopausa a sério"].map((t) => (
              <div key={t} className="rounded-2xl bg-card p-6 shadow-sm">✓ {t}</div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-muted-foreground">Não é falta de força de vontade. A queda do estrogênio muda onde e como seu corpo armazena gordura. Por isso o que funcionava aos 30 não funciona mais.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <H2>O Método Trizi em 4 pilares</H2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            ["01", "Hormônios", "Avaliação com médica especialista e, se indicada, terapia hormonal segura."],
            ["02", "Nutrição", "Plano alimentar rico em proteína, anti-inflamatório e possível de seguir."],
            ["03", "Força", "Treino para preservar músculo e ossos, adaptado ao seu nível."],
            ["04", "Mente e sono", "Apoio para ansiedade, compulsão e noites mal dormidas."],
          ].map(([n, t, d]) => (
            <div key={n} className="border-t-2 border-primary pt-4">
              <span className="font-display text-4xl text-primary">{n}</span>
              <h3 className="mt-2 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent py-20 text-accent-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <H2>Histórias reais</H2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["“Perdi 9 kg em 3 meses e voltei a dormir a noite inteira.”", "Márcia, 52"],
              ["“Pela primeira vez uma médica me ouviu de verdade.”", "Cláudia, 48"],
              ["“As ondas de calor sumiram e a barriga diminuiu.”", "Renata, 55"],
            ].map(([q, a]) => (
              <figure key={a} className="rounded-2xl border border-accent-foreground/20 p-6">
                <blockquote className="font-display text-xl">{q}</blockquote>
                <figcaption className="mt-4 text-sm opacity-80">— {a}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-xs opacity-70">Resultados variam de pessoa para pessoa.</p>
        </div>
      </section>

      <section id="oferta" className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-semibold text-primary">Programa Trizi 90 Dias</p>
        <H2>Tudo o que você precisa, em um só lugar</H2>
        <div className="mt-10 rounded-[2rem] bg-card p-8 text-left shadow-xl md:p-12">
          <ul className="space-y-3">
            {["3 consultas com médica especialista em menopausa", "Painel completo de exames hormonais e metabólicos", "Bioimpedância mensal (gordura x músculo)", "Plano alimentar individual + 2 retornos com nutricionista", "Programa de treino de força para iniciantes", "Acompanhamento diário pelo WhatsApp com a equipe", "Bônus: guia de receitas anti-inflamatórias + grupo de apoio"].map((i) => (
              <li key={i} className="flex gap-3"><span className="text-primary">●</span>{i}</li>
            ))}
          </ul>
          <div className="mt-8 border-t border-border pt-8 text-center">
            <p className="text-muted-foreground line-through">De R$ 4.970</p>
            <p className="font-display text-5xl">12x R$ 297</p>
            <p className="mt-1 text-muted-foreground">ou R$ 2.970 à vista</p>
            <div className="mt-6"><Btn>Garantir minha vaga</Btn></div>
            <p className="mt-6 rounded-xl bg-secondary p-4 text-sm text-secondary-foreground"><strong>Garantia de 30 dias:</strong> se não se sentir acolhida e com evolução, devolvemos seu investimento.</p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-6">
          <H2>Perguntas frequentes</H2>
          <div className="mt-8 space-y-3">
            {[
              ["Terapia hormonal é obrigatória?", "Não. Só é indicada após avaliação médica e exames, quando é segura para você."],
              ["Vocês usam canetas emagrecedoras?", "Quando há indicação clínica, podem fazer parte do plano, sempre com acompanhamento e foco em preservar músculo."],
              ["Nunca fiz academia. Consigo?", "Sim. O treino começa do zero e é adaptado a dores e limitações."],
              ["Atendem online?", "Sim, consultas presenciais ou por telemedicina; a bioimpedância é presencial."],
            ].map(([q, a]) => (
              <details key={q} className="rounded-2xl bg-card p-5">
                <summary className="cursor-pointer font-semibold">{q}</summary>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <H2>A menopausa não é o fim. É o seu recomeço.</H2>
        <div className="mt-8"><Btn>Agendar avaliação pelo WhatsApp</Btn></div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © 2026 Instituto Trizi · Responsável técnica: Dra. Janifer Trizi · CRM 112184 · Conteúdo informativo, não substitui consulta médica.
      </footer>
    </main>
  );
}
