import type { Faq } from "./services";

export interface District {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  keyword: string;
  /** Gerçek karayolu + süre bilgisi */
  ulasim: {
    yol: string;
    sure: string;
    km: string;
    tarif: string;
  };
  /** İlçeye özgü senaryo paragrafı — şablon değil */
  senaryo: string;
  /** Uzak ilçelerde "neden gelinir" — yakın ilçelerde boş */
  nedenGelinir?: string;
  faqs: Faq[];
  /** İlgili blog slug'ları */
  blogSlugs: string[];
  /** Öne çıkan hizmet slug'ları (ilçe profiline göre) */
  serviceSlugs: string[];
}

export const districts: District[] = [
  {
    slug: "mentese",
    name: "Menteşe",
    title: "Menteşe Oto Tamir ve Servis",
    description:
      "Menteşe'de oto tamir: Muğla Sanayi Sitesi'ndeki atölyemiz merkeze 5 dk. Bakım, arıza, elektrik tek adreste. Randevu: 0507 921 33 88.",
    h1: "Menteşe'de Oto Tamir ve Servis — Sanayi Sitesindeki Atölyeniz",
    keyword: "menteşe oto tamir",
    ulasim: {
      yol: "Muğla Sanayi Sitesi, Menteşe merkez",
      sure: "şehir merkezinden ~5 dk",
      km: "2-3 km",
      tarif:
        "Muğla merkezden sanayi sitesi yönüne; site içinde tabelamızı göreceksiniz. Bulamazsanız arayın, tarif edelim.",
    },
    senaryo:
      "Atölyemiz Menteşe'nin tam kalbinde, Muğla Sanayi Sitesi içinde. Kurum araçlarından üniversite personelinin günlük araçlarına, merkez esnafının ticari araçlarına kadar Menteşe'nin her tip aracı buradan geçiyor. Aracı sabah bırakıp mesai çıkışı almak isteyenler için işleyişimiz nettir: sabah teslim, gün içinde telefonla onay, akşam teslimat.",
    faqs: [
      {
        q: "Aracımı bırakıp işe gidebilir miyim?",
        a: "Evet — sanayi sitesinden merkeze dolmuşla ya da yürüyerek dönebilirsiniz. İşlem bitince telefonla haber veririz; çoğu bakım aynı gün teslim edilir.",
      },
      {
        q: "Menteşe içinden aracımı almaya gelir misiniz?",
        a: "Çalışmayan araçlar için çekici yönlendirmesi yapıyoruz. Çalışan araçlarda yoğunluğa göre merkezden alma konusunda yardımcı olmaya çalışırız; telefonla sorun.",
      },
      {
        q: "Randevusuz gelsem bakılır mı?",
        a: "Acil arızaya her zaman bakılır. Planlı bakım için telefonla randevu almanız beklememenizi sağlar — özellikle cumartesi günleri yoğun oluyor.",
      },
      {
        q: "Muğla Sıtkı Koçman Üniversitesi'ne yakın mısınız?",
        a: "Evet, kampüse araçla ~10 dakika. Öğrenci ve personel araçları için ders/mesai saatine göre teslim planı yapıyoruz.",
      },
    ],
    blogSlugs: ["mugla-oto-sanayi-nerede", "periyodik-bakimda-neler-yapilir"],
    serviceSlugs: ["periyodik-bakim", "ariza-tespiti", "fren-tamiri"],
  },
  {
    slug: "yatagan",
    name: "Yatağan",
    title: "Yatağan Oto Tamir ve Servis",
    description:
      "Yatağan'dan D330 ile 25 dk: ticari araç, kamyonet ve binek tamiri Muğla Sanayi'de. Önce fiyat sonra işlem. Arayın: 0507 921 33 88.",
    h1: "Yatağan'dan Gelenler İçin Oto Tamir ve Servis",
    keyword: "yatağan oto tamir",
    ulasim: {
      yol: "D330 Muğla-Yatağan yolu",
      sure: "~25 dk",
      km: "~26 km",
      tarif:
        "Yatağan'dan D330 üzerinden Muğla yönüne; şehir girişinden sanayi sitesi sapağına dönün. Yol bölünmüş ve rahattır.",
    },
    senaryo:
      "Yatağan'da ticari araç ve kamyonet yoğunluğu yüksek: termik santral, mermer ocakları ve nakliye işleri araçları hem km hem yük olarak yorar. Ağır kullanılan aracın derdi de farklıdır — erken eskiyen debriyaj, yorulan süspansiyon, sık tıkanan filtreler. Yatağan'dan gelen müşterilerimizin çoğu ticari aracını sabah bırakıp aynı gün teslim alacak şekilde planlıyor; işi gücü araçla dönen esnafı araçsız bırakmamak önceliğimiz.",
    faqs: [
      {
        q: "Ticari aracım için hafta içi tek boş günüm var, aynı gün teslim olur mu?",
        a: "Telefonla arızayı önceden anlatırsanız parçayı hazır eder, aracı sabah alıp akşam teslim ederiz. Ticari araçta bekleme, kayıp demek — planlamayı ona göre yaparız.",
      },
      {
        q: "Mermer ocağı yolunda çalışan araçta hangi bakım öne çekilmeli?",
        a: "Tozlu ve bozuk zeminde hava filtresi ve alt takım normalden erken yorulur. Hava filtresini yarı sürede kontrol ettirin; alt takım seslerini ertelemeyin.",
      },
      {
        q: "Yatağan'da yağ değişimi varken neden Muğla'ya geleyim?",
        a: "Basit yağ değişimi için gelmeyin, değmez. Debriyaj, motor, şanzıman, elektronik arıza gibi ustalık isteyen işlerde ise 25 dakikalık yol, doğru teşhisin yanında küçük bir maliyettir.",
      },
      {
        q: "Kamyonetin yükte kalkışta titremesi neden olur?",
        a: "Yüklü kalkış titremesi çoğunlukla debriyaj balatası veya çift kütleli volandan. Yatağan'daki kullanım profilinde sık görüyoruz; yol testiyle netleştiririz.",
      },
    ],
    blogSlugs: ["periyodik-bakimda-neler-yapilir", "motor-yagi-secimi"],
    serviceSlugs: ["sanziman-debriyaj", "periyodik-bakim", "motor-tamiri"],
  },
  {
    slug: "ula",
    name: "Ula",
    title: "Ula Oto Tamir ve Servis",
    description:
      "Ula'dan D400 ile 20 dk: fren, rampa yükü ve bakım işleri Muğla Sanayi'deki atölyemizde. Değişen parça gösterilir. Tel: 0507 921 33 88.",
    h1: "Ula'dan Gelenler İçin Oto Tamir ve Servis",
    keyword: "ula oto tamir",
    ulasim: {
      yol: "D400 Muğla-Ula yolu",
      sure: "~20 dk",
      km: "~17 km",
      tarif:
        "Ula merkezden D400 ile Muğla yönüne; Muğla girişinde sanayi sitesi tabelasını takip edin.",
    },
    senaryo:
      "Ula, Akyaka ve Gökova'ya inen yolun üstünde: bölge araçları sürekli rampa iniş-çıkışı yapıyor. Sakar Geçidi'ni haftada birkaç kez inen araçta fren sistemi başka yerdekinden iki kat yük taşır — balata ömrü kısalır, hidrolik daha çabuk yaşlanır. Ula'dan gelen araçlarda ilk baktığımız yer çoğu zaman fren ve el freni sağlığıdır; Akyaka'ya yazlığa inen araçlarda da sezon öncesi genel kontrol talebi yoğundur.",
    faqs: [
      {
        q: "Sakar Geçidi inişinde fren zayıfladı, normal mi?",
        a: "Hayır — uzun inişte pedalın yumuşaması hidrolik yaşlanması veya balata camlaşması işaretidir. Motor freniyle inin ve en kısa sürede kontrole getirin; bu şikayeti ihmal etmeyin.",
      },
      {
        q: "Akyaka'daki yazlığa giderken araç kontrolü yaptırabilir miyim?",
        a: "Evet, yol üstüsünüz: Muğla'dan geçerken 30-40 dakikalık kontrolle fren, sıvılar ve lastik durumuna bakarız. Sezon başında telefonla randevu alın.",
      },
      {
        q: "Ula'dan araç bırakıp dönüş için ne yapabilirim?",
        a: "Muğla-Ula arası dolmuşlar sık çalışır; aracı bırakıp yarım saatte evinize dönebilirsiniz. Teslimde de aynı şekilde — işlem bitince haber veririz.",
      },
      {
        q: "Rampada el freni tutmuyor, ayar yeterli mi?",
        a: "Bazen evet, bazen halat uzamıştır ya da arka balata bitmiştir. Ayar mı değişim mi gerektiğini ölçmeden söylemeyiz; kontrol kısa sürer.",
      },
    ],
    blogSlugs: ["yokus-virajli-yolda-fren", "tatil-oncesi-arac-kontrolleri"],
    serviceSlugs: ["fren-tamiri", "periyodik-bakim", "ariza-tespiti"],
  },
  {
    slug: "kavaklidere",
    name: "Kavaklıdere",
    title: "Kavaklıdere Oto Tamir ve Servis",
    description:
      "Kavaklıdere'den ~45 dk: dağ yolu kullanan araçlarda fren, süspansiyon ve bakım işleri. Muğla Sanayi'deyiz. Tel: 0507 921 33 88.",
    h1: "Kavaklıdere'den Gelenler İçin Oto Tamir ve Servis",
    keyword: "kavaklıdere oto tamir",
    ulasim: {
      yol: "Kavaklıdere-Yatağan yolu + D330",
      sure: "~45 dk",
      km: "~48 km",
      tarif:
        "Kavaklıdere'den Yatağan'a inip D330 ile Muğla'ya; Muğla girişinden sanayi sitesine dönün.",
    },
    senaryo:
      "Kavaklıdere yüksekte, yolları virajlı ve rampalı — buranın aracı düz ova aracı gibi yıpranmaz. Sürekli viraj demek, sürekli çalışan rot ve salıncak burçları demek; rampa demek, fren ve debriyaja ekstra yük demek. Kavaklıdere'den gelen araçlarda alt takım boşluklarını ve fren ölçülerini rutin olarak kontrol ederiz. Kış aylarında soğuk ve nemli dağ havası aküleri de erken yorar; kışa girerken akü testi bu bölge araçları için özellikle önemlidir.",
    nedenGelinir:
      "Kavaklıdere'den günlük basit işler için gelmeye değmez; motor, şanzıman, alt takım revizyonu ve elektronik arıza gibi ustalık isteyen işler için gelinir. Geldiğinizde işi tek seferde ve doğru yapmak bizim işimiz — 45 dakikalık yolun ikinci kez tekrarlanmaması için parça ve planı önceden hazırlarız.",
    faqs: [
      {
        q: "Virajlarda ön takımdan tak-tak sesi geliyor, ne olabilir?",
        a: "Büyük ihtimalle salıncak burcu, rotil ya da viraj demiri askısı. Kavaklıdere yollarında sık gördüğümüz bir yıpranma; lift üzerinde boşluk kontrolüyle net söylenir.",
      },
      {
        q: "Kışın araç ilk çalıştırmada zorlanıyor, sebep soğuk mu?",
        a: "Soğuk tetikler ama sağlam akü ve düzgün ateşleme sistemi kışın da rahat çalıştırır. Akü soğuk marş değeri testi 5 dakika sürer; kış öncesi yaptırın.",
      },
      {
        q: "Gelmeden önce telefonla ön teşhis alabilir miyim?",
        a: "Kesinlikle — uzaktan gelen müşterilerimize önce telefonda belirtileri sorar, olası nedenleri ve yanınızda olması gerekenleri söyleriz. Boşa yol yaptırmayız.",
      },
      {
        q: "Aynı gün dönebilir miyim?",
        a: "Çoğu işte evet: sabah 09:00'da bırakılan araç için parça önceden hazırlanırsa öğleden sonra dönüş genelde mümkün. Büyük işlerde gerçekçi süreyi baştan söyleriz.",
      },
    ],
    blogSlugs: ["yokus-virajli-yolda-fren", "kisin-muglada-arac-bakimi"],
    serviceSlugs: ["fren-tamiri", "oto-elektrik", "sanziman-debriyaj"],
  },
  {
    slug: "milas",
    name: "Milas",
    title: "Milas Oto Tamir ve Servis",
    description:
      "Milas'tan Muğla-Milas yolu ile ~50 dk: motor, şanzıman ve elektronik arızada uzman atölye. Önce fiyat sonra işlem. Tel: 0507 921 33 88.",
    h1: "Milas'tan Gelenler İçin Oto Tamir ve Servis",
    keyword: "milas oto tamir",
    ulasim: {
      yol: "D330 Muğla-Milas yolu",
      sure: "~50 dk",
      km: "~67 km",
      tarif:
        "Milas'tan D330 ile Muğla yönüne; yol geniş ve büyük kısmı bölünmüş. Muğla girişinde sanayi sitesi tabelasını izleyin.",
    },
    senaryo:
      "Milas büyük ilçe; kendi sanayisi de var. Buna rağmen Milas'tan bize gelen müşteri profili net: ya ilçede çözülemeyen kronik bir arıza, ya ikinci görüş ihtiyacı, ya da havalimanı ve Bodrum trafiği üstünde çalışan araçların (transfer, servis, taksi) planlı büyük bakımları. Milas-Bodrum Havalimanı hattında çalışan araç günde yüzlerce km yapar — bu tempoda triger, yağ ve fren periyotları takvimden önce dolar; km takibini birlikte yaparız.",
    nedenGelinir:
      "Milas'tan yağ değişimi için gelinmez, doğru. Gelinen işler şunlar: çözülemeyen elektronik arızalar, motor revizyonu, şanzıman işleri ve 'üç yer gezdim, üçü üç şey söyledi' durumunda güvenilir ikinci görüş. Teşhiş raporumuz yazılıdır; isterseniz onarımı Milas'ta da yaptırabilirsiniz.",
    faqs: [
      {
        q: "Milas'ta birkaç usta gezdim, arıza çözülemedi. Süreç nasıl işler?",
        a: "Önce telefonda geçmişi dinleriz: ne değişti, ne düzelmedi. Sonra randevuyla diagnostik + yol testi yapar, yazılı rapor veririz. Kronik arızada parça değiştirme turuna son vermek ilk işimizdir.",
      },
      {
        q: "Havalimanı transfer aracım için bakım periyodu nasıl olmalı?",
        a: "Yılda 60-80 bin km yapan araçta 'yılda bir bakım' kuralı geçersiz — km esas alınır. Yağ 10-15 binde, fren kontrolü her bakımda, triger km'si yarıya inmiş gibi takip edilir.",
      },
      {
        q: "Bodrum yolu üzerinde yolda kalırsam ne yapmalıyım?",
        a: "Bizi arayın: konumunuza göre çekici yönlendirir, aracı atölyeye alırız. Milas-Muğla arası çekici operasyonunu daha önce çok kez yönettik.",
      },
      {
        q: "Zeytinlik arazide kullanılan pikabım için özel bir kontrol gerekir mi?",
        a: "Evet: toz ve bozuk zemin hava filtresini, şasi ve alt takımı yorar. Sezonluk alt takım + filtre kontrolü pikap ve arazi kullanan araçlar için standart önerimizdir.",
      },
    ],
    blogSlugs: ["periyodik-bakimda-neler-yapilir", "triger-kayisi-ne-zaman"],
    serviceSlugs: ["ariza-tespiti", "motor-tamiri", "triger-degisimi"],
  },
  {
    slug: "bodrum",
    name: "Bodrum",
    title: "Bodrum Oto Tamir — Muğla'da Servis",
    description:
      "Bodrum'dan ~1 s 45 dk: sezon yoğunluğunda sıra beklemeden motor, şanzıman ve elektronik arıza çözümü. Tel: 0507 921 33 88.",
    h1: "Bodrum'dan Gelenler İçin Oto Tamir ve Servis",
    keyword: "bodrum oto tamir",
    ulasim: {
      yol: "D330 Bodrum-Milas-Muğla",
      sure: "~1 s 45 dk",
      km: "~110 km",
      tarif:
        "Bodrum'dan Milas yönüne, Milas'tan D330 ile Muğla'ya. Havalimanı sapağından sonra yol rahatlar.",
    },
    senaryo:
      "Bodrum'un derdi yazın ikiye katlanır: nüfusla birlikte araç sayısı patlar, yerel servislerde sıra haftalara uzar. Kiralık araç filoları, tekne römorku çeken jipler, yazlıkçıların yılda üç ay çalışıp dokuz ay yatan araçları — hepsi ayrı dertle gelir. Uzun süre yatan araçta akü, lastik ve fren pası; römork çeken araçta debriyaj ve soğutma sistemi yorgunluğu tipiktir. Sezonda Bodrum'da sıra bekleyemeyecek olanlar için Muğla'ya gelmek çoğu zaman daha hızlı sonuç verir.",
    nedenGelinir:
      "Bodrum'dan kalkıp gelmeye değen işler: motor ve şanzıman revizyonu, kronik elektronik arızalar, sezonda sırası haftalar sonraya verilen büyük işler. Telefonla durumu anlatın; gerçekten gelmeye değmeyecekse açıkça söyleriz — boş yere 110 km yol yaptırmak bu atölyenin tarzı değil.",
    faqs: [
      {
        q: "Tekne römorku çeken aracımda nelere dikkat etmeliyim?",
        a: "Römork yükü debriyaj, şanzıman yağı ve soğutma sistemini zorlar. Sezon başında soğutma sistemi kontrolü + şanzıman yağı durumu + fren ölçümü üçlüsünü öneririz.",
      },
      {
        q: "Araç 8 ay yattı, direkt yola çıkabilir miyim?",
        a: "Önerilmez: akü, lastik basınçları, fren diski yüzey pası ve bayat yakıt kontrol edilmeli. Yatmış araç kontrolü 45 dakika sürer, yol açar.",
      },
      {
        q: "Bodrum'dan gelmeden randevu ve parça hazırlığı yapılır mı?",
        a: "Mutlaka: uzaktan gelen araçta 'parça bekleme' yaşatmamak için şasi numaranızla parçayı önceden temin eder, randevı saatinde işe başlarız.",
      },
      {
        q: "Kiralık araç filom var, filo bakımı yapıyor musunuz?",
        a: "Evet — filo araçlarına dönem bakım planı çıkarır, kayıtlarını tutar ve faturalamayı şirket üstüne düzenleriz. Sezon öncesi toplu kontrol için görüşelim.",
      },
      {
        q: "Sezonda Bodrum servislerinde sıra 2 hafta, sizde durum ne?",
        a: "Uzaktan gelen araca randevu saatinde başlamak kuralımız. Telefonda net gün-saat veririz; geldiğinizde araç bekletilmez.",
      },
    ],
    blogSlugs: ["tatil-oncesi-arac-kontrolleri", "oto-klima-sogutmuyor"],
    serviceSlugs: ["motor-tamiri", "sanziman-debriyaj", "oto-klima"],
  },
  {
    slug: "marmaris",
    name: "Marmaris",
    title: "Marmaris Oto Tamir — Muğla'da Servis",
    description:
      "Marmaris'ten Sakar Geçidi ile ~55 dk: fren, klima ve büyük onarımlarda Muğla Sanayi'deki atölyeniz. Tel: 0507 921 33 88.",
    h1: "Marmaris'ten Gelenler İçin Oto Tamir ve Servis",
    keyword: "marmaris oto tamir",
    ulasim: {
      yol: "D400 Marmaris-Muğla, Sakar Geçidi",
      sure: "~55 dk",
      km: "~55 km",
      tarif:
        "Marmaris'ten D400 ile Muğla yönüne, Sakar Geçidi'ni aşınca Muğla'dasınız. Geçitte fren sorununuz varsa önce bizi arayın — inişe kontrolsüz başlamayın.",
    },
    senaryo:
      "Marmaris aracının kaderi Sakar Geçidi'dir: her Muğla yolculuğu 900 metrelik rampa iniş-çıkışı demek. Frene binen bu yük, balata ve disk ömrünü belirgin kısaltır — Marmaris'ten gelen araçlarda fren ölçümü bizde refleks halini almıştır. Yazın buna nem, yoğun trafik ve durmadan çalışan klima eklenir. Turizm işletmelerinin transfer araçları ve kiralık filolar için sezon ortası arıza, doğrudan gelir kaybı: bu araçlara öncelik tanır, sezon öncesi filo kontrolü öneririz.",
    nedenGelinir:
      "Marmaris'te servis var; ama Sakar'ı aşıp gelmeye değen işler şunlar: motor revizyonu, şanzıman, kronik elektrik arızaları ve sezonda yerelde sıra bulamadığınız aciliyetli işler. Önce telefon — gelmeye değip değmeyeceğini dürüstçe söyleriz.",
    faqs: [
      {
        q: "Sakar Geçidi'nde frenlerim koktu, devam etmek güvenli mi?",
        a: "Yanık kokusu aşırı ısınma demek: hemen güvenli yerde durup frenleri soğutun, inişe motor freniyle devam edin. Muğla'ya varınca ölçüm yaptırın — ısınan balata camlaşmış olabilir.",
      },
      {
        q: "Marmaris'te klima kuyruğu uzun, sizde aynı gün olur mu?",
        a: "Telefonla randevu alırsanız evet: kaçak testi + dolum yaklaşık 1 saat. Marmaris'ten sabah çıkan müşteri öğlen dönüşte olur.",
      },
      {
        q: "Transfer minibüsüm sezonda arıza yaptı, öncelik verir misiniz?",
        a: "Ticari turizm araçları sezonda önceliklidir — her gün beklemenin size ne kaybettirdiğini biliyoruz. Parçayı telefonda netleştirip stoğa alır, geldiğinizde direkt başlarız.",
      },
      {
        q: "İngiliz müşterim var Marmaris'te, İngilizce destek var mı?",
        a: "Yes — temel düzeyde İngilizce iletişim kuruyoruz, İngilizce özet sayfamız da var (/en). Yabancı misafirlerinizi gönül rahatlığıyla yönlendirebilirsiniz.",
      },
    ],
    blogSlugs: ["yokus-virajli-yolda-fren", "oto-klima-sogutmuyor"],
    serviceSlugs: ["fren-tamiri", "oto-klima", "motor-tamiri"],
  },
  {
    slug: "fethiye",
    name: "Fethiye",
    title: "Fethiye Oto Tamir — Muğla'da Servis",
    description:
      "Fethiye'den D400 ile ~2 saat: motor revizyonu, şanzıman ve kronik arızalarda ikinci görüş adresi. Tel: 0507 921 33 88.",
    h1: "Fethiye'den Gelenler İçin Oto Tamir ve Servis",
    keyword: "fethiye oto tamir",
    ulasim: {
      yol: "D400 Fethiye-Göcek-Muğla",
      sure: "~2 saat",
      km: "~130 km",
      tarif:
        "Fethiye'den D400 ile Göcek tüneli, Dalaman ve Köyceğiz üzerinden Muğla'ya. Göcek tüneli ücretlidir; yol boyu D400'den ayrılmayın.",
    },
    senaryo:
      "Fethiye kendi başına büyük bir araç pazarı — ama tam da bu yüzden çözümsüz kalan araç da çok: elden ele gezen kronik arızalı araçlar, üstü açılmamış motor teklifleri, 'beyin değişecek' diye kestirilip atılan elektronik sorunlar. Fethiye'den bize gelenlerin çoğu ikinci görüş için geliyor. Ölüdeniz-Babadağ hattında çalışan tur araçları ve uzun rampalarda çalışan safari jipleri de fren ve soğutma yükü açısından ayrı bir kategori; bu araçlara sezon öncesi kontrol paketi uyguluyoruz.",
    nedenGelinir:
      "2 saatlik yol ciddi — o yüzden net konuşalım: buraya gelmeye değen işler motor revizyonu, şanzıman, kronik elektronik arızalar ve büyük teklif aldığınız işlerde ikinci görüştür. Telefonda mevcut teklifi anlatın; gerçekçi bir karşılaştırma yapar, gelmeye değmezse söyleriz.",
    faqs: [
      {
        q: "Fethiye'de motoruma büyük fiyat çekildi, ikinci görüş nasıl alırım?",
        a: "Teklifi ve belirtileri telefonda anlatın. Gerekirse randevuyla kompresyon + kaçak testi yapar, motorun gerçekten revizyon isteyip istemediğini yazılı raporla söyleriz. Bazen sorun çok daha küçük çıkıyor.",
      },
      {
        q: "Babadağ yolunda çalışan aracım için ne önerirsiniz?",
        a: "O rampa Türkiye'nin en zorlu fren parkurlarından: balata-disk ölçümünü ayda bir yaptırın, hidroliği yılda bir değiştirin, soğutma sistemini sezon başında test ettirin.",
      },
      {
        q: "Gidip gelmek bir günümü alır, işlem kaç güne biter?",
        a: "Büyük işlerde aracı bırakıp dönmeniz için otogar bağlantısını ayarlarız (Fethiye-Muğla otobüsleri sık). İş bitince teslim gününü netleştirir, tek seferde aldırırız.",
      },
      {
        q: "Seydikemer taraftaki arazi aracımı da size getirebilir miyim?",
        a: "Elbette — arazi araçlarında alt takım, diferansiyel ve şanzıman işleri yapıyoruz. Seydikemer sayfamızda arazi kullanımına dair ayrıntı var.",
      },
    ],
    blogSlugs: ["yokus-virajli-yolda-fren", "kiralik-aracta-ariza"],
    serviceSlugs: ["motor-tamiri", "sanziman-debriyaj", "ariza-tespiti"],
  },
  {
    slug: "seydikemer",
    name: "Seydikemer",
    title: "Seydikemer Oto Tamir — Muğla'da Servis",
    description:
      "Seydikemer'den ~2 s 15 dk: tarım aracı, pikap ve arazi araçlarında alt takım ve motor işleri. Tel: 0507 921 33 88.",
    h1: "Seydikemer'den Gelenler İçin Oto Tamir ve Servis",
    keyword: "seydikemer oto tamir",
    ulasim: {
      yol: "Fethiye üzeri D400",
      sure: "~2 s 15 dk",
      km: "~150 km",
      tarif:
        "Seydikemer'den Fethiye'ye, oradan D400 ile Göcek-Dalaman-Köyceğiz üzerinden Muğla'ya.",
    },
    senaryo:
      "Seydikemer tarım ilçesi: pikaplar, çift kabinler ve tarlaya giren araçlar burada asıl iş gücü. Tarla yolu, toz ve yük üçlüsü araca şehir aracının iki katı yıpranma yaşatır — erken biten amortisörler, dolan hava filtreleri, yorulan alt takım burçları ve yük altında zorlanan debriyajlar bu bölgeden gelen araçların ortak dosyasıdır. Sera ve nakliye işi yapanlar için araç durursa iş durur; o yüzden Seydikemer'den gelen ticari araçlarda 'tek seferde bitir, bir daha gelmesin' prensibiyle çalışırız.",
    nedenGelinir:
      "Bu mesafeden gelinen işler bellidir: motor revizyonu, şanzıman/debriyaj, komple alt takım yenileme gibi büyük kalemler. Küçük işler için Fethiye daha yakın — dürüst tavsiyemiz bu. Büyük işlerde ise parçayı önceden hazırlar, aracınızı en az günde teslim ederiz.",
    faqs: [
      {
        q: "Tarlada çalışan pikabın bakım aralığı şehir aracıyla aynı mı?",
        a: "Hayır — toz ve yük, aralıkları fiilen yarıya indirir: hava filtresi iki kat sık, yağ değişimi erken, alt takım kontrolü her bakımda. Kullanım profilinize göre gerçekçi takvim çıkarırız.",
      },
      {
        q: "Yük altında debriyaj kokusu geliyor, acil mi?",
        a: "Balata aşırı ısınıyor demek: devam ederse volanı da yakar, masraf büyür. Yakın zamanda ölçüm şart — telefonda kullanım şeklinizi anlatın, aciliyeti birlikte değerlendirelim.",
      },
      {
        q: "Toprak yolda alt takım sesleri başladı, hangi parçalar olabilir?",
        a: "Tipik sıra: salıncak burçları, rotiller, amortisör takozları, viraj demiri lastikleri. Lift kontrolüyle hangileri boşluk yapmış tek tek gösteririz.",
      },
      {
        q: "Aracı bırakıp Seydikemer'e nasıl dönerim?",
        a: "Muğla-Fethiye otobüsleri sık; Fethiye'den Seydikemer dolmuşu kalkar. Büyük işlerde teslim gününü kesinleştirip tek seferde gelmenizi sağlarız.",
      },
    ],
    blogSlugs: ["periyodik-bakimda-neler-yapilir", "motor-yagi-secimi"],
    serviceSlugs: ["sanziman-debriyaj", "motor-tamiri", "yedek-parca"],
  },
  {
    slug: "ortaca",
    name: "Ortaca",
    title: "Ortaca Oto Tamir ve Servis",
    description:
      "Ortaca'dan D400 ile ~1 s 10 dk: uzun yol öncesi kontrol, bakım ve arıza işleri Muğla Sanayi'de. Tel: 0507 921 33 88.",
    h1: "Ortaca'dan Gelenler İçin Oto Tamir ve Servis",
    keyword: "ortaca oto tamir",
    ulasim: {
      yol: "D400 Ortaca-Köyceğiz-Muğla",
      sure: "~1 s 10 dk",
      km: "~78 km",
      tarif:
        "Ortaca'dan D400 ile Köyceğiz yönüne, Gökova kavşağından Muğla'ya. Yol büyük oranda bölünmüş ve konforlu.",
    },
    senaryo:
      "Ortaca D400'ün tam üstünde: Dalyan turizmi, narenciye ve sera nakliyesi derken buranın araçları sürekli uzun yolda. Uzun yol aracının ihtiyacı bellidir — yola çıkmadan sıvılar, lastikler ve fren tam olacak. Dalyan'a misafir taşıyan transfer araçları ve narenciye sezonunda yük yapan kamyonetler için sezon öncesi kontrolü rutin hale getirdik. İstanbul-Antalya hattına çıkacak araçlar da yola bizden kontrol geçip çıkıyor.",
    faqs: [
      {
        q: "Uzun yola çıkmadan hangi kontrolleri yaptırmalıyım?",
        a: "Kısa liste: yağ seviyesi ve ömrü, soğutma sıvısı, fren ölçümü, lastik diş+basınç, silecek-far. 40 dakikalık kontrolle yola gönül rahatlığıyla çıkarsınız.",
      },
      {
        q: "Narenciye sezonunda yük yapan kamyonetimde neye dikkat etmeliyim?",
        a: "Yüklü kullanım arka süspansiyon ve frenleri yorar: makas/amortisör kontrolü ve fren ölçümünü sezon başında yaptırın. Lastik basıncını yüke göre ayarlamayı unutmayın.",
      },
      {
        q: "Dalyan'da çalışan transfer aracım var, bakımı hangi aralıkta öneririsiniz?",
        a: "Günlük yoğun km yapan araçta takvim değil km esastır: yağ 10-15 bin, fren kontrolü her seferinde. Araç için özel çizelge çıkarırız.",
      },
      {
        q: "Ortaca'dan gelirken randevu şart mı?",
        a: "Şart değil ama önerilir: telefonla geleceğinizi söylerseniz sıra beklemezsiniz ve gerekli parça hazır olur. 0507 921 33 88.",
      },
    ],
    blogSlugs: ["tatil-oncesi-arac-kontrolleri", "periyodik-bakimda-neler-yapilir"],
    serviceSlugs: ["periyodik-bakim", "fren-tamiri", "yedek-parca"],
  },
  {
    slug: "dalaman",
    name: "Dalaman",
    title: "Dalaman Oto Tamir ve Servis",
    description:
      "Dalaman'dan D400 ile ~1 s 20 dk: havalimanı transfer araçları ve uzun yol öncesi kontrollerde atölyeniz. Tel: 0507 921 33 88.",
    h1: "Dalaman'dan Gelenler İçin Oto Tamir ve Servis",
    keyword: "dalaman oto tamir",
    ulasim: {
      yol: "D400 Dalaman-Ortaca-Köyceğiz-Muğla",
      sure: "~1 s 20 dk",
      km: "~90 km",
      tarif:
        "Dalaman'dan D400 ile Ortaca-Köyceğiz üzerinden Muğla'ya; Gökova kavşağından Muğla yönüne dönün.",
    },
    senaryo:
      "Dalaman demek havalimanı demek: transfer minibüsleri, VIP araçlar ve kiralık filolar günde yüzlerce km yapıyor. Bu tempoda çalışan araçta arıza lüks değil felakettir — uçağı karşılayamayan transfer aracının telafisi yok. O yüzden Dalaman'dan çalışan ticari araçlara iki şey öneriyoruz: km bazlı sıkı bakım takibi ve sezon öncesi komple kontrol. Yurtdışından gelip kiralık araçla yola çıkan turistlerin yolda kalma noktası da çoğu zaman Dalaman çevresi — bu durumda İngilizce destek ve kiralama şirketiyle iletişim yardımı sağlıyoruz.",
    faqs: [
      {
        q: "Havalimanı transfer minibüsüme ne sıklıkla bakım gerekir?",
        a: "Yılda 80-100 bin km yapan minibüste yağ 10-15 bin km'de, fren kontrolü her bakımda, triger km yarı hesabıyla takip edilmeli. Araç başına km çizelgesi tutuyoruz.",
      },
      {
        q: "Turist müşterim kiralık araçla yolda kaldı, nasıl yardımcı olursunuz?",
        a: "Önce kiralama şirketiyle konuşulmalı — onayları sonrası çekici yönlendirir, teşhis ve onarımı yapar, faturayı şirkete düzenleriz. İngilizce temel iletişim mümkün (/en).",
      },
      {
        q: "Uçak saatine yetişecek aracım var, acil işleme alır mısınız?",
        a: "Havalimanı operasyonu yürüten araçlara öncelik veriyoruz. Durumu telefonda anlatın; gerçekçi süreyi anında söyler, yetişmeyecekse boşa getirtmeyiz.",
      },
      {
        q: "Dalaman'dan yola çıkmadan tatil dönüşü kontrolü yaptırabilir miyim?",
        a: "Evet — memlekete dönüş yolu öncesi 40 dakikalık kontrol (sıvılar, fren, lastik) ile uzun yola güvenle çıkarsınız. D400 üzerindesiniz; yol üstü uğrayın, ama önce arayın.",
      },
    ],
    blogSlugs: ["kiralik-aracta-ariza", "tatil-oncesi-arac-kontrolleri"],
    serviceSlugs: ["periyodik-bakim", "oto-kurtarma", "ariza-tespiti"],
  },
  {
    slug: "koycegiz",
    name: "Köyceğiz",
    title: "Köyceğiz Oto Tamir ve Servis",
    description:
      "Köyceğiz'den D400 ile ~50 dk: bakım, fren ve arıza işleri Muğla Sanayi'deki atölyemizde. Değişen parça gösterilir. Tel: 0507 921 33 88.",
    h1: "Köyceğiz'den Gelenler İçin Oto Tamir ve Servis",
    keyword: "köyceğiz oto tamir",
    ulasim: {
      yol: "D400 Köyceğiz-Muğla",
      sure: "~50 dk",
      km: "~57 km",
      tarif:
        "Köyceğiz'den D400 ile Muğla yönüne; Gökova kavşağını geçince Muğla'ya tırmanış başlar, sanayi sitesi şehir girişindedir.",
    },
    senaryo:
      "Köyceğiz D400 güzergahının kilit noktası: Fethiye-Muğla arası çalışan herkes buradan geçer. Göl çevresinin nemi, kışın araç elektroniğine ve pas noktalarına başka yerden daha erken dokunur — Köyceğiz'den gelen yaşlı araçlarda soket oksitlenmesi ve şasi pas kontrolü rutinimizdir. Sığla ormanı ve göl turizmi araçları, günübirlik tur minibüsleri ve tarımla uğraşanların pikapları da müşteri profilimizin parçası. Muğla'ya işi düşen Köyceğizli için formül basit: aracı sabah bırak, işini gör, dönüşte al.",
    faqs: [
      {
        q: "Nemli bölgede duran araçta ekstra ne kontrol edilmeli?",
        a: "Göl çevresi neminde elektrik soketleri, şasi pas noktaları ve fren disk yüzeyleri erken etkilenir. Yıllık kontrolde bu üçüne özel bakarız; erken yakalanan pas ucuz çözülür.",
      },
      {
        q: "Muğla'ya zaten haftada bir geliyorum, bakımı nasıl planlayayım?",
        a: "En verimli yöntem: geleceğiniz günü önceden söyleyin, aracı sabah bırakın, işiniz bitince alın. Köyceğizli müşterilerimizin çoğu bu düzenle çalışıyor.",
      },
      {
        q: "Kışın camlar sürekli buğu yapıyor, klimayla ilgisi var mı?",
        a: "Var: buğu çözmede klima nemi alır. Buğu inatçıysa polen filtresi tıkalı ya da klima gazı eksik olabilir; ikisi de kısa sürede çözülür.",
      },
      {
        q: "D400'de yolda kalırsam çekici ne kadar sürede gelir?",
        a: "Konuma göre değişir ama Köyceğiz-Muğla arası bizim çekici ağımızın ana hattı: genelde 30-45 dakikada araç yanınızda olur. Önce bizi arayın, koordine edelim.",
      },
    ],
    blogSlugs: ["kisin-muglada-arac-bakimi", "tatil-oncesi-arac-kontrolleri"],
    serviceSlugs: ["oto-elektrik", "fren-tamiri", "periyodik-bakim"],
  },
  {
    slug: "datca",
    name: "Datça",
    title: "Datça Oto Tamir — Muğla'da Servis",
    description:
      "Datça'dan ~2 saat: yarımada koşullarında yıpranan araçlar için büyük bakım ve onarım adresi. Tel: 0507 921 33 88.",
    h1: "Datça'dan Gelenler İçin Oto Tamir ve Servis",
    keyword: "datça oto tamir",
    ulasim: {
      yol: "Datça-Marmaris yolu + D400 Sakar Geçidi",
      sure: "~2 saat",
      km: "~125 km",
      tarif:
        "Datça'dan virajlı sahil yoluyla Marmaris'e, oradan D400 ve Sakar Geçidi ile Muğla'ya. Yolun Datça-Marmaris kısmı virajlıdır; acele etmeyin.",
    },
    senaryo:
      "Datça yarımadası araç için zorlu bir parkur: 70 km'lik virajlı yol, deniz tuzu taşıyan rüzgar ve yazın ciddi sıcak. Tuzlu hava zamanla metal aksamda korozyonu hızlandırır; viraj yükü rot-balans ve alt takımı yorar. Datça'da servis seçeneği kısıtlı olduğu için büyük işlerde araçlar ya Marmaris'e ya bize geliyor — özellikle motor, şanzıman ve komple bakım paketlerinde 'madem yol yapıyorum, her şeyi tek seferde yaptırayım' diyen Datçalı müşterimiz çok. Bu talebe özel, tek randevuda birden fazla işi bitiren paket planlaması yapıyoruz.",
    nedenGelinir:
      "Datça'dan gelen müşteriye kuralımız: tek gelişte maksimum iş. Randevudan önce telefonda tüm şikayetleri alır, parçaları hazırlar, aracı aynı gün ya da net söylenmiş bir günde teslim ederiz. İki saatlik yolu ikinci kez yaptırmamak bizim sorumluluğumuz.",
    faqs: [
      {
        q: "Deniz kenarında duran araçta pas kontrolü ne sıklıkla yapılmalı?",
        a: "Yılda bir alt takım ve şasi korozyon kontrolü öneririz. Erken dönemde koruyucu uygulama ucuzdur; ilerleyen pas fren borusu gibi kritik yerlere ulaşırsa iş büyür.",
      },
      {
        q: "Datça yolu virajlarında direksiyonda titreşim başladı, ne olabilir?",
        a: "Balans kaçığı, yorulmuş rot başları veya çarpık jant olabilir. Virajlı yolda erken teşhis önemli; lift ve yol testiyle net ayrım yaparız.",
      },
      {
        q: "Tek seferde birden çok iş yaptırmak istiyorum, nasıl planlarız?",
        a: "Telefonda şikayet listesini alır, tahmini süre-fiyat aralığı veririz. Parçalar önceden temin edilir; randevu gününde işler paralel yürütülür, çoğu paket aynı gün biter.",
      },
      {
        q: "Knidos taraflarında yolda kalırsam ne yapmalıyım?",
        a: "Önce bizi arayın: yarımadadaki kurtarıcı ağıyla koordine eder, aracın Marmaris'e mi bize mi çekileceğine arızaya göre birlikte karar veririz. Yarımadada çekici süresi uzayabilir; telefonda ön teşhis zaman kazandırır.",
      },
    ],
    blogSlugs: ["tatil-oncesi-arac-kontrolleri", "yokus-virajli-yolda-fren"],
    serviceSlugs: ["periyodik-bakim", "motor-tamiri", "fren-tamiri"],
  },
];

export function getDistrict(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}
