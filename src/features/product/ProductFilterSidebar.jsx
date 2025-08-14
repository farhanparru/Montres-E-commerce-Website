import React from "react";
import { Disclosure } from '@headlessui/react';
import { FiFilter, FiX, FiChevronDown, FiSearch, FiShoppingCart, FiStar } from 'react-icons/fi';

const FilterSidebar = () => {
  const filters = [
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'watch', label: 'Watch' },
        { value: 'sport', label: 'Sport' },
        { value: 'classic', label: 'Classic' },
      ],
    },
    {
      id: 'price',
      name: 'Price',
      options: [
        { value: '1-500', label: 'AED 1 - AED 500' },
        { value: '2501-5000', label: 'AED 2501 - AED 5000' },
        { value: '8000-90000', label: 'AED 8000 - AED 90000' },
      ],
    },
    {
      id: 'brand',
      name: 'Brand',
      options: [
        { value: 'rolex', label: 'Rolex' },
        { value: 'omega', label: 'Omega' },
        { value: 'rado', label: 'Rado' },
        { value: 'hurmen', label: 'Hurmen' },
      ],
    },
    {
      id: 'discount',
      name: 'Discount',
      options: [
        { value: '90', label: '90% or More' },
        { value: '40', label: '40% or More' },
        { value: '20', label: '20% or More' },
        { value: '60', label: '60% or More' },
      ],
    },
    {
      id: 'rating',
      name: 'Rating',
      options: [
        { value: '5', label: '★★★★★' },
        { value: '4', label: '★★★★☆ & Up' },
        { value: '3', label: '★★★☆☆ & Up' },
        { value: '2', label: '★★☆☆☆ & Up' },
      ],
    },
    {
      id: 'badges',
      name: 'Badges',
      options: [
        { value: 'deal_of_day', label: 'Deal of the Day' },
        { value: 'in_demand', label: 'In Demand' },
        { value: 'moglix_choice', label: 'Moglix Choice' },
        { value: 'same_day_dispatch', label: 'Same Day Dispatch' },
        { value: 'top_seller', label: 'Top Seller' },
      ],
    },
    {
      id: 'availability',
      name: 'Availability',
      options: [
        { value: 'in_stock', label: 'Show in stock only' },
      ],
    },
  ];

  return (
    <>
      {/* Mobile filter dialog */}
      <div className="fixed inset-0 z-40 lg:hidden block">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button
              type="button"
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Filters */}
          <div className="mt-4 px-4">
            {filters.map((section) => (
              <Disclosure as="div" key={section.id} className="border-t border-gray-200 py-6">
                {({ open }) => (
                  <>
                    <h3 className="-mx-2 -my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <FiChevronDown
                            className={`${open ? '-rotate-180' : 'rotate-0'} h-5 w-5 transform`}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                      <div className="space-y-6">
                        {section.id === 'brand' && (
                          <div className="relative mb-4">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <FiSearch className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="Search brands"
                            />
                          </div>
                        )}
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            {section.id === 'rating' ? (
                              <div className="flex items-center">
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-500"
                                >
                                  <span className="text-yellow-400">{option.label}</span>
                                </label>
                              </div>
                            ) : (
                              <>
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
          <div className="px-4 mt-4">
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Clear all filters
            </button>
          </div>
        </div>
      </div>

      {/* Desktop filters */}
      <div className="hidden lg:block lg:w-80">
        <div className="sticky top-20">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Clear all
              </button>
            </div>

            {filters.map((section) => (
              <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <FiChevronDown
                            className={`${open ? '-rotate-180' : 'rotate-0'} h-5 w-5 transform`}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                      {section.id === 'brand' && (
                        <div className="relative mb-4">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <FiSearch className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Search brands"
                          />
                        </div>
                      )}
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            {section.id === 'rating' ? (
                              <div className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  <span className="text-yellow-400">{option.label}</span>
                                </label>
                              </div>
                            ) : (
                              <>
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;