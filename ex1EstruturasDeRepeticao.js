const student = [
    {
        name: 'João',
        height: 160,
        age: 25,
        gender: 'masculino',
        classroom: 'Trindade',
        math: 8.5,
    },
    {
        name: 'Maria',
        height: 170,
        age: 33,
        gender: 'feminino',
        classroom: 'Trindade',
        math: 8.0,
    },
    {
        name: 'Joana',
        height: 165,
        age: 45,
        gender: 'feminino',
        classroom: 'Trindade',
        math: 6.5,
    },
    {
        name: 'Pedro',
        height: 175,
        age: 22,
        gender: 'masculino',
        classroom: 'Trindade',
        math: 7.0,
    },
    {
        name: 'Antônio',
        height: 183,
        age: 38,
        gender: 'masculino',
        classroom: 'Trindade',
        math: 9.5,
    },
];

student.forEach((student) => {

    if (student.math >= 7.0) {
      console.log(`${student.name} foi aprovado(a)`);
    } else {
      console.log(`${student.name} foi reprovado(a)`);
    }
  });


