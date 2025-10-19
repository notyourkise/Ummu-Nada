import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Profil Ummu Nada",
  description:
    "Profil, visi misi, konsep usaha, keunggulan, dan info praktis tentang UMKM Ummu Nada.",
};

export default function ProfilPage() {
  return (
    <main>
      {/* Hero intro */}
      <section className="relative pt-16 sm:pt-20 bg-gradient-to-b from-[--color-cream] to-transparent">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Profil
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Tentang <span className="text-[--color-brand]">Ummu Nada</span>
              </h1>
              <p className="mt-3 text-white/80">
                Wadah kolaborasi pelaku UMKM kue & camilan lokal untuk
                memperkenalkan produk mereka dengan semangat kebersamaan dan
                pemberdayaan ekonomi keluarga.
              </p>
              <div className="mt-5 flex gap-3">
                <CTAButton href="/#produk">Lihat Menu</CTAButton>
                <CTAButton href="/#kontak" variant="secondary">
                  Hubungi Kami
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 1. Profil & Sejarah */}
      <Section
        id="profil"
        title="Profil & Sejarah"
        description="Berdiri sejak Februari 2022, berawal dari meja kecil dan spanduk sederhana demi mendukung keluarga dan membuka kesempatan bagi UMKM lain."
      >
        <div className="grid lg:grid-cols-[1fr_420px] gap-6 items-start">
          <Reveal>
            <div className="space-y-3 text-white/90">
              <p>
                Ummu Nada berfokus pada penjualan aneka kue titipan dari pelaku
                UMKM lokal. Nama “Ummu Nada” diambil dari nama putri pemilik,
                merepresentasikan usaha keluarga yang hangat.
              </p>
              <p>
                Sejak Februari 2022, kami bertumbuh dari modal sederhana menjadi
                ruang kolaborasi yang mempertemukan banyak produsen kue dengan
                pelanggan sekitar.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-foreground/10 p-5 bg-white/5">
              <dl className="grid grid-cols-[120px_1fr] gap-y-2 text-sm">
                <dt className="text-white/60">Berdiri</dt>
                <dd>Februari 2022</dd>
                <dt className="text-white/60">Fokus</dt>
                <dd>Jajanan & kue titipan UMKM</dd>
                <dt className="text-white/60">Identitas</dt>
                <dd>Usaha keluarga yang inklusif</dd>
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 2. Tujuan & Visi Misi */}
      <Section
        id="visi-misi"
        title="Tujuan & Visi Misi"
        description="Menjadi wadah UMKM kue untuk tumbuh bersama, menjangkau pasar lebih luas, dan menguatkan ekonomi keluarga."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              t: "Wadah UMKM Lokal",
              d: "Membuka kesempatan pemasaran bagi produsen kue lokal.",
              c: "var(--brand-1)",
            },
            {
              t: "Nilai Kebersamaan",
              d: "Menjaga gotong royong dan suasana kekeluargaan.",
              c: "var(--brand-sky)",
            },
            {
              t: "Pemberdayaan Keluarga",
              d: "Menguatkan ekonomi keluarga melalui usaha berkelanjutan.",
              c: "var(--brand-navy)",
            },
          ].map((card) => (
            <Reveal key={card.t}>
              <div className="rounded-xl border border-foreground/10 p-5 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 inline-block h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: card.c }}
                  />
                  <div>
                    <h3 className="font-medium">{card.t}</h3>
                    <p className="text-sm text-white/80 mt-1">{card.d}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. Konsep & Sistem */}
      <Section
        id="konsep"
        title="Konsep & Sistem"
        description="Konsinyasi dengan seleksi kualitas: tester produk, hindari duplikasi, jaga kebersihan, dan layanan pesan langsung atau catering."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <ol className="space-y-3 text-sm">
              {[
                "Model konsinyasi ala bazar camilan.",
                "Kriteria mitra: bawa tester untuk uji rasa.",
                "Tidak duplikasi produk dengan vendor lain.",
                "Kontrol kualitas dan kebersihan berkelanjutan.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                    style={{ background: "var(--brand-1)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-white/90">{t}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-foreground/10 p-5">
              <h3 className="font-medium">Layanan</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-white/80 space-y-1">
                <li>Beli langsung di lokasi</li>
                <li>Order via WhatsApp</li>
                <li>Pesanan catering (DP, free ongkir area Projakal)</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 4. Fasilitas & Keunggulan */}
      <Section
        id="keunggulan"
        title="Fasilitas & Keunggulan"
        description="Meja display, tempat teduh, dukungan lokasi; produk terseleksi, pilihan beragam, harga diseragamkan demi pembagian rezeki yang adil."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-xl border border-foreground/10 p-5">
              <h3 className="font-medium">Fasilitas</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-white/80 space-y-1">
                <li>Meja display produk</li>
                <li>Tempat teduh & nyaman</li>
                <li>Dukungan dari pemilik lokasi</li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-foreground/10 p-5">
              <h3 className="font-medium">Keunggulan</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-white/80 space-y-1">
                <li>Seleksi kualitas rasa</li>
                <li>Pilihan jajanan sangat beragam</li>
                <li>Harga diseragamkan untuk keadilan mitra</li>
                <li>Suasana kekeluargaan antar-penjual</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 5. Info Praktis */}
      <Section
        id="info"
        title="Info Praktis"
        description="Jumlah mitra, jam operasional, lokasi, dan promo. Ikuti kanal resmi untuk update terbaru."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-xl border border-foreground/10 p-5">
              <dl className="text-sm grid grid-cols-[150px_1fr] gap-y-2">
                <dt className="text-white/60">Mitra</dt>
                <dd>±30 pelaku UMKM (aktif bergabung)</dd>
                <dt className="text-white/60">Jam Operasional</dt>
                <dd>Pagi hingga sekitar 12.00 (Ramadhan: 11.00 – sore)</dd>
                <dt className="text-white/60">Lokasi</dt>
                <dd>Kawasan strategis, mudah dijangkau warga sekitar</dd>
              </dl>
              <p className="mt-3 text-xs text-white/70">
                Sesekali ada promo jelang hari raya atau momen khusus.
              </p>
              <CTAButton href="/#kontak" className="mt-4">
                Kontak & Media Sosial
              </CTAButton>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-foreground/10 p-5 bg-clip-padding">
              <h3 className="font-medium">Arah Pengembangan</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-white/80 space-y-1">
                <li>Tambah jumlah tenant/mitra</li>
                <li>Perluas promosi di media sosial & platform digital</li>
                <li>Aktif mencari dan membina tenant baru</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
