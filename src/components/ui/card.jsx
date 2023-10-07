"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const card = ({description, image, name}) => {
  return (
    <div className="py-[20px]">
			<div className="mx-[30px] p-[20px] border flex flex-col gap-4 bg-black/40 text-white">
				<p>
					{description}
				</p>
				<div className="flex flex-row items-center gap-4">
					<Avatar>
						<AvatarImage src={image} alt="@shadcn" className='object-cover'/>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<p className="font-medium">{name}</p>
				</div>
			</div>
    </div>
  )
}

export default card