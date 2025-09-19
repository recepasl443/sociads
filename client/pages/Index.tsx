import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Marquee from "@/components/site/Marquee";
import { CheckCircle2, LineChart, Rocket, Search, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Index() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/40 to-background" />
        <div className="container py-24 md:py-32 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Lion Innovate</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">{t('hero.title')}</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">{t('hero.subtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#hemen-dene">{t('cta.hemenDene')}</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#toplanti">{t('cta.toplanti')}</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" /> {t('hero.security') || 'Enterprise-grade infrastructure for brands'}
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto w-full max-w-xl aspect-[5/3] rounded-2xl border bg-gradient-to-tr from-primary/20 to-accent/20 p-2 shadow-lg">
              <div className="h-full w-full rounded-xl bg-white dark:bg-zinc-900 grid grid-rows-[auto,1fr] overflow-hidden">
                <div className="h-10 bg-secondary/60 border-b flex items-center gap-1 px-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-muted-foreground">Kampanyanızı Oluşturun</span>
                </div>
                <div className="p-6 grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Yeni Kampanya</div>
                    <Button size="sm">Yayınla</Button>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    {["Hedef", "Bütçe", "Tarih"].map((l) => (
                      <div key={l} className="rounded-lg border p-3">
                        <div className="text-muted-foreground">{l}</div>
                        <div className="mt-1 h-2 w-full rounded bg-primary/20 overflow-hidden">
                          <div className="h-full w-1/2 bg-primary animate-[progress_2s_ease-in-out_infinite]" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs">
                      <Search className="w-4 h-4" /> Doğru influencerları arayın…
                    </div>
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="rounded-md border p-3">
                          <div className="h-24 rounded bg-secondary" />
                          <div className="mt-2 h-2 w-2/3 bg-secondary rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <style>{`@keyframes progress {0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}`}</style>
          </div>
        </div>
      </section>

      {/* Referanslar */}
      <section className="py-14 border-t">
        <div className="container">
          <p className="mb-6 text-center text-sm uppercase tracking-wider text-muted-foreground">{t('trust.heading')}</p>
          <Marquee />
        </div>
      </section>

      {/* Nasıl Çalışır */}
      <section id="nasil-calisir" className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center">{t('how.title')}</h2>
          <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">{t('how.subtitle')}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: <Rocket className="w-6 h-6" />, titleKey: 'how.step1.title', descKey: 'how.step1.desc' },
              { icon: <Search className="w-6 h-6" />, titleKey: 'how.step2.title', descKey: 'how.step2.desc' },
              { icon: <LineChart className="w-6 h-6" />, titleKey: 'how.step3.title', descKey: 'how.step3.desc' },
            ].map((i) => (
              <div key={i.titleKey} className="rounded-2xl border p-6 bg-card">
                <div className="w-10 h-10 grid place-items-center rounded-full bg-primary/10 text-primary">
                  {i.icon}
                </div>
                <h3 className="mt-4 font-semibold text-lg">{t(i.titleKey)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(i.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Özellikler + eğitim amaçlı görseller */}
      <section id="ozellikler" className="py-24 bg-secondary/40 border-y">
        <div className="container grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">{t('features.title')}</h2>
            <ul className="mt-6 space-y-4 text-sm">
              {[
                'features.kampanya',
                'features.kesfet',
                'features.performans',
              ].map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{t(key)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Button asChild>
                <a href="#hemen-dene">{t('cta.tryNow')}</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#fiyat">{t('pricing.title')}</a>
              </Button>
            </div>
          </div>
          <div>
            <div className="grid gap-6">
              {[
                { title: "Kampanya Oluşturma", color: "from-primary/30 to-accent/30" },
                { title: "Influencer Keşfi", color: "from-accent/30 to-primary/30" },
                { title: "Canlı Performans", color: "from-primary/30 to-foreground/10" },
              ].map((c) => (
                <div key={c.title} className={`rounded-2xl border p-4 bg-gradient-to-r ${c.color}`}>
                  <div className="rounded-xl bg-background p-4 grid gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{c.title}</span>
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div className="h-40 md:h-48 rounded-lg bg-secondary overflow-hidden relative">
                      <div className="absolute inset-0 grid grid-cols-6 gap-2 p-3">
                        {Array.from({ length: 18 }).map((_, i) => (
                          <div key={i} className="rounded bg-primary/10 animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: `${i * 80}ms` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* İş Birlikleri ve Influencer İçerikleri - slider */}
      <section id="is-birlikleri" className="py-20">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold">{t('collabs.title')}</h2>
              <p className="text-muted-foreground">{t('collabs.subtitle')}</p>
            </div>
          </div>

          <div className="relative mt-6">
            <Carousel>
              <div className="relative">
                <CarouselContent className="-ml-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <CarouselItem key={i} className="pl-2 basis-3/4 md:basis-1/3 lg:basis-1/4">
                      <div className="rounded-xl border overflow-hidden bg-card">
                        <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20" />
                        <div className="p-3 text-sm">
                          <div className="font-medium">{t('creative')} #{i + 1}</div>
                          <div className="text-muted-foreground">IG & TikTok</div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="hidden md:flex gap-2 absolute -top-10 right-0">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Sektörel çözümler - slider */}
      <section id="sektorel" className="py-20 bg-secondary/40 border-y">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">{t('sectors.title') || 'Sektörel Çözümlerimizi Keşfedin'}</h2>
          <p className="text-center text-muted-foreground mt-2">{t('sectors.subtitle') || 'Farklı sektörlere özel akıllı çözümler.'}</p>
          <Carousel>
            <CarouselContent className="mt-8 -ml-3">
              {(t('sector.list') || '').split('|').map((s, i) => (
                <CarouselItem key={s} className="pl-3 basis-3/4 md:basis-1/3 lg:basis-1/4">
                  <div className="rounded-2xl border p-6 bg-card h-full">
                    <div className="h-24 rounded-lg bg-gradient-to-tr from-primary/20 to-accent/20" />
                    <h3 className="mt-4 font-semibold">{s}</h3>
                    <p className="text-sm text-muted-foreground">{t('sector.desc') || 'Hedef kitlenize uygun içerik stratejileri.'}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section id="hemen-dene" className="py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{t('cta.try.title')}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t('cta.try.desc')}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button size="lg">{t('cta.freeStart')}</Button>
            <Button variant="outline" size="lg">{t('cta.demo')}</Button>
          </div>
        </div>
      </section>

      {/* Fiyatlandırma */}
      <section id="fiyat" className="py-20 bg-secondary/40 border-y">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">{t('pricing.title')}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { key: 'pricing.plan.starter', name: t('pricing.plan.starter'), price: '₺0', features: [t('pricing.feature.1'), t('pricing.feature.2'), t('pricing.feature.3')] },
              { key: 'pricing.plan.growth', name: t('pricing.plan.growth'), price: '₺3.990', features: ['Sınırsız kampanya', 'AI eşleştirme', 'Takım işbirliği'] },
              { key: 'pricing.plan.enterprise', name: t('pricing.plan.enterprise'), price: t('pricing.plan.enterprise'), features: ['SSO', 'Gelişmiş güvenlik', 'Özel başarı ekibi'] },
            ].map((p, i) => (
              <div key={p.key} className={`rounded-2xl border p-6 bg-card ${i === 1 ? "ring-2 ring-primary" : ""}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <div className="text-2xl font-bold">{p.price}</div>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">{t('select') || 'Seç'}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Başarı Hikayeleri */}
      <section id="basari" className="py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">{t('success.heading')}</h2>
            <p className="text-muted-foreground">{t('success.desc')}</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className="rounded-xl border overflow-hidden bg-card">
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="p-4">
                  <h3 className="font-semibold">{t('campaign') || 'Kampanya'} #{i + 1}</h3>
                  <p className="text-sm text-muted-foreground">{t('case.increase')}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 bg-secondary/40 border-y">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">{t('blog.heading') || 'Son Gelişmeleri İnceleyin'}</h2>
          <p className="text-center text-muted-foreground">{t('blog.desc') || 'Blog ve kütüphanemizdeki kaynaklar.'}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: t('blog.post.1.title'), tag: 'UGC' },
              { title: t('blog.post.2.title'), tag: 'AI' },
              { title: t('blog.post.3.title'), tag: 'Ekip' },
            ].map((p, i) => (
              <article key={i} className="rounded-xl border overflow-hidden bg-card">
                <div className="aspect-[16/10] bg-gradient-to-tr from-accent/20 to-primary/20" />
                <div className="p-4">
                  <span className="text-xs text-muted-foreground">{p.tag}</span>
                  <h3 className="mt-1 font-semibold">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section id="sss" className="py-20">
        <div className="container grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-bold">{t('faq.heading') || 'Sık Sorulan Sorular'}</h2>
            <p className="text-muted-foreground">{t('faq.desc') || 'Kafanıza takılanlar için hızlı yanıtlar.'}</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="a1">
              <AccordionTrigger>{t('faq.q1')}</AccordionTrigger>
              <AccordionContent>{t('faq.a1')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="a2">
              <AccordionTrigger>{t('faq.q2')}</AccordionTrigger>
              <AccordionContent>{t('faq.a2')}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="a3">
              <AccordionTrigger>{t('faq.q3')}</AccordionTrigger>
              <AccordionContent>{t('faq.a3')}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Özel Çözümler CTA */}
      <section id="toplanti" className="py-24 bg-gradient-to-br from-primary/10 to-accent/10 border-t">
        <div className="container grid gap-6 lg:grid-cols-3 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold">{t('solutions.title') || 'Firmanız İçin Özel Çözümler'}</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">{t('solutions.desc') || 'Her markanın farklı bir hikayesi ve hedefi var. Toplantı talep ederek markanıza özel çözümlere hızlıca ulaşın.'}</p>
          </div>
          <div className="flex lg:justify-end">
            <Button size="lg">{t('cta.toplanti')}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
