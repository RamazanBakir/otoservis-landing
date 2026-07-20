export interface BlogSection {
  h2: string;
  paragraphs?: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keyword: string;
  date: string;
  /** Tam yazı mı, iskelet mi */
  full: boolean;
  excerpt: string;
  sections: BlogSection[];
  /** İç link hedefleri */
  relatedServices: string[];
  relatedDistricts: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "muayeneden-kalmamak-12-nokta",
    title: "Araç Muayenesinden Kalmamak İçin Kontrol Edilmesi Gereken 12 Nokta",
    metaTitle: "Muayeneden Kalmamak İçin 12 Kontrol Noktası",
    description:
      "TÜVTÜRK muayenesinden kalmamak için ustanın 12 maddelik kontrol listesi: fren, far, lastik, emisyon ve alt takım. Muayene öncesi hazırlık rehberi.",
    keyword: "muayeneden kalmamak",
    date: "2026-05-12",
    full: true,
    excerpt:
      "Muayene randevusu yaklaşıyorsa bu listeyi aracınızda tek tek gezin. 12 maddenin çoğunu evde kendiniz kontrol edebilirsiniz; gerisini biz hallederiz.",
    sections: [
      {
        h2: "Muayeneden kalmak neden bu kadar yaygın?",
        paragraphs: [
          "TÜVTÜRK istasyonlarında araçların önemli bir kısmı ilk seferde geçemiyor ve kalanların çoğu, on dakikada çözülebilecek basit eksikler yüzünden ikinci kez randevu parası ödüyor: yanmayan bir plaka lambası, silik bir plaka, eksik reflektör.",
          "Aşağıdaki 12 nokta, atölyemizde muayene öncesi kontrole gelen araçlarda en sık düzelttiğimiz kalemlerden derlendi. İlk 7'sini evde kendiniz bakabilirsiniz; son 5'i ölçüm ister.",
        ],
      },
      {
        h2: "Evde kendiniz kontrol edebilecekleriniz (1-7)",
        list: [
          "1. Tüm dış aydınlatma: kısa-uzun far, sinyaller, stop, geri vites ve plaka lambası. Birini bile yanmayan araç ağır kusur alabilir.",
          "2. Cam ve silecekler: ön camda görüşü bozan çatlak kusurdur. Silecek lastiği yırtıksa değiştirin — 5 dakikalık iş.",
          "3. Lastik dişleri: kanun sınırı 1,6 mm; diş göstergesi (TWI) hizasına inen lastik muayeneden döner. Dört lastiğe ve yedeğe bakın.",
          "4. Plaka: silik, eğik, çerçevesi plakayı kapatan araçlar kusur alır.",
          "5. Emniyet kemerleri: tüm koltuklarda kilitlenme kontrolü yapın; kemerini toplamayan makara kusurdur.",
          "6. Korna ve gösterge lambaları: motor arıza, ABS ve airbag lambası yanan araç muayeneden geçmez.",
          "7. Zorunlu ekipman: reflektör, ilk yardım çantası, üçgen. Yoksa alın — kusur listesindedir.",
        ],
      },
      {
        h2: "Ustanın ölçmesi gerekenler (8-12)",
        list: [
          "8. Fren verimliliği: muayenedeki frenometre testi, balata ve disk ölçümüyle evde değil serviste öngörülür. Sağ-sol dengesizliği en sık kalma nedenlerinden.",
          "9. El freni verimi: gevşek halat ya da bitmiş arka balata el freni testinden döndürür.",
          "10. Egzoz emisyonu: yaşlı araçlarda en kritik kalem. Tıkalı hava filtresi ve yorgun oksijen sensörü emisyon değerini bozar.",
          "11. Alt takım boşlukları: rotil, rot başı ve salıncak boşlukları detektörde tek tek yoklanır; boşluklu araç ağır kusur alır.",
          "12. Sıvı kaçakları: motor altında yağ damlatan, fren hidrolik hattı terleyen araç kusur alır. Kaçağın kaynağı muayeneden önce bulunmalı.",
        ],
      },
      {
        h2: "Muayene öncesi kontrol paketi",
        paragraphs: [
          "Bu 12 maddenin tamamını randevunuzdan birkaç gün önce atölyemizde topluca kontrol ediyoruz: fren ölçümü, alt takım detektör kontrolü, emisyon ön testi ve aydınlatma dahil. Çıkan eksikler aynı gün giderilir; muayeneye tek seferde geçmek için gidersiniz.",
          "Ayrıntı için muayene öncesi kontrol sayfamıza bakın ya da 0507 921 33 88'i arayın. Menteşe'deki atölyemiz TÜVTÜRK Muğla istasyonuna birkaç dakika mesafede — kontrol ve muayeneyi aynı güne planlamak mümkün.",
        ],
      },
    ],
    relatedServices: ["fren-tamiri", "ariza-tespiti"],
    relatedDistricts: ["mentese"],
  },
  {
    slug: "tatil-oncesi-arac-kontrolleri",
    title:
      "Tatile Çıkmadan Önce Yapılması Gereken Araç Kontrolleri — Muğla Yolları İçin Rehber",
    metaTitle: "Tatil Öncesi Araç Kontrolleri — Muğla Rehberi",
    description:
      "Bodrum, Marmaris, Fethiye yoluna çıkmadan önce yapılması gereken araç kontrolleri: sıvılar, fren, lastik, klima. Muğla yolları için usta rehberi.",
    keyword: "tatil öncesi araç kontrolü",
    date: "2026-06-02",
    full: true,
    excerpt:
      "Muğla'nın tatil yolları güzeldir ama affetmez: uzun rampalar, sıcak ve trafik. Yola çıkmadan bu kontrolleri yapın, tatiliniz yolda bitmesin.",
    sections: [
      {
        h2: "Muğla yolları neden özel hazırlık ister?",
        paragraphs: [
          "Türkiye'nin her yerinden Bodrum'a, Marmaris'e, Fethiye'ye inen yollar Muğla'da karakter değiştirir: Sakar Geçidi gibi uzun rampalar, Göcek tüneli öncesi tırmanışlar, yaz sıcağında saatler süren trafik. Şehir içinde kendini belli etmeyen bir zayıflık — yorgun soğutma sistemi, azalmış fren hidroliği, eskimiş balata — bu yollarda ortaya çıkar.",
          "Atölyemiz Muğla Sanayi'de, bu yolların tam kavşağında. Her yaz, tatili çekici üstünde başlayan onlarca araç görüyoruz; çoğunun sorunu yola çıkmadan 40 dakikalık kontrolle yakalanabilirdi.",
        ],
      },
      {
        h2: "1. Soğutma sistemi — yazın bir numaralı yol kesici",
        paragraphs: [
          "Muğla yazında hararet, yolda kalma nedenlerinin başında gelir. Antifriz seviyesine ve rengine bakın: seviye eksikse nereye gittiği sorusunun cevabı yola çıkmadan bulunmalı. Fan çalışıyor mu, peteğin önü böcek ve tozla tıkalı mı — klima açıkken uzun rampa tırmanışı sisteme en yüksek yükü bindirir.",
          "Beş yaşını geçen araçta termostat ve fan müşürü ani bozulan parçalardandır; şüpheli belirtiler (ibrenin oynaması, fanın geç devreye girmesi) varsa yola çıkmadan test ettirin.",
        ],
      },
      {
        h2: "2. Frenler — Sakar Geçidi affetmez",
        paragraphs: [
          "Marmaris'e inen Sakar Geçidi ve Fethiye yolu rampaları, frene şehir kullanımının katbekat üstünde yük bindirir. Balata 4 mm'nin altındaysa yola o balatayla çıkmayın. İki yılı geçmiş fren hidroliği kaynama riski taşır — uzun inişte pedalın boşa gitmesi tam olarak bu senaryodur.",
          "Kural basit: uzun inişlerde vitesle inin, freni dinlendirin. Ama asıl güvence, yola sağlam ölçümle çıkmaktır.",
        ],
      },
      {
        h2: "3. Lastikler, sıvılar ve klima",
        list: [
          "Lastik basınçlarını yüklü araca göre ayarlayın (yakıt kapağı içindeki etikete bakın); diş derinliği 3 mm altındaysa uzun yol öncesi değişimi düşünün.",
          "Motor yağı seviyesini düz zeminde kontrol edin; değişim km'sine yol boyu dolacaksa yola çıkmadan değiştirin.",
          "Silecek suyunu doldurun, silecek lastiklerine bakın — güneye inerken böcek temizliği tahmin ettiğinizden önemli.",
          "Klimayı yola çıkmadan test edin: soğutmuyorsa yolda çözüm aramak, tatilde yarım gün kaybettirir. Kaçak testi ve dolum bizde bir saat sürer.",
          "Yedek lastik basıncı, bijon anahtarı ve kriko yerinde mi — beş dakikalık kontrol, gece yarısı yol kenarında saat kazandırır.",
        ],
      },
      {
        h2: "Yola çıkmadan tek randevu",
        paragraphs: [
          "Bu listenin tamamı atölyemizde 'tatil öncesi kontrol' olarak tek pakette yapılıyor: sıvılar, fren ölçümü, lastik, klima performansı, akü testi. Yaz sezonunda ücretsiz 10 nokta kontrol kampanyamızı da sorabilirsiniz.",
          "Bodrum, Marmaris veya Fethiye yönüne gidiyorsanız zaten yolunuz Muğla'dan geçiyor — çıkmadan arayın, D400 üstünde 40 dakikada işinizi bitirelim: 0507 921 33 88.",
        ],
      },
    ],
    relatedServices: ["oto-klima", "fren-tamiri", "periyodik-bakim"],
    relatedDistricts: ["marmaris", "bodrum", "fethiye"],
  },
  {
    slug: "oto-klima-sogutmuyor",
    title: "Oto Klima Soğutmuyor: Nedenleri ve Çözümleri",
    metaTitle: "Oto Klima Soğutmuyor — Nedenleri ve Çözümü",
    description:
      "Klima neden soğutmaz? Gaz kaçağı, kompresör, kondanser ve polen filtresi sorunları; belirtileri ve çözümleri. Muğla sıcağı için usta anlatımı.",
    keyword: "oto klima soğutmuyor",
    date: "2026-06-18",
    full: true,
    excerpt:
      "Klima az soğutuyor, geç soğutuyor ya da hiç soğutmuyor — üçü ayrı hikaye. Gaz basmadan önce nedenini bulmak, iki kere ödememenin tek yolu.",
    sections: [
      {
        h2: "Önce doğru soru: hiç mi soğutmuyor, az mı soğutuyor?",
        paragraphs: [
          "Klima şikayetinin ilk ayrımı bu. Hiç soğutmayan sistemde çoğu zaman gaz tamamen kaçmıştır ya da kompresör devreye girmiyordur. Az veya geç soğutan sistemde ise kısmi gaz eksiği, tıkalı kondanser veya yorgun fan tipiktir. Panelden gelen hava akışı zayıfsa dert bambaşkadır: tıkalı polen filtresi.",
          "Bu ayrımı yapmadan 'gaz basalım abi' yaklaşımı, Muğla'da her yaz binlerce lirayı çöpe attırır. Sağlıklı sistemde gaz bitmez — bitiyorsa kaçak vardır ve kaçak bulunmadan basılan her gaz, birkaç haftalık kiralık serinliktir.",
        ],
      },
      {
        h2: "En sık beş neden",
        list: [
          "Gaz kaçağı: sistemin doğal kaybı yılda %5-10'dur; fazlası kaçaktır. Kondanser taş darbeleri ve yaşlanan o-ringler baş şüphelidir. UV boya veya azot testiyle bulunur.",
          "Tıkalı kondanser: radyatörün önündeki klima peteği böcek, toz ve tüyle dolunca gaz yeterince soğuyamaz. Belirtisi: seyir halinde soğutup dururken soğutmaması. Çözümü dikkatli petek temizliği.",
          "Kompresör arızası: devreye girerken 'çat' sesi normal, çalışırken sürekli metalik ses değil. Manyetik kavrama veya kompresör içi aşınma — işin en pahalı kalemi, o yüzden teşhis kesin olmalı.",
          "Tıkalı polen filtresi: hava akışını keser; klima soğutur ama serinlik kabine ulaşmaz. En ucuz ve en çok atlanan çözüm.",
          "Fan ve elektrik sorunları: çalışmayan kondanser fanı, yorgun basınç sensörü ya da kavramaya gitmeyen sinyal. Diagnostik cihaz ve ölçüyle bulunur.",
        ],
      },
      {
        h2: "Muğla sıcağına özel notlar",
        paragraphs: [
          "40 dereceyi gören temmuz gününde en sağlıklı klima bile araca binince ilk dakikalarda 'soğutmuyor' hissi verir. Adil test şudur: camlar kapalı, orta devirde 10 dakika sonra panel çıkış sıcaklığı. Biz bunu termometreyle ölçer, rakamı size söyleriz — his değil, veri.",
          "Bir de kokuya değinelim: klima açılınca gelen rutubet kokusu evaporatörde üreyen bakteridendir. Dezenfeksiyon ve polen filtresi değişimiyle çözülür; kokuyla birlikte cam buğulanması da genelde kaybolur.",
        ],
      },
      {
        h2: "Bizde süreç nasıl işler?",
        paragraphs: [
          "Önce sistemdeki mevcut gaz miktarı ölçülür ve size söylenir. Eksik belirginse kaçak testi yapılır; kaynağı gösterilmeden dolum önerilmez. Dolumda vakum çekilir, sisteme uygun tip gaz (R134a veya R1234yf) tartıyla basılır. Toplam süre kaçak yoksa yaklaşık bir saat.",
          "Klima sezonu Muğla'da mayısta başlar — kuyruk oluşmadan, ilk sıcaklar vurmadan test ettirin. Randevu: 0507 921 33 88. Marmaris ve Bodrum'dan gelenler için aynı gün dönüş planı yapıyoruz.",
        ],
      },
    ],
    relatedServices: ["oto-klima", "oto-elektrik"],
    relatedDistricts: ["marmaris", "bodrum"],
  },
  {
    slug: "periyodik-bakimda-neler-yapilir",
    title: "Periyodik Bakımda Neler Yapılır? Km Bakım Tablosu",
    metaTitle: "Periyodik Bakımda Neler Yapılır? Km Tablosu",
    description:
      "Periyodik bakım kalemleri km km: 10 binde ne değişir, 60 binde ne kontrol edilir? Dizel, benzinli ve LPG farklarıyla usta anlatımlı bakım tablosu.",
    keyword: "periyodik bakımda neler yapılır",
    date: "2026-04-20",
    full: true,
    excerpt:
      "10 bin km bakımıyla 60 bin km bakımı aynı şey değildir. Hangi km'de neyin değiştiğini tek tabloda topladık.",
    sections: [
      {
        h2: "Periyodik bakım neden 'yağ değişimi'nden fazlasıdır?",
        paragraphs: [
          "Sanayide en sık duyduğumuz cümle: \"Bakımını yeni yaptırdım usta, sadece yağını değiştirdiler.\" Yağ değişimi bakımın kalbi ama tamamı değil. Periyodik bakım, aracın km'sine göre değişen bir kontrol ve değişim paketidir: filtreler, sıvılar, fren ölçümü, alt takım göz kontrolü ve hata taraması bir arada.",
          "Bakımın amacı bozulanı tamir etmek değil, bozulmadan yakalamaktır. 3 mm'ye inmiş balatayı bakımda görmek yol kenarında görmekten hem ucuz hem güvenlidir.",
        ],
      },
      {
        h2: "Her bakımda yapılan standart kalemler",
        list: [
          "Motor yağı ve yağ filtresi değişimi — araca uygun onay normunda yağla",
          "Tüm sıvı seviyeleri: antifriz, fren hidroliği, direksiyon, cam suyu",
          "Fren balata/disk görsel kontrolü ve kalınlık notu",
          "Lastik diş derinliği ve basınç kontrolü",
          "Aydınlatma, silecek, korna kontrolü",
          "Diagnostik cihazla hata kaydı taraması",
        ],
      },
      {
        h2: "Km'ye göre bakım tablosu",
        list: [
          "10-15 bin km: yağ + yağ filtresi, polen filtresi kontrolü. Standart bakım.",
          "20-30 bin km: üstüne hava filtresi ve polen filtresi değişimi; fren ölçümü.",
          "40 bin km: yakıt filtresi (dizelde kritik), fren hidroliği durumu, buji kontrolü (benzinli).",
          "60 bin km: buji değişimi (çoğu benzinlide), şanzıman yağı durumu, V kayışı kontrolü.",
          "90-120 bin km: triger seti + devirdaim, antifriz değişimi, enjektör performans kontrolü. Büyük bakım.",
        ],
      },
      {
        h2: "Dizel ve benzinli fark eder mi?",
        paragraphs: [
          "Eder. Dizelde yakıt filtresi hayati önemdedir — suyu ve pisliği tutar, ihmali enjektör masrafına döner; 20-40 bin km'de değişmelidir. Partikül filtreli (DPF) dizellerde doğru yağ normu (düşük küllü, örn. ACEA C3) kullanılmazsa filtre erken tıkanır. Benzinlide ise buji ve ateşleme bobini takibi öne çıkar.",
          "LPG'li araçlar ayrı dosya: gaz ayarı ve subap koruma kontrolü bakım listesine eklenir, yağ değişim aralığını kısaltmak motoru korur.",
        ],
      },
      {
        h2: "Bakım kaydının ikinci el satışta değeri",
        paragraphs: [
          "Faturalı ve kayıtlı bakım geçmişi, satışta pazarlık masasına koyabileceğiniz en güçlü belgedir. Alıcı 'bakımları yapılmış mı' diye sorar; 'yapıldı' demekle klasörü uzatmak arasında ciddi fiyat farkı vardır. Atölyemizde her bakım iş emri fişiyle kayıt altına alınır — istediğinizde geçmişi tek sayfa döküm olarak veririz.",
          "Bakım planınızı netleştirmek için arayın: 0507 921 33 88. Aracın km'sine göre gerekeni söyleriz — gerekmeyeni değil.",
        ],
      },
    ],
    relatedServices: ["periyodik-bakim", "triger-degisimi"],
    relatedDistricts: ["mentese", "yatagan"],
  },
  {
    slug: "triger-kayisi-ne-zaman",
    title: "Triger Kayışı Ne Zaman Değişmeli? İhmal Edilirse Ne Olur?",
    metaTitle: "Triger Kayışı Ne Zaman Değişmeli?",
    description:
      "Triger kayışı değişim zamanı: km ve yıl kriterleri, kopma riski ve set halinde değişimin nedeni. İhmalin bedeli motor revizyonudur — rehberi okuyun.",
    keyword: "triger kayışı ne zaman değişmeli",
    date: "2026-03-15",
    full: true,
    excerpt:
      "Triger belirti vermeden kopar ve koptuğu an motor yatar. Km ve yıl kriterini bilen sürücü bu riski hiç yaşamaz.",
    sections: [
      {
        h2: "Triger kayışı ne iş yapar?",
        paragraphs: [
          "Triger kayışı, krank mili ile eksantrik mili arasındaki senkronu sağlar: pistonlar aşağıdayken subaplar açılır, yukarı çıkarken kapanır. Bu dans milimetrik zamanlamayla döner ve kayış o zamanlamanın kendisidir.",
          "Kayış sadece motoru döndürmez; çoğu araçta devirdaim pompasını da çevirir. Yani triger hattı hem zamanlama hem soğutma demektir — bu yüzden ihmale en kapalı bölgedir.",
        ],
      },
      {
        h2: "Değişim kriteri: km mi, yaş mı?",
        paragraphs: [
          "İkisi birden — hangisi önce dolarsa. Üreticiye göre aralık 60-120 bin km veya 5-6 yıldır. Kritik olan yaş kriterinin atlanmamasıdır: yılda 5 bin km yapan araçta kayış km olarak gencecik görünürken kauçuk olarak yaşlanmıştır. Çatlayan, sertleşen kayış km'ye bakmadan kopar.",
          "İkinci el araç aldıysanız ve triger geçmişi belgesiz ise doğru varsayım şudur: değişmemiş kabul et, değiştir. Bu birkaç bin liralık önlem, aşağıda anlatacağımız faturadan kat kat ucuzdur.",
        ],
      },
      {
        h2: "Koparsa ne olur: subap-piston çarpışması",
        paragraphs: [
          "Kayış koptuğu an eksantrik durur, subaplar açık pozisyonda donar; krank ise ataletle dönmeye devam eder. Sonuç: pistonlar açık subaplara çarpar. Eğilen subaplar, hasarlı piston tablaları, bazen yaralanan silindir kapağı — yani basit bir set değişimi yerine motor revizyonu.",
          "Bu senaryonun maliyeti, zamanında yapılan triger değişiminin 8-10 katına çıkabilir. Trigerin sigortası yoktur; takvimi vardır.",
        ],
      },
      {
        h2: "Neden tek kayış değil komple set değişir?",
        paragraphs: [
          "Kayışla aynı hatta çalışan gergi bilyası ve gezdirme rulmanları da aynı ömrü tüketir. Yeni kayışı eski gergiyle çalıştırmak, riski yarım bırakmaktır: sıkışan gergi bilyası yeni kayışı da koparır. Bu yüzden atölyemizde triger işi daima set olarak yapılır — kayış + gergi + gezdirme.",
          "Set değişiminde sökülen eski parçalar size gösterilir; kayışın diş durumundan ne kadar riskte olduğunuzu kendi gözünüzle görürsünüz.",
        ],
      },
      {
        h2: "Devirdaim pompası neden aynı anda değişmeli?",
        paragraphs: [
          "Devirdaim pompası çoğu motorda trigerin arkasında oturur: ona ulaşmak için triger zaten sökülür. Yani pompanın işçiliği, triger değişiminde neredeyse bedavadır. Ayrı zamanda bozulursa aynı sökme işçiliğini ikinci kez ödersiniz — üstelik sızdıran pompa yeni kayışı da yağlayıp bozabilir.",
          "Km'niz dolduysa erteleme: 0507 921 33 88'i arayın, aracınıza göre set fiyatını ve süreyi netleştirelim. Çoğu triger işi sabah bırak, akşam al düzeninde biter.",
        ],
      },
    ],
    relatedServices: ["triger-degisimi", "motor-tamiri"],
    relatedDistricts: ["milas"],
  },
  {
    slug: "mugla-oto-sanayi-nerede",
    title: "Muğla Oto Sanayi Nerede? Ulaşım ve Servis Rehberi",
    metaTitle: "Muğla Oto Sanayi Nerede? Ulaşım Rehberi",
    description:
      "Muğla Sanayi Sitesi nerede, nasıl gidilir? Menteşe'deki oto sanayiye ilçelerden ulaşım süreleri, usta seçme ölçütleri ve servis rehberi bir arada.",
    keyword: "muğla oto sanayi",
    date: "2026-02-10",
    full: true,
    excerpt:
      "Muğla'da aracına usta arayan herkesin ilk sorusu: sanayi nerede, hangi kapıdan girilir, kime gidilir?",
    sections: [
      {
        h2: "Muğla Sanayi Sitesi'nin konumu",
        paragraphs: [
          "Muğla Sanayi Sitesi, Menteşe'de şehir merkezine 5 dakika mesafededir. Oto tamirden kaportaya, elektrikten lastikçiye şehrin araç esnafının büyük kısmı bu site içinde toplanmıştır — yani aracınızın derdi ne olursa olsun doğru adres bu bölgedir.",
          "Site içi düzen bilmeyen için karışık gelebilir: bloklar ve sıralar halinde yüzlerce dükkan. İlk gelişte tabela takibi yerine telefonla tarif almak en hızlısıdır.",
        ],
      },
      {
        h2: "İlçelerden ulaşım",
        list: [
          "Yatağan yönünden: D330 ile Muğla girişine, oradan sanayi sapağına — yaklaşık 25 dakika.",
          "Ula / Akyaka yönünden: D400 ile Muğla'ya tırmanıp şehir girişinden sanayi yönüne — yaklaşık 20 dakika.",
          "Milas yönünden: D330 Muğla-Milas yolu, şehir girişinde sanayi tabelası — yaklaşık 50 dakika.",
          "Marmaris yönünden: D400 Sakar Geçidi üzerinden Muğla girişi — yaklaşık 55 dakika.",
          "Toplu taşımayla: merkezden sanayi dolmuşları gün boyu sık aralıkla çalışır.",
        ],
      },
      {
        h2: "Sanayide usta seçerken nelere bakmalı?",
        paragraphs: [
          "Üç somut ölçüt önerelim. Bir: fiyat işlemden önce mi söyleniyor? İş bittikten sonra telaffuz edilen rakam pazarlık değil, oldu-bittidir. İki: değişen parçayı gösteriyor mu? Göstermekten kaçınan yerden uzak durun. Üç: teşhisi neye dayandırıyor? 'Şunu değişelim, olmazsa şuna bakarız' cümlesi, ölçüm değil deneme-yanılma demektir.",
          "Bir de kayıt düzeni: iş emri fişi kesen, yapılan işlemi yazılı veren atölye, işinin arkasında durmayı baştan taahhüt etmiş olur.",
        ],
      },
      {
        h2: "Atölyemizin yeri ve çalışma saatleri",
        paragraphs: [
          "Gökhan Oto, Muğla Sanayi Sitesi içindedir. Pazartesi-Cumartesi 08:30-19:00 arası açığız. Gelmeden önce arayın: hem yol tarifini netleştirelim hem de sıra beklememeniz için randevunuzu ayıralım — 0507 921 33 88.",
          "İlçenizden geliş planı, süre ve güzergah için bölgeler sayfalarımıza bakabilirsiniz; her ilçe için gerçek yol ve süre bilgisini yazdık.",
        ],
      },
    ],
    relatedServices: ["periyodik-bakim", "ariza-tespiti"],
    relatedDistricts: ["mentese", "ula"],
  },
  {
    slug: "yokus-virajli-yolda-fren",
    title:
      "Yokuş ve Virajlı Yollarda Fren Sağlığı: Muğla-Marmaris ve Sakar Geçidi Örneği",
    metaTitle: "Virajlı Yolda Fren Sağlığı — Sakar Geçidi",
    description:
      "Sakar Geçidi ve Muğla-Marmaris yolunda fren güvenliği: balata ısınması, hidrolik kaynaması ve motor freni tekniği. Usta tavsiyeleriyle tam rehber.",
    keyword: "yokuşta fren güvenliği",
    date: "2026-05-28",
    full: true,
    excerpt:
      "Sakar Geçidi'ni bilen bilir: inişin sonunda fren pedalı yumuşayan araç, aslında yola çıkmadan belliydi.",
    sections: [
      {
        h2: "Uzun inişte frene ne olur: ısı ve fade",
        paragraphs: [
          "Fren, hızı ısıya çeviren bir sistemdir. Şehir içinde bu ısı anlık üretilir ve dağılır; uzun inişte ise sürekli üretilir ve birikir. Balata yüzeyi aşırı ısınınca sürtünme katsayısı düşer — pedala aynı kuvvetle bassanız da araç eskisi gibi yavaşlamaz. Buna fren zayıflaması (fade) denir.",
          "Daha ileri aşamada balata yüzeyi camlaşır: parlak, sert, tutmayan bir yüzey. Camlaşmış balata inişten sonra da eski performansına dönmez; çoğu zaman değişim gerekir.",
        ],
      },
      {
        h2: "Fren hidroliği neden 2 yılda bir değişmeli?",
        paragraphs: [
          "Fren hidroliği higroskopiktir — havadaki nemi çeker. İki yaşındaki hidrolikte biriken su, kaynama noktasını ciddi düşürür. Uzun inişte kaliperlerde biriken ısı bu suyu kaynatırsa hat içinde buhar kabarcığı oluşur; buhar sıkışabilir, sıvı sıkışamaz. Sonuç: dibe kadar inen, tepki vermeyen pedal.",
          "Bu, Sakar Geçidi tipi inişlerin en sinsi riskidir çünkü frenler mekanik olarak sapasağlamken yaşanır. Çözümü basit ve ucuzdur: iki yılda bir hidrolik değişimi.",
        ],
      },
      {
        h2: "Motor freni: hangi viteste inilir?",
        paragraphs: [
          "Altın kural: hangi vitesle çıkıyorsan o vitesle in. Uzun inişe hız kazanmadan, düşük vitesle girin; motor deviri yükselsin — motor sizi tutuyor demektir. Fren pedalını sürekli hafif basılı tutmak yerine, gerektiğinde kısa ve kararlı basışlarla kullanın: aralarda balata soğur.",
          "Otomatik viteste de aynı mantık geçerli: manuel mod, kademe kısıtlama (L/2/3) veya paddle ile düşük kademeye alın. 'D'de bırakıp frenle inmek, balatayı ateşe atmaktır.",
        ],
      },
      {
        h2: "Sakar Geçidi ve Babadağ yolu notları",
        paragraphs: [
          "Sakar Geçidi (Muğla-Marmaris): yaklaşık 900 metreden deniz seviyesine sürekli iniş. İnişe başlamadan üstteki seyir alanında durup frenlerinizi dinlendirmek, kokudan-dumandan şüpheleniyorsanız kontrol etmek en doğrusudur. Yanık koku alırsanız durun, soğutun; suyla soğutmaya kalkmayın — ani soğuyan disk çarpılır.",
          "Babadağ yolu (Fethiye/Ölüdeniz): dar, virajlı ve dik — bölgede çalışan tur araçlarının fren periyodu şehir aracının yarısıdır. Bu iki güzergahı düzenli kullanan herkese ayda bir görsel fren kontrolü öneriyoruz.",
        ],
      },
      {
        h2: "Yola çıkmadan fren ölçümü: neye bakılır?",
        list: [
          "Balata kalınlığı: 4 mm altı uzun iniş için risklidir, 3 mm altı değişim demektir.",
          "Disk kalınlığı ve yüzeyi: minimum kalınlık damgası ölçülür, derin çizik ve renk atması (aşırı ısınma izi) kontrol edilir.",
          "Hidrolik yaşı ve kaynama noktası: test cihazıyla dakikada ölçülür.",
          "Kaliper hareketi: sıkışan piston tek tekeri sürekli frende tutar — inişte en tehlikeli arıza.",
          "El freni: acil durumda son çare odur; ayarı ve tutuşu test edilir.",
        ],
      },
    ],
    relatedServices: ["fren-tamiri"],
    relatedDistricts: ["marmaris", "ula", "fethiye"],
  },
  {
    slug: "kiralik-aracta-ariza",
    title: "Kiralık Araçta Arıza Çıkarsa Ne Yapmalı?",
    metaTitle: "Kiralık Araçta Arıza Çıkarsa Ne Yapmalı?",
    description:
      "Kiralık araç yolda arıza yaptı: kime haber verilir, masrafı kim öder, onay süreci nasıl işler? Turistler ve kiracılar için adım adım pratik rehber.",
    keyword: "kiralık araç arıza",
    date: "2026-06-25",
    full: true,
    excerpt:
      "Kiralık araçta arıza, kendi aracınızdakinden farklı işler: önce şirket aranır, onaysız masraf yapılmaz. Sırası şöyle.",
    sections: [
      {
        h2: "İlk kural: şirketi aramadan hiçbir şey yaptırmayın",
        paragraphs: [
          "Kiralık araç sizin değil; onarım kararı da sizin değildir. Arıza anında ilk telefon kiralama şirketine gider. Onaysız yaptırılan onarımın bedeli sözleşme gereği çoğu zaman size kalır — araç yolda kalmış olsa bile.",
          "Şirketi ararken şunları hazır edin: plaka, sözleşme numarası, bulunduğunuz konum ve belirtinin kısa tarifi. Gösterge panelindeki uyarı lambasının fotoğrafını çekmek de işi hızlandırır.",
        ],
      },
      {
        h2: "Sözleşmede arıza ve yol yardımı maddeleri",
        paragraphs: [
          "Kiralama sözleşmelerinin çoğunda yol yardımı (assistance) hattı vardır: çekici, ikame araç ve onarım süreci bu hat üzerinden yürür. Sözleşmenizi imzalarken değilse bile arıza anında bu maddeyi bulun — hangi durumda ikame araç hakkınız olduğu orada yazar.",
          "Dikkat edilecek ayrım: aracın kendi arızası (mekanik/elektronik) şirketin sorumluluğudur; yanlış yakıt, hasarlı kullanım gibi durumlar sizin. Bu ayrım faturanın kime kesileceğini belirler.",
        ],
      },
      {
        h2: "Onarım onayı ve faturalandırma nasıl işler?",
        paragraphs: [
          "Şirket onay verirse süreç şöyle işler: servis arızayı tespit eder, fiyatı şirkete bildirir, şirket yazılı onay verir, onarım yapılır ve fatura şirket adına kesilir. Sizin cebinizden ideal durumda hiçbir şey çıkmaz.",
          "Küçük tutarlarda bazı şirketler 'siz ödeyin, dönüşte mahsup edelim' der — bu durumda mutlaka ayrıntılı fatura ve yapılan işin yazılı dökümünü alın. Sözlü mutabakat, iade masasında buharlaşır.",
        ],
      },
      {
        h2: "Muğla'da biz nasıl yardımcı oluyoruz?",
        paragraphs: [
          "Bodrum-Marmaris-Fethiye üçgeni Türkiye'nin en yoğun kiralık araç bölgesi; her sezon onlarca kiralık araç vakası yönetiyoruz. Şirketinizle Türkçe iletişimi biz kurarız, teşhis ve fiyatı doğrudan onlara bildiririz, onay sonrası faturayı şirkete keseriz. Turist misafirler için temel İngilizce iletişim mümkün.",
          "Yolda kaldıysanız önce şirketinizi, sonra bizi arayın: 0507 921 33 88. Çekici koordinasyonu ve öncelikli işlem bizden.",
        ],
      },
      {
        h2: "English summary: breakdown in a rental car",
        paragraphs: [
          "Rule one: call your rental company before authorising any repair — unapproved work is usually charged to you. Have your plate number, contract number and location ready. Most contracts include an assistance line covering towing and a replacement car.",
          "In the Muğla region we regularly handle rental breakdowns: we diagnose, report the price to your rental company in Turkish, get their approval and invoice them directly. English spoken. Full English page: muglatamirci.com/en — or WhatsApp us at +90 507 921 33 88.",
        ],
      },
    ],
    relatedServices: ["oto-kurtarma", "ariza-tespiti"],
    relatedDistricts: ["dalaman", "bodrum"],
  },
  {
    slug: "motor-yagi-secimi",
    title: "Motor Yağı Seçimi: Hangi Araca Hangi Yağ?",
    metaTitle: "Motor Yağı Seçimi — Hangi Araca Hangi Yağ?",
    description:
      "5W-30 mu 10W-40 mı? Viskozite kodları, üretici onay normları (ACEA, VW, MB) ve doğru motor yağı seçimi — LPG ve yaşlı motor notlarıyla usta rehberi.",
    keyword: "motor yağı seçimi",
    date: "2026-03-30",
    full: true,
    excerpt:
      "Yağ rafında kaybolmayın: doğru yağ, viskozite rakamından değil aracınızın onay normundan seçilir.",
    sections: [
      {
        h2: "Viskozite kodu ne anlatır: 5W-30 örneği",
        paragraphs: [
          "5W-30'daki ilk rakam (5W) yağın soğukta ne kadar akışkan kaldığını söyler — rakam küçüldükçe soğuk ilk çalıştırmada motor o kadar hızlı yağlanır. İkinci rakam (30) çalışma sıcaklığındaki kalınlıktır. Yani 5W-30, kışın rahat akan ve sıcakta yeterli film kalınlığını koruyan bir dengedir.",
          "Muğla ikliminde soğuk ekstrem değildir ama yaz sıcağı ciddidir: üreticinin izin verdiği aralıkta kalmak şartıyla sıcak tarafı sağlam bir yağ (örn. -30 yerine -40 son ek) uzun yaz yolculuklarında güvence sağlar. Aralık dışına asla çıkılmaz.",
        ],
      },
      {
        h2: "Asıl kriter: üretici onay normu",
        paragraphs: [
          "Viskozite işin görünen kısmıdır; asıl seçici üretici onay normudur: VW 504.00/507.00, MB 229.51, BMW LL-04, dexos2 gibi kodlar ya da ACEA A/B ve C sınıfları. Bu kodlar yağın katık paketini, kül seviyesini ve motorunuzun tasarımıyla uyumunu tanımlar.",
          "Özellikle partikül filtreli (DPF/OPF) araçlarda düşük küllü (ACEA C sınıfı) yağ şarttır — yanlış norm filtreyi kademe kademe tıkar. Doğru yağ, kullanım kılavuzundaki normu taşıyan yağdır; markası ikinci plandadır.",
        ],
      },
      {
        h2: "Yaşlı motorlarda yağ seçimi değişir mi?",
        paragraphs: [
          "Değişebilir. 200 bin km'yi geçmiş, keçeleri yorulmuş bir motorda çok ince yağ sızıntı ve tüketimi artırabilir. Üreticinin izin verdiği aralığın üst kalınlığına geçmek (örn. 5W-30 yerine 5W-40, izin varsa) yağ tüketimini çoğu zaman dizginler.",
          "Ama sınır nettir: 'yaşlı motora kalın yağ iyi gelir' diye 20W-50'ye inmek modern motorda yağlama kanallarını aç bırakır. Karar km'ye değil, motorun ölçülen durumuna göre verilmelidir — kompresyon ve tüketim değerlerine bakarak öneririz.",
        ],
      },
      {
        h2: "LPG'li araçlarda yağ ve subap koruması",
        paragraphs: [
          "LPG daha sıcak yanar ve benzine göre subap-baga bölgesini daha çok ısıtır. LPG'li araçta iki önlem öneriyoruz: yağ değişim aralığını yaklaşık dörtte bir kısaltmak ve sıcaklık dayanımı yüksek, tam sentetik yağ kullanmak. Subap koruma sıvısı sistemi varsa dolumunun takibi de bakım listesine girer.",
          "LPG'li aracınızın subap ayarı ve yağ planı için tezgahta konuşalım — kullanım şeklinize göre gerçekçi aralık çıkarırız.",
        ],
      },
      {
        h2: "Sık yapılan üç yağ hatası",
        list: [
          "Norm yerine markayla seçmek: 'iyi marka' yanlış normda motorunuza kötü gelir. Önce norm, sonra marka.",
          "Yağı değiştirip filtreyi bırakmak: eski filtre yeni yağı ilk turda kirletir. Yağ ve filtre daima birlikte.",
          "Seviyeyi hiç kontrol etmemek: iki bakım arası ayda bir çubuk kontrolü, yağ eksilten motoru erken yakalar. Min çizgisi altında sürülen her yüz km, yatak ömründen yer.",
        ],
      },
    ],
    relatedServices: ["periyodik-bakim", "motor-tamiri"],
    relatedDistricts: ["yatagan", "seydikemer"],
  },
  {
    slug: "kisin-muglada-arac-bakimi",
    title: "Kışın Muğla'da Araç Bakımı: Nem ve Yağmur Koşulları",
    metaTitle: "Kışın Muğla'da Araç Bakımı — Nem ve Yağmur",
    description:
      "Muğla kışı kar değil nem ve yağmur demek: akü testi, buğu çözümü, silecek ve elektrik aksamı için bölgeye özel kış bakım rehberi usta anlatımıyla.",
    keyword: "kışın araç bakımı",
    date: "2026-01-15",
    full: true,
    excerpt:
      "Muğla'da kış lastiği tartışması değil, nem tartışması yapılır: buğu, oksitlenen soketler ve yorgun aküler bu bölgenin kış dosyasıdır.",
    sections: [
      {
        h2: "Muğla kışının araca etkisi: kar değil nem",
        paragraphs: [
          "Muğla kışı İç Anadolu gibi buz ve tuz kışı değildir; yağmur ve nem kışıdır. Nem, aracın görünmeyen düşmanıdır: elektrik soketlerinde oksitlenme, şasi ve fren aksamında yüzey pası, kabin içinde bitmeyen buğu. Kar için alınan önlemlerle nem için alınacaklar farklıdır — bu rehber ikincisi için.",
          "Yüksek ilçelerde (Kavaklıdere, Yatağan sırtları, Menteşe'nin dağ köyleri) don da görülür; oralarda antifriz yoğunluğu kontrolü listeye eklenir.",
        ],
      },
      {
        h2: "Akü neden en çok kışın biter?",
        paragraphs: [
          "Akünün verebildiği akım soğukta düşer; motorun ilk dönüş direnci ise soğuk yağ nedeniyle artar. Yani tam da akünün zayıfladığı anda motor daha çok akım ister. Yaz boyu idare eden yorgun akü, ilk soğuk ve nemli sabahta biter — kışın akü vakalarının patlamasının sebebi bu makastır.",
          "Çözüm beş dakikalık test: soğuk marş değeri (CCA) ölçümü akünün gerçek halini gösterir. Sınırda çıkan aküyü kış girmeden değiştirmek, bir sabah yolda kalmaktan hem ucuz hem külfetsizdir.",
        ],
      },
      {
        h2: "Buğu sorunu: polen filtresi ve klima ilişkisi",
        paragraphs: [
          "Camlar sürekli buğulanıyorsa ilk şüpheli tıkalı polen filtresidir: kabine giren hava azalınca içerideki nemli hava dışarı atılamaz. İkinci şüpheli çalışmayan klimadır — buğu çözmenin en etkili yolu klimanın nem alma özelliğidir; gazı eksik klima kışın da işinizi bozar.",
          "Pratik kullanım: buğuda kalorifer + klima birlikte, hava akışı cama, iç sirkülasyon kapalı. Buğu buna rağmen inatçıysa filtre ve klima kontrolüne getirin; yarım saatlik iştir.",
        ],
      },
      {
        h2: "Yağmurda görüş: silecek ve far bakımı",
        paragraphs: [
          "Muğla kışında görüş, silecek lastiği kadardır. Yaz güneşi sileceği kurutup çatlatır; ilk ciddi yağmurda iz bırakan silecek, gece yolculuğunu tehlikeye çevirir. Yılda bir değişim bu iklimde kuraldır — sonbahar bitmeden.",
          "Farlarda iki konu: sararmış far camı ışığı emer (polisaj çözer) ve yanlış far ayarı yağmurlu gece görüşünü bitirir. İkisi de kısa işlemlerdir; kış girişi kontrolünde birlikte yapılır.",
        ],
      },
      {
        h2: "Köyceğiz ve göl çevresi araçları için ek notlar",
        paragraphs: [
          "Göl ve dere yatağı çevresinde (Köyceğiz, Akyaka, Dalyan) nem kalıcıdır: sabah çiği her gün aracın üstündedir. Bu bölge araçlarında soket oksitlenmesi ve gizli akım kaçağına bağlı akü boşalması belirgin şekilde daha sık görülür.",
          "Önerimiz yılda bir 'nem kontrolü': şasi-alt takım pas taraması, kritik soketlerin kontrolü, akü ve şarj sistemi testi. Kış girişinde yapılan bu kontrol, bahara sorunsuz çıkarır. Randevu: 0507 921 33 88.",
        ],
      },
    ],
    relatedServices: ["oto-elektrik", "oto-klima"],
    relatedDistricts: ["koycegiz", "kavaklidere"],
  },
  {
    slug: "uzun-yol-oncesi-bakim",
    title: "Uzun Yol Öncesi Bakım: Yola Çıkmadan Son 24 Saat",
    metaTitle: "Uzun Yol Öncesi Bakım Kontrol Listesi",
    description:
      "Uzun yola çıkmadan son 24 saatte yapılacak kontroller: sıvılar, lastik basıncı, fren ve aydınlatma. Dalaman transfer notuyla pratik kontrol listesi.",
    keyword: "uzun yol öncesi bakım",
    date: "2026-04-05",
    full: true,
    excerpt:
      "Bavul akşamdan hazır ama araç? Yola çıkmadan önceki son 24 saatin kontrol listesi.",
    sections: [
      {
        h2: "Son 24 saat kuralı: neden erken kontrol?",
        paragraphs: [
          "Yola çıkarken kapı önünde yapılan kontrol, eksik bulsa bile çözemez: lastikçi kapalıdır, silecek bulacak dükkan yoktur, vakit yoktur. Kontrolü yola çıkmadan bir gün önce yapmanın mantığı budur — bulunan eksik için hâlâ 24 saatiniz vardır.",
          "Uzun aradan sonra ilk uzun yolsa (araç haftalardır kısa mesafe gidiyorsa) bu kural daha da önemlidir: kısa mesafede kendini belli etmeyen zayıflıklar, ilk uzun etapta ortaya çıkar.",
        ],
      },
      {
        h2: "5 dakikalık kaput altı turu",
        list: [
          "Motor yağı: düz zeminde, soğukta çubuk kontrolü. Min'e yakınsa tamamlayın; değişim km'si yolda dolacaksa çıkmadan değiştirin.",
          "Antifriz: seviye ve rezerv kabı. Eksikse sadece tamamlamayın, nereye gittiğini sorgulayın.",
          "Fren hidroliği: seviye düşükse balata bitmiş ya da kaçak var demektir — ikisi de yola çıkmadan bakılmalı.",
          "Cam suyu: doldurun; güney yollarında böcek temizliği sanılandan sık gerekir.",
          "Gözle kayış-hortum turu: çatlak hortum, parlamış kayış, kuruyup çatlamış plastik gördüyseniz gösterin.",
        ],
      },
      {
        h2: "Lastik ve yük dengesi",
        paragraphs: [
          "Lastik basıncını yakıt kapağı içindeki etiketin 'yüklü' değerine göre ayarlayın — dört kişi ve dolu bagajla, boş araç basıncı yetersizdir ve sıcak asfaltta lastiği yorar. Yedek lastiğin basıncı da kontrol listesindedir; en çok unutulan madde odur.",
          "Yük dengesinde kural: ağır bagajlar alta ve öne, tavan taşıyıcıda yüksek yük mümkünse yok. Tavan yükü hem tüketimi artırır hem viraj karakterini değiştirir — Muğla virajları bunu affetmez.",
        ],
      },
      {
        h2: "Havalimanı transferi öncesi hazırlık (Dalaman notu)",
        paragraphs: [
          "Uçak saati olan yolculuk, sıradan yolculuk değildir: arıza payı yoktur. Dalaman'a gece transferi olanlara önerimiz, yolculuktan birkaç gün önce kısa kontrol — farlar, lastikler, sıvılar, şarj sistemi. Gece D400'de yolda kalmanın telafisi, kaçan uçakla ölçülür.",
          "Transferi düzenli yapan ticari araçlar için km bazlı takip çizelgesi tutuyoruz. Tek seferlik yolcuysanız çıkış öncesi kontrol randevusu için arayın: 0507 921 33 88 — 40 dakikada yola hazır edelim.",
        ],
      },
    ],
    relatedServices: ["periyodik-bakim", "fren-tamiri"],
    relatedDistricts: ["dalaman", "ortaca"],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
