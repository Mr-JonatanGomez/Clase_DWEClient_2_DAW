#### Proyecto iniciado 29-11-24 (16:00) para ratos libres

# Gestión de Tareas

## Requisitos

### Elementos de la página web

1. **Formulario de introducción de datos**:  
   Debe contener los siguientes campos:
   - Nombre
   - Descripción
   - Fecha ( libreria moment?)
   - Prioritaria (checkbox)
   - Prioridad (select con opciones: baja, media, alta)

2. **Lista de tareas filtradas**:  
   - Muestra las tareas agregadas con el nombre de la tarea.  
   - Incluye un select para filtrar las tareas por prioridad (baja, media, alta).  
   - Cuando se selecciona una prioridad en el select, la lista muestra únicamente las tareas con esa prioridad.

3. **Conjunto de cartas con todas las tareas introducidas**:  
   - Esta lista no se modifica al aplicar el filtro de prioridad.  
   - Cada carta debe mostrar:
     - Nombre
     - Prioridad
     - Descripción
     - Imagen (dependiendo del tipo de prioridad).  
   - Cada carta incluirá un botón **"Completar tarea"**.  
     - Al pulsar este botón, la tarea debe desaparecer de la lista de cartas y de las tareas filtradas.

---

## Comportamiento esperado

- **Filtrado por prioridad**:  
  Cada vez que se realiza un filtro por el select, se modifica la lista de tareas de la parte izquierda (lista de tareas filtradas), pero **no afecta la lista de cartas**.

- **Completado de tareas**:  
  Al pulsar el botón de completar en una carta:
  - La tarea desaparece de la lista de filtrado.
  - La tarea desaparece de la lista de cartas.( meterla en listado especial completadas)

---

## Clase Tarea

Se debe crear una clase `Tarea` que genere objetos con los siguientes atributos:

- `id`: Identificador único de la tarea. (crear contador para asignar nº)
- `titulo`: Nombre de la tarea.
- `descripcion`: Descripción de la tarea.
- `fecha`: Fecha asociada a la tarea.
- `prioritaria`: Booleano que indica si es prioritaria.
- `prioridad`: Nivel de prioridad (`baja`, `media`, `alta`).
- `completa`: Booleano que indica si la tarea está completa.
- `imagen`: URL de la imagen asociada a la prioridad.

---

## Asociaciones

Se debe encontrar una forma de asociar las tareas que están en la lista de cartas con las tareas de la lista filtrada. Esto asegura que las operaciones realizadas en una lista se reflejen correctamente en la otra.

---

## Imágenes según la prioridad

Las tareas tendrán imágenes específicas según su prioridad:

- **Alta**:  
  ![Imagen alta](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tANuBJoViapolNoVPmOHlaaFityDbdvSyyhUVpIL_MvB2K3IS6DNmUXkAtzhOPbbHRc&usqp=CAU)

- **Media**:  
  ![Imagen media](https://static-00.iconduck.com/assets.00/medium-priority-icon-512x512-kpm2vacr.png)

- **Baja**:  
  ![Imagen baja](https://static-00.iconduck.com/assets.00/high-priority-icon-1024x1024-ryazhwgn.png)
