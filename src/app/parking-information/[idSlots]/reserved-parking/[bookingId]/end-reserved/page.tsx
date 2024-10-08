"use client"

import Image from "next/image"
import { ReservedParkingArticle, ReservedParkingContainer, ReservedParkingImg, ReservedParkingText, ContainerCronometro, ReservedAddress, ButtonsEndBooking } from "../../ReservedParking-style"
import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { errorAlert, successAlert } from "app/utils/alerts";
import { ICreateBooking, IEndBooking } from "app/types/IBooking";
import { createBooking, endBooking } from "app/services/booking";
import Cookies from 'js-cookie';
import Button from "app/components/UI/Button/Button";
import { Span } from "../../../booking/booking-style";
import { getSlotById } from "app/services/slots";
import { ISlots } from "app/types/IParking";
import { ReservedParkingArticleEndReserved } from "./ReservedParking-style";



const EndReservedParking: React.FC<{ params: { bookingId: string, idSlots: string } }> = ({ params }) => {
    const { bookingId, idSlots } = params;
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const cookieToken = Cookies.get("token");
    const [slotInfo, setSlotInfo] = useState<ISlots | null>(null);

    useEffect(() => {
        const fetchSlotInfo = async () => {
            if (cookieToken) {
                try {
                    const data = await getSlotById(cookieToken, idSlots);
                    console.log(data);
                    
                    setSlotInfo(data); 
                } catch (error) {
                    errorAlert((error as Error).message);
                }
            }
        };

        fetchSlotInfo();
    }, [cookieToken, idSlots]);

    const handleInitiate = async () => {

        if (cookieToken) {
            const endbookingData: IEndBooking = {
                end_date_time: new Date().toISOString(),
                booking_id: bookingId
            };
            setIsLoading(true);
            try {
                const response = await endBooking(endbookingData, cookieToken);
                if (response.data.id) {
                    const bookingId = response.data.id;
                }
            } catch (error) {
                errorAlert((error as Error).message);
            } finally {
                setIsLoading(false);
            }
        }

    };

    return (
        <ReservedParkingContainer>
            <ReservedParkingArticleEndReserved>
                <ReservedParkingText>HAZ CLICK PARA FINALIZAR TU RESERVA</ReservedParkingText>
                {slotInfo && (
                    <div>
                        <ReservedAddress>Dirección del parqueadero</ReservedAddress>
                        <ReservedAddress>{slotInfo.property.commune.name} {slotInfo.property.address}</ReservedAddress>
                    </div>
                )}
                <ContainerCronometro>
                    <ReservedParkingText></ReservedParkingText>
                </ContainerCronometro>
                <ButtonsEndBooking>
                <Link href={`/parking-information/${idSlots}/reserved-parking/${bookingId}/pay-terminate-reserved`}><Button text={isLoading ? "FINALIZANDO RESERVA..." : "FINALIZAR"} onClick={handleInitiate} disabled={isLoading} /></Link>
                <Link href={`/parkings`}><Button text={" IR A INICIO"} /></Link>
                </ButtonsEndBooking>
                <ReservedParkingImg>
                    <Image src="/img/LogoOrange.png" alt="logo" width={190} height={190} />
                </ReservedParkingImg>
            </ReservedParkingArticleEndReserved>
        </ReservedParkingContainer>
    )
}

export default EndReservedParking