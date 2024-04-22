import {motion} from 'framer-motion';
const PageNotFound = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-slate-200">
      <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20
      }}    
       className="bg-gray-100 sm:w-[20vw] sm:min-h-[30vh] text-center py-24 rounded-xl shadow-lg border w-[300px]">
      <span className="text-xl">Error: 404</span>
      <p className="text-md text-red-500 font-bold">Page not found</p>
      </motion.div>
    </section>
  )
}

export default PageNotFound