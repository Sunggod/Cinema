import { useEffect, useState } from 'react'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import { Atores, Filmes } from './types'
import { filmesMock } from './mocks'

function App() {
  const [filmes, setFilmes] = useState<Filmes[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  // Função para buscar filmes da API
  const fetchFilmes = async () => {
    setLoading(true)
    
    try {
      const response = await axios.get<typeof filmesMock>('http://localhost:3000/filmes')
      if (response.data && response.data.length > 0) {
        setFilmes(response.data)
      } else {
        console.log("Não foi possível carregar os filmes")
        setFilmes(filmesMock)
      }
    } catch (error) {
      console.error("Erro ao carregar os filmes", error)
      setFilmes(filmesMock)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFilmes()
  }, [])
// Variantes para os cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  }
// Variantes pro container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-5'
    >
      <AnimatePresence>
        {loading ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-white text-2xl"
          >
            Carregando...
          </motion.div>
        ) : filmes.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-400 text-2xl"
          >
            Nenhum filme encontrado.
          </motion.div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'
          >
            {filmes.map((filme: Filmes) => (
              <motion.div
                key={filme.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className='bg-gradient-to-br from-blue-900/60 to-indigo-900/60 
                  backdrop-blur-lg border border-white/10 
                  rounded-2xl p-6 flex flex-col items-center 
                  transform transition-all duration-300 
                  hover:shadow-2xl'
              >
                <motion.img
                  src={filme.bannerUrl}
                  alt="Banner do filme"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className='w-full max-w-[300px] h-auto object-cover rounded-xl mb-6 shadow-lg'
                />
                <div className='text-center text-white space-y-4'>
                  <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className='text-3xl font-bold text-blue-200'
                  >
                    {filme.nome}
                  </motion.h1>
                  
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className='text-lg text-blue-100'
                  >
                    <span className='font-semibold'>Ano:</span> {filme.ano}
                  </motion.h3>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm text-blue-200 space-y-2"
                  >
                    <p className='font-semibold'>Principais Atores:</p>
                    <div>{filme.atores.map((atore: Atores) => atore.nome).join(', ')}</div>
                  </motion.div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='mt-6 bg-blue-600 hover:bg-blue-700 
                      text-white font-bold py-2 px-6 
                      rounded-xl transition duration-300 
                      transform hover:shadow-lg'
                  >
                    Ver mais
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default App