const ROUTINE_DATA = [
  {
    id: "lunes",
    label: "LUNES",
    sub: "UPPER FUERZA",
    ejercicios: [
      {
        id: "press-banca",
        nombre: "PRESS BANCA",
        series: 4,
        repeticiones: "4 a 6",
        rir: "2",
        descanso: "180",
        descansoTxt: "2.5-3 min",
        como: ["Retrae escápulas y pies firmes en el suelo", "Baja controlado al pecho medio, codos 45°", "Presiona vertical sin rebotar, bloquea arriba"],
        errores: ["Arquear lumbar excesivo o rebotar barra", "Codos totalmente abiertos a 90°"]
      },
      {
        id: "remo-barra",
        nombre: "REMO BARRA",
        series: 4,
        repeticiones: "5 a 7",
        rir: "2",
        descanso: "150",
        descansoTxt: "2.5 min",
        como: ["Bisagra cadera, torso 30-45° estable", "Rema hacia ombligo bajo, barra pegada", "Aprieta dorsales 1s arriba, baja lento"],
        errores: ["Tirar con impulso de lumbar", "Encoger hombros hacia orejas"]
      },
      {
        id: "press-inclinado-manc",
        nombre: "PRESS INCLINADO MANCUERNAS",
        series: 3,
        repeticiones: "6 a 8",
        rir: "2",
        descanso: "120",
        descansoTxt: "2 min",
        como: ["Banco 30°, muñecas neutras arriba", "Baja hasta estiramiento pecho sin chocar", "Sube sin juntar mancuernas bruscamente"],
        errores: ["Banco demasiado vertical", "Arco dorsal inestable"]
      },
      {
        id: "jalon-neutro",
        nombre: "JALÓN NEUTRO",
        series: 3,
        repeticiones: "8 a 10",
        rir: "2",
        descanso: "120",
        descansoTxt: "2 min",
        como: ["Agarre neutro cerrado, pecho alto", "Tira codos hacia costillas, no hacia atrás", "Estira completo sin perder tensión"],
        errores: ["Inclinarse mucho hacia atrás", "Usar solo bíceps sin deprimir escápulas"]
      },
      {
        id: "elevacion-lateral",
        nombre: "ELEVACIÓN LATERAL",
        series: 2,
        repeticiones: "12 a 15",
        rir: "1-2",
        descanso: "75",
        descansoTxt: "75s",
        como: ["Mancuernas a lados, codo semi flexionado", "Eleva hasta altura hombro liderando codo", "Baja 2s sin balanceo"],
        errores: ["Usar trapecio para subir", "Balancear tronco para impulso"]
      }
    ]
  },
  {
    id: "martes",
    label: "MARTES",
    sub: "LOWER FUERZA",
    ejercicios: [
      {
        id: "sentadilla",
        nombre: "SENTADILLA",
        series: 4,
        repeticiones: "4 a 6",
        rir: "2",
        descanso: "180",
        descansoTxt: "3 min",
        como: ["Barra media-trapecio, pies ancho hombros", "Rodillas hacia afuera, rompe paralelo", "Sube empujando suelo, cadera y hombros a la vez"],
        errores: ["Talones se levantan o rodillas colapsan dentro", "Perder tensión lumbar abajo"]
      },
      {
        id: "rdl",
        nombre: "RDL",
        series: 3,
        repeticiones: "6 a 8",
        rir: "2",
        descanso: "150",
        descansoTxt: "2.5 min",
        como: ["Barra pegada a piernas, bisagra profunda", "Espalda neutra, glúteos atrás hasta estiramiento", "Sube empujando cadera adelante"],
        errores: ["Flexionar rodillas como sentadilla", "Redondear espalda baja"]
      },
      {
        id: "prensa-45",
        nombre: "PRENSA 45°",
        series: 2,
        repeticiones: "8 a 10",
        rir: "2",
        descanso: "120",
        descansoTxt: "2 min",
        como: ["Pies medios plataforma, lumbar apoyada", "Baja controlado hasta 90° rodilla", "Empuja sin bloquear rodillas violento"],
        errores: ["Glúteo se despega abajo", "Bajar muy corto por ego"]
      },
      {
        id: "curl-femoral-tumbado",
        nombre: "CURL FEMORAL TUMBADO",
        series: 3,
        repeticiones: "8 a 10",
        rir: "1-2",
        descanso: "90",
        descansoTxt: "90s",
        como: ["Cadera pegada al banco, agarre firme", "Flexiona hasta tope sin levantar cadera", "Baja lento 2s"],
        errores: ["Elevar cadera para trampear", "Rango parcial constante"]
      },
      {
        id: "gemelo-pie",
        nombre: "GEMELO DE PIE",
        series: 4,
        repeticiones: "8 a 12",
        rir: "1",
        descanso: "90",
        descansoTxt: "90s",
        como: ["Apoyo antepié, estira abajo completo", "Pausa 1s arriba contrayendo fuerte", "Rodilla extendida sin bloqueo"],
        errores: ["Rebotar sin control", "No estirar abajo"]
      }
    ]
  },
  {
    id: "jueves",
    label: "JUEVES",
    sub: "UPPER HIPERTROFIA",
    ejercicios: [
      {
        id: "press-militar",
        nombre: "PRESS MILITAR",
        series: 3,
        repeticiones: "6 a 8",
        rir: "2",
        descanso: "120",
        descansoTxt: "2 min",
        como: ["Glúteo apretado, costillas abajo", "Barra de clavícula a sobre cabeza recto", "Cabeza pasa al frente al final"],
        errores: ["Arquear lumbar excesivo", "Barra se va muy al frente"]
      },
      {
        id: "remo-polea",
        nombre: "REMO POLEA",
        series: 3,
        repeticiones: "10 a 12",
        rir: "1-2",
        descanso: "90",
        descansoTxt: "90s",
        como: ["Torso vertical, agarre medio", "Codos atrás, pausa 1s contra abdomen", "Estira dorsal sin encorvar"],
        errores: ["Jalar con impulso de tronco", "No retraer escápula"]
      },
      {
        id: "fondos",
        nombre: "FONDOS",
        series: 3,
        repeticiones: "8 a 10",
        rir: "2",
        descanso: "120",
        descansoTxt: "2 min",
        como: ["Hombros deprimidos, leve inclinación", "Baja hasta 90° codo, pecho estirado", "Sube bloqueando sin encoger"],
        errores: ["Hombros hacia orejas", "Rango muy corto"]
      },
      {
        id: "curl-inclinado",
        nombre: "CURL INCLINADO",
        series: 3,
        repeticiones: "10 a 12",
        rir: "1-2",
        descanso: "90",
        descansoTxt: "90s",
        como: ["Banco 60°, hombros atrás", "Curl sin mover hombro, supina completo", "Baja lento estirando bíceps"],
        errores: ["Balancear mancuerna con hombro", "No extender abajo"]
      },
      {
        id: "pajaros-maquina",
        nombre: "PÁJAROS MÁQUINA",
        series: 3,
        repeticiones: "12 a 15",
        rir: "1",
        descanso: "60",
        descansoTxt: "60s",
        como: ["Pecho apoyado, agarre neutro", "Abre codos atrás hasta línea hombro", "Aprieta deltoide posterior arriba"],
        errores: ["Usar trapecio superior", "Rango excesivo hiperextendiendo"]
      },
      {
        id: "face-pull",
        nombre: "FACE PULL",
        series: 2,
        repeticiones: "15 a 20",
        rir: "2",
        descanso: "60",
        descansoTxt: "60s",
        como: ["Polea alta, cuerda a cara", "Codos altos, rota externo al final", "Pausa 1s apretando"],
        errores: ["Tirar hacia pecho bajo", "Codos bajos tipo remo"]
      }
    ]
  },
  {
    id: "viernes",
    label: "VIERNES",
    sub: "LOWER HIPERTROFIA",
    ejercicios: [
      {
        id: "hack-squat",
        nombre: "HACK SQUAT",
        series: 3,
        repeticiones: "8 a 10",
        rir: "2",
        descanso: "150",
        descansoTxt: "2.5 min",
        como: ["Espalda pegada, pies medio-altos", "Baja profundo controlado", "Empuja con talón sin despegar lumbar"],
        errores: ["Rodillas dentro o talones arriba", "Descenso a medias"]
      },
      {
        id: "hip-thrust",
        nombre: "HIP THRUST",
        series: 3,
        repeticiones: "8 a 10",
        rir: "1-2",
        descanso: "120",
        descansoTxt: "2 min",
        como: ["Escápulas en banco, barbilla neutra", "Sube cadera hasta línea rodilla-hombro", "Aprieta glúteo 1s arriba"],
        errores: ["Hiperextender lumbar arriba", "Pies muy lejos/cerca"]
      },
      {
        id: "bulgara",
        nombre: "ZANCADA BÚLGARA",
        series: 2,
        repeticiones: "10 a 12 por pierna",
        rir: "2",
        descanso: "90",
        descansoTxt: "90s",
        como: ["Pie trasero en banco, tronco recto", "Baja rodilla trasera casi al suelo", "Sube con pierna delantera sin impulso"],
        errores: ["Tronco se inclina excesivo", "Rodilla delantera colapsa dentro"]
      },
      {
        id: "curl-femoral-sentado",
        nombre: "CURL FEMORAL SENTADO",
        series: 2,
        repeticiones: "12 a 15",
        rir: "1",
        descanso: "75",
        descansoTxt: "75s",
        como: ["Ajuste rodilla alineada eje máquina", "Flexiona completo sin levantar muslo", "Controla excéntrica"],
        errores: ["Levantar glúteo del asiento", "Pesos con inercia"]
      },
      {
        id: "ext-cuadriceps",
        nombre: "ENLACE CUÁDRICEPS",
        series: 2,
        repeticiones: "12 a 15",
        rir: "1",
        descanso: "60",
        descansoTxt: "60s",
        como: ["Respaldo firme, punta pie neutra", "Extiende hasta casi bloqueo controlado", "Baja 2s sin dejar caer"],
        errores: ["Arrancar con tirón de cadera", "Dejar caer el peso en la bajada"]
      }
    ]
  }
];
