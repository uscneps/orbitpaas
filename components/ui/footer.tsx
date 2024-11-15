import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
    return (
        <footer>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Top area: Blocks */}
                <div
                    className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
                >
                    {/* 1st block (Copyright) */}
                    <div className="space-y-2 sm:col-span-12 lg:col-span-8">
                        <div className="text-gray-600 transition hover:text-gray-900 font-mono text-lg">
                            &copy; Orbit - All rights reserved.
                        </div>
                    </div>

                    {/* 2nd block (Contacts) */}
                    <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2 sm:col-start-7">
                        <h3 className="text-sm font-medium"><Link
                            className="text-gray-600 transition hover:text-gray-900 font-mono text-lg"
                            href="mailto:orbit.informations@gmail.com"
                        >
                            orbit.informations@gmail.com
                        </Link></h3>
                    </div>
                </div>
            </div>
        </footer>
    );
}