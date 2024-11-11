"use client"
import { buttonVariants } from "@/components/ui/button";
import { getUser } from "@/GraphqlQueries/interfaces";
import { useGetUser } from "@/ReactGraphHooks/queries";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";

import { MoonLoader } from "react-spinners"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface Usertype {
    getUser?: { email?: string, name?: string, imageUrl?: string } 
}

export default function Profile() {


    const { data, isLoading, isError }= useGetUser();
    const typedData = data as Usertype | undefined ; 
    

    if (isLoading) {
        return <MoonLoader size={20} color="white" />;
    }

    if (isError || !typedData || !typedData.getUser) {
        return <div>API is not available</div>;
    }

    


    return (
        <>
            {typedData?.getUser?.email &&

                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Image src={typedData?.getUser.imageUrl ?? ""} width={50} height={50} alt="profileImage" className=" hidden md:flex  rounded-full cursor-pointer" />

                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-56 ">

                            <DropdownMenuGroup>
                            <DropdownMenuItem>
                                    <div> {typedData.getUser.name} </div>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                    <div> {typedData.getUser.email} </div>
                            </DropdownMenuItem>

                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </>



            }
            {!typedData.getUser.email &&

                <div className="hidden md:flex space-x-2">
                    <Link href="/login" className={`${buttonVariants({ variant: "outline" })} bg-fifthColor`}  > <p className="text-black"> Login</p></Link>

                </div>}
        </>

    )
}