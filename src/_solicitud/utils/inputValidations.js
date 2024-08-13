const questions = [
  "Motivos por los cuales deseas adoptar",
  "¿Has tenido perros/gatos antes? En caso de que si, ¿Qué paso con éstos?",
  "¿Si tuvieras que cambiar de domicilio que pasaría con la mascota?",
  "¿En dónde dormirá el animal? Interior/Exterior/Casita/Cama",
  "¿Cuánto tiempo pasará sin compañía?",
  "¿Cuánto tiempo planeas dedicarle para paseos y juegos?",
  "¿Cómo reaccionarías si rompiera algún objeto tuyo?",
  "¿Cuánto dinero consideras utilizar para cubrir sus gastos?",
  "Si él creciera más de lo que esperas, ¿Qué harías?"
];

const questionSet = {
  name: '',
  label: '',
  type: 'text',
  id: 'name',
  validation: {
    required: {
      value: true,
      message: 'Requerido',
    },
    maxLength: {
      value: 300,
      message: 'Máximo 300 carácteres',
    },
    minLength: {
      value: 50,
      message: "Minimo 50 carácteres"
    }
  },
}

export let question = [];
for(let i=0; i<questions.length; i++) {
  let questionSetCopy = Object.assign({},questionSet);
  questionSetCopy.name = questions[i];
  questionSetCopy.label = questions[i];
  question[i] = questionSetCopy;
}

