// ─────────────────────────────────────────────────────────────
// Guías de las 8 regiones tradicionales de Japón — mismo patrón
// estático que cityGuides.ts. `content` usa el mismo formato que
// ShortcodeRenderer ya entiende: "## " para h2, "### " para h3,
// shortcodes [CODIGO] en su propio bloque.
//
// El listado de prefecturas de cada región NO se escribe aquí — se
// calcula en DestinoRegion.tsx filtrando PREFECTURES por región,
// igual que ya hace PrefectureListFallback.tsx. Este registro solo
// aporta el contenido editorial (por qué visitarla, cuándo ir,
// gastronomía) y una selección curada de destinos imprescindibles
// que ya tienen guía propia en cityGuides.ts.
// ─────────────────────────────────────────────────────────────

import type { RegionSlug } from "./prefectures";

export interface RegionGuideContent {
  region: RegionSlug;
  intro: string;
  content: string;
  // citySlugs de CITY_GUIDES — se valida que existan con un script de
  // consistencia, nunca un destino sin guía propia.
  mustSeeCities: string[];
}

export const REGION_GUIDES: Record<RegionSlug, RegionGuideContent> = {
  hokkaido: {
    region: "hokkaido",
    intro:
      "Hokkaido es la isla más al norte y la única región de Japón formada por una sola prefectura: naturaleza a gran escala, inviernos con nieve en polvo y una despensa que se nota en cada plato.",
    content: `## Por qué visitar Hokkaido

Hokkaido se colonizó tarde para los estándares japoneses, y eso se nota en el paisaje: ciudades trazadas en cuadrícula, grandes espacios abiertos y una relación con la naturaleza más parecida a otros destinos de montaña que al resto de Japón. Hasta la Restauración Meiji la isla se llamaba Ezo; el nombre actual, que significa "circuito del mar del norte", se adoptó al integrarla formalmente en el estado japonés. Es también el territorio ancestral del pueblo indígena ainu, cazadores-recolectores presentes desde el periodo Jomon: la era Meiji impuso políticas de asimilación forzada que llegaron a prohibir su lengua, y no fue hasta 2019 cuando Japón los reconoció oficialmente como pueblo indígena por primera vez, un año antes de que abriera el centro cultural Upopoy, dedicado a esa herencia.

## Naturaleza y parques nacionales

Hokkaido concentra siete parques nacionales, con paisajes que no se parecen a los del resto del país: Daisetsuzan, el mayor, alberga el Asahidake, el pico más alto de la isla; Shiretoko, Patrimonio de la Humanidad, tiene la mayor densidad de osos pardos de Japón; Akan-Mashu reúne tres lagos de caldera volcánica; Kushiro Shitsugen protege el mayor humedal del país; y Shikotsu-Toya, Rishiri-Rebun-Sarobetsu e Hidakasanmyaku-Erimo-Tokachi —este último, el parque nacional más reciente de Japón, declarado en 2024 con más de 245.000 hectáreas— completan la lista.

## Cuándo ir

El invierno (diciembre-febrero) es la temporada estrella por la nieve en polvo de estaciones como Niseko, el Lake Shikotsu Ice Festival (finales de enero-mediados de febrero) y, sobre todo, el Festival de la Nieve de Sapporo a principios de febrero, coincidiendo con el Yuki Akari no Michi de Otaru y sus farolillos sobre el canal. La primavera trae los cerezos de Matsumae (finales de abril-mediados de mayo, de los últimos en florecer en Japón) y el Lilac Festival de Sapporo (14-25 de mayo), seguido del Sapporo Matsuri en junio. El verano (julio-agosto) es la alternativa más fresca del país, con los campos de lavanda de Furano y Biei en su mejor momento a finales de julio. El otoño trae un follaje temprano en el interior y el Marimo Matsuri de principios de octubre en el lago Akan, en honor a las esferas de algas que le dan nombre.

## Gastronomía de la región

El marisco es el gran protagonista: varias especies de cangrejo (kegani, tarabagani, zuwaigani), un erizo de mar considerado el mejor de Japón y vieiras (hotate) de los mercados de Sapporo y Hakodate, junto a los melones Yubari, de los más caros y apreciados del país. El jingisukan, cordero a la parrilla cocinado sobre una cúpula metálica convexa, y el soup curry, un híbrido de curry y sopa inventado en la propia Sapporo, son los platos más característicos de la isla, junto al zangi (pollo frito marinado) y el ramen local, con el miso ramen como variante más asociada a Sapporo. La cerveza Sapporo es la marca más antigua de Japón, y la destilería Nikka de Yoichi es una referencia del whisky japonés.`,
    mustSeeCities: ["sapporo", "hakodate", "otaru"],
  },

  tohoku: {
    region: "tohoku",
    intro:
      "Tohoku es el norte rural de Honshu: seis prefecturas de paisajes de montaña, onsen tradicionales y algunos de los festivales de verano más espectaculares de Japón, todavía poco recorridas por el turismo extranjero.",
    content: `## Por qué visitar Tohoku

Tohoku queda fuera de la ruta clásica Tokio-Kioto-Osaka, lo que se traduce en pueblos y paisajes con mucha menos presión turística. Su nombre histórico, "michi no oku" ("el camino más profundo"), refleja ese carácter periférico: fue territorio del pueblo emishi hasta que, a mediados del siglo IX, distintos conflictos lo integraron en el estado japonés o lo desplazaron hacia Hokkaido. Hoy sigue siendo una de las regiones más verdes de Japón —el 11% de la prefectura de Akita y el 17% de la de Yamagata son parque natural— y combina zonas de montaña con onsen centenarios, una costa recortada en el Pacífico (la ruta de Sanriku) y un patrimonio histórico propio, desde los templos Patrimonio de la Humanidad de Hiraizumi —antigua capital regional del siglo XII— hasta el legado samurái de Aizuwakamatsu.

## Cuándo ir

El verano concentra el calendario festivo más denso de la región, casi todo entre finales de julio y principios de agosto: el Sansha Taisai de Hachinohe (31 julio-4 agosto), el Soma Nomaoi (último fin de semana de julio), el Sansa Odori de Morioka (1-4 agosto), el Neputa Matsuri de Hirosaki (1-7 agosto), el Nebuta Matsuri de Aomori (2-7 agosto), el Kanto Matsuri de Akita (3-7 agosto), el Hanagasa Matsuri de Yamagata (5-7 agosto) y el Tanabata Matsuri de Sendai (6-8 agosto) — cada uno con su propia estética de faroles, carrozas o estructuras iluminadas. El invierno trae su propio calendario, con el Kamakura Matsuri de Yokote (15-16 de febrero, iglús de nieve iluminados) y el Enburi de Hachinohe (17-20 de febrero). El otoño (octubre-noviembre) ofrece uno de los follajes más intensos de Japón en zonas de montaña como Naruko o el propio Hiraizumi.

## Gastronomía de la región

Morioka es célebre por el wanko soba, un ritual de comer fideos en pequeños boles que se rellenan sin parar, y por el reimen, unos fideos fríos creados en 1954 por un inmigrante norcoreano en la propia ciudad. Sendai da nombre al gyutan (lengua de vaca a la parrilla), y Yonezawa, Kitakami y Maezawa producen tres de las marcas de wagyu más reputadas de Japón. Akita aporta el kiritanpo nabe, un guiso con brochetas de arroz glutinoso, y Aomori se conoce como la "capital del atún" de Japón gracias al puerto de Oma, mientras Kesennuma está especializada en sashimi de cartílago y corazón de tiburón. La región es también una de las grandes productoras de arroz, sake y manzana del país, especialmente en Aomori y Fukushima.

## Patrimonio y curiosidades

Los templos de Chuson-ji y Motsu-ji, en Hiraizumi, son Patrimonio de la Humanidad desde 2011. La bahía de Matsushima está considerada una de las tres vistas más célebres de Japón, y el pueblo termal de Ginzan Onsen, con sus edificios de madera junto al río, es citado a menudo como inspiración visual de "El viaje de Chihiro".`,
    mustSeeCities: ["sendai", "matsushima", "hiraizumi", "aomori", "yamagata"],
  },

  kanto: {
    region: "kanto",
    intro:
      "Kanto es la región de Tokio: la megalópolis y las seis prefecturas que la rodean, con escapadas de montaña, costa y templos históricos a menos de dos horas del centro.",
    content: `## Por qué visitar Kanto

Más allá de Tokio, Kanto reúne algunas de las excursiones de un día más populares de Japón: los templos dorados de Nikko, los grandes budas y santuarios de Kamakura junto al mar, y los onsen de montaña de Hakone con vistas al Fuji en días despejados. La propia Tokio nació como Edo, una aldea de pescadores que Tokugawa Ieyasu empezó a transformar en 1590; a principios del siglo XVIII, Edo ya tenía 1,2 millones de habitantes, más que Londres en la misma época (unos 800.000). Hoy el Gran Tokio —la capital y las prefecturas de Kanagawa, Saitama y Chiba— suma casi 37 millones de habitantes, la mayor área metropolitana del mundo. La densidad de trenes y la cercanía a la capital hacen que casi toda la región se pueda explorar sin coche.

## Patrimonio y festivales con fecha

El santuario Toshogu de Nikko y la antigua fábrica de seda de Tomioka son Patrimonio de la Humanidad; los festivales de carrozas de Kawagoe, Chichibu Yomatsuri y Sawara no Taisai tienen reconocimiento cultural propio. El calendario festivo de la región incluye el Daruma Ichi de Takasaki (6-7 de enero), el Ume Matsuri de los jardines Kairakuen en Mito (mediados de febrero-finales de marzo, con más de 3.000 ciruelos en flor), el Kamakura Matsuri (segundo-tercer domingo de abril, con tiro con arco a caballo yabusame), la procesión de mil samuráis reenactment del Toshogu Shunki Taisai en Nikko (17-18 de mayo), el Sumidagawa Hanabi Taikai de Tokio (último sábado de julio, el festival de fuegos artificiales más antiguo de Japón) y el Chichibu Yomatsuri (2-3 de diciembre, con 13.000 fuegos artificiales nocturnos).

## Cuándo ir

La primavera (finales de marzo-abril) trae la floración de los cerezos por toda la región, con parques como el Shinjuku Gyoen de Tokio o el castillo de Odawara entre los puntos más populares. El otoño (noviembre) ofrece un follaje intenso en Nikko y Hakone, y también en las cascadas de Kegon y Fukuroda, dos de las tres más bellas de Japón. El verano es caluroso y húmedo en la propia Tokio, aunque las zonas de montaña como Hakone, Nikko o el monte Takao refrescan bastante respecto a la capital.

## Gastronomía de la región

Tokio concentra la mayor diversidad gastronómica de Japón, desde el sushi edomae-zushi de referencia mundial hasta el monjayaki de Tsukishima y el chanko nabe de los establos de sumo. Yokohama tiene el mayor barrio chino del país, y Kamakura y Enoshima destacan por su marisco de costa. Ibaraki aporta el anko nabe (guiso de rape con miso) y es la mayor productora de natto de Japón, con Mito como referencia; Saitama tiene el hiyajiru, udon frío con salsa de sésamo y miso; Gunma es célebre por el tonkatsu de Maebashi; y Kawagoe, por sus dulces de boniato (imogashi). Utsunomiya, en Tochigi, compite por el título no oficial de "capital del gyoza" de Japón.`,
    mustSeeCities: ["shinjuku", "asakusa", "kamakura", "hakone", "nikko", "kawagoe"],
  },

  chubu: {
    region: "chubu",
    intro:
      "Chubu es el centro montañoso de Honshu: los Alpes japoneses, la artesanía de Kanazawa, los pueblos de tejado empinado de Shirakawa-go y el propio monte Fuji quedan todos dentro de esta región de nueve prefecturas.",
    content: `## Por qué visitar Chubu

Chubu concentra la mayor variedad de paisajes de montaña de Japón, desde la Ruta Alpina Tateyama-Kurobe hasta los pueblos gassho-zukuri de Shirakawa-go y Gokayama, Patrimonio de la Humanidad. La región se divide en tres subregiones bien diferenciadas: Tokai, en la costa Pacífico; Koshinetsu, de montaña; y Hokuriku, en la costa del mar de Japón. Las históricas rutas Tokaido y Nakasendo, que unían Edo con Kioto, la cruzaban de lado a lado, y aquí se libró en 1600 la batalla de Sekigahara, la más decisiva del periodo Sengoku. Kanazawa, a menudo descrita como una Kioto a menor escala, conserva barrios de geishas y samuráis casi intactos, y Takayama mantiene uno de los cascos históricos de comerciantes mejor preservados del país. Nagoya, la gran ciudad industrial de la región y sede de Toyota, es también el punto medio natural en tren entre Tokio y Kansai — donde además se prueba el tren de levitación magnética (maglev) que en el futuro conectará ambas ciudades.

## Festivales y patrimonio

El festival del fuego de Nozawa Onsen (13-15 de enero), el Takayama Matsuri (14-15 de abril y 9-10 de octubre, uno de los más suntuosos de Japón), el Gujo Odori (de mediados de julio a principios de septiembre, con noches de baile ininterrumpido a mediados de agosto), los fuegos artificiales de Nagaoka (principios de agosto) y los grandes festivales de Wajima (22-25 de agosto) marcan el calendario de la región.

## Cuándo ir

El verano (julio-noviembre) es la única ventana en la que abre la Ruta Alpina Tateyama-Kurobe, con su famoso "corredor de nieve" visible sobre todo en las semanas de apertura, a finales de abril; el parque de Kamikochi, en los Alpes, cierra por su parte de mediados de noviembre a mediados de abril por la nieve. El otoño (octubre-noviembre) tiñe de color los Alpes japoneses y Shirakawa-go. El invierno convierte la región en uno de los grandes destinos de esquí de Japón, con Hakuba, Shiga Kogen y Myoko entre las estaciones más conocidas.

## Gastronomía de la región

Kanazawa tiene su propia alta cocina (kaga ryori) y es célebre por su producción de pan de oro comestible, además del curry local y el jibuni de pato. Nagoya (Aichi) aporta platos tan propios que casi no se ven fuera de la ciudad: miso katsu, tebasaki (alitas), hitsumabushi (anguila servida de tres formas) y un ramen de estilo taiwanés. Gifu es tierra de wagyu Hida y del hoba miso, servido sobre una hoja de magnolia; Nagano tiene su soba teuchi y sus manzanas Shinshu; Yamanashi es célebre por el hoto, un guiso de fideos anchos, y por su melón y melocotón; Niigata aporta el wappa meshi y el soba hegi; Toyama es conocida por su camarón de aguas profundas (shiroebi) y su ramen negro; Fukui destaca por el cangrejo Echizen y el oroshi soba; y Shizuoka es una de las grandes regiones productoras de té verde de Japón, además de sus gambas sakura.`,
    mustSeeCities: ["kanazawa", "takayama", "shirakawa-go", "nagoya", "kawaguchiko", "matsumoto"],
  },

  kinki: {
    region: "kinki",
    intro:
      "Kinki, más conocida como Kansai, fue la cuna política y cultural de Japón durante más de mil años: Kioto y Nara guardan ese legado, mientras Osaka aporta el contrapunto gastronómico y directo de la región.",
    content: `## Por qué visitar Kansai

Kansai concentra la mayor densidad de templos, santuarios y patrimonio histórico de Japón, empezando por Kioto, capital imperial durante más de mil años, y Nara, la capital anterior, con sus ciervos sagrados en libertad — los orígenes mismos de la civilización japonesa se sitúan en Asuka, también en la prefectura de Nara. La región reúne 7 prefecturas en torno al área metropolitana Keihanshin (Kioto, Osaka y Kobe), y el lago Biwa, en Shiga, es el mayor lago de todo Japón. Osaka aporta la cara más urbana y gastronómica de la región, y Himeji conserva el castillo original mejor preservado del país. Koyasan, el centro mundial del budismo Shingon, y el Santuario de Ise, el más sagrado del sintoísmo, completan el peso espiritual de la región.

## Patrimonio y festivales con fecha

Kansai reúne varios sitios Patrimonio de la Humanidad, entre ellos las rutas de peregrinación de Kumano Kodo y el templo Horyu-ji de Nara, el primer lugar de todo Japón en recibir esta declaración. El calendario festivo es especialmente denso: Toka Ebisu en Osaka (9-11 de enero), Wakakusa Yamayaki en Nara (cuarto sábado de enero, quema ritual de la ladera del monte Wakakusa), Omizutori en el templo Todaiji de Nara (1-14 de marzo, con el rito principal el 12 de marzo), el Gion Matsuri de Kioto (procesión principal el 17 de julio, uno de los festivales más antiguos de Japón) y el Tenjin Matsuri de Osaka (24-25 de julio). El Nagahama Hikiyama Matsuri y el Nachi no Ogi Matsuri (festival del fuego, en Wakayama) cuentan también con reconocimiento de la UNESCO.

## Cuándo ir

La primavera (finales de marzo-abril) es temporada alta por los cerezos en flor en Kioto y Nara, y el otoño (noviembre) lo es igualmente por el follaje en templos como los del este de Kioto. Ambas estaciones concentran la mayor afluencia de visitantes de todo Japón, así que conviene reservar alojamiento con antelación. El verano en Osaka y Kioto es húmedo y caluroso; el invierno es suave y con mucha menos aglomeración en los templos más visitados.

## Gastronomía de la región

Osaka se autodenomina la capital gastronómica de Japón, con el takoyaki, el okonomiyaki, el kushikatsu y el butaman como sus platos callejeros más conocidos. Kioto es referencia en cocina kaiseki, tofu, yudofu, obanzai (cocina casera tradicional), el sushi saba zushi, el nishin soba y los dulces yatsuhashi. Hyogo da nombre al wagyu de Kobe, además del akashiyaki, el sake de Nada y el sobameshi. Nara aporta el kakinoha zushi (sushi envuelto en hoja de caqui), el narazuke (verduras encurtidas en sake) y el fideo somen de Miwa; Mie es tierra de wagyu de Matsusaka, langosta ise ebi y tekone zushi; Shiga produce wagyu Omi y el funazushi, uno de los sushis fermentados más antiguos de Japón; y Wakayama es conocida por su ramen chuka soba, el atún de Kii-Katsuura, el meharizushi y el umeboshi (ciruela encurtida).`,
    mustSeeCities: ["kioto", "osaka", "nara", "himeji", "koyasan", "ise"],
  },

  chugoku: {
    region: "chugoku",
    intro:
      "Chugoku ocupa el extremo occidental de Honshu: la memoria histórica de Hiroshima, el torii flotante de Miyajima y paisajes tan distintos entre sí como las dunas de Tottori o el canal de Kurashiki.",
    content: `## Por qué visitar Chugoku

Hiroshima y su Parque Memorial de la Paz son, para muchos visitantes, una parada casi obligada por su peso histórico, y quedan a un corto trayecto en ferry de Miyajima, con su santuario sobre pilotes y el torii que parece flotar con la marea alta. La región se divide en dos mitades de carácter muy distinto, separadas por las montañas de Chugoku —unos 500 km de cordillera, con el monte Daisen y el monte Hyono como picos más altos—: Sanyo, al sur, soleada y orientada al mar Interior de Seto, y San'in, al norte, más lluviosa y menos turística, frente al mar de Japón. Fuera de la ruta clásica, la región ofrece paisajes muy distintos: las únicas dunas de arena de gran escala de Japón en Tottori, el barrio de canal mejor conservado del país en Kurashiki, la meseta caliza de Akiyoshidai y el santuario sintoísta más antiguo de Japón según la tradición, Izumo Taisha, en la "ciudad del agua" de Matsue.

## Patrimonio y festivales con fecha

Chugoku reúne tres sitios Patrimonio de la Humanidad: las minas de plata de Iwami Ginzan, en Oda (Shimane); la academia Shokasonjuku de Hagi, clave en la formación de varios líderes de la Restauración Meiji; y el geoparque de las islas Oki. El calendario festivo incluye el Kaki Matsuri, festival de la ostra, a principios de febrero en Miyajima; el Saidai-ji Eyo, un "festival desnudo" de Okayama (tercer sábado de febrero); el Izumo Taisha Reitaisai (14-16 de mayo); el Toro Nagashi de Hiroshima, en el aniversario de la bomba atómica (6 de agosto); el Momotaro Matsuri de Okayama (primer fin de semana de agosto); y el Shan Shan Matsuri de Tottori (13-15 de agosto).

## Cuándo ir

La primavera y el otoño son las estaciones más agradables para recorrer Hiroshima y Miyajima, con temperaturas suaves y buena luz para el torii flotante. El verano es húmedo y caluroso, aunque agosto trae fechas de memoria especialmente significativas en Hiroshima. El invierno es suave en la costa del mar Interior de Seto, con menos afluencia de visitantes en templos y santuarios.

## Gastronomía de la región

Hiroshima tiene su propia versión del okonomiyaki, con las capas apiladas en vez de mezcladas, un kakidon de ostra, gyoza con limón y el momiji manju como dulce de referencia — es también una de las grandes zonas productoras de ostras de Japón. Okayama aporta el barazushi, el sawara no koko sushi, el demi-katsudon y sus melocotones blancos y uvas Muscat. Shimane tiene el soba de Izumo servido en cajas lacadas (warigo soba), el uzume meshi de Tsuwano y las almejas del lago Shinji; Tottori es célebre por sus peras nijisseiki, su wagyu con denominación Olein 55 y el mayor consumo de curry per cápita de Japón. Yamaguchi es conocida por el fugu (pez globo), preparado por cocineros con licencia especial dada su toxicidad si no se manipula correctamente, además del wagyu Ato y el sake Dassai de Iwakuni.`,
    mustSeeCities: ["hiroshima", "miyajima", "kurashiki", "tottori", "matsue"],
  },

  shikoku: {
    region: "shikoku",
    intro:
      "Shikoku es la más pequeña de las cuatro islas principales de Japón: cuna del peregrinaje de los 88 templos, con paisajes de valle remoto, arte contemporáneo en pequeñas islas y una de las mayores concentraciones de restaurantes de udon del país.",
    content: `## Por qué visitar Shikoku

El Shikoku Henro, la peregrinación a 88 templos budistas repartidos por toda la isla y asociada al monje Kobo Daishi (Kukai), define buena parte de la identidad de la región, aunque no hace falta completarla para disfrutar de sus templos y paisajes por separado. Shikoku, "cuatro provincias" en japonés, es la menos visitada de las cuatro islas principales de Japón y reúne cuatro de los doce castillos originales que sobreviven en el país: Matsuyama, Kochi, Marugame y Uwajima. Naoshima ha convertido una pequeña isla de pescadores en referente internacional de arte contemporáneo gracias al Setouchi Triennale, la trienal de arte del mar Interior de Seto que también se extiende a Teshima y Shodoshima (próxima edición en 2028), mientras el valle de Iya, con sus puentes colgantes de enredaderas, es uno de los rincones más remotos del país. Los remolinos marinos de Naruto y el onsen milenario de Dogo, en Matsuyama, completan un perfil muy variado para una isla de este tamaño.

## Cuándo ir

La primavera y el otoño son las mejores estaciones para el peregrinaje y el senderismo por el valle de Iya, con temperaturas suaves. El verano trae el calendario festivo más intenso de la isla: el Awa Odori de Tokushima (12-15 de agosto), uno de los grandes festivales de danza de Japón; el Yosakoi Matsuri de Kochi (9-12 de agosto); y el Sanuki Takamatsu Matsuri (12-14 de agosto). El otoño añade el Saijo Matsuri (mediados de octubre) y el Niihama Taiko Matsuri (16-18 de octubre), uno de los tres grandes festivales de "lucha" de carrozas de Japón. El invierno es suave en la costa pero puede nevar en el interior montañoso, incluido el propio valle de Iya.

## Cómo moverse por la isla

Shikoku tiene cuatro aeropuertos (Takamatsu, Matsuyama, Kochi Ryoma y Tokushima Awaodori) y un único cruce ferroviario desde Honshu, el puente Seto Ohashi. La Shimanami Kaido, la ruta ciclista de 70 km entre Imabari y Onomichi sobre una cadena de puentes, es una de las formas más singulares de entrar o salir de la isla.

## Gastronomía de la región

Kagawa es informalmente conocida como "la prefectura del udon", con una concentración de locales especializados en este fideo más alta que en cualquier otra parte de Japón, además de su tai somen (fideos con besugo, típicos en bodas) y el aceite de oliva de Shodoshima. Kochi es célebre por el katsuo no tataki, bonito sellado a la llama sobre paja, por el banquete comunal sawachi ryori y por sus cítricos yuzu y buntan. Ehime es una de las grandes regiones productoras de cítricos del país —mikan, iyokan, beni madonna, setoka—, con el taimeshi (arroz con besugo) y el yakitori a la plancha de Imabari como platos propios. Tokushima aporta un ramen de tonkotsu-shoyu oscuro, la soba más gruesa del valle de Iya y el cítrico sudachi.`,
    mustSeeCities: ["takamatsu", "naoshima", "matsuyama", "tokushima", "kochi"],
  },

  "kyushu-okinawa": {
    region: "kyushu-okinawa",
    intro:
      "Kyushu y Okinawa forman el extremo suroeste de Japón: volcanes activos y onsen en Kyushu, y un archipiélago subtropical en Okinawa con playas de coral y una cultura propia, la ryukyu, distinta al resto del país.",
    content: `## Por qué visitar Kyushu y Okinawa

Kyushu combina volcanes todavía activos —la gran caldera de Aso, la mayor del mundo activa, y el Sakurajima frente a Kagoshima— con la mayor concentración de onsen de todo Japón, encabezada por Beppu, Yufuin y Kurokawa. La isla, cuyo nombre significa "nueve provincias", reúne hoy 7 prefecturas (Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki y Kagoshima) y fue históricamente la puerta de entrada del cristianismo y de la influencia china y coreana en Japón, además del origen del dominio Satsuma, clave en la Restauración Meiji; el yacimiento de Yoshinogari conserva restos del periodo Yayoi. Nagasaki aporta esa historia de apertura al comercio exterior única en el país, mientras Fukuoka es la gran ciudad de referencia del norte de la isla. Más al sur, Okinawa deja de parecerse al resto de Japón: fue el Reino de Ryukyu, independiente hasta su anexión en 1879 y bajo control estadounidense hasta 1972, y hoy conserva una cultura propia —lengua, danzas eisa, instrumento sanshin, textiles bingata, cerámica yachimun— repartida entre las islas Okinawa Shoto (con Naha), Miyako Retto y Yaeyama Retto, esta última hasta Yonaguni, el punto más occidental de todo Japón.

## Festivales con fecha

En Kyushu, el calendario incluye el Hakata Dontaku Matsuri (3-4 de mayo), el Hakata Gion Yamakasa (primeras dos semanas de julio), el Nagasaki Kunchi (7-9 de octubre), el Karatsu Kunchi (2-4 de noviembre) y el Saga International Balloon Fiesta (principios de noviembre). En Okinawa destacan el Naha Hari, unas carreras de barcos dragón (3-5 de mayo), el Okinawa Zento Eisa Festival (12-14 de septiembre), el Naha Otsunahiki —el mayor tira y afloja de cuerda del mundo, con 200 metros y 40 toneladas, el segundo domingo de octubre— y el Shuri Castle Festival (2-4 de noviembre), que recrea la procesión real del antiguo reino Ryukyu.

## Cuándo ir

En Kyushu, la primavera y el otoño ofrecen el clima más agradable, similar al resto de Japón. En Okinawa conviene evitar la temporada de tifones, más probable entre agosto y septiembre; abril-junio y octubre-noviembre son las ventanas más estables para playa y buceo, aunque el clima subtropical permite bañarse buena parte del año — los cerezos de la variedad Kanhi, únicos en su temprana floración de enero-febrero, son otro reclamo propio de la isla.

## Gastronomía de la región

Fukuoka (Hakata) es sinónimo del ramen tonkotsu, con caldo de hueso de cerdo cocido durante horas, además del gyoza tetsunabe y el mentaiko; existen variantes propias también en Kurume, Kumamoto, Miyazaki y Kagoshima. Nagasaki aporta el champon, el sara udon y una castella de influencia portuguesa; Kumamoto, el basashi (sashimi de caballo) y el karashi renkon; Miyazaki, el pollo namban y el hiyajiru; y Kagoshima es célebre por su cerdo kurobuta y su shochu de boniato. Okinawa tiene una cocina claramente diferenciada del resto de Japón, con el goya champuru, su propio soba de trigo (no de alforfón), el rafute (panceta cocinada en awamori, un licor destilado con más de 500 años de historia), el taco rice —una fusión de los años 80 nacida para el personal militar estadounidense— y las uvas de mar (umibudo) como platos más representativos.`,
    mustSeeCities: ["fukuoka", "nagasaki", "beppu", "kumamoto", "kagoshima", "naha"],
  },
};

export const REGION_GUIDE_SLUGS = Object.keys(
  REGION_GUIDES,
) as RegionSlug[];
