export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  /** Kart ve menü adı */
  name: string;
  /** SEO title (≤60 kr, marka eki layout template'inden gelir) */
  title: string;
  description: string;
  h1: string;
  /** Birincil hedef kelime */
  keyword: string;
  intro: string;
  /** "Bu işte neler yapılır" maddeleri */
  scope: string[];
  /** Neden biz — hizmete özgü somut taahhüt */
  why: string;
  faqs: Faq[];
  /** İç link: ilgili hizmet slug'ları */
  related: string[];
}

export const services: Service[] = [
  {
    slug: "motor-tamiri",
    name: "Motor Tamiri ve Revizyon",
    title: "Muğla Motor Tamiri ve Revizyon",
    description:
      "Muğla'da motor tamiri ve komple revizyon: yağ yakma, güç kaybı, hararet sorunları. 20 yıllık usta, önce fiyat sonra işlem. Hemen arayın: 0507 921 33 88.",
    h1: "Muğla'da Motor Tamiri ve Revizyon",
    keyword: "muğla motor tamiri",
    intro:
      "Motor yağ yakıyor, güç kaybı var ya da hararet yapıyorsa sorun büyümeden teşhis edilmeli. Atölyemizde motor revizyonu subap işleminden gömlek-piston değişimine kadar yerinde yapılır; motor sökülmeden önce kompresyon ve kaçak testiyle gerçek durum size gösterilir.",
    scope: [
      "Kompresyon ve silindir kaçak testi ile teşhis",
      "Rektefiye koordinasyonu: gömlek, piston, sekman, subap",
      "Silindir kapağı revizyonu ve conta değişimi",
      "Yağ yakma ve hararet sorunlarının kök neden tespiti",
      "Revizyon sonrası rodaj talimatı ve kontrol randevusu",
    ],
    why: "Revizyondan çıkan her motorun eski parçaları size teslim edilir; ne değiştiyse görürsünüz. Fiyat, motor açılıp durum netleşmeden önce aralık olarak, netleşince kalem kalem bildirilir.",
    faqs: [
      {
        q: "Motor revizyonu kaç günde biter?",
        a: "Parça temin süresine bağlı olarak genelde 3-7 iş günü. Rektefiye gereken durumlarda süre uzayabilir; işlem başında net takvim veririz.",
      },
      {
        q: "Motor yağ yakıyor, revizyon şart mı?",
        a: "Her zaman değil. Subap saplama keçeleri veya turbo kaynaklı yağ kaybı revizyonsuz çözülebilir. Önce kaçak testi yapar, gerçekten gerekiyorsa revizyon öneririz.",
      },
      {
        q: "Revizyon sonrası garanti var mı?",
        a: "İşçilik garantimiz var; kullanılan parçalar da kendi üretici garantisiyle gelir. Rodaj kurallarına uyulması şartıyla sorun çıkarsa tekrar bakarız.",
      },
      {
        q: "Hangi marka motorlara bakıyorsunuz?",
        a: "Binek ve hafif ticari tüm marka ve modellerle çalışıyoruz. Dizel ve benzinli fark etmez.",
      },
    ],
    related: ["ariza-tespiti", "triger-degisimi", "periyodik-bakim"],
  },
  {
    slug: "periyodik-bakim",
    name: "Periyodik Bakım",
    title: "Muğla Periyodik Bakım — Km Bakımı",
    description:
      "Muğla'da periyodik bakım: yağ, filtre, fren kontrolü tek pakette. Önce fiyat sonra işlem, değişen parça size gösterilir. Randevu: 0507 921 33 88.",
    h1: "Muğla'da Periyodik Bakım ve Km Bakımı",
    keyword: "muğla periyodik bakım",
    intro:
      "Periyodik bakım aracın sigortasıdır: zamanında yapılan yağ ve filtre değişimi, motoru da cebi de korur. Bakım paketimiz araç km'sine ve üretici tablosuna göre belirlenir — herkese aynı liste değil, aracınıza ne gerekiyorsa o.",
    scope: [
      "Motor yağı ve yağ filtresi değişimi (araca uygun viskozite)",
      "Hava, polen ve yakıt filtresi kontrolü/değişimi",
      "Fren balata ve disk görsel kontrolü",
      "Soğutma sıvısı, fren hidroliği seviye ve durum kontrolü",
      "Alt takım göz kontrolü ve diagnostik hata taraması",
    ],
    why: "Bakımda çıkan her parça — eski yağ filtresi dahil — size gösterilir. Üretici bakım tablosunun dışına çıkmayız; gereksiz parça değiştirtmeyiz.",
    faqs: [
      {
        q: "Periyodik bakım kaç km'de bir yapılmalı?",
        a: "Çoğu benzinli araçta 10-15 bin km, dizellerde 15-20 bin km veya yılda bir — hangisi önce dolarsa. Aracınızın üretici tablosuna göre net aralığı söyleriz.",
      },
      {
        q: "Bakım ne kadar sürer?",
        a: "Standart yağ-filtre bakımı 1-1,5 saat. Ek işlem çıkarsa (balata, buji vb.) önce size sorulur, onaysız işlem yapılmaz.",
      },
      {
        q: "Yetkili servis dışında bakım garantiyi bozar mı?",
        a: "Hayır. Üretici onaylı parça ve kayıtlı fatura ile özel serviste bakım, Blok Muafiyet düzenlemesi gereği garantiyi bozmaz. Faturanızı bu şekilde düzenleriz.",
      },
      {
        q: "Hangi motor yağını kullanıyorsunuz?",
        a: "Aracınızın üretici onay normuna (örn. VW 504.00, ACEA C3) uygun yağ kullanılır. İsterseniz marka tercihinizi de uygularız.",
      },
    ],
    related: ["fren-tamiri", "triger-degisimi", "oto-klima"],
  },
  {
    slug: "fren-tamiri",
    name: "Fren Bakım ve Tamiri",
    title: "Muğla Fren Tamiri ve Balata Değişimi",
    description:
      "Muğla'da fren tamiri: balata, disk, hidrolik, ABS arızaları. Muğla-Marmaris ve Sakar Geçidi yolları için fren güvenliği şart. Arayın: 0507 921 33 88.",
    h1: "Muğla'da Fren Sistemleri Bakım ve Tamiri",
    keyword: "muğla fren tamiri",
    intro:
      "Muğla'nın coğrafyası fren sistemine başka illerden daha çok yüklenir: Sakar Geçidi, Marmaris ve Fethiye yolu gibi uzun rampalarda fren ihmalinin bedeli ağırdır. Titreme, ses, uzayan mesafe veya yanan ABS lambası — hepsinin teşhisi ve çözümü burada yapılır.",
    scope: [
      "Balata ve disk değişimi, disk taşlama değerlendirmesi",
      "Fren hidroliği değişimi ve hava alma",
      "Kaliper (kıskaç) bakımı ve pistonu sıkışan kaliper onarımı",
      "ABS / ESP arıza teşhisi ve sensör değişimi",
      "El freni ayarı ve halat değişimi",
    ],
    why: "Fren işlerinde 'idare eder' yoktur: ölçüm değerleri (balata mm, disk kalınlığı) size rakamla söylenir, sınırın altındaysa görürsünüz. Değişen parçalar teslim edilir.",
    faqs: [
      {
        q: "Fren balatası ne zaman değişmeli?",
        a: "Balata kalınlığı 3 mm'nin altına indiğinde. Sesli uyarı plakası ötmeye başladıysa zaten geç kalınmıştır; en kısa sürede kontrole gelin.",
      },
      {
        q: "Frende titreme neden olur?",
        a: "Çoğunlukla ısınmayla çarpılan fren diskinden. Disk kalınlığı uygunsa taşlama, değilse değişim gerekir; ölçüp size göre en ekonomik doğru çözümü söyleriz.",
      },
      {
        q: "Fren hidroliği gerçekten değişmeli mi?",
        a: "Evet — hidrolik nem çeker ve kaynama noktası düşer. Uzun rampalarda (Sakar Geçidi gibi) bu fren pedalının boşa gitmesine yol açabilir. 2 yılda bir değişim öneririz.",
      },
      {
        q: "ABS lambası yanıyor, araç kullanılır mı?",
        a: "Frenler çalışır ama ABS devre dışı olabilir; ani frende tekerlek kilitlenebilir. Kısa sürede diagnostik cihazla baktırın — teşhis işlemi hızlıdır.",
      },
    ],
    related: ["periyodik-bakim", "ariza-tespiti", "yedek-parca"],
  },
  {
    slug: "oto-elektrik",
    name: "Oto Elektrik ve Diagnostik",
    title: "Muğla Oto Elektrik ve Arıza Tespiti",
    description:
      "Muğla'da oto elektrik: marş, şarj, aydınlatma, sensör arızaları ve diagnostik cihazla elektronik arıza tespiti. Hemen arayın: 0507 921 33 88.",
    h1: "Muğla'da Oto Elektrik ve Elektronik Arıza Tespiti",
    keyword: "muğla oto elektrik",
    intro:
      "Modern araçta arızaların büyük kısmı elektrik ve elektronik kaynaklı: marş basmıyor, akü çabuk bitiyor, gösterge panelinde lamba yanıyor. Tahminle parça değiştirmek yerine diagnostik cihaz ve ölçümle kök nedeni bulur, sadece gerekeni değiştiririz.",
    scope: [
      "Diagnostik cihazla hata kodu okuma ve canlı veri analizi",
      "Marş motoru ve şarj dinamosu (alternatör) testi ve onarımı",
      "Akü testi ve doğru amperajda akü değişimi",
      "Kablo tesisatı kaçak/kemirgen hasarı onarımı",
      "Sensör arızaları: oksijen, krank, eksantrik, ABS sensörleri",
    ],
    why: "Arıza tespit ücreti sabittir ve işlem yaptırırsanız işçilikten düşülür. 'Şunu da değişelim, belki odur' yaklaşımı bu atölyede yasaktır — ölçmediğimiz parçayı değiştirmeyiz.",
    faqs: [
      {
        q: "Araç marş basmıyor, sorun akü mü marş motoru mu?",
        a: "Testle 5 dakikada ayrılır: akü voltajı ve soğuk marş değeri ölçülür, sağlamsa marş motoru akımına bakılır. Telefonla belirtileri anlatırsanız ön fikir de veririz.",
      },
      {
        q: "Motor arıza lambası (sarı motor ikonu) yandı, ne yapmalıyım?",
        a: "Panik yok ama erteleme de yok. Lamba sabit yanıyorsa en kısa sürede okutun; yanıp sönüyorsa ateşleme hatası olabilir, aracı fazla zorlamadan getirin.",
      },
      {
        q: "Arıza tespiti ücretli mi?",
        a: "Evet, sabit ve makul bir tespit ücreti var. Onarımı bizde yaptırırsanız bu ücret toplam işçilikten düşülür.",
      },
      {
        q: "Akü sürekli bitiyor, sebebi ne olabilir?",
        a: "Ya akü ömrünü doldurmuştur, ya şarj sistemi zayıftır ya da araçta gizli akım kaçağı vardır. Üçünü de sırayla ölçer, hangisiyse onu söyleriz.",
      },
    ],
    related: ["ariza-tespiti", "oto-klima", "yedek-parca"],
  },
  {
    slug: "oto-klima",
    name: "Oto Klima Bakım ve Gaz Dolumu",
    title: "Muğla Oto Klima Bakımı ve Gaz Dolumu",
    description:
      "Muğla sıcağında klima şart: gaz dolumu, kaçak testi, kompresör tamiri ve koku çözümü tek adreste. Aynı gün hizmet için hemen arayın: 0507 921 33 88.",
    h1: "Muğla'da Oto Klima Bakım, Tamir ve Gaz Dolumu",
    keyword: "muğla oto klima",
    intro:
      "Muğla yazında klimasız araç çekilmez — hele Bodrum-Marmaris trafiğinde. Klima soğutmuyorsa sebep çoğu zaman gaz eksiği değil, kaçaktır: sadece gaz basıp göndermek parayı çöpe atmaktır. Önce kaçak testi, sonra dolum yaparız.",
    scope: [
      "Klima gaz dolumu (R134a / R1234yf) ve yağ dengeleme",
      "UV boyalı ve azotlu kaçak testi",
      "Kompresör, kondanser, evaporatör arıza tespiti ve değişimi",
      "Polen filtresi değişimi ve evaporatör dezenfeksiyonu (koku çözümü)",
      "Klima elektrik/fan arızaları",
    ],
    why: "Gaz doldurmadan önce sistemdeki mevcut gaz miktarı ölçülür ve size söylenir. Kaçak varsa dolum önerilmez; önce kaçağın kaynağı gösterilir.",
    faqs: [
      {
        q: "Klima gazı ne sıklıkla doldurulmalı?",
        a: "Sağlıklı sistemde gaz bitmez, yıllık %5-10 doğal kayıp olur. 2-3 yılda bir bakım yeterli. Her yıl gaz bitiyorsa kaçak var demektir.",
      },
      {
        q: "Klima soğutuyor ama araçta kötü koku var, neden?",
        a: "Evaporatör peteğinde biriken nem ve bakteriden. Dezenfeksiyon işlemi ve polen filtresi değişimiyle çözülür; yarım saat sürer.",
      },
      {
        q: "Klima gaz dolumu ne kadar sürer?",
        a: "Vakum, kaçak kontrolü ve dolum dahil yaklaşık 45-60 dakika. Sezonda yoğunluk olur; telefonla randevu almanızı öneririz.",
      },
      {
        q: "Kiralık araçta klima bozulursa ne yapmalıyım?",
        a: "Önce kiralama şirketinizi arayın; onay verirlerse teşhis ve onarımı yapar, faturayı şirket adına düzenleriz. Turistler için İngilizce iletişim de mümkün.",
      },
    ],
    related: ["oto-elektrik", "periyodik-bakim", "ariza-tespiti"],
  },
  {
    slug: "triger-degisimi",
    name: "Triger Seti Değişimi",
    title: "Muğla Triger Seti ve Kayış Değişimi",
    description:
      "Muğla'da triger seti değişimi: kayış, gergi ve devirdaim tek pakette. Triger ihmali motoru yatırır — km'niz dolduysa bekletmeden arayın: 0507 921 33 88.",
    h1: "Muğla'da Triger Seti ve Kayış Değişimi",
    keyword: "muğla triger değişimi",
    intro:
      "Triger kayışı koptuğunda supaplar pistona çarpar ve basit bir bakım masrafı, motor revizyonuna dönüşür. Bu yüzden trigerde kural nettir: üreticinin verdiği km veya yıl dolduysa beklemeden değiştirilir — ikisinden hangisi önce gelirse.",
    scope: [
      "Triger kayışı, gergi bilyası ve gezdirme rulmanı değişimi (komple set)",
      "Devirdaim (su pompası) değişimi — triger sökülmüşken en ekonomik an",
      "Antifriz değişimi ve sistem hava alma",
      "V kayışı (alternatör kayışı) kontrol ve değişimi",
      "Zincirli motorlarda zincir seti değerlendirmesi",
    ],
    why: "Trigerde tek kalem değişim yapmayız: kayış değişip gergisi eski kalan motor, aynı riski taşımaya devam eder. Set halinde değişir, sökülen parçalar size gösterilir.",
    faqs: [
      {
        q: "Triger kaç km'de değişmeli?",
        a: "Araca göre 60-120 bin km arası veya 5-6 yıl — hangisi önce dolarsa. Az kullanılan araçta kayış km'den önce yaşlanır; yıl kriterini atlamamak gerekir.",
      },
      {
        q: "Triger değişirken devirdaim de şart mı?",
        a: "Zorunlu değil ama akıllıca: pompa trigerin arkasında ve işçilik zaten yapılmışken değişimi neredeyse bedavaya gelir. Sonradan bozulursa aynı işçilik tekrar ödenir.",
      },
      {
        q: "Triger kopmadan belirti verir mi?",
        a: "Çoğu zaman hayır — en tehlikeli yanı bu. Bazı araçlarda çatlak/ses görülebilir ama güvenilir tek yöntem km ve yıl takibidir.",
      },
      {
        q: "İşlem ne kadar sürer?",
        a: "Motoruna göre 3-6 saat. Sabah bırakılan araç genellikle aynı gün teslim edilir.",
      },
    ],
    related: ["motor-tamiri", "periyodik-bakim", "yedek-parca"],
  },
  {
    slug: "sanziman-debriyaj",
    name: "Şanzıman ve Debriyaj",
    title: "Muğla Şanzıman ve Debriyaj Tamiri",
    description:
      "Muğla'da şanzıman tamiri ve debriyaj değişimi: vites geçmiyor, debriyaj kaçırıyor, ses geliyor. Ölçüm ve teşhis için hemen arayın: 0507 921 33 88.",
    h1: "Muğla'da Şanzıman ve Debriyaj İşleri",
    keyword: "muğla şanzıman tamiri",
    intro:
      "Vites zor geçiyor, debriyaj yüksekten tutuyor ya da kalkışta araç titriyorsa güç aktarma organlarında sorun başlamış demektir. Debriyaj değişiminden manuel şanzıman revizyonuna kadar işin tamamı atölyemizde yapılır.",
    scope: [
      "Debriyaj seti değişimi (baskı, balata, rulman) ve volan kontrolü",
      "Çift kütleli volan değerlendirmesi ve değişimi",
      "Manuel şanzıman revizyonu: sinkromeç, rulman, keçe",
      "Şanzıman yağı değişimi (manuel ve otomatik)",
      "Aks, aks kafası ve şaft işleri",
    ],
    why: "Debriyajda volan yüzeyi ölçülmeden set değişimi yapılmaz — yanık volan üstüne yeni balata takmak, parayı ikinci kez harcatır. Ölçüm sonucu size gösterilir.",
    faqs: [
      {
        q: "Debriyaj ne zaman değişir?",
        a: "Kullanıma göre 60-150 bin km. Şehir içi ve rampalı bölge kullanımı ömrü kısaltır. Kaçırma (gaza basınca devir yükselip hız artmaması) en net belirtidir.",
      },
      {
        q: "Otomatik şanzıman yağı ömürlük değil mi?",
        a: "Üreticiler 'ömürlük' dese de pratik ömür 60-80 bin km'de değişimle uzar. Özellikle sıcak iklim ve rampalı kullanımda değişim şanzımanı korur.",
      },
      {
        q: "Kalkışta titreme debriyaj mı motor mu?",
        a: "İkisi de olabilir: debriyaj balatası camlaşması da, motor kulağı (takoz) yorulması da titretir. Yol testiyle ayırt edilir; teşhis için getirin.",
      },
      {
        q: "Şanzıman revizyonu mu çıkma şanzıman mı mantıklı?",
        a: "Duruma göre. Hasar sınırlıysa revizyon ekonomiktir; gövde hasarı varsa garantili çıkma daha mantıklı olabilir. İki seçeneği fiyatıyla önünüze koyarız.",
      },
    ],
    related: ["motor-tamiri", "ariza-tespiti", "yedek-parca"],
  },
  {
    slug: "ariza-tespiti",
    name: "Arıza Tespiti (Diagnostik)",
    title: "Muğla Arıza Tespiti — Diagnostik Servis",
    description:
      "Muğla'da diagnostik arıza tespiti: motor arıza lambası, hata kodları ve canlı veri analizi. Tahmin değil ölçüm — yazılı rapor. Randevu: 0507 921 33 88.",
    h1: "Muğla'da Elektronik Arıza Tespiti ve Diagnostik",
    keyword: "muğla arıza tespiti",
    intro:
      "Gösterge panelinde yanan her lamba bir mesajdır; doğru okunursa küçük masrafla çözülür, yanlış okunursa parça mezarlığına döner. Diagnostik cihazla hata kodlarını okur, canlı veriyle doğrular, kök nedeni raporlarız.",
    scope: [
      "Tüm beyinlerde (motor, ABS, airbag, konfor) hata kodu taraması",
      "Canlı veri analizi: sensör değerlerinin yol testinde izlenmesi",
      "Ateşleme ve enjektör performans karşılaştırması",
      "Emisyon/LPG'li araç uyumsuzlukları tespiti",
      "Yazılı tespit raporu — isterseniz onarımı başka yerde de yaptırabilirsiniz",
    ],
    why: "Tespit raporu yazılı verilir ve aracınıza ne yapılması gerektiği önem sırasıyla listelenir. Onarımı bizde yaptırırsanız tespit ücreti işçilikten düşer.",
    faqs: [
      {
        q: "Hata kodu silmek arızayı çözer mi?",
        a: "Hayır — kod belirtidir, hastalık değil. Kök neden giderilmeden silinen kod geri gelir. Silip göndermeyi biz de yapabiliriz ama önermeyiz; nedenini buluruz.",
      },
      {
        q: "Aracım ara sıra arıza veriyor, servise gidince düzeliyor. Nasıl tespit edilir?",
        a: "Kayıt (freeze frame) verileri ve gerekirse araçta bırakılan veri kaydıyla. Aralıklı arızalar sabır ister ama yakalanır.",
      },
      {
        q: "Tespit ne kadar sürer?",
        a: "Standart tarama 30 dakika. Canlı veri ve yol testi gerekirse 1-2 saat.",
      },
      {
        q: "Almadan önce ikinci el araç kontrolü yapıyor musunuz?",
        a: "Evet — ekspertiz tamamlayıcısı olarak mekanik ve elektronik kontrol yaparız: beyin taraması, kaçak, alt takım, motor sağlığı. Alım kararından önce arayın.",
      },
    ],
    related: ["oto-elektrik", "motor-tamiri", "fren-tamiri"],
  },
  {
    slug: "yedek-parca",
    name: "Yedek Parça Temini",
    title: "Muğla Oto Yedek Parça Temini ve Montaj",
    description:
      "Muğla'da oto yedek parça: orijinal ve muadil seçenekli temin + montaj tek yerde. Parça fiyatı önceden onayınıza sunulur. Arayın: 0507 921 33 88.",
    h1: "Muğla'da Oto Yedek Parça Temini ve Montajı",
    keyword: "muğla oto yedek parça",
    intro:
      "Parçayı bir yerden alıp başka yerde taktırmak çoğu zaman iki kapı arasında sorumluluk boşluğu doğurur. Biz parçayı temin eder, monte eder ve tek elden sorumluluk alırız. Orijinal, OEM üreticisi veya kaliteli muadil — seçenekler fiyatıyla önünüze konur.",
    scope: [
      "Orijinal / OEM / muadil seçenekli parça teklifi",
      "Şasi numarasından doğru parça tespiti (yanlış parça riski yok)",
      "Aynı gün veya ertesi gün temin (Muğla ve İzmir depo ağı)",
      "Montaj ve montaj sonrası kontrol",
      "Parça ve işçilik tek faturada",
    ],
    why: "Her teklif üç seçenekli gelir: orijinal, OEM üreticisi, muadil — markası ve fiyatı açıkça yazılır. Hangisini seçerseniz onu takarız; kutu açılmadan parça markası size gösterilir.",
    faqs: [
      {
        q: "Muadil parça güvenilir mi?",
        a: "Markasına göre. Araç üreticisine de parça basan OEM markaları (örn. Bosch, Valeo, Mahle) orijinalle aynı banttan çıkar. Ucuz-isimsiz muadili zaten teklif etmeyiz.",
      },
      {
        q: "Parçayı kendim getirsem takar mısınız?",
        a: "Takarız; ancak müşteri parçasında parça kaynaklı sorunların sorumluluğu size ait olur. Şasi numaranızla doğru parçayı bulmanıza yardım da ederiz.",
      },
      {
        q: "Parça ne kadar sürede gelir?",
        a: "Muğla'da stokta olan parça aynı gün; İzmir depodan gelen ertesi sabah elimizde olur. Nadir parçalarda süreyi baştan net söyleriz.",
      },
      {
        q: "Eski parçamı geri alabilir miyim?",
        a: "Elbette — zaten her değişen parçayı size göstermek ve istemezseniz bile sormak atölye kuralımızdır. Depozitolu parçalarda (şarj dinamosu gibi) iade farkı da anlatılır.",
      },
    ],
    related: ["periyodik-bakim", "fren-tamiri", "triger-degisimi"],
  },
  {
    slug: "oto-kurtarma",
    name: "Yolda Kalma Desteği",
    title: "Muğla Yolda Kalma Desteği ve Kurtarma",
    description:
      "Muğla'da yolda mı kaldınız? Telefonla ön teşhis, güvenilir çekici yönlendirmesi ve atölyede öncelikli onarım. 7 gün bize ulaşın: 0507 921 33 88.",
    h1: "Muğla'da Yolda Kalma Desteği ve Oto Kurtarma Yönlendirmesi",
    keyword: "muğla yolda kalma desteği",
    intro:
      "Yolda kalmak planlanmaz — özellikle tatil yolunda. Bizi aradığınızda önce telefonla ön teşhis yaparız: bazen sorun beş dakikalık bir yönlendirmeyle çözülür. Çekici gerekiyorsa çalıştığımız güvenilir kurtarıcıya yönlendirir, aracınızı atölyede öncelikli sıraya alırız.",
    scope: [
      "Telefonla ön teşhis ve yol yardımı tavsiyeleri",
      "Anlaşmalı çekici / kurtarıcı yönlendirmesi (Muğla geneli)",
      "Atölyeye gelen yolda kalmış araçlara öncelik",
      "Kiralık araç ve turist araçları için şirketle iletişim desteği",
      "Tatil rotasına devam edebilme odaklı hızlı çözüm",
    ],
    why: "Yolda kalan müşteri bekletilmez: telefonda konum ve belirtiyi alır, çekici gelmeden teşhis planını hazırlarız. Amaç aracı kapıya çekmek değil, sizi yola geri koymaktır.",
    faqs: [
      {
        q: "Çekici hizmetini siz mi veriyorsunuz?",
        a: "Kurtarma aracı bizde değil; yıllardır çalıştığımız güvenilir kurtarıcılara yönlendiririz ve süreç bizim takibimizde ilerler. Ücreti kurtarıcı tarifesidir, üstüne komisyon koymayız.",
      },
      {
        q: "Kasko yol yardımım var, yine de sizi aramalı mıyım?",
        a: "Evet — kaskonuz çekiciyi karşılar, biz de aracın nereye çekileceğini ve arızanın planını netleştiririz. Kasko çekicisine 'Muğla Sanayi Sitesi, Gökhan Oto' demeniz yeterli.",
      },
      {
        q: "Mesai dışında yolda kalırsam ne olur?",
        a: "Telefonu mesai dışında da açmaya çalışırız; ulaşamazsanız WhatsApp'tan konum ve belirti bırakın, en erken saatte dönüş yapar ve aracı öncelikli alırız.",
      },
      {
        q: "Yabancı turistler için destek var mı?",
        a: "Yes — İngilizce temel iletişim kurabiliyoruz ve kiralık araç şirketleriyle süreç yönetiminde yardımcı oluyoruz. İngilizce özet sayfamız: /en",
      },
    ],
    related: ["ariza-tespiti", "oto-elektrik", "fren-tamiri"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
