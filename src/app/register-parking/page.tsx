"use client"

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Link from "next/link";
import Image from "next/image";
import { Label } from "app/components/UI/Input/Input-style";
import { FaDollarSign, FaImage, FaMapMarkerAlt, FaTag, FaThLarge, FaUser } from "react-icons/fa";
import TextArea from "app/components/UI/TextArea/TextArea";
import ToggleSwitch from "app/components/Switch/Switch";
import Header from "app/components/Header/Header";
import Form from "app/components/General-form/Form";
import { MainRegParking, SelectAddress, SpanContent } from "./register-parking-style";

const registerParking: React.FC = () => {
    return (
        <>
            <Header>
                <li> <a href="">Inicio</a> </li>
                <li> <Button text={"Cerrar sesión"} /></li>
            </Header>

            <MainRegParking>
                <Form
                    headerContent={
                        <>
                            <Link href="/"><Image src="/img/LOGO3.png" alt="logo-parkingNow" width={280} height={140}></Image></Link>
                        </>
                    }
                    title="Registro Parqueadero"
                    footerContent={
                        <>
                            <SpanContent>
                                <Label id="typeMotoParking">Moto </Label>
                                <input id="typeMotoParking" type="checkbox" />
                                <Label id="typeCarParking">Carro </Label>
                                <input id="typeCarParking" type="checkbox" />
                            </SpanContent>
                            <Button text={"GUARDAR PARQUEADERO"} />
                        </>
                    }
                >
                    <Input label="Nombre" id="userAddressEmailSignIn" type="text" icon={FaUser} required={true} />
                    <Label htmlFor="location-select">Ubicación</Label>
                    <SelectAddress name={"location"} id={"location-select"}>
                        <option value="" selected disabled></option>
                        <option value="popular">Popular</option>
                        <option value="santa-cruz">Santa Cruz</option>
                        <option value="manrique">Manrique</option>
                        <option value="aranjuez">Aranjuez</option>
                        <option value="castilla">Castilla</option>
                        <option value="doce-de-octubre">Doce de Octubre</option>
                        <option value="robledo">Robledo</option>
                        <option value="villa-hermosa">Villa Hermosa</option>
                        <option value="buenos-aires">Buenos Aires</option>
                        <option value="la-candelaria">La Candelaria</option>
                        <option value="laureles-estadio">Laureles-Estadio</option>
                        <option value="la-america">La América</option>
                        <option value="san-javier">San Javier</option>
                        <option value="el-poblado">El Poblado</option>
                        <option value="guayabal">Guayabal</option>
                        <option value="belen">Belén</option>
                        <option value="copacabana">Copacabana</option>
                        <option value="bello">Bello</option>
                        <option value="itagui">Itagüí</option>
                        <option value="sabaneta">Sabaneta</option>
                        <option value="envigado">Envigado</option>
                        <option value="la-estrella">La Estrella</option>
                        <option value="caldas">Caldas</option>
                        <option value="girardota">Girardota</option>
                        <option value="barbosa">Barbosa</option>
                    </SelectAddress>
                    <Input label="Dirección " id="userAddressParking" type="text" icon={FaMapMarkerAlt} placeholder="Cll 16 #55-129" required={true} />
                    <Input label="Imagen parqueadero " id="userImageParking" type="url" icon={FaImage} placeholder="https://riwi.io/wp-content/uploads/2023/07/Fondo-claro-logo2-1.png" required={true} />
                    <Input label="Nombre parqueadero " id="nameParking" type="text" icon={FaTag} placeholder="La Colina" required={true} />
                    <TextArea id="textareaDescriptionParking" label="Descripción Parqueadero"></TextArea>
                    <Input label="Cantidad de celdas" id="amountCell" type="number" icon={FaThLarge} required={true} />
                    <Input label="Precio por hora" id="price-hour" type="number" icon={FaDollarSign} required={true} />

                    <ToggleSwitch></ToggleSwitch>
                </Form>
            </MainRegParking>
        </>
    );
}
export default registerParking;