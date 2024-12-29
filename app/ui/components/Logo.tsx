import Link from "next/link";

export default function Logo({ className }: { className: string }) {
    return (
        <Link href={"/"}>
            <img
                loading="lazy"
                src="svg/integra-logo-color.svg"
                alt="Logo Integra"
                className={className}
                width={300}
                height={100}
            />
        </Link>
    );
}
