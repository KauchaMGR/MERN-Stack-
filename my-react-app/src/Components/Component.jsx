const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    price: 22.3,
    description: 'Slim-fitting style, contrast raglan long sleeve, light weight and breathable fabric for comfort.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description: 'Great outerwear for Spring and Autumn, with a comfortable fit and warm layering.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png',
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description: 'A clean, everyday casual shirt with a modern, slim-fit silhouette.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png',
    rating: { rate: 2.1, count: 430 },
  },
]

function Component() {
  return (
    <div className="mt-8">
      <h2 className="mb-4 text-2xl font-bold text-slate-800">Featured Products</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain bg-slate-50 p-3"
            />

            <div className="space-y-3 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-indigo-600">
                {product.category}
              </p>

              <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
                {product.title}
              </h3>

              <p className="text-sm text-slate-600">
                {product.description.slice(0, 70)}...
              </p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">${product.price}</span>
                <span className="text-sm text-amber-500">⭐ {product.rating.rate}</span>
              </div>

              <button className="w-full rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Component
