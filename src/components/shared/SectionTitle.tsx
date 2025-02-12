import React from 'react'


type TsectionTitle = {
    title: string;
}
const SectionTitle = ({title}: TsectionTitle) => {
  return (
   <h2 className="text-5xl font-bold text-center my-8  ">{title}</h2>
  )
}

export default SectionTitle
