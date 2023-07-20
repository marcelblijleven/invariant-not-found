import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: { id: string } }) {
    if (params.id !== "1") {
        notFound();
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <h1>The only product</h1>
        </div>
    )
}