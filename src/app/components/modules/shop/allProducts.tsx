export default function AllProducts() {
  return (
    <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-8 flex gap-8">
      {/* Sidebar Filter Panel */}
      <aside className="w-64 flex-shrink-0 hidden lg:block">
        <div className="bg-surface-sidebar dark:bg-gray-900/50 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-primary">Filters</h3>
            <button className="text-xs text-primary font-semibold hover:underline">Clear all</button>
          </div>
          {/* Categories */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Categories</p>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input checked className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">Prescription</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">OTC Medicines</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">Wellness & Vitamis</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">First Aid</span>
              </label>
            </div>
          </div>
          {/* Price Range */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Price Range</p>
            <div className="px-2">
              <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full relative">
                <div className="absolute h-1 bg-primary left-0 right-1/4 rounded-full"></div>
                <div className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full -top-1.5 left-0"></div>
                <div className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full -top-1.5 right-1/4"></div>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">$0</span>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">$450</span>
              </div>
            </div>
          </div>
          {/* Manufacturers */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Manufacturers</p>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                <span className="text-sm text-gray-700 dark:text-gray-300">PharmaCorp</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                <span className="text-sm text-gray-700 dark:text-gray-300">HealthGen</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                <span className="text-sm text-gray-700 dark:text-gray-300">BioRemedy</span>
              </label>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Rating</p>
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-accent-price">
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="material-symbols-outlined text-sm text-gray-300">star</span>
                <span className="text-xs text-gray-500 ml-1">& Up</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="flex-1">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6">
          <a className="text-xs font-medium text-gray-500 hover:text-primary" href="#">Home</a>
          <span className="material-symbols-outlined text-xs text-gray-400">chevron_right</span>
          <span className="text-xs font-bold text-primary">Medicine Shop</span>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Medicines & Supplements</h1>
            <p className="text-sm text-gray-500 mt-1">Showing 1-12 of 148 products</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2 pl-4 pr-10 text-sm focus:ring-primary focus:border-primary">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
            </div>
            <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <button className="p-2 bg-primary text-white">
                <span className="material-symbols-outlined text-[20px]">grid_view</span>
              </button>
              <button className="p-2 bg-white dark:bg-gray-800 text-gray-500 hover:text-primary">
                <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* ...All your product cards here... */}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Load More Products
          </button>
          <div className="flex items-center gap-2">
            {/* Pagination Buttons */}
          </div>
        </div>
      </section>
    </main>
  );
}
