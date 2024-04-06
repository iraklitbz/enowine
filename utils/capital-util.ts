
const imageMapping: { [key: string]: string } = {
  'a': 'a_cbf3aa169b.svg',
  'b': 'b_a384baaedb.svg',
  'c': 'c_1c1ada26e6.svg',
  'd': 'd_a8a09f8ed4.svg',
  'e': 'e_b07a841d2f.svg',
  'f': 'ff_1f3f88de30.svg',
  'g': 'g_36f20f3f07.svg',
  'h': 'h_a4e26d67ad.svg',
  'i': 'i_5155f70e0d.svg',
  'j': 'j_544deeeb45.svg',
  'k': 'k_cdf790c10f.svg',
  'l': 'l_c33c189b3f.svg',
  'm': 'm_1389c23f8b.svg',
  'n': 'n_7c09306594.svg',
  'o': 'o_da4f299dc1.svg',
  'p': 'p_37b93b2294.svg',
  'q': 'q_0647b93fce.svg',
  'r': 'r_c14a851678.svg',
  's': 's_31cf840aaf.svg',
  't': 't_fc68505ba7.svg',
  'u': 'u_66569fe571.svg',
  'v': 'v_3e7d70be04.svg',
  'w': 'w_d2032f284c.svg',
  'x': 'x_001fd6348c.svg',
  'y': 'y_193d1912ba.svg',
  'z': 'z_a997c11945.svg'
  // ... Agrega más letras según sea necesario
};
function mapToImage(letter: string): string {
    const lowercaseLetter = letter.toLowerCase();
    return imageMapping[lowercaseLetter] || '' // Devuelve el nombre mapeado o una cadena vacía si no hay coincidencia
}
// Función que toma un nombre y devuelve el nombre mapeado
  
  // Función capitalLetter modificada
  export function capitalLetter(text: string, CMS:string) {
    const mappedImage = mapToImage(text.charAt(0));
  
    return `<span class="float-left w-32 mr-4"><img src="${CMS}/uploads/${mappedImage}" alt="cappital letter"></span>${text.substring(1)}<span class="clear-both"></span>`;
  }
