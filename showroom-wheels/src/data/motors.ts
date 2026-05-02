import sport1 from "@/assets/motor-sport-1.jpg";
import sport2 from "@/assets/motor-sport-2.jpg";
import matic1 from "@/assets/motor-matic-1.jpg";
import matic2 from "@/assets/motor-matic-2.jpg";
import trail1 from "@/assets/motor-trail-1.jpg";
import bebek1 from "@/assets/motor-bebek-1.jpg";

export type MotorType = "Sport" | "Matic" | "Trail" | "Bebek";
export type TaxStatus = "Hidup" | "Mati";
export type DocStatus = "STNK" | "STNK + BPKB";

export interface Motor {
  id: string;
  merk: string;
  model: string;
  tipe: MotorType;
  tahun: number;
  cc: number;
  harga: number;
  km_run: number;
  lokasi: string;
  kondisi_mesin: number; // 1–10
  pajak: TaxStatus;
  surat: DocStatus;
  warna: string;
  verified: boolean;
  seller: string;
  whatsapp: string;
  image_url: string;
  gallery: string[];
}

export const motors: Motor[] = [
  {
    id: "yzf-r25-2022",
    merk: "Yamaha",
    model: "YZF-R25 ABS",
    tipe: "Sport",
    tahun: 2022,
    cc: 250,
    harga: 49500000,
    km_run: 8200,
    lokasi: "Jakarta Selatan",
    kondisi_mesin: 9,
    pajak: "Hidup",
    surat: "STNK + BPKB",
    warna: "Racing Blue",
    verified: true,
    seller: "Galeri Motor Senopati",
    whatsapp: "6281234567890",
    image_url: sport1,
    gallery: [sport1, sport2, trail1],
  },
  {
    id: "z250-2021",
    merk: "Kawasaki",
    model: "Z250",
    tipe: "Sport",
    tahun: 2021,
    cc: 250,
    harga: 47000000,
    km_run: 12500,
    lokasi: "Bandung",
    kondisi_mesin: 8,
    pajak: "Hidup",
    surat: "STNK + BPKB",
    warna: "Lime Green",
    verified: true,
    seller: "Bandung Bikers",
    whatsapp: "6281234567891",
    image_url: sport2,
    gallery: [sport2, sport1, matic2],
  },
  {
    id: "pcx-160-2023",
    merk: "Honda",
    model: "PCX 160 ABS",
    tipe: "Matic",
    tahun: 2023,
    cc: 160,
    harga: 32500000,
    km_run: 4100,
    lokasi: "Surabaya",
    kondisi_mesin: 10,
    pajak: "Hidup",
    surat: "STNK + BPKB",
    warna: "Matte Black",
    verified: true,
    seller: "AHASS Showroom",
    whatsapp: "6281234567892",
    image_url: matic1,
    gallery: [matic1, matic2, sport1],
  },
  {
    id: "nmax-155-2022",
    merk: "Yamaha",
    model: "NMAX Connected",
    tipe: "Matic",
    tahun: 2022,
    cc: 155,
    harga: 28900000,
    km_run: 9800,
    lokasi: "Tangerang",
    kondisi_mesin: 9,
    pajak: "Hidup",
    surat: "STNK + BPKB",
    warna: "Deep Blue",
    verified: false,
    seller: "Riko Motor",
    whatsapp: "6281234567893",
    image_url: matic2,
    gallery: [matic2, matic1, sport2],
  },
  {
    id: "klx-150-2021",
    merk: "Kawasaki",
    model: "KLX 150 BF",
    tipe: "Trail",
    tahun: 2021,
    cc: 150,
    harga: 27500000,
    km_run: 14300,
    lokasi: "Yogyakarta",
    kondisi_mesin: 8,
    pajak: "Mati",
    surat: "STNK + BPKB",
    warna: "Orange",
    verified: true,
    seller: "Jogja Trail Co.",
    whatsapp: "6281234567894",
    image_url: trail1,
    gallery: [trail1, sport1, bebek1],
  },
  {
    id: "supra-x-125-2019",
    merk: "Honda",
    model: "Supra X 125 FI",
    tipe: "Bebek",
    tahun: 2019,
    cc: 125,
    harga: 12500000,
    km_run: 32100,
    lokasi: "Semarang",
    kondisi_mesin: 7,
    pajak: "Hidup",
    surat: "STNK + BPKB",
    warna: "Red Silver",
    verified: false,
    seller: "Pak Budi Motor",
    whatsapp: "6281234567895",
    image_url: bebek1,
    gallery: [bebek1, matic1, trail1],
  },
];

export const getMotorById = (id: string) => motors.find((m) => m.id === id);

export const formatRupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);

export const formatKm = (n: number) =>
  new Intl.NumberFormat("id-ID").format(n) + " km";
