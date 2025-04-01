import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes',
  standalone: false
})
export class ImagenesPipe implements PipeTransform {

  transform(value: string[] | undefined, ...args: unknown[]): unknown {
    /* entrada tipo string [], ya que lo que cogera es del array tags */
    if (value?.includes('history')) {
      return 'https://media.istockphoto.com/id/1092170968/es/vector/libro-abierto-con-garabatos-de-historia-y-letras.jpg?s=612x612&w=0&k=20&c=lVGQfgOIzW1ip7b_n2X8MLMV_iym4IUwmSIoQ58DzzA='
    }else if (value?.includes('french')) {
      return 'https://media.istockphoto.com/id/1054778956/es/vector/francais.jpg?s=612x612&w=0&k=20&c=4vKyQel-IBSNtInAZGjrMaKE3fIzAoQjtWiXIXCFG04='
    }else if (value?.includes('english')) {
      return'https://media.istockphoto.com/id/1047570732/es/vector/ingl%C3%A9s.jpg?s=612x612&w=0&k=20&c=5Bd-o3KF4vRijqt8SvLRT9P4sNesooZGDENYccpG0tI='
    }else if (value?.includes('love')) {
      return 'https://media.istockphoto.com/id/1983533940/photo/love-in-the-air.jpg?s=612x612&w=0&k=20&c=lcT5Kzw9ZTuAvMVCckzJkrmTu9rD8BfrBp4_4R529AU='
    }else if (value?.includes('crime')) {
      return 'https://media.istockphoto.com/id/156325442/es/foto/asesino-volver-a-la-escena-del-crimen.jpg?s=612x612&w=0&k=20&c=HOMgLF6EXctTyGgwMwj9i5VcrxQVM0KZ3qnPx7BGC3c='
    }else if(value?.includes('american')){
      return 'https://img.freepik.com/premium-photo/memorial-day-usa-design-with-american-flag-cutting-star-symbol_198067-114273.jpg'
    }
    return 'https://media.istockphoto.com/id/160948731/photo/keyboard-message-mail.jpg?s=612x612&w=0&k=20&c=DHno3M_cPIGxr8Qtp83KRVeAUr1F1OH4ZkLULXjXkVY=';
  }

  /* metodo transform, me das la entrada, y devuelve algo en concreto */
}
/* 

 */