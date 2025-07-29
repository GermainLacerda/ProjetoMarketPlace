import { useState, React } from 'react'
import ItemCard from '../../components/interfaces/ItemCard.jsx'
import CarouselBanner from '../../components/CaroseulBanner.jsx'
import Modal from '../../components/interfaces/ItemModal.jsx'
import './items.css'
import { useOutletContext } from 'react-router-dom'




const items = () => {
  const { filtro, busca } = useOutletContext();

   const bannerImages = [
    { src: "https://placehold.jp/144/007ea7/F4F4F4/1200x480.png?text=LOJINHA%20DO%20GERMAIN", alt: "Banner 1 - Lojinha do Germain", legend: "Bem-vindo à Lojinha do Germain!" },
    { src: "https://placehold.jp/144/007ea7/F4F4F4/1200x480.png?text=OFERTAS%20IMPERD%C3%8DVEIS", alt: "Banner 2 - Ofertas", legend: "Confira nossas ofertas imperdíveis!" },
    { src: "https://placehold.jp/144/007ea7/F4F4F4/1200x480.png?text=NOVIDADES%20CHEGANDO", alt: "Banner 3 - Novidades", legend: "Novos produtos toda semana!" },
  ];
  const [testItem, setTestItem] = useState([{
    id: `125687`,
    categoria: `Cozinha`,
    titulo: `Creatina Max Titanium 300G Titanium 300G Titanium 300G`,
    description: 'Bom para preservação da massa magra',
    imgLink: `https://m.media-amazon.com/images/I/51gt4U5kD-L._AC_SY240_.jpg`,
    price: `89.99`
  },
  {
    id: `235498`,
    categoria: `Cozinha`,
    titulo: `Whey Max Titanium 900G`,
    description: 'Ideal para atingir a meta de macro nutrientes diaria',
    imgLink: `https://m.media-amazon.com/images/I/51iZN0U3omL._AC_SL240_.jpg`,
    price: `119.99`
  },
  {
    id: `159753`,
    categoria: `Banho`,
    titulo: `4 Toalhas Banhão Gigante`,
    description: 'Super macias 100% algodão',
    imgLink: `https://m.media-amazon.com/images/I/81Arq7i+7ML._AC_SY300_SX300_.jpg`,
    price: `116.99`
  },
  {
    id: `952684`,
    categoria: `Cama`,
    titulo: `4 Travesseiro 50x70`,
    description: 'Macios e Fofos, direto da nasa, espuma Alienigena do ben 10',
    imgLink: `https://m.media-amazon.com/images/I/51hqgfnADeL.__AC_SX300_SY300_QL70_ML2_.jpg`,
    price: `77.00`
  }, {
    id: `125687`,
    categoria: `Cozinha`,
    titulo: `Creatina Max Titanium 300G Titanium 300G Titanium 300G`,
    description: 'Bom para preservação da massa magra',
    imgLink: `https://m.media-amazon.com/images/I/51gt4U5kD-L._AC_SY240_.jpg`,
    price: `89.99`
  },
  {
    id: `235498`,
    categoria: `Cozinha`,
    titulo: `Whey Max Titanium 900G`,
    description: 'Ideal para atingir a meta de macro nutrientes diaria',
    imgLink: `https://m.media-amazon.com/images/I/51iZN0U3omL._AC_SL240_.jpg`,
    price: `119.99`
  },
  {
    id: `159753`,
    categoria: `Banho`,
    titulo: `4 Toalhas Banhão Gigante`,
    description: 'Super macias 100% algodão',
    imgLink: `https://m.media-amazon.com/images/I/81Arq7i+7ML._AC_SY300_SX300_.jpg`,
    price: `116.99`
  },
  {
    id: `952684`,
    categoria: `Cama`,
    titulo: `4 Travesseiro 50x70`,
    description: 'Macios e Fofos, direto da nasa, espuma Alienigena do ben 10',
    imgLink: `https://m.media-amazon.com/images/I/51hqgfnADeL.__AC_SX300_SY300_QL70_ML2_.jpg`,
    price: `77.00`
  }, {
    id: `125687`,
    categoria: `Cozinha`,
    titulo: `Creatina Max Titanium 300G Titanium 300G Titanium 300G`,
    description: 'Bom para preservação da massa magra',
    imgLink: `https://m.media-amazon.com/images/I/51gt4U5kD-L._AC_SY240_.jpg`,
    price: `89.99`
  },
  {
    id: `235498`,
    categoria: `Cozinha`,
    titulo: `Whey Max Titanium 900G`,
    description: 'Ideal para atingir a meta de macro nutrientes diaria',
    imgLink: `https://m.media-amazon.com/images/I/51iZN0U3omL._AC_SL240_.jpg`,
    price: `119.99`
  },
  {
    id: `159753`,
    categoria: `Banho`,
    titulo: `4 Toalhas Banhão Gigante`,
    description: 'Super macias 100% algodão',
    imgLink: `https://m.media-amazon.com/images/I/81Arq7i+7ML._AC_SY300_SX300_.jpg`,
    price: `116.99`
  },
  {
    id: `952684`,
    categoria: `Cama`,
    titulo: `4 Travesseiro 50x70`,
    description: 'Macios e Fofos, direto da nasa, espuma Alienigena do ben 10',
    imgLink: `https://m.media-amazon.com/images/I/51hqgfnADeL.__AC_SX300_SY300_QL70_ML2_.jpg`,
    price: `77.00`
  }

  ])
  console.log(filtro)
  const itensFiltrados = testItem
    .filter((item) =>
      filtro === 'All' ? true :
        filtro === 'Cama' ? item.categoria === 'Cama' :
          filtro === 'Banho' ? item.categoria === 'Banho' :
            filtro === 'Cozinha' ? item.categoria === 'Cozinha' : false
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