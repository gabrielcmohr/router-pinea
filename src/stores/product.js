import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    {id: 1, name: 'Liquidificador', price: 79.90, qty: 100},
    {id: 2, name: 'Batedeira', price: 122.90, qty: 50},
    {id: 3, name: 'Chuveiro elétrico', price: 49.90, qty: 30},
    {id: 4, name: 'Mixer', price: 79.90, qty: 202.00},
    {id: 5, name: 'Panela de pressão', price: 5999.99, qty: 2},

  ])


  return { products }
})
