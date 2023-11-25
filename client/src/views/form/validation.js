const validation = (activity)=>{
    const errors = {}

        
   
  if (!activity || !activity.name || !/^[a-zA-Z0-9\s]{1,30}$/.test(activity.name)) {
    errors.name = 'El nombre no puede contener caracteres especiales';
  }

  if (!activity || !activity.dificultad || !/^[1-5]$/.test(activity.dificultad)) {
    errors.dificultad = 'La dificultad tiene que ser un número del 1 al 5';
  }

  if (!activity || !activity.duracion || !/^\d+$/.test(activity.duracion)) {
    errors.duracion = 'La duración debe ser un número entero positivo';
  }

  if (!activity || !activity.temporada || !['otoño', 'invierno', 'primavera', 'verano'].includes(activity.temporada)) {
    errors.temporada = 'La temporada debe ser otoño, invierno, primavera o verano';
  }

  if (!activity || !activity.pais || !Array.isArray(activity.pais) || activity.pais.length === 0) {
    errors.pais = 'Seleccione al menos un país';
  }

   return errors
  }
  
  export default validation;