import {log} from './utils/promise-helper.js'
import {getItens, filterItens, sumItens} from './utils/sum.js'
import {nostasService as service} from './nota/service.js'
document.querySelector('#myButton').addEventListener('click', () => {
  service.listAll()
  .then(getItens)
  .then(filterItens('2143'))
  .then(sumItens)
  .then(log)
  .catch(log)
})