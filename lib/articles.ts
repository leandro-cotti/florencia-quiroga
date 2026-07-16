export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type Source = { label: string; url: string };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  published: string;
  updated: string;
  readingMinutes: number;
  tags: string[];
  blocks: Block[];
  sources: Source[];
};

export const articles: Article[] = [
  {
    slug: "bpm-poes-haccp-industria-alimentaria-argentina",
    title: "BPM, POES y HACCP en la industria alimentaria argentina: qué son y qué exige la ley",
    metaTitle: "BPM, POES y HACCP en la industria alimentaria argentina",
    description:
      "Guía sobre Buenas Prácticas de Manufactura (BPM), POES y HACCP en la industria alimentaria argentina: qué son, en qué se diferencian y qué establece el Código Alimentario Argentino, la Res. GMC 80/96 y la Res. SENASA 233/98.",
    excerpt:
      "Tres siglas que aparecen en casi toda búsqueda laboral de la industria alimentaria. Qué significan, en qué se diferencian y qué dice realmente la normativa argentina sobre cada una.",
    published: "2026-07-16",
    updated: "2026-07-16",
    readingMinutes: 7,
    tags: ["BPM", "POES", "HACCP", "Normativa", "Industria alimentaria"],
    blocks: [
      {
        type: "p",
        text: "Si mirás avisos de trabajo en la industria alimentaria argentina, tres siglas se repiten: BPM, POES y HACCP. Se mencionan tan seguido y tan juntas que es fácil suponer que son lo mismo, o que las tres son igual de obligatorias. No lo son. Cada una cubre un alcance distinto y tiene un respaldo normativo diferente, y entender esa diferencia es parte del trabajo diario de quien hace control de calidad en planta.",
      },
      {
        type: "p",
        text: "Este artículo ordena las tres, con la normativa argentina concreta que las respalda.",
      },
      { type: "h2", text: "BPM: las Buenas Prácticas de Manufactura" },
      {
        type: "p",
        text: "Las BPM son el piso. Son el conjunto de condiciones higiénico-sanitarias y prácticas de elaboración que un establecimiento tiene que cumplir para producir alimentos aptos para el consumo. Cubren todo el entorno productivo: el estado de las instalaciones, la higiene y la capacitación del personal, el manejo de materias primas, el control de los procesos, la documentación y la trazabilidad.",
      },
      {
        type: "p",
        text: "En Argentina, el marco de referencia es el Reglamento Técnico MERCOSUR sobre las condiciones higiénico-sanitarias y de buenas prácticas de elaboración para establecimientos elaboradores/industrializadores de alimentos, aprobado por la Resolución GMC N° 80/96 del Grupo Mercado Común. Esa resolución fue incorporada al Código Alimentario Argentino (CAA) por la Resolución MSyAS N° 587/97, del 1 de septiembre de 1997.",
      },
      {
        type: "p",
        text: "Esa incorporación es lo que las vuelve exigibles: las BPM no son una recomendación ni un sello opcional, sino la línea de base que el CAA exige a los establecimientos que elaboran e industrializan alimentos. Un detalle que suele pasarse por alto: la Res. GMC 80/96 establece expresamente que la capacitación del personal en manipulación higiénica de los alimentos y en higiene personal es responsabilidad de la dirección del establecimiento, no una carga individual del operario.",
      },
      {
        type: "callout",
        title: "En la práctica",
        text: "Las BPM son el marco general. Casi todo lo que se registra en una planta de alimentos —controles de proceso, verificación de materias primas, higiene de equipos, capacitación— existe porque las BPM lo requieren.",
      },
      { type: "h2", text: "POES: el saneamiento, escrito y verificable" },
      {
        type: "p",
        text: "POES significa Procedimientos Operativos Estandarizados de Saneamiento. Si las BPM dicen «el establecimiento debe estar limpio», los POES son el documento que responde: limpio cómo, con qué producto, a qué concentración, cada cuánto, quién lo hace y quién lo verifica. Son procedimientos escritos que describen las tareas de saneamiento y que se aplican antes, durante y después de las operaciones de producción.",
      },
      {
        type: "p",
        text: "La referencia normativa más citada es la Resolución SENASA N° 233/98, del 27 de febrero de 1998, que establece que los establecimientos alcanzados están obligados a desarrollar POES que describan los métodos diarios de saneamiento. Vale una precisión importante que muchos resúmenes se saltean: esa resolución se dictó en el ámbito del SENASA y se incorporó como capítulo del reglamento de inspección de productos de origen animal, de modo que su alcance directo son los establecimientos bajo jurisdicción del SENASA —donde se faenan animales y se elaboran, fraccionan o depositan alimentos de ese origen—. El concepto de saneamiento documentado, sin embargo, se aplica en toda la industria como parte de las BPM.",
      },
      {
        type: "p",
        text: "La resolución no se conforma con que el procedimiento exista: exige que esté firmado y fechado por la dirección antes de empezar a aplicarlo y cada vez que se lo modifique, que un responsable verifique su aplicación, y que se lleven registros diarios que documenten tanto la ejecución como cualquier acción correctiva. Esos registros tienen que estar disponibles cuando la autoridad sanitaria los pida.",
      },
      {
        type: "p",
        text: "Sobre el contenido, es frecuente encontrar la referencia a «las ocho áreas» del saneamiento: seguridad del agua, limpieza de superficies en contacto con el alimento, prevención de la contaminación cruzada, higiene de los empleados, prevención de la contaminación por agentes externos, manejo de agentes tóxicos, salud de los empleados y control de plagas y vectores. Conviene saber de dónde viene ese listado: es el esquema de los SSOP definido por la normativa de la FDA de los Estados Unidos, que se adoptó ampliamente como guía de referencia. Es un marco útil y muy usado, pero no es una enumeración textual de la ley argentina.",
      },
      { type: "h2", text: "HACCP: el análisis de peligros" },
      {
        type: "p",
        text: "HACCP (Análisis de Peligros y Puntos Críticos de Control) es otra cosa. No es un manual de limpieza ni un piso de condiciones: es un sistema de base científica que identifica peligros específicos de un proceso concreto y define medidas de control en los puntos donde ese peligro se puede prevenir, eliminar o reducir. Su lógica es prevenir la contaminación a lo largo del proceso en vez de detectarla analizando el producto terminado.",
      },
      {
        type: "p",
        text: "Acá está la diferencia que más se malinterpreta. Las directrices para la aplicación del HACCP se incorporaron al Capítulo II del CAA como Artículo 18 bis, mediante la Resolución Conjunta 340/2008, del 24 de abril de 2008. Y el propio artículo delimita su alcance con una frase que conviene leer textual:",
      },
      {
        type: "callout",
        title: "Artículo 18 bis, CAA",
        text: "«Las Directrices serán de cumplimiento obligatorio en la elaboración de todos aquellos productos para los cuales el presente Código exija la implementación de un Sistema HACCP. La implementación de este Sistema será facultativo para los demás productos.»",
      },
      {
        type: "p",
        text: "Es decir: el HACCP es obligatorio solo donde el Código lo exige expresamente para un producto determinado, y facultativo para el resto. Un ejemplo concreto de exigencia expresa es el Artículo 1346 bis, que lo impone a los establecimientos que elaboran, industrializan o fraccionan alimentos en polvo para lactantes de las categorías indicadas en el Artículo 1353.",
      },
      {
        type: "p",
        text: "Que sea facultativo en muchos rubros no significa que sea infrecuente. Buena parte de la industria lo implementa igual, porque los clientes, las certificaciones privadas y los mercados de exportación suelen exigirlo por contrato aunque el CAA no lo obligue.",
      },
      { type: "h2", text: "Cómo se relacionan las tres" },
      {
        type: "p",
        text: "El orden importa, y no es arbitrario: BPM y POES son los prerrequisitos del HACCP. Un sistema HACCP montado sobre una planta que no cumple las BPM no funciona, porque terminaría marcando como puntos críticos cosas que en realidad son fallas básicas de higiene. Primero se ordena el piso, después se analizan los peligros específicos del proceso.",
      },
      {
        type: "table",
        head: ["", "BPM", "POES", "HACCP"],
        rows: [
          [
            "Qué cubre",
            "Condiciones higiénico-sanitarias y prácticas de elaboración de todo el establecimiento",
            "Procedimientos de saneamiento documentados",
            "Peligros específicos de un proceso y sus puntos críticos de control",
          ],
          [
            "Alcance",
            "Todo el entorno productivo",
            "Limpieza y desinfección, antes, durante y después de producir",
            "El proceso puntual analizado",
          ],
          [
            "Norma de referencia",
            "Res. GMC 80/96, incorporada al CAA por Res. MSyAS 587/97",
            "Res. SENASA 233/98 (ámbito SENASA)",
            "Art. 18 bis CAA (Res. Conjunta 340/2008)",
          ],
          [
            "Exigibilidad",
            "Piso obligatorio para elaboradores de alimentos",
            "Obligatorio en los establecimientos alcanzados",
            "Obligatorio solo donde el CAA lo exige; facultativo en el resto",
          ],
          ["Rol", "Prerrequisito", "Prerrequisito", "Sistema construido sobre los anteriores"],
        ],
      },
      { type: "h2", text: "Qué significa esto para quien trabaja en planta" },
      {
        type: "p",
        text: "Para un puesto de control de calidad, esto deja de ser teoría bastante rápido. Significa que cada control en proceso, cada muestreo de materia prima, cada planilla de higienización y cada registro de variables tiene una razón normativa detrás. Y significa que el registro no es burocracia: en el esquema legal, un control que se hizo pero no se registró es, a los fines de una inspección, un control que no existe.",
      },
      {
        type: "p",
        text: "Entender de dónde viene cada requisito cambia la forma de trabajar. No es lo mismo completar una planilla porque alguien lo pidió que saber qué peligro está previniendo esa planilla.",
      },
    ],
    sources: [
      {
        label: "Resolución MSyAS 587/1997 — incorporación de resoluciones GMC al CAA (Argentina.gob.ar)",
        url: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-587-1997-50844",
      },
      {
        label: "Res. GMC N° 080/96 — Reglamento Técnico MERCOSUR de BPM (Alimentos Argentinos, MAGyP)",
        url: "https://alimentosargentinos.magyp.gob.ar/HomeAlimentos/saiea/articulos/8096.pdf",
      },
      {
        label: "Resolución SENASA 233/98 — POES (InfoLeg)",
        url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/45000-49999/49663/norma.htm",
      },
      {
        label: "Resolución Conjunta 340/2008 — Artículo 18 bis CAA, directrices HACCP (Argentina.gob.ar)",
        url: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-340-2008-140212/texto",
      },
      {
        label: "Código Alimentario Argentino, Capítulo II (ANMAT)",
        url: "https://www.argentina.gob.ar/sites/default/files/anmat-capitulo_ii_establecactualiz_2018-12.pdf",
      },
      {
        label: "POES — Procedimientos Operativos Estandarizados de Saneamiento (Alimentos Argentinos, MAGyP)",
        url: "https://alimentosargentinos.magyp.gob.ar/contenido/publicaciones/calidad/POES/POES_concepto_2002.pdf",
      },
    ],
  },
  {
    slug: "que-es-hplc-cromatografia-liquida-alta-resolucion",
    title: "Qué es el HPLC y cómo funciona: cromatografía líquida de alta resolución explicada",
    metaTitle: "Qué es el HPLC y cómo funciona: cromatografía líquida",
    description:
      "Cómo funciona el HPLC (cromatografía líquida de alta resolución): fase móvil y fase estacionaria, la columna, los detectores UV, y por qué es la técnica más usada en control de calidad de alimentos y farmacéutico.",
    excerpt:
      "Es el equipo que aparece en toda búsqueda de analista de laboratorio, y el que más intimida en una entrevista. Cómo separa una mezcla, qué mide realmente y por qué se usa tanto.",
    published: "2026-07-16",
    updated: "2026-07-16",
    readingMinutes: 6,
    tags: ["HPLC", "Cromatografía", "Laboratorio analítico", "Técnicas instrumentales"],
    blocks: [
      {
        type: "p",
        text: "HPLC aparece en casi todas las búsquedas de analista de laboratorio, y suele ser la primera pregunta técnica de una entrevista. La sigla viene del inglés High-Performance Liquid Chromatography, que en castellano se traduce como cromatografía líquida de alta resolución o de alta eficacia. Detrás del nombre hay una idea bastante intuitiva.",
      },
      { type: "h2", text: "El problema que resuelve" },
      {
        type: "p",
        text: "Una muestra real —un jugo, un comprimido, un extracto— no es una sustancia sola: es una mezcla. Si querés saber cuánta cafeína tiene una bebida, no alcanza con medir la muestra entera, porque todo lo demás que hay adentro interfiere. Primero hay que separar los componentes; recién después se puede medir cada uno.",
      },
      {
        type: "p",
        text: "Eso es lo que hace la cromatografía: separar los componentes de una mezcla aprovechando que cada uno interactúa de manera distinta con dos fases que no se mezclan entre sí.",
      },
      { type: "h2", text: "Las dos fases" },
      {
        type: "p",
        text: "Toda la técnica se apoya en el reparto de los analitos entre dos fases:",
      },
      {
        type: "ul",
        items: [
          "La fase estacionaria: está fija dentro de la columna. Suele ser sílice en partículas muy finas y de tamaño controlado con precisión, típicamente de 3 a 5 micrómetros.",
          "La fase móvil: es el líquido que se bombea a través de la columna y arrastra la muestra.",
        ],
      },
      {
        type: "p",
        text: "La muestra se inyecta en la fase móvil y recorre la columna. Los compuestos que tienen más afinidad con la fase estacionaria quedan retenidos más tiempo; los que tienen más afinidad con la fase móvil salen antes. Así, componentes que entraron juntos salen separados en el tiempo. Ese tiempo que tarda cada compuesto en salir —el tiempo de retención— es característico de ese compuesto en esas condiciones, y es lo que permite identificarlo.",
      },
      {
        type: "callout",
        title: "De dónde sale la «alta presión»",
        text: "Partículas de 3 a 5 µm dejan pasar el líquido con mucha dificultad. Para que la fase móvil atraviese la columna a una velocidad razonable hay que bombearla a presión elevada. De ahí que también se lo conozca como cromatografía líquida de alta presión: la presión no es el objetivo, es la consecuencia de usar partículas finas para lograr mejor separación.",
      },
      { type: "h2", text: "El detector: dónde aparece el número" },
      {
        type: "p",
        text: "Separar no alcanza; hay que ver qué salió y cuánto. Para eso, a la salida de la columna hay un detector. El más utilizado en HPLC es el basado en la absorción de radiación ultravioleta por parte del soluto: cuando un compuesto que absorbe en el UV pasa frente al detector, la señal sube y se registra un pico.",
      },
      {
        type: "p",
        text: "El resultado es un cromatograma: un gráfico de señal en función del tiempo, con un pico por cada compuesto separado. La posición del pico (el tiempo de retención) dice qué es; el área del pico es proporcional a cuánto hay. Para convertir esa área en una concentración se compara contra estándares de concentración conocida —la curva de calibración—.",
      },
      { type: "h2", text: "Por qué se usa tanto" },
      {
        type: "p",
        text: "Existe otra técnica cromatográfica muy común, la cromatografía gaseosa (GC), y la elección entre una y otra no es de gusto. La GC requiere que el compuesto se pueda volatilizar sin descomponerse. Muchísimos analitos de interés no cumplen eso: son no volátiles, térmicamente lábiles —se degradan con el calor— o demasiado complejos.",
      },
      {
        type: "p",
        text: "Ahí entra el HPLC: al trabajar en fase líquida y sin necesidad de vaporizar la muestra, alcanza compuestos que la GC no puede analizar. Por eso es la técnica dominante en control de calidad farmacéutico, análisis de alimentos y laboratorios de investigación, y también se usa en cosmética y en análisis medioambiental.",
      },
      { type: "h2", text: "Qué implica manejarlo en un laboratorio" },
      {
        type: "p",
        text: "En la práctica, «saber HPLC» es menos apretar un botón y más una cadena de cuidados donde casi todo el error posible ocurre antes de que el equipo mida:",
      },
      {
        type: "ul",
        items: [
          "Preparar la fase móvil correctamente y filtrarla y desgasificarla, porque una burbuja arruina la corrida.",
          "Preparar la muestra: filtrarla, diluirla y llevarla al rango de trabajo del método.",
          "Preparar estándares y construir la curva de calibración.",
          "Cuidar la columna, que es el componente caro y el que más sufre una muestra mal filtrada.",
          "Interpretar el cromatograma: reconocer un pico deformado, una línea de base que se corre o una separación insuficiente.",
          "Registrar todo con trazabilidad, para que el resultado sea defendible frente a una auditoría.",
        ],
      },
      {
        type: "p",
        text: "El equipo entrega un número siempre. El trabajo analítico consiste en saber si ese número significa algo.",
      },
    ],
    sources: [
      {
        label: "Cromatografía líquida de alta resolución (HPLC) — SEDICI, Universidad Nacional de La Plata",
        url: "http://sedici.unlp.edu.ar/bitstream/handle/10915/150656/Documento_completo.pdf?sequence=1",
      },
      {
        label: "Cromatografía líquida de alta eficacia — Wikipedia (fundamentos y fases)",
        url: "https://es.wikipedia.org/wiki/Cromatograf%C3%ADa_l%C3%ADquida_de_alta_eficacia",
      },
      {
        label: "Cromatografía líquida de alta resolución — Universidad de Granada (material de cátedra)",
        url: "http://www.ugr.es/~clinares/webexp/fundamentos/seminario%2010.doc",
      },
      {
        label: "¿Qué es la HPLC? — Tentamus (aplicaciones en alimentos y farmacéutica)",
        url: "https://www.tentamus.es/que-es-la-hplc/",
      },
    ],
  },
  {
    slug: "analisis-fisicoquimicos-alimentos-ph-densidad-brix",
    title: "Análisis fisicoquímicos en alimentos: qué miden realmente el pH, la densidad y los °Brix",
    metaTitle: "Análisis fisicoquímicos en alimentos: pH, densidad y °Brix",
    description:
      "Qué miden el pH, la densidad y los grados Brix en el control de calidad de alimentos, cómo se determinan y por qué son los parámetros más registrados en planta. Incluye el fundamento de la espectrofotometría UV-Vis.",
    excerpt:
      "Son los controles más rutinarios de una planta de alimentos, y por eso los más subestimados. Qué información entrega cada uno y qué decisión permite tomar.",
    published: "2026-07-16",
    updated: "2026-07-16",
    readingMinutes: 6,
    tags: ["Análisis fisicoquímicos", "Control de calidad", "pH", "°Brix", "UV-Vis"],
    blocks: [
      {
        type: "p",
        text: "En una planta de alimentos, los análisis que más veces se hacen por día no son los instrumentales sofisticados: son pH, densidad y °Brix. Son rápidos, baratos y rutinarios, y justamente por eso se subestiman. Cada uno responde una pregunta distinta sobre el producto, y de esa respuesta suele depender que un lote siga adelante o se detenga.",
      },
      { type: "h2", text: "pH: cuán ácido es, y por qué importa tanto" },
      {
        type: "p",
        text: "El pH mide la acidez o alcalinidad de una solución. En alimentos no es un dato descriptivo: es un parámetro de seguridad. La mayoría de los microorganismos tiene un rango de pH en el que puede desarrollarse, y por debajo de cierto valor ese desarrollo se frena. Por eso el pH aparece en tantos criterios de conservación: un producto suficientemente ácido es un ambiente hostil para buena parte de la flora que lo alteraría.",
      },
      {
        type: "p",
        text: "Además de la seguridad, el pH condiciona el sabor, el color, la textura y la estabilidad de un montón de productos. En un proceso fermentativo, es la variable que permite seguir la fermentación en tiempo real: a medida que los microorganismos producen ácidos, el pH baja, y esa curva describe si la fermentación va como debería.",
      },
      {
        type: "p",
        text: "Se mide con un pHmetro, y la medición vale lo que vale su calibración: el electrodo se calibra con soluciones buffer de pH conocido antes de usarlo. Un pHmetro sin calibrar entrega un número igual, y ese es exactamente el riesgo.",
      },
      { type: "h2", text: "Densidad: el control que detecta lo que no se ve" },
      {
        type: "p",
        text: "La densidad es la masa por unidad de volumen. Su valor en control de calidad es que funciona como una huella rápida: un producto bien elaborado tiene una densidad dentro de un rango esperado, y una desviación indica que algo cambió —una dilución no prevista, una concentración distinta, un error de formulación—.",
      },
      {
        type: "p",
        text: "Es un control barato y veloz que muchas veces es la primera señal de un problema. No dice qué pasó, pero dice que algo pasó, y eso alcanza para frenar y revisar antes de seguir procesando.",
      },
      { type: "h2", text: "°Brix: los sólidos solubles" },
      {
        type: "p",
        text: "Los grados Brix (°Bx) expresan la cantidad de sólidos solubles disueltos en una solución acuosa. La escala está definida sobre la sacarosa: 1 °Bx corresponde a 1 gramo de sacarosa por cada 100 gramos de solución. Una solución de 25 °Bx contiene 25 g de azúcar por cada 100 g de líquido.",
      },
      {
        type: "p",
        text: "Se mide con un refractómetro, que se apoya en un principio elegante: la luz se desvía al atravesar un líquido, y el ángulo de esa desviación depende de la concentración de sólidos disueltos. A mayor contenido de azúcar, mayor es el ángulo de refracción. El instrumento traduce ese ángulo a la escala Brix.",
      },
      {
        type: "callout",
        title: "Una precisión que conviene tener clara",
        text: "El refractómetro no mide azúcar: mide sólidos solubles totales, y los expresa en la escala de la sacarosa. Si en la muestra hay ácidos, sales u otros compuestos disueltos, también contribuyen a la lectura. En un jugo de fruta el °Bx se lee como azúcar porque el azúcar domina, pero decir que «mide el azúcar» es una simplificación que en una entrevista técnica conviene no hacer.",
      },
      {
        type: "p",
        text: "En la industria, los °Brix definen el punto de corte de concentraciones, la aceptación de materias primas y la consistencia entre lotes.",
      },
      { type: "h2", text: "Un escalón más: la espectrofotometría UV-Vis" },
      {
        type: "p",
        text: "Cuando hace falta cuantificar un compuesto puntual y no una propiedad global, aparece la espectrofotometría UV-Vis. Su fundamento es la ley de Beer-Lambert, que establece una relación lineal entre la absorbancia de una solución y la concentración del analito:",
      },
      {
        type: "callout",
        title: "Ley de Beer-Lambert: A = ε · b · c",
        text: "A es la absorbancia; ε el coeficiente de absortividad molar (característico del compuesto a esa longitud de onda); b el camino óptico que recorre la luz a través de la muestra, en cm; y c la concentración.",
      },
      {
        type: "p",
        text: "Como ε y b son conocidos o constantes, medir A permite despejar c. En la práctica no se calcula a mano: se miden estándares de concentración conocida, se traza absorbancia contra concentración —la curva de calibración— y se interpola la muestra.",
      },
      {
        type: "p",
        text: "La ley tiene un límite que es importante conocer: vale principalmente para soluciones diluidas. A concentraciones altas aparecen desviaciones de la linealidad por dispersión de la luz, agregación de moléculas y cambios en el medio. Por eso las muestras concentradas se diluyen hasta caer dentro del rango lineal del método, en lugar de leerse directamente.",
      },
      { type: "h2", text: "Lo que tienen en común" },
      {
        type: "p",
        text: "Ninguno de estos análisis es difícil de ejecutar. Lo que separa un dato confiable de un número decorativo es siempre lo mismo: equipos calibrados, muestreo representativo, trabajo dentro del rango válido del método y registro trazable. Un valor de pH tomado con un electrodo sin calibrar, o un °Bx de una muestra que no representa el lote, no son datos incompletos: son datos engañosos, que es bastante peor.",
      },
    ],
    sources: [
      {
        label: "Grado Brix — definición y escala (Wikipedia)",
        url: "https://es.wikipedia.org/wiki/Grado_Brix",
      },
      {
        label: "Grados Brix — Wiki-Elika, Fundación Vasca para la Seguridad Agroalimentaria",
        url: "https://wiki.elika.eus/index.php/Grados_Brix",
      },
      {
        label: "Espectrofotometría UV-Vis — Universidad Nacional Autónoma de México (material de cátedra)",
        url: "https://amyd.quimica.unam.mx/mod/resource/view.php?id=16984",
      },
      {
        label: "Espectrofotometría: espectros de absorción — Universidad de Córdoba",
        url: "https://www.uco.es/dptos/bioquimica-biol-mol/pdfs/08_ESPECTROFOTOMETRIA.pdf",
      },
    ],
  },
  {
    slug: "que-hace-una-tecnica-quimica-control-de-calidad-alimentos",
    title: "Qué hace una Técnica Universitaria en Química en control de calidad de alimentos",
    metaTitle: "Qué hace una Técnica Química en control de calidad",
    description:
      "En qué consiste el trabajo diario de una Técnica Universitaria en Química en control de calidad de alimentos: controles en proceso, muestreo, trazabilidad de lotes, análisis de laboratorio y registro bajo BPM y POES.",
    excerpt:
      "Entre el laboratorio y la línea de producción hay un rol que se nombra poco y se entiende menos. Cómo es un día real de control de calidad en una planta de alimentos.",
    published: "2026-07-16",
    updated: "2026-07-16",
    readingMinutes: 6,
    tags: ["Control de calidad", "Industria alimentaria", "Perfil profesional", "Laboratorio"],
    blocks: [
      {
        type: "p",
        text: "Cuando alguien dice que trabaja «en control de calidad» en una planta de alimentos, la imagen que suele aparecer es la de una persona probando el producto al final de la línea. Es casi lo contrario. El trabajo consiste en generar evidencia a lo largo de todo el proceso para que, cuando el producto llegue al final, ya se sepa si está bien.",
      },
      {
        type: "p",
        text: "Este es el recorrido de un día típico, y el porqué de cada tarea.",
      },
      { type: "h2", text: "Antes de producir: las materias primas" },
      {
        type: "p",
        text: "El control empieza antes de que arranque la línea. Cada materia prima que entra se verifica contra su especificación: documentación, estado, identificación y los parámetros que correspondan según el insumo. Un lote que no cumple se bloquea antes de entrar al proceso.",
      },
      {
        type: "p",
        text: "La lógica es económica además de sanitaria: un desvío detectado en la recepción cuesta una devolución; el mismo desvío detectado en el producto terminado cuesta un lote entero.",
      },
      { type: "h2", text: "Durante: los controles en proceso" },
      {
        type: "p",
        text: "Con la línea en marcha, el trabajo es de muestreo y medición periódica. Según el producto, esto incluye parámetros fisicoquímicos como pH, densidad o °Brix, control de temperaturas, verificación de pesos y llenado, y la observación de que el proceso se mantenga dentro de los rangos definidos.",
      },
      {
        type: "p",
        text: "La palabra clave acá es representatividad. Una muestra mal tomada —del lugar equivocado, en el momento equivocado— produce un resultado que describe muy bien esa muestra y no dice nada del lote. El muestreo es, en sí mismo, una técnica.",
      },
      {
        type: "p",
        text: "Cuando un parámetro se sale de rango, el rol deja de ser pasivo: hay que detectar el desvío, comunicarlo, documentarlo y participar de la acción correctiva. Ese es el momento en que el control de calidad realmente sirve para algo.",
      },
      { type: "h2", text: "Transversal: la trazabilidad" },
      {
        type: "p",
        text: "En paralelo a todo lo anterior corre la trazabilidad de lotes: el registro que permite reconstruir, para cualquier unidad de producto terminado, de qué materias primas salió, cuándo se produjo, en qué condiciones y con qué resultados de control.",
      },
      {
        type: "p",
        text: "Parece burocracia hasta el día en que hace falta. Si aparece un problema en el mercado, la trazabilidad es lo que determina si hay que retirar un lote específico o todo lo producido en un período indeterminado. La diferencia entre esas dos situaciones es enorme, y depende por completo de registros que alguien completó bien meses antes.",
      },
      { type: "h2", text: "El otro lado: la higiene de la planta" },
      {
        type: "p",
        text: "La higienización y sanitización de equipos también entra en el circuito, y no como tarea accesoria: es el terreno de los POES, los procedimientos escritos que describen cómo se sanea, con qué frecuencia y quién lo verifica. Ejecutarlos y registrar su cumplimiento —incluidas las acciones correctivas cuando algo falla— es parte del rol.",
      },
      {
        type: "p",
        text: "Todo esto se apoya en el marco de las Buenas Prácticas de Manufactura, que es el piso normativo que el Código Alimentario Argentino exige a los establecimientos elaboradores de alimentos.",
      },
      { type: "h2", text: "En el laboratorio" },
      {
        type: "p",
        text: "Según el tamaño de la empresa, el rol puede incluir además el trabajo analítico de laboratorio: preparación de reactivos, soluciones y estándares, determinaciones instrumentales, controles microbiológicos y calibración y verificación del instrumental.",
      },
      {
        type: "p",
        text: "Acá aparece la formación técnica más específica: HPLC, cromatografía gaseosa, espectrofotometría UV-Vis, titulaciones y gravimetrías. En plantas chicas, la misma persona hace los controles en línea y los análisis; en plantas grandes suelen ser áreas separadas.",
      },
      { type: "h2", text: "La habilidad que no figura en los avisos" },
      {
        type: "p",
        text: "Los avisos de búsqueda listan técnicas, normas y software. Pero la competencia que más pesa en el día a día es otra: sostener el criterio cuando hay presión de producción.",
      },
      {
        type: "p",
        text: "Un desvío detectado siempre aparece en el peor momento —con la línea corriendo y una entrega comprometida—. La función existe justamente para ese momento. Un control de calidad que solo confirma lo que producción quiere escuchar no está cumpliendo su rol; está generando papeles.",
      },
      {
        type: "p",
        text: "Por eso el perfil que se busca combina dos cosas que no siempre van juntas: rigurosidad técnica para que el dato sea confiable, y capacidad de comunicar un problema de manera que se resuelva en vez de escalar.",
      },
      { type: "h2", text: "El recorrido formativo" },
      {
        type: "p",
        text: "La Tecnicatura Universitaria en Química de la Universidad Nacional de Quilmes es una carrera de pregrado de tres años, estructurada en seis cuatrimestres, del Departamento de Ciencia y Tecnología. Su plan de estudios cuenta con aprobación del Ministerio de Educación de la Nación por Resolución N° 1634/19.",
      },
      {
        type: "p",
        text: "La formación cubre análisis químico, técnicas instrumentales, microbiología, control de calidad y buenas prácticas: exactamente el conjunto que este rol requiere, en la intersección entre el laboratorio analítico y la planta.",
      },
    ],
    sources: [
      {
        label: "Tecnicatura Universitaria en Química — Universidad Nacional de Quilmes",
        url: "https://www.unq.edu.ar/carrera/72-tecnicatura-universitaria-en-quimica/",
      },
      {
        label: "Tecnicatura Universitaria en Química — Departamento de Ciencia y Tecnología, UNQ",
        url: "https://dcyt.unq.edu.ar/?page_id=1032",
      },
      {
        label: "Resolución SENASA 233/98 — POES (InfoLeg)",
        url: "https://servicios.infoleg.gob.ar/infolegInternet/anexos/45000-49999/49663/norma.htm",
      },
      {
        label: "Código Alimentario Argentino (ANMAT)",
        url: "https://www.argentina.gob.ar/anmat/codigoalimentario",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
