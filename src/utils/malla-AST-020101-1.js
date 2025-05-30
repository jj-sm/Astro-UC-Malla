import {
  VRA,
  MAT,
  ELE,
  TTF,
  ELP,
  FIS,
  AST,
  FIZ,
  IIC,
  OFG,
  OPR,
  FIL,
  DEF,
  FON,
  MEF,
} from "./colors";

// C020101

export const ramos20221 = [
  {
    id: 1,
    code: "AST111",
    course: "Astro 0",
    semester: "I",
    year: 1,
    cc: AST,
    cr: 10,
    req: [],
    lab: false,
    yearly: 1,
  },
  {
    id: 2,
    code: "MAT1103",
    course: "Álgebra y Geometría",
    semester: "I",
    year: 1,
    cc: MAT,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },
  {
    id: 3,
    code: "MAT1610",
    course: "Cálculo I",
    semester: "I",
    year: 1,
    cc: MAT,
    cr: 10,
    req: [],
    lab: true,
    yearly: 0,
  },
  {
    id: 4,
    code: "IIC1103",
    course: "Introducción a la Programación",
    semester: "I",
    year: 1,
    cc: IIC,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },
  {
    id: 5,
    code: "VRA100C",
    course: "Examen de Comunicación Escrita",
    semester: "I",
    year: 1,
    cc: VRA,
    cr: 0,
    req: [],
    lab: false,
    yearly: 0,
  },
  {
    id: 6,
    code: "VRA2000",
    course: "English Test",
    semester: "I",
    year: 1,
    cc: VRA,
    cr: 0,
    req: [],
    lab: false,
    yearly: 0,
  },
  {
    id: 7,
    code: "VRA4000",
    course: "Integridad Académica en la UC",
    semester: "I",
    year: 1,
    cc: VRA,
    cr: 0,
    req: [],
    lab: false,
    yearly: 0,
  },

// 2nd Semester
  {
    id: 8,
    code: "FIZ121",
    course: "Mecánica Clásica I",
    semester: "II",
    year: 1,
    cc: FIZ,
    cr: 10,
    req: [],
    lab: true,
    yearly: 0,
  },
  {
    id: 9,
    code: "MAT1620",
    course: "Cálculo II",
    semester: "II",
    year: 1,
    cc: MAT,
    cr: 10,
    req: [{id: 3, cc: MAT }],
    lab: true,
    yearly: 0,
  },
  {
    id: 10,
    code: "MAT1203",
    course: "Álgebra Lineal",
    semester: "II",
    year: 1,
    cc: MAT,
    cr: 10,
    req: [],
    lab: true,
    yearly: 0,
  },
  {
    id: 11,
    code: "FIL2001",
    course: "Filosofía: ¿Para Qué?",
    semester: "II",
    year: 1,
    cc: FIL,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },
  // 2ND YEAR
  // 1ST SEMESTER
  {
    id: 12,
    code: "AST211",
    course: "Introducción al Análisis de Datos", //Intro al anali. datos AST211 Yr 2, sem 1, lab: false, yearly:1
    semester: "I",
    year: 2,
    cc: AST,
    cr: 10,
    req: [
      {id: 3, cc: MAT },
      {id: 4, cc: IIC },
      {id: 1, cc: AST }],
    lab: false,
    yearly: 1,
  },
  {
    id: 13,
    code: "FIZ210",
    course: "Termodinámica y Teoría Cinética",
    semester: "I",
    year: 2,
    cc: FIZ,
    cr: 10,
    req: [
      {id: 3, cc: MAT },
      {id: 9, cc: MAT },
      {id: 8, cc: FIZ }],
    lab: true,
    yearly: 0,
  },
  {
    id: 14,
    code: "MAT1630",
    course: "Cálculo III",
    semester: "I",
    year: 2,
    cc: MAT,
    cr: 10,
    req: [
      {id: 9, cc: MAT },
      {id: 10, cc: MAT }],
    lab: true,
    yearly: 0,
  },
  {
    id: 15,
    code: "MAT1640",
    course: "Ecuaciones Diferenciales",
    semester: "I",
    year: 2,
    cc: MAT,
    cr: 10,
    req: [
      {id: 9, cc: MAT },
      {id: 10, cc: MAT }],
    lab: true,
    yearly: 0,
  },
  {
    id: 16,
    code: "OFG",
    course: "Formación General",
    semester: "I",
    year: 2,
    cc: OFG,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },

  // 2nd Semester
  {
    id: 17,
    code: "AST221",
    course: "Taller de Astronomía",
    semester: "II",
    year: 2,
    cc: AST,
    cr: 10,
    req: [
      {id: 12, cc: AST }],
    lab: false,
    yearly: 2,
  },
  {
    id: 18,
    code: "FIZ0222",
    course: "Mecánica Clásica II",
    semester: "II",
    year: 2,
    cc: FIZ,
    cr: 10,
    req: [
      {id: 15, cc: MAT },
      {id: 8, cc: FIZ }],
    lab: false,
    yearly: 0,
  },
  {
    id: 19,
    code: "FIZ0221",
    course: "Electricidad y Magnetismo",
    semester: "II",
    year: 2,
    cc: FIZ,
    cr: 10,
    req: [
      {id: 14, cc: MAT },
      {id: 8, cc: FIZ }],
    lab: true,
    yearly: 0,
  },
  {
    id: 20,
    code: "FIZ0223",
    course: "Métodos de la Física Matemática I",
    semester: "II",
    year: 2,
    cc: FIZ,
    cr: 10,
    req: [
      {id: 14, cc: MAT }],
    lab: false,
    yearly: 2,
  },
  {
    id: 21,
    code: "OFG",
    course: "Formación General",
    semester: "II",
    year: 2,
    cc: OFG,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },
  // 3rd Year
  // 1st Semester
  {
    id: 22,
    code: "AST0311",
    course: "Astrofísica General",
    semester: "I",
    year: 3,
    cc: AST,
    cr: 10,
    req: [
      {id: 15, cc: MAT },
      {id: 17, cc: AST },
      {id: 13, cc: FIZ }],
    lab: false,
    yearly: 1,
  },
  {
    id: 23,
    code: "FIZ0312",
    course: "Ondas y Óptica",
    semester: "I",
    year: 3,
    cc: FIZ,
    cr: 10,
    req: [
      {id: 8, cc: FIZ },
      {id: 19, cc: FIZ }],
    lab: true,
    yearly: 0,
  },
  {
    id: 24,
    code: "FIZ311",
    course: "Física Moderna",
    semester: "I",
    year: 3,
    cc: FIZ,
    cr: 10,
    req: [
      {id: 15, cc: MAT },
      {id: 13, cc: FIZ },
      {id: 19, cc: FIZ }],
    lab: true,
    yearly: 0,
  },
  {
    id: 25,
    code: "FIZ0313",
    course: "Métodos de la Física Matemática II",
    semester: "I",
    year: 3,
    cc: FIZ,
    cr: 10,
    req: [
      {id: 15, cc: MAT }],
    lab: false,
    yearly: 1,
  },
  {
    id: 26,
    code: "OFG",
    course: "Formación General",
    semester: "I",
    year: 3,
    cc: OFG,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },
  // 2nd Semester
  {
    id: 27,
    code: "AST0321",
    course: "Astrofísica Estelar",
    semester: "II",
    year: 3,
    cc: AST,
    cr: 10,
    req: [
      {id: 22, cc: AST },
      {id: 24, cc: FIZ }],
    lab: false,
    yearly: 2,
  },
  {
    id: 28,
    code: "FIZ0321",
    course: "Teoría Electromagnética",
    semester: "II",
    year: 3,
    cc: FIZ,
    cr: 10,
    req: [
      {id: 24, cc: FIZ },
      {id: 23, cc: FIZ },
      {id: 25, cc: FIZ }],
    lab: false,
    yearly: 2,
  },
  {
    id: 29,
    code: "FIZ0322",
    course: "Física Cuántica I",
    semester: "II",
    year: 3,
    cc: FIZ,
    cr: 10,
    req: [
      {id: 24, cc: FIZ },
      {id: 25, cc: FIZ }],
    lab: false,
    yearly: 2,
  },
  {
    id: 30,
    code: "TTF",
    course: "Teológico",
    semester: "II",
    year: 3,
    cc: TTF,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },
  {
    id: 31,
    code: "OFG",
    course: "Formación General",
    semester: "II",
    year: 3,
    cc: OFG,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },
  // 4th year
  // 1st semester
  {
    id: 32,
    code: "AST0411",
    course: "Astrofísica Extragaláctica",
    semester: "I",
    year: 4,
    cc: AST,
    cr: 10,
    req: [
      {id: 22, cc: AST },
      {id: 24, cc: FIZ }],
    lab: false,
    yearly: 1,
  },
  {
    id: 33,
    code: "FIZ411",
    course: "Mecánica Estadística",
    semester: "I",
    year: 4,
    cc: FIZ,
    cr: 10,
    req: [
      {id: 29, cc: FIZ }],
    lab: false,
    yearly: 1,
  },
  {
    id: 34,
    code: "FIZ0412",
    course: "Física Cuántica II",
    semester: "I",
    year: 4,
    cc: FIZ,
    cr: 10,
    req: [
      {id: 29, cc: FIZ }],
    lab: false,
    yearly: 1,
  },
  {
    id: 35,
    code: "OPR",
    course: "Optativo",
    semester: "I",
    year: 4,
    cc: OPR,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },
  {
    id: 36,
    code: "OFG",
    course: "Formación General",
    semester: "I",
    year: 4,
    cc: OFG,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },
  // 2nd Semester
  {
    id: 37,
    code: "AST411",
    course: "Astrofísica Experimental",
    semester: "II",
    year: 4,
    cc: AST,
    cr: 10,
    req: [
      {id: 29, cc: AST },
      {id: 17, cc: AST }],
    lab: false,
    yearly: 1,
  },
  {
    id: 38,
    code: "OPR",
    course: "Optativo",
    semester: "II",
    year: 4,
    cc: OPR,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },
  {
    id: 39,
    code: "OPR",
    course: "Optativo",
    semester: "II",
    year: 4,
    cc: OPR,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },
  {
    id: 40,
    code: "OFG",
    course: "Formación General",
    semester: "II",
    year: 4,
    cc: OFG,
    cr: 10,
    req: [],
    lab: false,
    yearly: 0,
  },
  // Final year
  {
    id: 41,
    code: "AST511",
    course: "Práctica de Licenciatura",
    semester: "I",
    year: 5,
    cc: AST,
    cr: 40,
    req: [{id: 37, cc: AST }],
    lab: false,
    yearly: 0,
  },

];
