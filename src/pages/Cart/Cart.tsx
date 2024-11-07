import { useQuery } from '@tanstack/react-query'
import purchaseApi from '../../apis/purcharse.api'
import { purchasesStatus } from '../../constants/purchase'
import { Link } from 'react-router-dom'
import path from '../../constants/path'
import { generateNameId } from '../../utils/utils'

export default function Cart() {
  const { data: purchasesInCartData } = useQuery({
    queryKey: ['purchases', { status: purchasesStatus.inCart }],
    queryFn: () => purchaseApi.getPurchases({ status: purchasesStatus.inCart })
  })
  const purcharseInCart = purchasesInCartData?.data.data

  return (
    <div className='bg-neutral-100 py-16'>
      <div className='container'>
        <div className='overflow-auto'>
          <div className='min-w-[100px]'>
            <div className='grid grid-cols-12 rounded-sm bg-white py-5 px-9 text-sm capitalize text-gray-500 shadow'>
              <div className='col-span-6 bg-white'>
                <div className='flex items-center'>
                  <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                    <input type='checkbox' className='w-5 h-5 accent-orange-500' />
                  </div>
                  <div className='flex-grow text-black'>Sản phẩm</div>
                </div>
              </div>
              <div className='col-span-6'>
                <div className='grid text-center grid-cols-5'>
                  <div className='cols-span-2'>Đơn giá</div>
                  <div className='cols-span-1'>Số lượng</div>
                  <div className='cols-span-1'>Số tiền</div>
                  <div className='cols-span-1'>Thao tác</div>
                </div>
              </div>
            </div>
            <div className='my-3 rounded-sm bg-white p-5 shadow'>
              {purcharseInCart?.map((purchase, index) => (
                <div
                  key={purchase._id}
                  className='grid grid-cols-12 text-center rounded-sm border border-gray-200 bg-white py-5 px-4 text-sm text-gray-500'
                >
                  <div className='col-span-6'>
                    <div className='flex'>
                      <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                        <input type='checkbox' className='w-5 h-5 accent-orange-500' />
                      </div>
                      <div className='flex-grow'>
                        <div className='flex'>
                          <Link
                            className='h-20 w-20 flex-shrink-0'
                            to={`${path.home}${generateNameId({
                              name: purchase.product.name,
                              id: purchase.product._id
                            })}`}
                          >
                            <img alt={purchase.product.name} src={purchase.product.image} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
