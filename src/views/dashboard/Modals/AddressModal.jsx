import FormField from '@/components/form/FormField'
import React from 'react'
import { FaRegWindowClose } from 'react-icons/fa'

const AddressModal = ({ onClickClose, onClickEdit, isEditMode, addressData }) => {
  return (
    <div className="fixed inset-0 bg-[#00000049] bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-[750px] max-w-full relative">
            <div className="flex items-center justify-between mb-2 border-b pb-2 border-[#bfb7b7]">
              <h2 className="text-2xl font-bold text-[#0096ff]">
                {isEditMode ? 'Edit Address' : 'Shipping Address'}
              </h2>
              <button
                className=" text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={onClickClose}
              >
                <FaRegWindowClose className="w-5 h-5" />
              </button>
            </div>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <FormField 
                  label="Full Name" 
                  placeholder="Full Name" 
                  defaultValue={isEditMode ? addressData?.name : ''}
                />
                <FormField
                  label="Business Name (optional)"
                  placeholder="Business Name"
                  defaultValue={isEditMode ? addressData?.company : ''}
                />
                <FormField 
                  label="Street Address" 
                  placeholder="address"
                  defaultValue={isEditMode ? addressData?.address : ''}
                />
                <FormField
                  label="Suite/Unit/Apt"
                  placeholder="Suite/Unit/Apt"
                />
                <FormField 
                  label="City" 
                  placeholder="City"
                  defaultValue={isEditMode ? addressData?.city : ''}
                />
                <FormField 
                  label="State" 
                  placeholder="state"
                  defaultValue={isEditMode ? addressData?.state : ''}
                />
                <FormField 
                  label="Zip Code" 
                  placeholder="zip code"
                  defaultValue={isEditMode ? addressData?.zip : ''}
                />
                <div className="flex flex-col gap-1">
                  <label className="text-[#333333] font-bold text-lg">
                    Country
                  </label>
                  <select 
                    className="border-1 border-[#bfb7b7] p-3 rounded-md"
                    defaultValue={isEditMode ? addressData?.country : ''}
                  >
                    <option value="">Select a country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="IT">Italy</option>
                    <option value="ES">Spain</option>
                    <option value="CN">China</option>
                    <option value="JP">Japan</option>
                    <option value="IN">India</option>
                    <option value="BR">Brazil</option>
                    <option value="MX">Mexico</option>
                  </select>
                </div>
              </div>
              <label className="text-[#333333] font-bold text-lg">
                Delivery Instructions
              </label>
              <textarea
                className="border border-[#bfb7b7] p-2 rounded w-full mt-2"
                placeholder="Delivery Instructions"
                rows={3}
              ></textarea>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="bg-[#0096ff] hover:bg-[#0095ffc7] text-white px-4 py-2 rounded cursor-pointer"
                  onClick={onClickClose}
                >
                  {isEditMode ? 'Update Address' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default AddressModal