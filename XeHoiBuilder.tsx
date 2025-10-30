// components/XeHoiBuilder.tsx
'use client';

import {useState} from 'react';
import {XeHoi, XeHoiBuilder} from '@/lib/xehoi';

export default function XeHoiBuilderComponent() {
    const [mauSac, setMauSac] = useState('Trắng');
    const [dongCo, setDongCo] = useState('Xăng 1.6L');
    const [kieuGhe, setKieuGhe] = useState('Ghế nỉ');
    const [cuaTroi, setCuaTroi] = useState(false);
    const [camera360, setCamera360] = useState(false);
    const [ketQua, setKetQua] = useState<XeHoi | null>(null);

    const handleBuild = () => {
        const builder = new XeHoiBuilder()
            .setMauSac(mauSac)
            .setDongCo(dongCo)
            .setKieuGhe(kieuGhe);

        if (cuaTroi) builder.themCuaTroi();
        if (camera360) builder.themCamera360();

        const xe = builder.build();
        setKetQua(xe);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Cấu hình xe hơi (Builder Pattern)</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block font-medium mb-1">Màu sắc</label>
                    <select value={mauSac} onChange={(e) => setMauSac(e.target.value)} className="w-full p-2 border rounded">
                        <option>Trắng</option>
                        <option>Đen</option>
                        <option>Đỏ</option>
                        <option>Xanh dương</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Động cơ</label>
                    <select value={dongCo} onChange={(e) => setDongCo(e.target.value)} className="w-full p-2 border rounded">
                        <option>Xăng 1.6L</option>
                        <option>Xăng 2.0L Turbo</option>
                        <option>Điện EV 400km</option>
                        <option>Hybrid</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Kiểu ghế</label>
                    <select value={kieuGhe} onChange={(e) => setKieuGhe(e.target.value)} className="w-full p-2 border rounded">
                        <option>Ghế nỉ</option>
                        <option>Ghế da</option>
                        <option>Ghế da cao cấp</option>
                    </select>
                </div>

                <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                        <input type="checkbox" checked={cuaTroi} onChange={(e) => setCuaTroi(e.target.checked)} className="mr-2" />
                        Cửa trời
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" checked={camera360} onChange={(e) => setCamera360(e.target.checked)} className="mr-2" />
                        Camera 360°
                    </label>
                </div>
            </div>

            <button
                onClick={handleBuild}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Xây dựng xe hơi
            </button>

            {ketQua && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
                    <pre className="whitespace-pre-wrap text-sm">{ketQua.thongTin()}</pre>
                </div>
            )}
        </div>
    );
}