const Introduction = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-pink-200 p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">INTRODUCTION</h1>
  
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Mikamiyua Introduction"
                className="rounded-lg w-full"
              />
            </div>
  
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                Mikamiyua represents a new era in the blockchain space, bringing culture and community together.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to create a vibrant ecosystem where art, technology, and finance converge.
              </p>
              <p className="text-gray-700">
                Join us on this journey as we redefine what's possible in the world of cryptocurrency.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Introduction
  