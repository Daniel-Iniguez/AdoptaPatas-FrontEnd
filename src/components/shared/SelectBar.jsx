import React from 'react'

function SelectBar({ label, selected, options }) {
  return (
    <div className="relative">
      <select className="peer p-4 pe-9 block w-full border-main-text-color rounded-lg text-sm focus:border-[#eab7ba] focus:ring-[#eab7ba] disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2">
        <option selected>{selected}</option>
        {options.map((element, index) => {
          return (
            <option key={index}>{element}</option>
          )
        })}
      </select>
      <label className="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500">{label}</label>
    </div>
  )
}

export default SelectBar