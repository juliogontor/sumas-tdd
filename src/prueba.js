function arreglos4(sumatoria_buscada)
{
    const arreglo = [1,3,5,7,6,2,5,4];
    var data = [];
    var firsItem = true;
    for (let i = 0; i<arreglo.length; i++)
    {
        for (let j = 0; j<arreglo.length; j++)
        {
            //diferencia 
            if (i != j)
            {
                if (arreglo[i] + arreglo[j] === sumatoria_buscada)
                    console.log(arreglo[i] + " - " +arreglo[j]);
            }

        }
    }
}

arreglos4(10);