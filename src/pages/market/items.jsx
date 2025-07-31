import { useState, React, useEffect } from 'react'
import ItemCard from '../../components/interfaces/ItemCard.jsx'
import CarouselBanner from '../../components/CaroseulBanner.jsx'
import Modal from '../../components/interfaces/ItemModal.jsx'
import './items.css'
import { useOutletContext } from 'react-router-dom'

import { fetchProducts } from '../../services/api.js'


const items = () => {
  const { filtro, busca } = useOutletContext();

  const bannerImages = [
    { src: "https://placehold.jp/144/007ea7/F4F4F4/1200x480.png?text=LOJINHA%20DO%20GERMAIN", alt: "Banner 1 - Lojinha do Germain", legend: "Bem-vindo à Lojinha do Germain!" },
    { src: "https://placehold.jp/144/007ea7/F4F4F4/1200x480.png?text=OFERTAS%20IMPERD%C3%8DVEIS", alt: "Banner 2 - Ofertas", legend: "Confira nossas ofertas imperdíveis!" },
    { src: "https://placehold.jp/144/007ea7/F4F4F4/1200x480.png?text=NOVIDADES%20CHEGANDO", alt: "Banner 3 - Novidades", legend: "Novos produtos toda semana!" },
  ];


  const [testItem, setTestItem] = useState([]);
  useEffect(() => {

    fetchProducts()
      .then(data => setTestItem(data.data))
      .catch(err => console.error("Erro ao carregar produtos: ", err))
  }, []);

  console.log(testItem)
  const itensFiltrados = testItem
    .filter((item) =>
      filtro === 'All' ? true :
        filtro === 'Eletrônicos' ? item.categoria_id.categoria === 'Eletrônicos' :
          filtro === 'Informática' ? item.categoria_id.categoria === 'Informática' :
            filtro === 'Casa e Cozinha' ? item.categoria_id.categoria === 'Casa e Cozinha' :
              filtro === 'Moda' ? item.categoria_id.categoria === 'Moda' :
                filtro === 'Esporte e Lazer' ? item.categoria_id.categoria === 'Esporte e Lazer' :
                  filtro === 'Beleza e Saúde' ? item.categoria_id.categoria === 'Beleza e Saúde' :
                    filtro === 'Brinquedos e Jogos' ? item.categoria_id.categoria === 'Brinquedos e Jogos' :
                      filtro === 'Automotivo' ? item.categoria_id.categoria === 'Automotivo' :
                        filtro === 'Ferramentas e Construção' ? item.categoria_id.categoria === 'Ferramentas e Construção' :
                          filtro === 'Livros' ? item.categoria_id.categoria === 'Livros' : false
    );

  const [selectedItem, setSelectedItem] = useState(null); // Estado para o item clicado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a visibilidade do modal

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null); // Limpa o item selecionado ao fechar
  };

  return (
    <div className='items'>

      <CarouselBanner images={bannerImages} />

      {testItem.length === 0 &&
        <p>não há itens a venda...</p>
      }
      <div className='ItensContainer'>
        {testItem.length > 0 && itensFiltrados.filter((item) =>
          item.titulo.toLowerCase().includes(busca.toLowerCase())
        ).map((item) =>
          <div>
            <ItemCard key={item.id} testItem={item} onClick={handleItemClick} />
          </div>
        )}
        <Modal testItem={selectedItem} onClose={handleCloseModal} />
      </div>

    </div>
  )
}

export default items