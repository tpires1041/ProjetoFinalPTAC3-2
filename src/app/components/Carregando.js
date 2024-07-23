import Image from 'next/image';

export default function Carregando() {
    return (
        <div>
            <Image width={50} height={50} alt='' src={'/carregando.svg'} />
        </div>
    );
}