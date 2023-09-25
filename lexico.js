function permutacionLexicografica(numeros) {
    const n = numeros.length;
    
    while (true) {

        console.log(numeros.join(' '));
        

        let a = n - 2;
        while (a >= 0 && numeros[a] >= numeros[a + 1]) {
            a--;
        }
        

        if (a === -1) {
            break;
        }
        

        let b = n - 1;
        while (numeros[b] <= numeros[a]) {
            b--;
        }
        

        [numeros[a], numeros[b]] = [numeros[b], numeros[a]];
        

        let left = a + 1;
        let right = n - 1;
        while (left < right) {
            [numeros[left], numeros[right]] = [numeros[right], numeros[left]];
            left++;
            right--;
        }
    }
}

const numeros = [1, 2, 3, 4];
permutacionLexicografica(numeros);

//Trabajo hecho por Diego Alejandro Gonzalez Villasmil para el semillero de quipux
