"use client";
/* 
This page can give hydration error
*/

import { CreateServerModal } from "@/components/modals/create-server-model";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modals/invite-modal";
import { EditServermodal } from "@/components/modals/edit-server-modal";
import { MembersModal } from "@/components/modals/members-modal";
import { CreateChannelModal } from "@/components/modals/create-channel-modal";
import { LeaveServerModal } from "@/components/modals/leave-server-modal";
import { Delete, Edit } from "lucide-react";
import { DeleteServerModal } from "@/components/modals/delete-server-modal";
import { DeleteChannelModal } from "../modals/delete-channel-modal";
import { EditChannelModal } from "../modals/edit-channel-modal";
import { MessageFileModal } from "../modals/message-file-modal";
import { DeleteMessageModal } from "../modals/delete-message-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }


    return (
        <>
            <CreateServerModal/>
            <InviteModal/>
            <EditServermodal/>
            <MembersModal/>
            <CreateChannelModal/>
            <LeaveServerModal/>
            <DeleteServerModal/>
            <DeleteChannelModal/>
            <EditChannelModal/>
            <MessageFileModal/>
            <DeleteMessageModal/>
        </>

    )
}