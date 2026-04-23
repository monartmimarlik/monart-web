import { PROJECT_MEDIA, type ProjectMediaId } from "./project-media.generated";

function projectMedia(id: ProjectMediaId) {
  const m = PROJECT_MEDIA[id];
  return { image: m.image, gallery: [...m.gallery] };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: "metro-kalip-demir",
    title: "Metro Kalıp-Demir İmalatı",
    category: "Kaba İşler",
    location: "İstanbul",
    year: "2022",
    description: "Kalıp ve demir imalatı süreçlerinde aktif görev alınan, temel demir donatı düzenlemeleri ve kolon-kiriş bağlantıları projesi.",
    fullDescription: "Bu projede kalıp ve demir imalatı süreçlerinde aktif görev aldık. Şantiye alanında temel demir donatı düzenlemeleri, kolon-kiriş bağlantıları ve zemin hazırlıklarında ekip koordinasyonunu bizzat sağladık. Demir yerleşim planının saha uygulamasına birebir uygun şekilde ilerlemesi için mühendislik detaylarını titizlikle takip ettik. İş sağlığı ve güvenliği standartlarına bağlı kalarak, uygulama sürecini hem teknik hem organizasyonel açıdan yönettik. Yüksek dayanımlı yapı temeli için sağlam bir altyapı oluşturmak adına saha takibini ve uygulama kontrolünü bizzat gerçekleştirdik.",
    features: [
      "Temel demir donatı düzenlemeleri",
      "Kolon-kiriş bağlantıları",
      "Ekip koordinasyonu",
      "İş güvenliği standartları",
      "Saha takibi ve uygulama kontrolü"
    ],
    ...projectMedia("metro-kalip-demir"),
  },
  {
    id: "bahcelievler-konut",
    title: "Bahçelievler Konut Projesi",
    category: "Kaba ve İnce İşler",
    location: "Bahçelievler, İstanbul",
    year: "2024",
    description: "Kaba yapı çalışmalarından ince işçiliğe kadar tüm aşamaların titizlikle yürütüldüğü kapsamlı konut projesi.",
    fullDescription: "Bahçelievler'de konumlanan bu konut projesinde, uygulama sürecinin tüm aşamalarında aktif görev aldık. Projede ilk olarak kaba yapı çalışmaları kapsamında; temel, kolon, kiriş ve döşeme sistemlerinin imalatı dikkatle yürütüldü. Taşıyıcı sistemin kusursuz şekilde tamamlanması, projenin genel sağlamlığı açısından öncelikli hedefimizdi. Ardından başlayan ince işçilik aşamasında ise, duvar örme, sıva, şap, alçı ve boya gibi tüm uygulamalar proje detaylarına sadık kalınarak özenle gerçekleştirildi.",
    features: [
      "Temel, kolon, kiriş ve döşeme sistemleri",
      "Duvar örme, sıva, şap uygulamaları",
      "Elektrik ve mekanik altyapı",
      "Zemin kaplamaları ve seramik",
      "Marangozluk işleri"
    ],
    ...projectMedia("bahcelievler-konut"),
  },
  {
    id: "mobilya-tasarim",
    title: "Mobilya Tasarım Çalışmaları",
    category: "Mobilya Tasarım",
    location: "İstanbul",
    year: "2024",
    description: "Özel çizim ve tasarıma sahip, kişiye özel mobilya imalatları ve iç mekan tasarım çözümleri.",
    fullDescription: "Monart Mimarlık olarak, partner olarak çalıştığımız iş ortaklarımızla beraber özel çizim ve tasarıma sahip mobilya imalatları yürütmekteyiz. Her projeye özgü, müşteri ihtiyaçlarına ve mekan karakterine uygun mobilya çözümleri üretiyoruz. Fonksiyonellik ve estetik dengesini gözeterek, modern yaşam alanlarına değer katan özgün tasarımlar ortaya koyuyoruz.",
    features: [
      "Özel tasarım mobilya",
      "Kişiye özel imalat",
      "Modern tasarım çizgileri",
      "Fonksiyonel çözümler",
      "Kaliteli malzeme kullanımı"
    ],
    ...projectMedia("mobilya-tasarim"),
  },
  {
    id: "kinaliada-renovasyon",
    title: "Kınalıada Renovasyon Projesi",
    category: "Renovasyon",
    location: "Kınalıada, İstanbul",
    year: "2022",
    description: "Özel konutun dış mekân ve havuz renovasyonunu kapsayan prestijli yenileme projesi.",
    fullDescription: "Bu projede, Kınalıada'da yer alan özel bir konutun dış mekân ve havuz renovasyonunu üstlendik. Mevcut yapının yıllara bağlı yıpranmışlığı, hem estetik hem de teknik anlamda kapsamlı bir yenileme ihtiyacını doğuruyordu. Havuz alanında mevcut alanın büyütülmesinden, su yalıtımından zemin eğimine, seramik kaplamadan çevre düzenlemesine kadar tüm detayları titizlikle ele aldık. Özellikle betonarme çatlakların onarımı, izolasyon uygulamaları ve dış cephe iyileştirmeleri sayesinde mekâna hem güvenlik hem de görsel bütünlük kazandırıldı.",
    features: [
      "Havuz renovasyonu ve büyütme",
      "Su yalıtımı ve izolasyon",
      "Betonarme onarımı",
      "Dış cephe iyileştirmesi",
      "Peyzaj düzenlemesi"
    ],
    ...projectMedia("kinaliada-renovasyon"),
  },
  {
    id: "tasarim-konsept-konut",
    title: "Tasarım Konsept Konut Projesi",
    category: "Anahtar Teslim",
    location: "Başakşehir, İstanbul",
    year: "2023",
    description: "Kullanıcı konforunu estetik ve fonksiyonellikle bir araya getiren modern yaşam alanı projesi.",
    fullDescription: "Bu özel konut projesi, kullanıcı konforunu estetik ve fonksiyonellikle bir araya getiren modern bir yaşam alanı olarak tasarladık. Proje sürecinde dairenin eski yapısal kurgusunu analiz ederek mekânın potansiyelini maksimum düzeyde ortaya çıkardık. Giriş ve antre alanında fonksiyonel dolap tasarımı ve modern aydınlatmalarla ferah bir karşılama alanı oluşturduk. Salon, geniş pencere açıklıkları ve sıcak tonlar kullanılarak tasarlandı. Mutfak klasik tasarımdan modern çizgilere kavuşturuldu. Banyo tamamen yenilenerek sade, şık ve işlevsel bir alana dönüştürüldü.",
    features: [
      "Modern iç mekan tasarımı",
      "Fonksiyonel dolap sistemleri",
      "Özel aydınlatma tasarımı",
      "Mutfak renovasyonu",
      "Banyo yenileme"
    ],
    ...projectMedia("tasarim-konsept-konut"),
  },
  {
    id: "kadikoy-moda-mavi-balon",
    title: "Kadıköy Moda - Mavi Balon Projesi",
    category: "Anahtar Teslim",
    location: "Kadıköy Moda, İstanbul",
    year: "2025",
    description: "Ticari mekanın modern, hijyenik ve kullanıcı deneyimini güçlendiren gastronomi alanına dönüştürülmesi projesi.",
    fullDescription: "Mavi Balon projesi, mevcut durumda işlevsel ve estetik açıdan yetersiz olan bir ticari mekanın baştan sona yeniden tasarlanması ve uygulama sürecini kapsamaktadır. Projede amaç; dar ve eski yapı karakterine sahip olan alanı modern, hijyenik ve kullanıcı deneyimini güçlendiren bir gastronomi mekânına dönüştürmek olmuştur. Duvar yüzeylerinde hijyen ve dayanıklılık açısından tercih edilen seramik kaplamalar uygulandı; üst bölümde beyaz metro seramikler, alt bölümde ise yeşil tonlarda seramikler kullanılarak mekâna karakter kazandırıldı.",
    features: [
      "Ticari mekan tasarımı",
      "Mekanik ve elektrik altyapı",
      "Özel seramik uygulamaları",
      "Aydınlatma tasarımı",
      "Dış cephe düzenlemesi"
    ],
    ...projectMedia("kadikoy-moda-mavi-balon"),
  },
  {
    id: "ytu-renovasyon",
    title: "Yıldız Teknik Üniversitesi Renovasyon",
    category: "Renovasyon",
    location: "YTÜ Kampüs, İstanbul",
    year: "2025",
    description: "Açık alan düzenlemesinden altyapı iyileştirmelerine kadar kapsamlı kampüs renovasyon projesi.",
    fullDescription: "Yıldız Teknik Üniversitesi kampüs alanında gerçekleştirdiğimiz bu renovasyon projesinde, açık alan düzenlemesinden altyapı iyileştirmelerine kadar birçok farklı aşamada aktif rol aldık. Proje kapsamında; yeni otopark alanlarının harfiyat, betonarme imalatları, demir imalatları, tretuvar imalatları, peyzaj düzenlemesi, saha kotlamaları ve ölçüm işlemleriyle birlikte yürütüldü. Total station cihazı ile hassas zemin aplikasyonları gerçekleştirerek yerleşim doğruluğunu sağladık. Fakülte çatılarının yenilenmesi ve yıpranmış parapet ve tahliye derelerinin tamamını yenileyip kullanıma hazır hale getirdik.",
    features: [
      "Otopark alanı düzenlemesi",
      "Betonarme ve demir imalatları",
      "Peyzaj düzenlemesi",
      "Çatı renovasyonu",
      "Altyapı iyileştirmeleri"
    ],
    ...projectMedia("ytu-renovasyon"),
  }
];

export const categories = [
  "Tümü",
  "Kaba İşler",
  "Kaba ve İnce İşler",
  "Renovasyon",
  "Anahtar Teslim",
  "Mobilya Tasarım"
];

export const companyInfo = {
  name: "MONART",
  fullName: "MONART İnşaat ve Mimarlık",
  founder: "Mehmet Emin KARADAĞ",
  foundedYear: "2021",
  phone: "+90 (543) 960 71 46",
  email: "monartyapimimarlik@gmail.com",
  website: "www.monartmimarlik.com",
  social: "@monart.mimarlik",
  address: "Çeliktepe Mahallesi Buhara Sokak No: 11/8 Kağıthane / İSTANBUL",
  description: "MONART Mimarlık, 2021 yılında mimari tasarım, uygulama ve proje yönetimi alanlarında faaliyet göstermek üzere kurulmuştur. Kurulduğu günden bu yana farklı ölçeklerde birçok projeye imza atan MONART, mimarlığı yalnızca yapılar inşa etmek olarak değil; aynı zamanda bir yaşam biçimi, bir deneyim alanı olarak görmektedir."
};

export const services = [
  {
    id: "kaba-ince",
    title: "Kaba ve İnce Çalışmalar",
    description: "Temel, kolon, kiriş sistemlerinden duvar örme, sıva ve boya uygulamalarına kadar eksiksiz yapı hizmetleri.",
    icon: "Building2"
  },
  {
    id: "anahtar-teslim",
    title: "Anahtar Teslim Uygulamalar",
    description: "Projelendirmeden uygulamaya, baştan sona yönetilen kapsamlı inşaat ve renovasyon çözümleri.",
    icon: "Key"
  },
  {
    id: "mimari-proje",
    title: "Mimari Projelendirme",
    description: "Kişiye özel mimari projeler, ruhsat süreçleri ve teknik çizim hizmetleri.",
    icon: "Compass"
  },
  {
    id: "renovasyon",
    title: "Renovasyon Çalışmaları",
    description: "Konut ve ticari alanların modern standartlara uygun yenileme ve restorasyon projeleri.",
    icon: "RefreshCw"
  },
  {
    id: "mobilya",
    title: "Mobilya Tasarım",
    description: "Özel çizim ve tasarıma sahip, mekana özgü mobilya imalatları.",
    icon: "Armchair"
  },
  {
    id: "kentsel-donusum",
    title: "Kentsel Dönüşüm Danışmanlığı",
    description: "Kentsel dönüşüm süreçlerinde müteahhitlik ve profesyonel danışmanlık hizmetleri.",
    icon: "Building"
  }
];
