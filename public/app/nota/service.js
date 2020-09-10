import {handleDados} from '../utils/promise-helper.js'

const API = 'http://localhost:3000/notas';
export const nostasService = {
  listAll(){
    return fetch(API)
    .then(handleDados)
    .catch(err => {
      console.log(err);
      return Promise.reject('Não foi possivel obter a nota fiscal')
    })
  }
}