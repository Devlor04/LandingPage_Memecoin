import ContractSection from "../components/ContractSection"
import ImageCard from "../components/ImageCard"

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
          <ImageCard src="/placeholder.svg?height=400&width=300" alt="Mikamiyua Left" className="max-w-xs mx-auto" />
        </div>

        <div className="md:col-span-1">
          <ContractSection />
        </div>

        <div className="md:col-span-1">
          <ImageCard
            src="/placeholder.svg?height=400&width=300"
            alt="Mikamiyua Right"
            className="max-w-xs mx-auto rounded-full"
          />
        </div>
      </div>

      <div className="mt-16 bg-pink-200 py-8 rounded-lg">
        <h2 className="text-center text-gray-700 text-3xl font-medium mb-8">INTRODUCTION</h2>
        {/* Introduction content will go here */}
      </div>
    </div>
  )
}

export default Home
