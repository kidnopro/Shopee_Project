import { range } from 'lodash'
import { useState } from 'react'

interface Props {
  onChange?: (value: Date) => void
  value?: Date
  errorMessage?: string
}
export default function DateSelect({ value, onChange, errorMessage }: Props) {
  const [date, setDate] = useState({
    date: value?.getDate() || 1,
    month: value?.getMonth() || 0,
    year: value?.getFullYear() || 1890
  })
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target
    const newDate = {
      ...date,
      [name]: value
    }
    setDate(newDate)
    onChange && onChange(new Date(newDate.year, newDate.month, newDate.date))
  }

  return (
    <div className='mt-2 flex flex-col flex-wrap sm:flex-row'>
      <div className='sm: w-[20%] truncate pt-3 text-right capitalize'>Ngày sinh:</div>
      <div className='sm: w-[80%] pl-5'>
        <div className='flex justify-between'>
          <select
            onChange={handleChange}
            name='date'
            value={value?.getDate() || date.date}
            className='h-10 w-[32%] rounded-sm border border-black hover:border-orange-500 '
          >
            <option disabled>Ngày</option>

            {range(1, 32).map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            onChange={handleChange}
            name='month'
            value={value?.getMonth() || date.month}
            className='h-10 w-[32%] rounded-sm border border-black hover:border-orange-500 '
          >
            <option disabled>Tháng</option>
            {range(0, 12).map((item) => (
              <option value={item} key={item}>
                {item + 1}
              </option>
            ))}
          </select>
          <select
            onChange={handleChange}
            name='year'
            value={value?.getFullYear() || date.year}
            className='h-10 w-[32%] rounded-sm border border-black hover:border-orange-500 '
          >
            <option disabled>Năm</option>
            {range(1890, 2029).map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className='mt-2 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
      </div>
    </div>
  )
}
