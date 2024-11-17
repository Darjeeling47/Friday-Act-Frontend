// import components
import Button from '../basic/Button'
import ExpandCard from './ExpandCard'

export default function ExpandList({
  title,
  children,
  data,
  listKey,
}: {
  title: string
  children: (data: any) => React.ReactNode
  data: any[]
  listKey: string
}) {
  // Return
  return (
    <div className='flex flex-col border-t border-t-mgray-6 sm:hidden'>
      <p className='border-b border-b-mgray-6 py-2 pl-7 text-[15px] font-medium text-mgray-2'>
        {title}
      </p>
      {data.map((data, _) => (
        <ExpandCard
          key={listKey}
          title={data[listKey]}
          children={children(data)}
        />
      ))}
    </div>
  )
}
