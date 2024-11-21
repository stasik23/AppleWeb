export default function Home() {
  return (
    <div className="bg-white">
      {/* iPhone 14 Section */}
      <div className="flex flex-col items-center h-screen bg-IPhone bg-cover bg-center py-12 bg-gray-100 text-center">
        <h1 className="text-5xl text-black font-bold mb-4">iPhone 14</h1>
        <p className="text-2xl mb-6 text-gray-700">Big and bigger.</p>
        <div className="flex space-x-4 mb-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Learn more
          </button>
          <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Buy
          </button>
        </div>
      </div>

      {/* iPhone 14 Pro Section */}
      <div className="flex flex-col items-center h-screen bg-IPhonePro bg-cover bg-center py-12 bg-black text-white">
        <h1 className="text-5xl font-bold mb-4">iPhone 14 Pro</h1>
        <p className="text-2xl mb-6">Pro. Beyond.</p>
        <div className="flex space-x-4 mb-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Learn more
          </button>
          <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Buy
          </button>
        </div>
      </div>

      {/*Main Apple Watch Section */}
      <div className="flex flex-col items-center h-screen bg-Watch bg-cover bg-center py-12 bg-black text-white">
        <img src="https://s3-alpha-sig.figma.com/img/46c3/b827/6056ed8189456bce9ad1aa8fbd61dcd6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZRA-rpsKqPOrj6MOpCrTVmMbuaOMmT29m1NphuryS8x-cN~o-wVVdQ79PWB216AE9bijsIXgv9xjo0LuFZGT8lR8640eDuk4jl5OsslnpY5f9ktBwWcQ-1b6MNIFA~0HQ5Gt-8p90sm5DjY4Lwiw0AjSgbs0uqmLvMPCOA0GGTDFO9CXc8eUX63P4SHKSlNzyTVp~eokk-OfXOrX926Xyl7p1NCoFnLKAlX7sKCT8WKlBy4BdXmHJm~y4KwqKARmDxEdLnOUvZfNfQUcD-dC8zaIuUaR6Ch5imTItMRM9oyqh7JrM8BCsZwmOqzQDM20sc0XaEvxddGBI7HRFu46ow__" alt="" />
        <p className="text-2xl mb-6">Adventure awaits.</p>
        <div className="flex space-x-4 mb-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Learn more
          </button>
          <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Buy
          </button>
        </div>
      </div>

      {/* Grid Section for Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
        {/* Apple Watch Section */}
        <div className="flex flex-col items-center bg-WatchS8 h-screen bg-cover bg-center text-white p-6 border-2">
          <h1 className="text-5xl font-bold mb-4">Apple Watch</h1>
          <p className="text-2xl mb-6">Adventure awaits.</p>
          <div className="flex space-x-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Learn more
            </button>
            <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              Buy
            </button>
          </div>
        </div>

        {/* AirPods Pro Section */}
        <div className="flex flex-col items-center bg-AirPods h-screen bg-cover bg-center text-white p-6 border-2">
          <h1 className="text-5xl font-bold mb-4">AirPods Pro</h1>
          <p className="text-lg mb-6">Rebuilt from the sound up.</p>
          <div className="flex space-x-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Learn more
            </button>
            <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              Buy
            </button>
          </div>
        </div>

        {/* Fitness+ Section */}
        <div className="flex flex-col items-center bg-Fitness h-screen bg-cover bg-center text-black p-6 border-2">
          <h1 className="text-5xl font-bold mb-4">Fitness+</h1>
          <p className="text-lg mb-6">Fitness for everyone. Now all you need is iPhone.</p>
          <div className="flex space-x-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Learn more
            </button>
            <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              Notify me
            </button>
          </div>
        </div>

        {/* MacBook Air Section */}
        <div className="flex flex-col items-center bg-MacBook h-screen bg-cover bg-center text-black p-6 border-2">
          <h1 className="text-5xl font-bold mb-4">MacBook Air</h1>
          <p className="text-lg mb-6">Supercharged by M2.</p>
          <div className="flex space-x-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Learn more
            </button>
            <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              Buy
            </button>
          </div>
        </div>

        {/* Apple Watch SE Section */}
        <div className="flex flex-col items-center bg-WatchSE h-screen bg-cover bg-center text-black p-6 border-2">
          <img src="https://s3-alpha-sig.figma.com/img/885e/26b2/02aa7bf15b70262f3af0c86033b28604?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SwY3g5jyM~tl7tAreLHjHZaaeBZ9QeAv0F8jDOFZcu3WbaKejCS5ypu6mkaDzoJ~SFt3IFYxjKF28VsxFqof~J1PnW9eZjNZ6OUB12Ln3OT5gBEJ95S3yQ421cWjUjbsklVTvcKzVBxSDiFvAKkeJDy9GJdqjTA36V27Xnfkr0Fu2VVGLpefzA~Z47Vppj5IBEIbEZmcHvhzGge1VLCQMrFazvC0RFnLzl4e0LMMMfLKFz2NM80JrsC81nywZXjjqbI4qeVrB4r2mbRBm6zxHrEAZ6uW1qeeZP8PHGYKCvE4NRL9pA7B8BMQu0PlksInlba9UlkX14wHyPRJ3~5awg__" alt="" />
          <p className="text-lg mb-6">A great deal to love.</p>
          <div className="flex space-x-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Learn more
            </button>
            <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              Buy
            </button>
          </div>
        </div>

        {/* Apple Card Section */}
        <div className="flex flex-col items-center bg-Card h-screen bg-cover bg-center text-black p-6 border-2">
          <h1 className="text-5xl font-bold mb-4">Apple Card</h1>
          <p className="text-lg mb-6">Get up to 3% Daily Cash back with every purchase.</p>
          <div className="flex space-x-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Learn more
            </button>
            <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
