import { cn } from "@/lib/utils";
import Logo from "@/components/site/Logo";

const cols = [
  {
    title: "Sektörel Çözümler",
    links: [
      "FMCG",
      "E-Ticaret",
      "Kozmetik ve Güzellik",
      "Tekstil ve Moda",
      "Gıda",
      "Otomotiv",
      "Bankacılık ve Finans",
      "Perakende",
      "Tüketici Ürünleri",
      "Medya ve Telekomünikasyon",
      "Mobil Uygulama",
      "Tatil ve Seyahat",
    ],
  },
  {
    title: "Influencer Servisleri",
    links: [
      "Influencerlar için Mobil Uygulama",
      "Clique Topluluğunu Keşfedin",
    ],
  },
  {
    title: "Marka Çözümleri",
    links: ["Platform", "Fiyatlandırma", "Özellikler", "İş Birlikleri"],
  },
  {
    title: "Şirketimiz",
    links: ["Hakkımızda", "Gizlilik Politikası", "Kullanım Koşulları", "Blog"],
  },
];

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t bg-gradient-to-b from-background to-secondary/30", className)}>
      <div className="container py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <a href="#hero" className="inline-flex items-center gap-3 font-extrabold text-2xl">
            <Logo />
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Instagram ve TikTok'ta zahmetsizce viral olun. Doğru influencerlarla gerçek büyüme sağlayın; kampanyalarınızı uçtan uca yönetin.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title} className="md:col-span-2">
            <h4 className="font-semibold mb-3">{c.title}</h4>
            <ul className="space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l}>
                  <a className="text-muted-foreground hover:text-foreground" href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Lion Innovate · Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Gizlilik</a>
            <a href="#" className="hover:text-foreground">Çerezler</a>
            <a href="#" className="hover:text-foreground">Güvenlik</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
