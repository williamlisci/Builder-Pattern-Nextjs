import RegisterButton from "@/components/RegisterButton";
import XeHoiBuilderComponent from "@/components/XeHoiBuilder";

export default function HomePage() {
	return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-800">
                    Demo Builder Pattern - Cấu hình xe hơi
                </h1>
                <XeHoiBuilderComponent />
            </div>
        </main>
	);
}
