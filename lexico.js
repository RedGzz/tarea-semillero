function permutacionLexicografica(numeros) {
    const n = numeros.length;
    
    while (true) {

        console.log(numeros.join(' '));
        

        let i = n - 2;
        while (i >= 0 && numeros[i] >= numeros[i + 1]) {
            i--;
        }
        

        if (i === -1) {
            break;
        }
        

        let j = n - 1;
        while (numeros[j] <= numeros[i]) {
            j--;
        }
        

        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
        

        let left = i + 1;
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
