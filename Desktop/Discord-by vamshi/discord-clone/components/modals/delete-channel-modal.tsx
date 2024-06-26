"use client";

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";




import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-model-store";
import { useState } from "react";
import axios from "axios";
import { DialogDescription } from "@radix-ui/react-dialog";
import qs from "query-string";

export const DeleteChannelModal = () => {
    const router = useRouter();
    const {isOpen, onClose, type , data}  = useModal();
    const isModalOpen = isOpen && type === "deleteChannel";
    const { server, channel } = data;

    const [ isLoading , setIsLoading] = useState(false);

    const onClick = async () => {
        try{
            setIsLoading(true);
            const url = qs.stringifyUrl({
                url: `/api/channels/${channel?.id}`,
                query: {
                    serverId: server?.id,
                }
            
            })
            // console.log("started deleting");
            await axios.delete(url);

            onClose();
            router.refresh();
            router.push(`/servers/${server?.id}`);
            // console.log("Deleted");
        } catch (error){
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose} >
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Delete Channel
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Are you sure you want to do this?<br/>
                        <span className="text-indigo-500 font-semi-bold">#{channel?.name}</span> will be permanently deleted.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="bg-gray-100 px-6 py-4">
                    <div className="flex items-center justify-between w-full">
                    <Button
                        disabled={isLoading}
                        onClick={onClose}
                        variant="ghost"
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={isLoading}
                        onClick={onClick}
                        variant="primary"
                    >
                        Confirm
                    </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}