(() => {

  // Tipos
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

  //Enumeraciones
  enum fuerza {
    acuaman = 0,
    batman = 1,
    flash = 5,
    superman = 100
  }

  const fuerzaFlash: fuerza = fuerza.flash;
  const fuerzaSuperman: fuerza = fuerza.superman;
  const fuerzaBatman: fuerza = fuerza.batman;
  const fuerzaAcuaman: fuerza = fuerza.acuaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return 'activada';
  }

  function pedir_ayuda(): void {
    console.log('Auxilio!!!');
  }

  // Aserciones de Tipo
  const poder: any = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);


  // Funciones Básicas
  function sumar(a: number, b: number): number {
    return a + b;
  }

  const contar = (heroes: string[]): number => {
    return heroes.length;
  }
  const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);

  //Parametros por defecto
  const llamarBatman = (llamar: boolean = true): void => {
    if (llamar) {
      console.log("Batiseñal activada");
    }
  }

  llamarBatman();

  // Rest?
  const unirheroes = (...personas: string[]): string => {
    return personas.join(", ");
  }


  // Tipo funcion
  const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: string[]): void => { }

  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco;
  noHaceNadaTampoco = noHaceNada


})()

