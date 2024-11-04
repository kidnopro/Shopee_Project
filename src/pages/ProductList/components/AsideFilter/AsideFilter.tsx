import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import path from '../../../../constants/path'
import Button from '../../../../components/Button/Button'
import { QueryConfig } from '../../ProductList'
import { Category } from '../../../../types/category.type'
import classNames from 'classnames'
import InputNumber from '../../../../components/InputNumber/InputNumber'
import { useForm, Controller } from 'react-hook-form'
import { Schema, schema } from '../../../../utils/rule'
import { yupResolver } from '@hookform/resolvers/yup'
import { NoUnderfinedField } from '../../../../types/utils.type'

interface Props {
  queryConfig: QueryConfig
  categories: Category[]
}

type FormData = NoUnderfinedField<Pick<Schema, 'price_min' | 'price_max'>>

const priceSchema = schema.pick(['price_min', 'price_max'])

export default function AsideFilter({ queryConfig, categories }: Props) {
  const { category } = queryConfig
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      price_min: '',
      price_max: ''
    },
    // @ts-ignore
    resolver: yupResolver(priceSchema),
    shouldFocusError: false
  })
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        price_min: data.price_min,
        price_max: data.price_max
      }).toString()
    })
  })

  return (
    <div className='py-4 ml-14'>
      <Link
        to={path.home}
        className={classNames('flex items-center ', {
          'text-orange-500': !category
        })}
      >
        <svg viewBox='0 0 12 10' className='mr-3 h-4 w-3 fill-current'>
          <g fillRule='evenodd' stroke='none' strokeWidth={1}>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                </g>
              </g>
            </g>
          </g>
        </svg>
        Tất cả danh mục
      </Link>
      <div className='bg-gray-400 h-[1px] my-4'>
        <ul>
          {categories.map((categoryItem) => {
            const isActive = category === categoryItem._id
            return (
              <li className='py-2 pl-2' key={categoryItem._id}>
                <Link
                  to={{
                    pathname: path.home,
                    search: createSearchParams({
                      ...queryConfig,
                      category: categoryItem._id
                    }).toString()
                  }}
                  className={classNames('relative px-2', {
                    'font-semibold text-orange-500': isActive
                  })}
                >
                  {isActive && (
                    <svg viewBox='0 0 4 7' className='absolute top-1 left-[-10px] h-2 w-2 fill-orange-500'>
                      <polygon points='4 3.5 0 0 0 7' />
                    </svg>
                  )}
                  {categoryItem.name}
                </Link>
              </li>
            )
          })}

          <li className='py-2 pl-2'>
            <Link to={path.home} className='relative px-2'>
              Thời trang nữ
            </Link>
          </li>
        </ul>
        <Link to={path.home} className='flex items-center  mt-4 capitalize'>
          <svg
            enableBackground='new 0 0 15 15'
            viewBox='0 0 15 15'
            x={0}
            y={0}
            className='mr-3 h-4 w-3 fill-current stroke-current'
          >
            <g>
              <polyline
                fill='none'
                points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit={10}
              />
            </g>
          </svg>
          Bộ lọc tìm kiếm
        </Link>
        <div className='bg-gray-400 h-[1px] my-4'></div>
        <div className='my-5'>
          <div>Khoản giá</div>
          <form className='mt-2' onSubmit={onSubmit}>
            <div className='flex items-start'>
              <Controller
                control={control}
                name='price_min'
                render={({ field }) => {
                  return (
                    <InputNumber
                      type='text'
                      className='grow'
                      placeholder='đ Từ'
                      {...field}
                      classNameInput='p-1 w-full outline-none border boder-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                      classNameError='hidden'
                      onChange={(event) => {
                        field.onChange(event)
                        trigger('price_max')
                      }}
                    />
                  )
                }}
              />

              <div className='mx-2 mt-2 shrink-0'>-</div>
              <Controller
                control={control}
                name='price_max'
                render={({ field }) => {
                  return (
                    <InputNumber
                      type='text'
                      className='grow'
                      placeholder='đ Đến'
                      classNameError='hidden'
                      classNameInput='p-1 w-full outline-none border boder-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                      onChange={(event) => {
                        field.onChange(event)
                        trigger('price_max')
                      }}
                    />
                  )
                }}
              />
            </div>
            <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm text-center'>{errors.price_min?.message}</div>
            <Button className='w-full p-2 uppercase bg-orange-500 text-white text-sm hover:bg-orange-400 rounded-sm flex justify-center items-center'>
              áp dụng
            </Button>
          </form>
          <div className='bg-gray-400 h-[1px] my-4'></div>
          <div className='text-sm'>Đánh giá</div>
          <ul className=''>
            <li className='py-1 pl-2'>
              <Link to='' className='flex items-center text-sm'>
                {/* {Array(5).fill(0).map((_, index) => (
                    
                ))} */}
              </Link>
            </li>
          </ul>
          <div className='bg-gray-400 h-[1px] my-4'></div>
          <Button className='w-full py-2 px-2 uppercase bg-orange-500 hover:bg-orange-400 text-sm text-white rounded-sm'>
            Xóa tất cả
          </Button>
        </div>
      </div>
    </div>
  )
}
